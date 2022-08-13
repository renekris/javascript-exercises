const removeFromArray = function(...args) {
    let argsArray = args;
    let arrayRemove = args.shift();

    for (const arg of argsArray) {
        if (arrayRemove.indexOf(arg) >= 0) arrayRemove.splice(arrayRemove.indexOf(arg), 1);
    }
    return arrayRemove;
};

// Do not edit below this line
module.exports = removeFromArray;
