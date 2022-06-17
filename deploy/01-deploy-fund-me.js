const { network } =  require( "hardhat");
const { networkConfig } =  require( "../helper-hardhat-config");

async function deployFundMe({
  getNamedAccounts,
  deployments,
}) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [networkConfig[chainId].ethUsdPriceFeed],
    log: true,
  });
}


module.exports = deployFundMe;
deployFundMe.tags = ["all", "fundMe"];
