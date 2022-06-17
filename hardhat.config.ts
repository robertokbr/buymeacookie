import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";

dotenv.config();
        
const accounts = process.env.PRIVATE_KEY !== undefined 
  ? [process.env.PRIVATE_KEY] 
  : []; 

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.7.0" }]
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL || "",
      chainId: 4,
      accounts,
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    token: 'ETH'
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
