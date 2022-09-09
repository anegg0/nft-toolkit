# NFT toolkit: ERC721 with hardhat-deploy

This repo helps you learn to deploy and mint NFTs using [`Hardhat-deploy`](https://github.com/wighawag/hardhat-deploy) and [`ethers.js`](https://docs.ethers.io)

## Features

1. **Requires minimal configuration**

   Just set up your `.env` file.

2. **Example ERC721**

The included contract is barebone (for clarity) but functional.

> :information_source: the contract is intended for training purpose, it hasn't been vetted for production, use at your own risk.

3. **Example scripts for minting and testing**

4. **Extra-functionalities thanks to [`Hardhat-deploy`](https://github.com/wighawag/hardhat-deploy)**
   - `npx hardhat deploy` deploys only if your contract has changed
   - `npx hardhat test` enable test fixtures for faster tests
   - `npx hardhat sourcify` simplifies the process of contract verification with Sourcify.dev

## Pre-requisites

1. **[Node.js 16 LTS](https://nodejs.org/en/download/)**

2. **An [INFURA account](https://infura.io/) (optional)**

   This repo has been pre-configured to use INFURA as a convenience but you can choose any provider you wish.

3. **Basic understanding of Ethereum/Solidity**

4. **Basic understanding of Hardhat**

   - Catch up with Hardhat here: [Hardhat documentation](https://hardhat.org/getting-started/)
   - Since this repo relies heavily on `hardhat-deploy`, you might want to read [their README](https://github.com/wighawag/hardhat-deploy#readme), too.

## Installation

        ```bash
        npm install
        ```

## Configuration

Fill out your env values in `.example-env` then rename the file `.env`:

# network specific node uri : `"ETH_NODE_URI_" + networkName.toUpperCase()`
ETH_NODE_URI_MAINNET=https://eth-mainnet.alchemyapi.io/v2/<apiKey>
# generic node uri (if no specific found) :
ETH_NODE_URI=https://{{networkName}}.infura.io/v3/<apiKey>

# network specific mnemonic : `"MNEMONIC_ " + networkName.toUpperCase()`
MNEMONIC_MAINNET=<mnemonic for mainnet>
# generic mnemonic (if no specific found):
MNEMONIC=<mnemonic>

## Usage

#### Compile contract:

        ```bash
        npx hardhat compile
        ```

#### Deploy contract to Hardhat's dev network:

Start Hardhat's localhost network:

        ```bash
        npx hardhat node
        ```

Deploy on localhost network:

> :information_source: You can choose the network you want to interact with by using the `--network` suffix.

        ```bash
        npx hardhat deploy --network localhost
        ```

#### Deploy contract to mainnet:

        ```bash
        npx hardhat deploy --network production
        ```

#### Mint an NFT on Ethereum mainnet:

        ```bash
        npx hardhat mint-nft --token-uri "the-URI-of-your-NFT" --network production
        ```

#### Run test(s):

        ```bash
        npx hardhat test
        ```

#### Verify a contract with sourcify.dev:

        ```bash
        npx  hardhat --network mainnet sourcify
        ```

_Credits to [Ronan Sandford](https://github.com/wighawag) for creating Hardhat-deploy._

> > > > > > > deploy-mainnet
