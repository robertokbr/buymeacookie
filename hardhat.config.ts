import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers"

dotenv.config();

const accounts = process.env.PRIVATE_KEY !== undefined
  ? [process.env.PRIVATE_KEY]
  : [];

const config = {
  defaultNetwork: "rinkeby",
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.7.0" }]
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL || "",
      chainId: 4,
      accounts,
      blockConfirmations: 6,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    token: 'ETH'
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAM_API_KEY || "",
    },
    customChains: [
      {
        network: "rinkeby",
        chainId: 4,
        urls: {
          apiURL: "https://api-rinkeby.etherscan.io/api",
          browserURL: "https://rinkeby.etherscan.io"
        }
      }
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0, // hh-deploy setup
      1: 0,
    },
  },
};

export default config;
