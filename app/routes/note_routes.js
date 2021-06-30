
const bodyParser = require("body-parser");
const { EVM } = require("evm");
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/cab1dcbaa74a458fb227f720b6f25cf5"));
const Joi = require("joi");
const { compareContractsPayloadSchema } = require("../schemas/schemas");
const string_utils = require("../utils/string_utils");
const block_utils = require("../utils/block_utils");


let jsonParser = bodyParser.json()


module.exports = function (app, db) {
    app.post("/compareContracts", jsonParser, async (req, res) => {

        let result = {
            "isError": true,
            "errorMsg": "Something went wrong",
        }

        let _req = req.body;
        const validationResult = compareContractsPayloadSchema.validate(_req)

        if (validationResult.error) {
            console.log(validationResult);
            result.errorMsg = validationResult.error.details[0]["message"];
            res.send(result);

        } else {
            try {
                let address1Bytecode = await web3.eth.getCode(_req.address1);
                let address2Bytecode = await web3.eth.getCode(_req.address2);

                if (address2Bytecode == "0x" || address1Bytecode == "0x") {
                    result.errorMsg = "Bytecode of one contract came out to be 0x"
                    res.send(result);
                } else {
                    console.log("All validation checks complete. Process now.");
                    similarity = string_utils.compare_bytecodes_by_jaro(address1Bytecode, address2Bytecode);
                    console.log(similarity);
                    if (similarity) {
                        result.isError = false;
                        result.errorMsg = "OK";
                        result.data = {
                            "similarity": similarity,
                            "address1Bytecode": address1Bytecode,
                            "address2ByteCode": address2Bytecode
                        };
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

        // res.send(await block_utils.get_all_blocks_between_2_timestamps(1624447227, 1624447347, web3));
        // res.send(await block_utils.get_all_contracts_created_between_2_timestamps(1591388181, 1591388241, "Ethereum"));
        
        res.send(await block_utils.compare_contract_to_top_defi_protocols("0x124c6092c469716A661b5B0609F205050b26b50f", "Ethereum"));

    })

}






