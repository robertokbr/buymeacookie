const { task } = require("hardhat/config");

// Simple task example
task("block-number", "prints the current block number").setAction(
  async (_args, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log('block number: ', blockNumber);
  }
);
