import { ethers } from "hardhat";

/*
setClaimRestriction
    [1683603087, 1, 0, 1, 0] 
        uint256 startTimestamp; // timestamp to start claim
        uint256 maxSupply; // max supply of tokenId
        uint256 supplyClaimed; // supply of tokenId has been claimed
        uint256 quantityLimit; // quantity limit per wallet
        uint256 price; // price per token require to claim


*/
/*
    Drop the lazymint
    Lrease with setclaim 
*/

async function main() {
    const GaaveiDrop = await ethers.getContractFactory("GaaveiDrop");
    // await GaaveiDrop.connect().
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
