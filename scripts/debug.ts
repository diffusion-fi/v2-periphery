import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'
import { BigNumber, ethers } from 'ethers'
import { IUniswapV1Factory, IUniswapV2Factory, MockERC20, IUniswapV2Router01, IUniswapV2Router02 } from '../dist/types'

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

task('debug-router', 'Debug calls')
  //npx hardhat debug-router
  .setAction(async (args, hre) => {
    const instance = (await hre.ethers.getContractAt('UniswapV2Router02', config.router)) as IUniswapV2Router02

    logger.info(
      await instance.estimateGas.addLiquidity(
        '0x290A81340949c3C303313D54f4E99774e8bF85CD',
        '0x221ab5e5Ec2B748abc3d0e9D771D258493DD9165',
        '4000000000000000000000',
        '1000000000000000000000',
        '4000000000000000000000',
        '1000000000000000000000',
        '0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B',
        '0x621426c9'
      )
    )
  })
