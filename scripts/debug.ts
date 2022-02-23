import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'
import { ethers } from 'ethers'
import { MockERC20, UniswapV2Router02 } from '../dist/types'
import { bytecode } from "../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json";


const logger: Logger = new Logger()


task('add-liquidity', '')
    .setAction(async (args, hre) => {

        const oneThousand = ethers.utils.parseEther("1000");
        const lhs = await hre.ethers.getContractAt("MockERC20", config.LHS) as MockERC20;
        const rhs = await hre.ethers.getContractAt("MockERC20", config.RHS) as MockERC20;

        await lhs.approve(config.router, oneThousand);
        await rhs.approve(config.router, oneThousand);

        const instance = await hre.ethers.getContractAt("UniswapV2Router02", config.router) as UniswapV2Router02;

        const res = await instance.addLiquidity(
            config.LHS,
            config.RHS,
            oneThousand,
            oneThousand,
            0,
            0,
            config.testerAddress,
            1645662378,
            { gasLimit: 3e7 }
        );

        logger.info(res)
    })

task('send-token', '')
    .setAction(async (args, hre) => {
        const oneThousand = ethers.utils.parseEther("1000");
        const rewardToken = await hre.ethers.getContractAt("MockERC20", "0x26467BE1984Dd98242E6996cbf96F78C97bbAE74") as MockERC20;
        const secondaryRewardToken = await hre.ethers.getContractAt("MockERC20", "0x698b209305543dAbB100cff7603EBa2Afe73183a") as MockERC20;

        await rewardToken.transfer("0x9d7F42E2e7e30a971A952DA066177201a85193E9", oneThousand, { gasLimit: 3e5 });
        await secondaryRewardToken.transfer("0x89ddAa8B7371a3514F13B85f84c1DeA910BA3F69", oneThousand, { gasLimit: 3e5 });

    });

task('init-hash', '')
    .setAction(async (args, hre) => {
        logger.info(ethers.utils.solidityKeccak256(['bytes'], [bytecode]));

    });






