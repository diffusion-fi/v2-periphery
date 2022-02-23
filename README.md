# Uniswap V2

Forked from uniswap/v2-periphery at commit `2efa12e0f2d808d9b49737927f0e416fafa5af68`

[![Actions Status](https://github.com/Uniswap/uniswap-v2-periphery/workflows/CI/badge.svg)](https://github.com/Uniswap/uniswap-v2-periphery/actions)
[![npm](https://img.shields.io/npm/v/@uniswap/v2-periphery?style=flat-square)](https://npmjs.com/package/@uniswap/v2-periphery)

In-depth documentation on Uniswap V2 is available at [uniswap.org](https://uniswap.org/docs).

The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@uniswap/v2-periphery@latest/).

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`


## Staging Deployments

```
npx hardhat node

npx hardhat deploy-factory --network evmostestnet
npx hardhat deploy-weth9 --network evmostestnet
npx hardhat deploy-router --network evmostestnet
npx hardhat deploy-multicall2 --network evmostestnet

npx hardhat deploy-token --to 0x3c6e75206c1103f53004b5ae39b9F5648A37bE3e --supply 100000000 --name MockMainReward --symbol MainReward  --network evmostestnet
npx hardhat deploy-token --to 0x3c6e75206c1103f53004b5ae39b9F5648A37bE3e --supply 100000000 --name MockSecondaryReward --symbol SecondaryReward  --network evmostestnet
npx hardhat deploy-token --to 0x3c6e75206c1103f53004b5ae39b9F5648A37bE3e --supply 100000000 --name LeftHandSide2 --symbol LHS2  --network evmostestnet
npx hardhat deploy-token --to 0x3c6e75206c1103f53004b5ae39b9F5648A37bE3e --supply 100000000 --name RightHandSide2 --symbol RHS2  --network evmostestnet


npx hardhat add-liquidity --network evmostestnet

npx hardhat deploy-minichef --network evmostestnet
npx hardhat deploy-rewarder --network evmostestnet

npx hardhat deploy-token --to 0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B --supply 1000000000 --name MockUSDC --symbol MUSDC  --network evmostestnet
npx hardhat deploy-token --to 0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B --supply 1000000000 --name MockEVMOS --symbol MEVMOS  --network evmostestnet
npx hardhat deploy-token --to 0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B --supply 1000000000 --name MockATOM --symbol MATOM  --network evmostestnet
npx hardhat deploy-token --to 0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B --supply 1000000000 --name MockOSMOSIS --symbol MOSMOSIS  --network evmostestnet
```