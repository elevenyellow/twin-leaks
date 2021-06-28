

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

];

module.exports = { TOP_DEFI_PROTOCOL_LIST, polygon_rpc_url, ethereum_rpc_url, binance_rpc_url };