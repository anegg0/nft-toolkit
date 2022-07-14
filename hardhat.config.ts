import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { utils } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();
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
  },
};

export default config;
