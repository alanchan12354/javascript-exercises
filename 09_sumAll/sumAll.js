const sumAll = function(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
    // Integer check
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    // Negative check
    if (a < 0 || b < 0) return 'ERROR';
    let small, big;
    if (a > b) {
        small = b;
        big = a;
    } else {
        small = a;
        big = b;
    }
    let sum = 0;
    for (let i = small; i < big + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
