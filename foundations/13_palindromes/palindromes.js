const palindromes = function (str) {
    let text = str.toLowerCase();
    let pattern = /[a-z0-9]/g;
    let result = text.match(pattern);
    for (let i = 1; i <= Math.floor(result.length / 2); i++) {
        if (result.at(i - 1) != result.at(-i)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
