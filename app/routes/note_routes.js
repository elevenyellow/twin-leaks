
const bodyParser = require("body-parser");
const { EVM } = require("evm");
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/cab1dcbaa74a458fb227f720b6f25cf5"));
const Joi = require("joi");
const { compareContractToTopDefiProtocolsSchema } = require("../schemas/schemas");
const string_utils = require("../utils/string_utils");
const block_utils = require("../utils/block_utils");
const { TOP_DEFI_PROTOCOL_LIST } = require("../utils/consts");
const db = require("../../db").firebase_database;
const coingecko_utils = require("../utils/coingecko_utils");


let jsonParser = bodyParser.json()

module.exports = function (app, _db) {
    app.post("/compareContractToTopDefiProtocols", jsonParser, async (req, res) => {
        req.setTimeout(5000000);
        console.log(req.body);
        let result = {
            "isError": true,
            "errorMsg": "Something went wrong",
        }

        let _req = req.body;
        const validationResult = compareContractToTopDefiProtocolsSchema.validate(_req)
        console.log("Here");
        if (validationResult.error) {
            // console.log(validationResult);
            result.errorMsg = validationResult.error.details[0]["message"];
            res.send(result);
        } else {
            try {
                let _web3 = block_utils.get_provider_for_chain(_req.chain);
                let contractBytecode = await _web3.eth.getCode(_req.contractAddress);

                if (contractBytecode == "0x") {
                    result.errorMsg = "Bytecode of one contract came out to be 0x"
                    res.send(result);
                } else {
                    console.log("All validation checks complete. Process now.");
                    result_list = await block_utils.compare_contract_to_top_defi_protocols(_req.contractAddress, _req.chain); //It will be a list if all ok, null if some error
                    console.log("result list", result_list);
                    if (result_list) {
                        result.isError = false;
                        result.errorMsg = "SUCCESS";
                        result.data = result_list;
                        res.send(result);
                    } else {
                        result.errorMsg = "Error while comparing bytecodes";
                        res.send(result);
                    }
                }
            } catch (error) {
                result.errorMsg = error;
                res.send(result);
            }

        }
    })


    app.post("/test", jsonParser, async (req, res) => {


        let allProtocolsFromFirebase;
        console.log("I AM HERE")
        await Promise.all([
            db.ref('/top_protocols/').once('value', (snapshot) => {
                // console.log(snapshot.val());
                allProtocolsFromFirebase = snapshot.val();
            })
        ]);

        console.log(Object.keys(allProtocolsFromFirebase));
        let list_keys = Object.keys(allProtocolsFromFirebase);


        for (let i = 0; i < list_keys.length; i++) {

            let protocol_name = list_keys[i];
            let coingecko_id = allProtocolsFromFirebase[protocol_name]["coingeckoApiId"];
            if (coingecko_id != undefined) {
                console.log(protocol_name);
                console.log(coingecko_id);
                market_cap = await coingecko_utils.getTokenMarketCap(coingecko_id);
                console.log(market_cap);

                let _protocol = allProtocolsFromFirebase[protocol_name];
                _protocol["market_cap"] = market_cap;

                db.ref("/top_protocols/" + protocol_name).set(_protocol)

            }

        }




        // console.log("HI")
        // // res.send(await block_utils.get_all_blocks_between_2_timestamps(1624447227, 1624447347, web3));
        // // res.send(await block_utils.get_all_contracts_created_between_2_timestamps(1591388181, 1591388241, "Ethereum"));
        // // res.send(await block_utils.compare_contract_to_top_defi_protocols("0x227e79C83065edB8B954848c46ca50b96CB33E16", "BSC"));


        // for (var i = 0; i < TOP_DEFI_PROTOCOL_LIST.length; i++) {
        //     var name = TOP_DEFI_PROTOCOL_LIST[i].name;
        //     // console.log(name);
        //     var address = TOP_DEFI_PROTOCOL_LIST[i].address;

        //     _web3 = block_utils.get_provider_for_chain(TOP_DEFI_PROTOCOL_LIST[i].chain)

        //     _byteCode = await _web3.eth.getCode(TOP_DEFI_PROTOCOL_LIST[i].address);

        //     var _protocol = TOP_DEFI_PROTOCOL_LIST[i];

        //     _protocol["byteCode"] = _byteCode;



        //     db.ref("/top_protocols/" + name).set(_protocol)
        // }

        // res.send("DONE");
    })
}






