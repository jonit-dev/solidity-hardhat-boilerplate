# Hardhat x Solidity Boilerplate

A modern Solidity development environment using Hardhat, TypeScript, and the latest tools in the ecosystem.

## Tech Stack

- **Solidity**
- **Hardhat**
- **TypeScript**
- **Ethers.js**
- **OpenZeppelin**
- **Chainlink**

## Project Structure

```
├── contracts/               # Smart contracts
│   └── SimpleStorage.sol    # Example storage contract
├── scripts/                 # Deployment and interaction scripts
│   └── deploy.ts           # Manual deployment script
├── ignition/               # Hardhat Ignition deployment system
│   └── modules/            # Deployment modules
│       └── SimpleStorage.ts # Automated deployment configuration
├── tasks/                  # Custom Hardhat tasks
│   └── blockNumber.ts      # Example task
└── test/                   # Test files
```

## Main Application Flow

1. **Contract Deployment**:
   - Two deployment options available:
     - Using Hardhat Ignition (Recommended): `yarn deploy`
     - Using traditional script: `yarn deploy:simple`
   - Ignition provides a declarative deployment system with better state management

2. **Contract Verification**:
   - Automatic verification on Etherscan after deployment
   - Configurable for different networks (currently set up for Sepolia)
   - Run manually with: `yarn verify`

3. **Development Workflow**:
   - Write contracts in `contracts/`
   - Compile with `yarn compile`
   - Test with `yarn test`
   - Check coverage with `yarn coverage`

4. **Code Quality**:
   - TypeScript for type safety
   - Prettier for code formatting: `yarn format`
   - ESLint for TypeScript: `yarn lint:ts`
   - Solhint for Solidity: `yarn lint:sol`
   - Git hooks via Husky for pre-commit checks

## Getting Started

1. **Install Dependencies**:
```bash
yarn install
```

2. **Environment Setup**:
   - Copy `.env.example` to `.env`
   - Fill in your environment variables:
     - `INFURA_API_KEY`
     - `ETHERSCAN_API_KEY`
     - `PRIVATE_KEY` (for deployments)

3. **Compile Contracts**:
```bash
yarn compile
```

4. **Run Tests**:
```bash
yarn test
```

5. **Deploy**:
```bash
# Using Ignition (recommended)
yarn deploy

# Using traditional script
yarn deploy:simple
```

## Available Scripts

- `yarn compile`: Compile contracts and generate TypeChain types
- `yarn test`: Run tests
- `yarn coverage`: Generate test coverage report
- `yarn deploy`: Deploy using Hardhat Ignition
- `yarn deploy:simple`: Deploy using traditional script
- `yarn verify`: Verify contracts on Etherscan
- `yarn format`: Format all code
- `yarn lint`: Run all linters
- `yarn lint:fix`: Fix linting issues

## Network Support

The project is configured for:
- Local development network
- Sepolia testnet
- Mainnet (configuration ready)

## Security Features

- OpenZeppelin contracts for battle-tested implementations
- Solidity 0.8.24 with built-in overflow checks
- Comprehensive test coverage requirements
- Multiple linters and formatters
- TypeScript for type safety

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
