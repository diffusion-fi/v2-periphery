import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'
import { ethers } from 'ethers'
import { MockERC20 } from '../dist/types'

const logger: Logger = new Logger()

task('debug-erc20', 'Debug calls')
    .addParam("address", "token address to call")
    .setAction(async (args, hre) => {
        const instance = await hre.ethers.getContractAt("MockERC20", args.address) as MockERC20;

        logger.info(await instance.balanceOf(ethers.constants.AddressZero));
    })

