import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import { appEnv } from "./src/appEnv";
import "./tasks/blockNumber";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: appEnv.testNet.infura.rpcUrl,
      accounts: [appEnv.accounts.testNet.sepolia.privateKey!],
    },
  },
  etherscan: {
    apiKey: appEnv.other.etherscanApiKey,
    customChains: [
      {
        network: "sepolia",
        chainId: 11155111, // Sepolia chain ID
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io",
        },
      },
    ],
  },
};

export default config;
