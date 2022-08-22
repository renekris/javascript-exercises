const palindromes = string => {
    string = string.toLowerCase().replace(/[^a-z]/g, '');
    const reverseString = string.split('').reverse().join('')

    return reverseString === string
};

// Do not edit below this line
module.exports = palindromes;
