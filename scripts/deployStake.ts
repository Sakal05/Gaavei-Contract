import { ethers, network, run } from "hardhat";

async function main() {
  const nftToken = "0xd4FFd68f1B10a4b020cCe246Ac8C1F16Cbd5F4e7";
  const rewardToken = "0x2B8Fa5Ea3b1608d4eA331E0e740641d600b21689";
  // const nftToken = "0xfEdF9a9d7C6ea887a10e045C102b2faDa47B8DcE"; // bsc
  // const rewardToken = "0x0c594e5F8917d39EBfBc5a900eb5b94F17F4141e"; //bsc
  const GaaveiStaker = await ethers.getContractFactory("GaaveiStakerV2");
  const gaaveiStaker = await GaaveiStaker.deploy(nftToken, rewardToken);

  await gaaveiStaker.deployed();

  console.log(`Contract deployed to ${gaaveiStaker.address}`);

  await run("verify:verify", {
    address: gaaveiStaker.address,
    constructorArguments: [nftToken, rewardToken],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*
====== Morph Network =========

1. Reward contract address: 0x2B8Fa5Ea3b1608d4eA331E0e740641d600b21689
2. NFT token contract address: 0xd4FFd68f1B10a4b020cCe246Ac8C1F16Cbd5F4e7
3. Staking Contract: 0xC92863bDa252aA244E6c0d549dba60473d93508d

*/
