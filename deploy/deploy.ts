import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments } = hre;
    const { deploy } = deployments;
    const deployer: any = process.env.PRIVATE_KEY;
    await deploy("NFT", {
        from: deployer,
        args: [],
        log: true,
    });
};
export default func;
func.tags = ["NFT"];
