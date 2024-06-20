import { task } from "hardhat/config";

task("block-number", "Prints the current block number").setAction(
  async (_, { ethers }) => {
    console.log(await ethers.provider.getBlockNumber());
  },
);
