import { ethers } from "hardhat";

async function main() {
  const _name: string = 'This is our time';
  const _symbol: string = 'TIOT';
  const _royaltyRecipient:string = '0xAe18A61043c34bD938Ce4927d0AF7c67016a6DAf';
  const _royaltyBps: number = 5;

  const GaaveiDrop = await ethers.getContractFactory("GaaveiDrop");
  const gaaveiDrop = await GaaveiDrop.deploy(_name, _symbol, _royaltyRecipient, _royaltyBps);

  await gaaveiDrop.deployed();

  console.log(`Contract deployed to ${gaaveiDrop.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
