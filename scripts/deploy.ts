import { ethers } from "hardhat";
require("@nomiclabs/hardhat-etherscan");

async function main() {
  const _name: string = "This is our time";
  const _symbol: string = "TIOT";
  // const _royaltyRecipient:string = '0xAe18A61043c34bD938Ce4927d0AF7c67016a6DAf';
  const _royaltyRecipient: string =
    "0x5852231D8a00306A67DfB128AEd50c1573411d60";
  const _royaltyBps: number = 50;

  const GaaveiDrop = await ethers.getContractFactory("GaaveiDrop");
  const gaaveiDrop = await GaaveiDrop.deploy(
    _name,
    _symbol,
    _royaltyRecipient,
    _royaltyBps
  );

  await gaaveiDrop.deployed();

  console.log(`Contract deployed to ${gaaveiDrop.address}`);

  // await ethers.run("verify:verify", {
  //   address: "address-of-your-smart-contract",
  //   constructorArguments: ["parameter1", "parameter2"],
  //   // for example, if your constructor argument took an address, do something like constructorArguments: ["0xABCDEF..."],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
