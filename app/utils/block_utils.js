const EthDater = require('ethereum-block-by-date');
const moment = require('moment');
const consts = require("../utils/consts.js");
const string_utils = require("../utils/string_utils.js");


async function get_all_blocks_between_2_timestamps(timestamp1, timestamp2, web3) {

    try {
        let result = [];
        const dater = new EthDater(web3);

        let block1Details = await dater.getDate(
            moment.unix(timestamp1),
        );

        let block2Details = await dater.getDate(
            moment.unix(timestamp2),
        )

        var block1Number = block1Details["block"];
        var block2Number = block2Details["block"];

        for (let i = block1Number; i <= block2Number; i++) {
            var temp = await web3.eth.getBlock(i);
            result.push(temp);
            console.log("Block", i);
        }
        // console.log(result);
        return result;
    } catch (error) {
        return null;
    }
}


async function get_all_contracts_created_between_2_timestamps(timestamp1, timestamp2, web3) {
    let result = [];

    try {
        blocks = await get_all_blocks_between_2_timestamps(timestamp1, timestamp2, web3);

        if (blocks) {
            for (let i = 0; i < blocks.length; i++) {
                block_txns = blocks[i]["transactions"];
                for (let j = 0; j < block_txns.length; j++) {

                    let txn = block_txns[j];
                    let txn_receipt = await web3.eth.getTransactionReceipt(txn);

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


async function compare_contract_to_top_defi_protocols(contractAddress, web3) {

    let result = [];

    try {
        var contractAddressBytecode = await web3.eth.getCode(contractAddress);

        for (let i = 0; i < consts.TOP_DEFI_PROTOCOL_LIST.length; i++) {
            // Compare protocol byte code to contract byte code
            var temp = {};
            var protocol = consts.TOP_DEFI_PROTOCOL_LIST[i];
            var protocolBytecode = await web3.eth.getCode(protocol["address"]);
            var similarity = string_utils.compare_bytecodes_by_jaro(contractAddressBytecode, protocolBytecode);

            temp["comparisonTo"] = protocol["name"];
            temp["jaro_winkler_similarity"] = similarity;
            temp["protocol_address"] = protocol["address"];
            temp["contract_address"] = contractAddress;
            result.push(temp);
        }

        return result;

    } catch (error) {
        return null;
    }

}

module.exports = { get_all_blocks_between_2_timestamps, get_all_contracts_created_between_2_timestamps, compare_contract_to_top_defi_protocols }