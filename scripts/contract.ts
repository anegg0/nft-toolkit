import { Contract } from "ethers";
import { getContractAt } from "@nomiclabs/hardhat-ethers/internal/helpers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import * as dotenv from "dotenv";
dotenv.config();
const deployedContratAddress: any = process.env.CONTRACT_ADDRESS;

export async function getContract(
  { name, hre }: { name: string; hre: HardhatRuntimeEnvironment; }): Promise<Contract> {
  return getContractAt(
    hre,
    name,
    `${deployedContratAddress}`,
  );
}
