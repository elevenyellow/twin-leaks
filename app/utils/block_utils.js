const EthDater = require('ethereum-block-by-date');
const moment = require('moment');
const Web3 = require('web3');
const consts = require("../utils/consts.js");
const string_utils = require("../utils/string_utils.js");


async function get_all_blocks_between_2_timestamps(timestamp1, timestamp2, chain) {
    try {
        let result = [];
        let web3 = get_provider_for_chain(chain);
        const dater = new EthDater(web3);

        let block1Details = await dater.getDate(
            moment.unix(timestamp1),
        );

        let block2Details = await dater.getDate(
            moment.unix(timestamp2),
        )

        let block1Number = block1Details["block"];
        let block2Number = block2Details["block"];

        for (let i = block1Number; i <= block2Number; i++) {
            let temp = await web3.eth.getBlock(i);
            result.push(temp);
            console.log("Block", i);
        }
        // console.log(result);
        return result;
    } catch (error) {
        return null;
    }
}


async function get_all_contracts_created_between_2_timestamps(timestamp1, timestamp2, chain) {
    let result = [];

    try {
        blocks = await get_all_blocks_between_2_timestamps(timestamp1, timestamp2, chain);

        if (blocks) {
            let _web3 = get_provider_for_chain(chain);
            for (let i = 0; i < blocks.length; i++) {
                block_txns = blocks[i]["transactions"];
                for (let j = 0; j < block_txns.length; j++) {

                    let txn = block_txns[j];
                    let txn_receipt = await _web3.eth.getTransactionReceipt(txn);

                    // console.log(txn_receipt);

                    if (txn_receipt["contractAddress"]) {
                        console.log("---------");
                        console.log(txn);
                        result.push({
                            "txnHash": txn,
                            "contractAddress": txn_receipt["contractAddress"]
                        })
                    }
                }

            }
            // console.log(result);
            return result;
        }
    } catch (error) {
        return null;
    }

}


async function compare_contract_to_top_defi_protocols(contractAddress, chain = "Ethereum") {
    let result = [];
    let web3;

    try {

        web3 = get_provider_for_chain(chain);
        let contractAddressBytecode = await web3.eth.getCode(contractAddress);

        for (let i = 0; i < consts.TOP_DEFI_PROTOCOL_LIST.length; i++) {

            // Compare protocol byte code to contract byte code
            let temp = {};
            let protocol = consts.TOP_DEFI_PROTOCOL_LIST[i];

            let _web3;
            console.log(protocol["chain"]);
            _web3 = get_provider_for_chain(protocol["chain"]);

            let protocolBytecode = await _web3.eth.getCode(protocol["address"]);
            let similarity = string_utils.compare_bytecodes_by_dice(contractAddressBytecode, protocolBytecode);

            temp["comparisonTo"] = protocol["name"];
            temp["dice_similarity_coefficient"] = similarity;
            temp["protocol_address"] = protocol["address"];
            temp["contract_address"] = contractAddress;
            // temp["protocol_bytecode"] = protocolBytecode;

            result.push(temp);
        }

        return result;

    } catch (error) {
        return null;
    }

}


function get_provider_for_chain(chain) {

    switch (chain) {
        case "Polygon":
            return new Web3(new Web3.providers.HttpProvider(consts.polygon_rpc_url));

        case "BSC":
            return new Web3(new Web3.providers.HttpProvider(consts.binance_rpc_url));

        default:
            return new Web3(new Web3.providers.HttpProvider(consts.ethereum_rpc_url));
    }

}
module.exports = { get_all_blocks_between_2_timestamps, get_all_contracts_created_between_2_timestamps, compare_contract_to_top_defi_protocols }