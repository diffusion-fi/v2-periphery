import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'

const logger: Logger = new Logger()

task('deploy-router', 'Deploys UniswapV2Router02 contract')
    .setAction(async (args, hre) => {
        const factory = await hre.ethers.getContractFactory(`contracts/UniswapV2Router02.sol:UniswapV2Router02`)
        const instance = await factory.deploy(config.factory, config.weth9)

        await instance.deployed()

        logger.info(instance.address)
    })
