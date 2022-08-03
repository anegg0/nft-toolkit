import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFT", function () {

    async function deployFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const NFT = await ethers.getContractFactory("NFT");
        const nft = await NFT.deploy();
        return { nft, owner, otherAccount };
    }

    it("Should set the right owner", async function () {
        const { nft, owner } = await loadFixture(deployFixture);

        expect(await nft.owner()).to.equal(owner.address);
    });

    it("Should mint succesfully if owner is the one minting", async function () {
        const { nft, owner } = await loadFixture(deployFixture);
        const tokenURI: any = "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu";
        expect(await nft.safeMint(owner.address, tokenURI)).to.not.throw;
    });

    it("Should throw if owner is not the one minting", async function () {
        const { nft, otherAccount } = await loadFixture(deployFixture);
        const tokenURI: any = "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu";
        expect(await nft.safeMint(otherAccount.address, tokenURI)).to.throw;
    });
});
