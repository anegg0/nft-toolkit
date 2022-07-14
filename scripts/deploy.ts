import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
