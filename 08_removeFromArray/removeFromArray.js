const removeFromArray = function(arr, rmTarget) {
    tempArr = [...arr];
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === rmTarget) {
            tempArr.splice(i, 1)
            i--;
        }
    }
    return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
