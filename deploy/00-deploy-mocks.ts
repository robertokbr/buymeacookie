import { HardhatRuntimeEnvironment } from "hardhat/types"

const DECIMALS = "18"
const INITIAL_PRICE = "2000000000000000000000" // 2000

const deployMocks = async (hre: HardhatRuntimeEnvironment & {
  deployments: any, getNamedAccounts: any,
}) => {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // If we are on a local development network, we need to deploy mocks!
  if (chainId == 31337) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    });

    log("Mocks Deployed!");
  }
}
export default deployMocks;
deployMocks.tags = ["all", "mocks"];
