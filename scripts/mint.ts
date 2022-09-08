import { task, types } from "hardhat/config";
import { Contract } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { getContract } from "./contract";

let deployer: any = "0x25c074d5F80840bE51aF84B6AA9179540562AC5b";
task("mint-nft", "Mint an ERC721 NFT")
  .addParam("tokenUri", "Your ERC721 Token URI", undefined, types.string)
  .setAction(async (tokenUri, hre) => {
    return getContract({ name: "NFT", hre })
      .then((contract: Contract) => {
        return contract.safeMint(deployer, tokenUri, {
          gasLimit: 500_000,
        });
      })
      .then((tr: TransactionResponse) => {
        process.stdout.write(`TX hash: ${tr.hash} on ${hre.network.name}`);
      });
  });
