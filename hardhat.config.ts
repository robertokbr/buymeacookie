import "@nomiclabs/hardhat-waffle";
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "./tasks/block-number";
import "@typechain/hardhat";
import "hardhat-gas-reporter"
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      chainId: 4,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAM_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-reporter.txt',
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    token: "MATIC"
  },
  solidity: "0.8.8",
};
