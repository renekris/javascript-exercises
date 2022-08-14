const sumAll = function(numFrom, numTo) {
    let sumFinal = 0;
    if (
        numFrom.constructor === Number 
        && numTo.constructor === Number
        && numFrom >= 0 
        && numTo >= 0
        ) {
        if (numFrom > numTo) [numFrom, numTo] = [numTo, numFrom]

        for (numFrom; numFrom <= numTo; numFrom++) {
            sumFinal += numFrom;
        }

        return sumFinal;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
