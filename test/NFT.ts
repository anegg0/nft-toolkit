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

    it("Should mint successfully if owner is the one minting", async function () {
        const { nft, owner, otherAccount } = await loadFixture(deployFixture);
        const tokenURI = "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu";

        const initialBalance = await nft.balanceOf(otherAccount.address);
        expect(initialBalance).to.equal(0);

        const result = nft.connect(owner).safeMint(otherAccount.address, tokenURI);
        await expect(result).to.not.be.reverted;

        const tokenBalance = await nft.balanceOf(otherAccount.address);
        expect(tokenBalance).to.equal(1);
    });

    it("Should throw if owner is not the one minting", async function () {
        const { nft, otherAccount } = await loadFixture(deployFixture);
        const tokenURI = "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu";

        const result = nft.connect(otherAccount).safeMint(otherAccount.address, tokenURI);
        await expect(result).to.be.revertedWith("Ownable: caller is not the owner");

        const tokenBalance = await nft.balanceOf(otherAccount.address);
        expect(tokenBalance).to.equal(0);

    });

    it("Should mint an NFT with the right tokenURI", async function () {
        const { nft, owner } = await loadFixture(deployFixture);
        let tokenURI = "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu";
        await nft.safeMint(owner.address, tokenURI);
        expect(await nft.tokenURI(0)).to.equal(
            "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu"
        );
    });
});
