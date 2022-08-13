const repeatString = function(string, number) {
    let fullString = "";
    if (number >= 0) {
        for (let i = 0; i < number; i++) {
            fullString += string;
        }
        return fullString;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
