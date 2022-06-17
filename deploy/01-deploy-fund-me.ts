import { HardhatRuntimeEnvironment } from "hardhat/types";
import { networkConfig } from "../helper-hardhat-config";
import { verify } from "../utils/verify";

const deployFundMe = async (hre: HardhatRuntimeEnvironment & {
  deployments: any, getNamedAccounts: any,
}) => {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId || 4;

  let ethAggregatorPriceFeedAddress: string | undefined;

  if (!networkConfig.has(chainId)) {
    log("Deploying FundMe with local aggregator");
    const ethAggregatorPriceFeed = await deployments.get("MockV3Aggregator");
    ethAggregatorPriceFeedAddress = ethAggregatorPriceFeed.address;
  } else {
    ethAggregatorPriceFeedAddress = networkConfig.get(chainId)?.ethUsdPriceFeed;
  }

  if (!ethAggregatorPriceFeedAddress) throw new Error('Undefined aggregator address!');

  const args = [ethAggregatorPriceFeedAddress];
  const waitConfirmations = (network.config as any).blockConfirmations || 6;

  const fundMe = await deploy("FundMe", {
    contract: "FundMe",
    from: deployer,
    log: true,
    args,
    waitConfirmations,
  });

  if (chainId !== 31337 && process.env.ETHERSCAM_API_KEY) {
    await verify(fundMe.address, args);
  }
}
export default deployFundMe;
deployFundMe.tags = ["all", "fundMe"];
