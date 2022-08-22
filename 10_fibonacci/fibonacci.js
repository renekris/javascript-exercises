const fibonacci = nth => {
    if (nth <= 0) return 'OOPS';

    let fibArray = [1, 1];
    for (let index = 0; fibArray.length < nth; index++) {
        fibArray.push(fibArray[index] + fibArray[index + 1]);
    }
    return fibArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
