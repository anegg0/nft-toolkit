import { Contract } from "ethers";
import { getContractAt } from "@nomiclabs/hardhat-ethers/internal/helpers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import * as dotenv from "dotenv";
dotenv.config();
const deployedContratAddress: any = "0x25d9B767261b66666B7Eec3becd17eEde75D07A7";

export async function getContract(
  { name, hre }: { name: string; hre: HardhatRuntimeEnvironment; }): Promise<Contract> {
  return getContractAt(
    hre,
    name,
    `${deployedContratAddress}`,
  );
}
