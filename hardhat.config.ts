import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import { utils } from "ethers";
import "dotenv/config";
import "./scripts/mint";

const privateKey = process.env.PRIVATE_KEY;
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: privateKey as string,
          balance: utils.parseUnits("1", 36).toString(),
        },
      ],
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
