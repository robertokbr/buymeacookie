const hre = require("hardhat");

async function main() {
  const ContractFactory = await hre.ethers.getContractFactory("FundMe");
  const contract = await ContractFactory.deploy();
  await contract.deployed();

  console.info("📃 contract deployed to:", contract.address);

  if (hre.network.config.chainId === 4 && process.env.ETHERSCAM_API_KEY) {
    console.info("🤝🏻 Waiting for 6 block confirmations...")
    // waiting 6 confirmations.
    await contract.deployTransaction.wait(6);
    await verify(contract.address, []);
  }
}

async function verify(contractAddr, args) {
  console.info("🔎 starting etherscam verification...");

  try {
    await hre.run("verify:verify", {
      address: contractAddr,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes('already verified')) {
      console.warn('Already verified!');
    } else {
      console.error(error);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
