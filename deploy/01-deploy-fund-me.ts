import { HardhatRuntimeEnvironment } from "hardhat/types";
import { networkConfig } from "../helper-hardhat-config";

const deployFundMe = async (hre: HardhatRuntimeEnvironment & {
  deployments: any, getNamedAccounts: any,
}) => {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId || 4;

  let ethAggregatorPriceFeedAddress: string | undefined;

  if (chainId === 31337) {
    log("Deploying FundMe with local aggregator");
    const ethAggregatorPriceFeed = await deployments.get("MockV3Aggregator");
    ethAggregatorPriceFeedAddress = ethAggregatorPriceFeed.address;
  } else {
    ethAggregatorPriceFeedAddress = networkConfig.get(chainId)?.ethUsdPriceFeed;
  }

  if (!ethAggregatorPriceFeedAddress) throw new Error('Undefined aggregator address!');

  await deploy("FundMe", {
    contract: "FundMe",
    from: deployer,
    log: true,
    args: [ethAggregatorPriceFeedAddress],
  });
}
export default deployFundMe;
deployFundMe.tags = ["all", "fundMe"];
