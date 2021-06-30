

const polygon_rpc_url = "https://rpc-mainnet.matic.network";
const ethereum_rpc_url = "https://mainnet.infura.io/v3/cab1dcbaa74a458fb227f720b6f25cf5";
const binance_rpc_url = "https://bsc-dataseed.binance.org/";

const TOP_DEFI_PROTOCOL_LIST = [{
    "name": "Uniswap",
    "component": "V2Router",
    "address": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "chain": "Ethereum",
    "Forked": "no"
}
    , {
    "name": "Compound",
    "component": "Comproller",
    "address": "0xbe7616B06f71e363A310Aa8CE8aD99654401ead7",
    "chain": "Ethereum",
    "Forked": "no"
}, {
    "name": "QuickSwap",
    "component": "Router",
    "address": "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    "chain": "Polygon",
    "Forked": "UniswapV2"
}, {
    "name": "Venus Finance",
    "component": "Unitroller",
    "address": "0xfD36E2c2a6789Db23113685031d7F16329158384",
    "chain": "BSC",
    "Forked": "Compound"
},
{
    "name": "Sushi Swap",
    "component": "UniswapV2Router02",
    "address": "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
    "chain": "Ethereum",
    "Forked": "Uniswap"
},
{
    "name": "Pancake Swap",
    "component": "PancakeRouter",
    "address": "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    "chain": "BSC",
    "Forked": "UniswapV2"
},
{
    "name": "UniswapV3",
    "component": "SwapRouter",
    "address": "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    "chain": "Ethereum",
    "Forked": "no"
},
{
    "name": "ApeSwap",
    "component": "ApeRouter",
    "address": "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7",
    "chain": "BSC",
    "Forked": "Pancake Swap"
},
{
    "name": "CafeSwap",
    "component": "CafeRouter02",
    "address": "0x933DAea3a5995Fb94b14A7696a5F3ffD7B1E385A",
    "chain": "BSC",
    "Forked": "Pancake Swap"
},
{
    "name": "Donut Finance",
    "component": "MasterChef",
    "address": "0x93070Bd094Abdf8815Fadd40048812Ad815A3ec0",
    "chain": "BSC",
    "Forked": "no"
},
{
    "name": "SaltSwap",
    "component": "MasterChef",
    "address": "0xB4405445fFAcF2B86BC2bD7D1C874AC739265658",
    "chain": "BSC",
    "Forked": "Goose Finance"
},
{
    "name": "Poly Whale",
    "component": "MasterChef",
    "address": "0x34bc3D36845d8A7cA6964261FbD28737d0d6510f",
    "chain": "Polygon",
    "Forked": "Pancake Swap"
},
{
    "name": "Ruler protocol",
    "component": "RulerCore",
    "address": "0x39946ff7F4a0Fe32F5b7CdcFC66C53c3d0360866",
    "chain": "Ethereum",
    "Forked": "no"
},
{
    "name": "Aave protocol",
    "component": "LendingPool",
    "address": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
    "chain": "Ethereum",
    "Forked": "no"
},
{
    "name": "Kitten Finance",
    "component": "kBASEv0",
    "address": "0x124c6092c469716A661b5B0609F205050b26b50f",
    "chain": "Ethereum",
    "Forked": "no"
},
{
    "name": "Armor Finance",
    "component": "LPFarm",
    "address": "0xf991f1e1B8Acd657661c89b5CD452d86De76a8C1",
    "chain": "Ethereum",
    "Forked": "no"
},


];

module.exports = { TOP_DEFI_PROTOCOL_LIST, polygon_rpc_url, ethereum_rpc_url, binance_rpc_url };