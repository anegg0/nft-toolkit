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

    it("Should mint an NFT with the right tokenURI", async function () {
        const { nft, owner } = await loadFixture(deployFixture);
        let tokenURI = "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu";
        await nft.safeMint(owner.address, tokenURI);
        expect(await nft.tokenURI(0)).to.equal(
            "ipfs://bafkreihm63mue4z3qewc6nhj7ctzaediburwtu2ydr5iid26wgnilbnyhu"
        );
    });
});
