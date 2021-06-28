let distance = require('jaro-winkler');
let stringSimilarity = require("string-similarity");

function compare_bytecodes_by_jaro(Bytecode1, Bytecode2) {
    result = null
    try {
        let similarity = distance(Bytecode1, Bytecode2);
        return similarity;

    } catch (error) {
        return result;
    }
}


function compare_bytecodes_by_dice(Bytecode1, Bytecode2) {
    result = null
    try {
        let similarity = stringSimilarity.compareTwoStrings(Bytecode1, Bytecode2);
        return similarity;

    } catch (error) {
        return result;
    }
}


module.exports = { compare_bytecodes_by_jaro, compare_bytecodes_by_dice }