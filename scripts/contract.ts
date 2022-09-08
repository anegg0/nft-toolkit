import { Contract } from "ethers";
import { getContractAt } from "@nomiclabs/hardhat-ethers/internal/helpers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import * as dotenv from "dotenv";
dotenv.config();
const deployedContratAddress: any = "0x80D7c973e998c94C7374bAbba6BaFFf7bB260b8F";

export async function getContract(
  { name, hre }: { name: string; hre: HardhatRuntimeEnvironment; }): Promise<Contract> {
  return getContractAt(
    hre,
    name,
    `${deployedContratAddress}`,
  );
}
