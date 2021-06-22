const Joi = require("joi");
const Web3 = require('web3');

exports.compareContractsPayloadSchema = Joi.object({
    "address1": Joi.string().custom((value, helper) => {
        if (Web3.utils.isAddress(value)) {
            return true
        } else {
            return helper.message("Address 1 is invalid");
        }
    }).required(),
    "address2": Joi.string().custom((value, helper) => {
        if (Web3.utils.isAddress(value)) {
            return true
        } else {
            return helper.message("Address 2 is invalid");
        }
    }).not(Joi.ref("address1")).required(),
});


