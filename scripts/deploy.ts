import { ethers } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log(`Deploying contract "SimpleStorage"`);

  const simpleStorage = await SimpleStorageFactory.deploy("2");

  const result = await simpleStorage.waitForDeployment();

  console.log("Contract deployed to: ", await result.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
