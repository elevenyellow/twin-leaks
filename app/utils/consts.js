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
    "address": "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
    "chain": "BSC",
    "Forked": "Compound"
}];

module.exports = { TOP_DEFI_PROTOCOL_LIST };