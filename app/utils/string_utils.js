var distance = require('jaro-winkler');

function compare_bytecodes_by_jaro(Bytecode1, Bytecode2) {
    result = null
    try {
        var similarity = distance(Bytecode1, Bytecode2);
        return similarity;

    } catch (error) {
        return result;
    }
}

module.exports = { compare_bytecodes_by_jaro }