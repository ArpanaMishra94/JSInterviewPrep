let sum = 0;
const calc = (n) => {
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function memoize (func) {
    let cache = {};
    return function(...args) {
        let n = args[0];
        if(n in cache) {
            console.log('cache exists')
            console.log(cache);
            return cache[n];
        }
        else {
            console.log('calculating first time')
            let res = func(n);
            cache[n] = res;
            return res;
        }
    }
}
console.time();
const memo = memoize(calc);
console.log(memo(5));
console.log(memo(6));
console.log(memo(5));
// console.log(calc(5));
console.timeEnd();

 