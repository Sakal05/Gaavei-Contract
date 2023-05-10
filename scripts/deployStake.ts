import { ethers } from "hardhat";

async function main() {

  const nftToken = "0xfEdF9a9d7C6ea887a10e045C102b2faDa47B8DcE";
  const rewardToken = "0x0c594e5F8917d39EBfBc5a900eb5b94F17F4141e"
  const GaaveiStaker = await ethers.getContractFactory("GaaveiStaker");
  const gaaveiStaker = await GaaveiStaker.deploy(nftToken, rewardToken);

  await gaaveiStaker.deployed();

  console.log(`Contract deployed to ${gaaveiStaker.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
