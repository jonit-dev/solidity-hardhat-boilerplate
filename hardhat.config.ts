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
    localhost: {
      // first run yarn hardhat node to start a local node, then run yarn hardhat run scripts/deploy.ts --network localhost
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        accountsBalance: "1000000000000000000000", // 1000 ETH
      },
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
