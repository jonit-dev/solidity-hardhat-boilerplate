import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

import "dotenv/config";
import { appEnv } from "./src/appEnv";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: appEnv.testNet.infura.rpcUrl,
      accounts: [appEnv.accounts.testNet.sepolia.privateKey!],
    },
  },
};

export default config;
