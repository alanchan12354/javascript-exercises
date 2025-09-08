const reverseString = function(x) {
    let y = "";
    for (let i = 0; i < x.length; i++) {
        y += x[x.length - 1 - i];
    }
    return y;
}

// Do not edit below this line
module.exports = reverseString;
