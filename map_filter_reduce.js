// Map

const nums = [1, 2, 3, 4, 5];

const multiplyBy3 = nums.map((num, i, arr) => {
    return num * 3 + i;
})

// console.log(multiplyBy3);


//Filter

const  moreThan2 = nums.filter((num) => {
    return num > 2;
})

// console.log(moreThan2);

//reduce

const sum = nums.reduce((acc, curr) => {
    return acc + curr;
})

// console.log(sum);


// Polyfill for Map

const numsArr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
};

const multiply3 = numsArr.myMap((num, i, arr) => {
    return num * 3;
})

console.log(multiply3);


//Polyfill for Filter

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

const  more2 = nums.myFilter((num) => {
    return num > 2;
})

console.log(more2);


//Polyfill for Reducer

Array.prototype.myReducer = function (cb, initialValue) {
    let acc = initialValue;
    for(let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}


const sum1 = nums.myReducer((acc, curr) => {
    return acc + curr;
}, 0)
console.log("myReducer " + sum1);


// forEach

const arr = [4, 5, 7];

const forEachRes = arr.forEach((ar, i) => {
    arr[i] = ar + 3;
});

console.log(arr);