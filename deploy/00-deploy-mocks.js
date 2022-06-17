const { network } = require("hardhat");
const { DECIMALS, developmentChains, INITIAL_PRICE, networkConfig } = require("../helper-hardhat-config");

async function deployMocks({
  getNamedAccounts,
  deployments,
}) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...");

    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    });

    log("Mocks deployed!");
  }
}

module.exports = deployMocks;
deployMocks.tags = ["all", "mocks"];
