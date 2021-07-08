

const polygon_rpc_url = "https://rpc-mainnet.matic.network";
const ethereum_rpc_url = "https://mainnet.infura.io/v3/cab1dcbaa74a458fb227f720b6f25cf5";
const binance_rpc_url = "https://bsc-dataseed.binance.org/";

const TOP_DEFI_PROTOCOL_LIST = [
    {
        "name": "Uniswap",
        "component": "V2Router",
        "address": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        "chain": "Ethereum",
        "deployedOn": 1591388241,
        "Forked": "no"
    }
    , {
        "name": "Compound",
        "component": "Comproller",
        "address": "0xbe7616B06f71e363A310Aa8CE8aD99654401ead7",
        "depoloyedOn": 1608585953,
        "chain": "Ethereum",
        "Forked": "no"
    }, {
        "name": "QuickSwap",
        "component": "Router",
        "address": "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
        "depolyedOn": 1601031121,
        "chain": "Polygon",
        "Forked": "UniswapV2"
    }, {
        "name": "Venus Finance",
        "component": "Unitroller",
        "address": "0xfD36E2c2a6789Db23113685031d7F16329158384",
        "deployedOn": 1606088749,
        "chain": "BSC",
        "Forked": "Compound"
    },
    {
        "name": "Sushi Swap",
        "component": "UniswapV2Router02",
        "address": "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
        "deployedOn": 1599214709,
        "chain": "Ethereum",
        "Forked": "Uniswap"
    },
    {
        "name": "Pancake Swap",
        "component": "PancakeRouter",
        "address": "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        "deployedOn": 1619165545,
        "chain": "BSC",
        "Forked": "UniswapV2"
    },
    {
        "name": "UniswapV3",
        "component": "SwapRouter",
        "address": "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        "deployedOn": 1620120641,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "ApeSwap",
        "component": "ApeRouter",
        "address": "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7",
        "deployedOn": 1623694000,
        "chain": "BSC",
        "Forked": "Pancake Swap"
    },
    {
        "name": "CafeSwap",
        "component": "CafeRouter02",
        "address": "0x933DAea3a5995Fb94b14A7696a5F3ffD7B1E385A",
        "deployedOn": 1616302000,
        "chain": "BSC",
        "Forked": "Pancake Swap"
    },
    {
        "name": "Donut Finance",
        "component": "MasterChef",
        "address": "0x93070Bd094Abdf8815Fadd40048812Ad815A3ec0",
        "deployedOn": 1613611375,
        "chain": "BSC",
        "Forked": "no"
    },
    {
        "name": "SaltSwap",
        "component": "MasterChef",
        "address": "0xB4405445fFAcF2B86BC2bD7D1C874AC739265658",
        "deployedOn": 1613909570,
        "chain": "BSC",
        "Forked": "Goose Finance"
    },
    {
        "name": "Poly Whale",
        "component": "MasterChef",
        "address": "0x34bc3D36845d8A7cA6964261FbD28737d0d6510f",
        "deployedOn": 1618328758,
        "chain": "Polygon",
        "Forked": "Pancake Swap"
    },
    {
        "name": "Ruler protocol",
        "component": "RulerCore",
        "address": "0x39946ff7F4a0Fe32F5b7CdcFC66C53c3d0360866",
        "deployedOn": 1618528209,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Aave protocol",
        "component": "LendingPool",
        "address": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
        "chain": "Ethereum",
        "deployedOn": 1606771548,
        "Forked": "no"
    },
    {
        "name": "Kitten Finance",
        "component": "kBASEv0",
        "address": "0x124c6092c469716A661b5B0609F205050b26b50f",
        "deployedOn": 1600848411,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Armor Finance",
        "component": "LPFarm",
        "address": "0xf991f1e1B8Acd657661c89b5CD452d86De76a8C1",
        "deployedOn": 1611424705,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Curve Finance",
        "component": "Vyper_contract",
        "address": "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
        "deployedOn": 1618396685,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Paraswap",
        "component": "AugustusSwapper",
        "address": "0x9509665d015Bfe3C77AA5ad6Ca20C8Afa1d98989",
        "deployedOn": 1601316170,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Alpha Homora V2",
        "component": "AlphaStaking",
        "address": "0x9FD317e712B86Cc59D411690BCa66a48CE6498E7",
        "deployedOn": 1616561686,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Bancor Network",
        "component": "BancorNetwork",
        "address": "0x0e936B11c2e7b601055e58c7E32417187aF4de4a",
        "deployedOn": 1569496332,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Yam Network",
        "component": "YAMLENDPool",
        "address": "0x6009A344C7F993B16EBa2c673fefd2e07f9be5FD",
        "deployedOn": 1597166015,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Iron Finance",
        "component": "MasterChef",
        "address": "0xC5a992dD7ba108e3349D2Fd8e8E126753Ca8Ce34",
        "deployedOn": 1620533327,
        "chain": "BSC",
        "Forked": "no"
    },
    {
        "name": "Cream Finance",
        "component": "Unitroller",
        "address": "0x3d5BC3c8d13dcB8bF317092d84783c2697AE9258",
        "deployedOn": 1596363502,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Jaguar Swap",
        "component": "MasterChef",
        "address": "0x8e4301509A484c6fC211C8902013e90cD416F58D",
        "deployedOn": 1619645051,
        "chain": "BSC",
        "Forked": "no"
    },
    {
        "name": "Cubdefi",
        "component": "LionsDen",
        "address": "0x227e79C83065edB8B954848c46ca50b96CB33E16",
        "deployedOn": 1614278136,
        "chain": "BSC",
        "Forked": "no"
    },
    {
        "name": "Paxos",
        "component": "PAXImplementationV2",
        "address": "0x86Eee0422322710866aF89E9cAe3F7383d55310a",
        "deployedOn": 1580487169,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "Tellor",
        "component": "Tellor",
        "address": "0xA7ce7c4E96A138410061c2e2382ace32E4686502",
        "deployedOn": 1568391040,
        "chain": "Ethereum",
        "Forked": "no"
    },
    {
        "name": "KoaliDefi",
        "component": "LyptusToken",
        "address": "0xBA26397cdFF25F0D26E815d218Ef3C77609ae7f1",
        "deployedOn": 1614074349,
        "chain": "BSC",
        "Forked": "no"
    },
];

module.exports = { TOP_DEFI_PROTOCOL_LIST, polygon_rpc_url, ethereum_rpc_url, binance_rpc_url };