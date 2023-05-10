import { ethers } from "hardhat";

async function main() {

  const GaaveiRewardToken = await ethers.getContractFactory("GaaveiRewardToken");
  const gaaveiRewardToken = await GaaveiRewardToken.deploy();

  await gaaveiRewardToken.deployed();

  console.log(`Contract deployed to ${gaaveiRewardToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
