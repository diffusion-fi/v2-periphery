import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'
import { BigNumber, ethers } from 'ethers'
import { IUniswapV1Factory, IUniswapV2Factory, MockERC20 } from '../dist/types'

const logger: Logger = new Logger()

console.log('Load Debug')

task('debug', 'Debug calls')
  //npx hardhat debug
  .setAction(async (args, hre) => {
    const instance = (await hre.ethers.getContractAt('Factory', config.factory)) as IUniswapV2Factory

    const allPairCount = await instance.allPairsLength()

    logger.info(allPairCount)

    const firstPair = await instance.allPairs(BigNumber.from('0'))
    logger.info(firstPair)
  })

task('debug-erc20', 'Debug calls')
  //npx hardhat debug-erc20 --address 0xsomeaddress
  .addParam('address', 'token address to call')
  .setAction(async (args, hre) => {
    const instance = (await hre.ethers.getContractAt('MockERC20', args.address)) as MockERC20

    logger.info(await instance.balanceOf(ethers.constants.AddressZero))
  })
