import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version:  "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  
  paths: { tests: "tests" },
  networks: {
    hardhat: {},
    BNB_TEST: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://bsc-testnet.nodereal.io/v1/${process.env.NODEREAL_API_KEY}`
		}
  },
  etherscan: {
		apiKey: `${process.env.BSCSCAN_API_KEY}`
	}
};

export default config;
