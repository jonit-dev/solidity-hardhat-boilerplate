import { ethers, network, run } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log(`Deploying contract "SimpleStorage"`);

  const simpleStorage = await SimpleStorageFactory.deploy("2");

  const result = await simpleStorage.waitForDeployment();

  const contractAddress = await result.getAddress();

  console.log("Contract deployed to: ", contractAddress);

  await waitForBlocksMined(network.name === "sepolia" ? 3 : 12);

  if (network.name === "sepolia") {
    const verified = await hasVerified(contractAddress, ["2"], network.name);

    if (!verified) {
      return;
    }
  }
}

async function waitForBlocksMined(blocksToWait: number): Promise<void> {
  const provider = ethers.provider;
  const startBlock = await provider.getBlockNumber();
  const targetBlock = startBlock + blocksToWait;

  console.log(
    `Waiting for ${blocksToWait} blocks to be mined... Current block: ${startBlock}`,
  );

  while ((await provider.getBlockNumber()) < targetBlock) {
    const currentBlock = await provider.getBlockNumber();
    const blocksMined = currentBlock - startBlock;
    const progress = (blocksMined / blocksToWait) * 100;
    console.log(
      `Current block: ${currentBlock} - Progress: ${progress.toFixed(2)}%`,
    );
    await new Promise((resolve) => setTimeout(resolve, 6000)); // Wait for 1 second before checking again
  }

  console.log(
    `${blocksToWait} blocks have been mined. Current block: ${await provider.getBlockNumber()}`,
  );
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
