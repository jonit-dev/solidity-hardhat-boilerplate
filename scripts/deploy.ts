import { ethers, network, run } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log(`Deploying contract "SimpleStorage"`);

  const simpleStorage = await SimpleStorageFactory.deploy("2");

  const result = await simpleStorage.waitForDeployment();

  const contractAddress = await result.getAddress();

  console.log("Contract deployed to: ", contractAddress);

  if (network.name !== "hardhat") {
    const verified = await hasVerified(contractAddress, ["2"], network.name);

    if (!verified) {
      return;
    }
  }
}

async function hasVerified(
  contractAddress: string,
  args: string[],
  network: string = "sepolia",
): Promise<boolean> {
  console.log(`Verifying contract at address ${contractAddress}`);

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      network,
    });
    console.log("✅ Contract verified successfully");

    return true;
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("✅ Contract already verified");
      return true;
    }

    console.error("❌ Contract verification failed:", error);

    return false;
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
