import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  // paths: { tests: "tests" },
  networks: {
    // hardhat: {},
    // BNB_TEST: {
    //   accounts: [`${process.env.PRIVATE_KEY}`],
    //   url: `https://bsc-testnet.nodereal.io/v1/${process.env.NODEREAL_API_KEY}`,
    // },
    "morph-testnet": {
      url: "https://rpc2-testnet.morphl2.io",
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 2710,
      gasPrice: 1000000000,
    },
    "lisk-sepolia": {
      url: "https://1rpc.io/sepolia",
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  },
  // etherscan: {
  //   apiKey: `${process.env.BSCSCAN_API_KEY}`,
  // },
  etherscan: {
    apiKey: {
      morphTestnet: "anything",
    },
    customChains: [
      {
        network: "morphTestnet",
        chainId: 2710,
        urls: {
          apiURL: "https://explorer-api-testnet.morphl2.io/api? ",
          browserURL: "https://explorer-testnet.morphl2.io/",
        },
      },
    ],
  },
};

export default config;
