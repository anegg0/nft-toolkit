import { task, types } from "hardhat/config";
import { Contract } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { getContract } from "./contract";
import * as dotenv from "dotenv";

dotenv.config();
task("mint-nft", "Mint an ERC721 NFT")
  .addParam("tokenUri", "Your ERC721 Token URI", undefined, types.string)
  .setAction(async (tokenUri, hre) => {
    return getContract({ name: "NFT", hre })
      .then((contract: Contract) => {
        return contract.safeMint(process.env.PUBLIC_KEY, tokenUri, {
          gasLimit: 500_000,
        });
      })
      .then((tr: TransactionResponse) => {
        process.stdout.write(`TX hash: ${tr.hash} on ${hre.network.name}`);
      });
  });
