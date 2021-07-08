const Joi = require("joi");
const Web3 = require('web3');

exports.compareContractToTopDefiProtocolsSchema = Joi.object({
    "contractAddress": Joi.string().custom((value, helper) => {
        if (Web3.utils.isAddress(value)) {
            return true
        } else {
            return helper.message("Address 1 is invalid");
        }
    }).required(),
    "chain": Joi.string().valid(...['Ethereum', 'Polygon', 'BSC']),
});


