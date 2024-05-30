# Hardhat x Solidity Boilerplate

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>=12.x)
- Yarn or npm
- Visual Studio Code (recommended)

## Setup

### 1. Install Dependencies

Install the necessary dependencies by running:

```shell
yarn install
```

### 2. VS Code Extensions

To ensure a smooth development experience, install the following Visual Studio Code extensions:

- [Nomic Foundation Hardhat Solidity](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Here's the focused `README.md` with a clean Hardhat 101 crash course:

## Hardhat 101: Getting Started

### 1. Initialize the Hardhat Project

If you haven't already, initialize your Hardhat project by running:

```shell
npx hardhat
```

Follow the prompts to create a basic sample project.

### 2. Directory Structure

A typical Hardhat project includes the following directories and files:

- `contracts/`: Contains your Solidity smart contracts.
- `scripts/`: Contains scripts for deploying and interacting with your contracts.
- `test/`: Contains your test files.
- `hardhat.config.js`: Hardhat configuration file.

### 3. Writing Your First Contract

Create a new Solidity file in the `contracts` directory, for example, `MyContract.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public greet = "Hello, Hardhat!";
}
```

### 4. Compiling Your Contract

Compile your contract by running:

```shell
npx hardhat compile
```

### 5. Writing Tests

Create a test file in the `test` directory, for example, `MyContract.js`:

```javascript
const { expect } = require("chai");

describe("MyContract", function () {
  it("Should return the correct greeting", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.deployed();

    expect(await myContract.greet()).to.equal("Hello, Hardhat!");
  });
});
```

Run your tests with:

```shell
npx hardhat test
```

### 6. Deploying Your Contract

Create a deployment script in the `scripts` directory, for example, `deploy.js`:

```javascript
async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();

  console.log("Contract deployed to address:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Deploy your contract with:

```shell
npx hardhat run scripts/deploy.js
```

### 7. Running a Local Blockchain

To run a local blockchain for development, use:

```shell
npx hardhat node
```

### 8. Interacting with the Contract

Once your local blockchain is running, you can interact with your deployed contracts using scripts or the Hardhat console.

### Hardhat Basics

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

