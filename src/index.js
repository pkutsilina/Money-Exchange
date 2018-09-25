// PLEASE DON'T change function name
const divisors = [50, 25, 10, 5, 1];

module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if (currency <= 0 ){
        return {};
    }
    //50¢, 25¢, 10¢, 5¢ and 1¢

    let resultMap = {
        50: 0,
        25: 0,
        10: 0,
        5: 0,
        1: 0
    };
    recur(currency, 0, resultMap, divisors);
    console.log(resultMap);

    let finalPretty = {}

    if (resultMap[50] != 0) {
        finalPretty["H"] = resultMap[50]
    }
    if (resultMap[25] != 0) {
        finalPretty["Q"] = resultMap[25]
    }
    if (resultMap[10] != 0) {
        finalPretty["D"] = resultMap[10]
    }
    if (resultMap[5] != 0) {
        finalPretty["N"] = resultMap[5]
    }
    if (resultMap[1] != 0) {
        finalPretty["P"] = resultMap[1]
    }
    return finalPretty;
};

function recur(dividend, divisorIndex, resultMap) {
    let currentDivisor = divisors[divisorIndex];
    if (dividend < currentDivisor) {
        return recur(dividend, ++divisorIndex, resultMap);
    }
    if (dividend % currentDivisor == 0) {
        resultMap[currentDivisor] = Math.floor(dividend / currentDivisor);
        return resultMap;
    }
    else if (dividend % currentDivisor != 0) {
        resultMap[currentDivisor] = Math.floor(dividend / currentDivisor);
        return recur(dividend % currentDivisor, ++divisorIndex, resultMap);
    }
}
