const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();


async function getTokenStats(coingeckoCoinId) {

    let result;

    try {
        result = await CoinGeckoClient.coins.fetch(coingeckoCoinId, {});

        if (result["success"]) {
            return result;
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }

}


async function getTokenMarketCap(coingeckoCoinId) {

    let result;
    console.log("Hey from getTokenMarketCap")
    console.log("ID", coingeckoCoinId)

    let coingeckoStats = await getTokenStats(coingeckoCoinId);
    // console.log(coingeckoStats);

    if (coingeckoStats != null) {
        
        result = coingeckoStats["data"]["market_data"]["market_cap"]["usd"];
        // console.log(coingeckoStats);

        // console.log(result);
        return result;
    } else {
        return null;
    }

}

module.exports = { getTokenStats, getTokenMarketCap }