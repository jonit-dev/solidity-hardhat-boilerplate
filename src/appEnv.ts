export const appEnv = {
  mainnet: {
    infura: {
      apiKey: process.env.INFURA_API_KEY,
      rpcUrl: process.env.INFURA_RPC_URL_MAINNET,
      websocket: process.env.INFURA_WEBSOCKET_URL_MAINNET,
    },
    alchemy: {
      apiKey: process.env.ALCHEMY_API_KEY_MAINNET,
      rpcUrl: process.env.ALCHEMY_RPC_URL_MAINNET,
      websocket: process.env.ALCHEMY_WEBSOCKET_URL_MAINNET,
    },
  },
  testNet: {
    infura: {
      apiKey: process.env.INFURA_API_KEY,
      rpcUrl: process.env.INFURA_RPC_URL_TESTNET,
      websocket: process.env.INFURA_WEBSOCKET_URL_TESTNET,
    },
    alchemy: {
      apiKey: process.env.ALCHEMY_API_KEY_TESTNET,
      rpcUrl: process.env.ALCHEMY_RPC_URL_TESTNET,
      websocket: process.env.ALCHEMY_WEBSOCKET_URL_TESTNET,
    },
  },
  localNetworks: {
    ganache: {
      networkId: process.env.GANACHE_NETWORK_ID,
      rpcUrl: process.env.GANACHE_RPC_URL,
    },
  },
  networks: {
    sepolia: {
      privateKey: process.env.SEPOLIA_ACCOUNT_PRIVATE_KEY,
      account: process.env.SEPOLIA_ACCOUNT,
    },
    ganache: {
      privateKey: process.env.GANACHE_ACCOUNT_PRIVATE_KEY,
      account: process.env.GANACHE_ACCOUNT_ADDRESS,
    },
  },
  accounts: {
    testNet: {
      sepolia: {
        privateKey: process.env.SEPOLIA_ACCOUNT_PRIVATE_KEY,
        address: process.env.SEPOLIA_ACCOUNT_ADDRESS,
      },
    },
  },
  other: {
    etherscanApiKey: process.env.ETHERSCAN_API_KEY,
  },
};
