import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import "./scripts/mint";
import { node_url, accounts } from './utils/network';

const privateKey = process.env.PRIVATE_KEY;
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    otherAccount: 1,
  },
  etherscan: {
    apiKey: "WG8G4PBTJDUBBYWA9ZZ56MV3XJXXPNAIH5",
  },
  networks: {
    hardhat: {
      accounts: accounts('mainnet'),
    },
    staging: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    production: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    mainnet: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    kovan: {
      url: node_url('kovan'),
      accounts: accounts('kovan'),
    },
    goerli: {
      url: node_url('goerli'),
      accounts: accounts('goerli'),
    },
    palm_testnet: {
      url: `https://palm-testnet.infura.io/v3/${process.env.INFURA_API_KEY}` || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined
          ? [`${process.env.PRIVATE_KEY}`]
          : [],
      chainId: 11297108099, // chain ID
      gasPrice: 1000,
    },
    palm_mainnet: {
      url: `https://palm-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}` || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined
          ? [`${process.env.PRIVATE_KEY}`]
          : [],
      chainId: 11297108109, // chain ID
      gasPrice: 1000,
    },
  },
};

export default config;
