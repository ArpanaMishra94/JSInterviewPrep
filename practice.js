function sayHello () {
    return "Hello " + this.name;
}

var obj = {name: "Arp"};

console.log(sayHello.call(obj));



function saySomething(msg) {
    return this.name + " is " + msg;
}

var obj = {name: "Arpana"}

console.log(saySomething.call(obj, "Awesome."));



// apply


function say(msg) {
    return this.name + " is " + msg;
}

var obj = {name: "Arpana"}

console.log(say.apply(obj, ["Great."]));

//bind

var bike = {
    bikeDetails: function(number1, number2) {
        return this.name + " is " + number1 + number2;
    }
}

var obj = {name: 'Arpana'}

var res = bike.bikeDetails.bind(obj, "2", "7");

console.log(res());


// currying


function multiply (a, b) {
    return a * b;
}

function currying(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        }
    } 
}

var curried = currying(multiply);

console.log(curried(2)(8));


// memoization

function memo () {
    var cache = {};
    return function (num) {
        if(num in cache) {
            console.log('It exists')
            return cache[num];
        }
        else {
            cache[num] = num + 256;
            return cache[num];
        }
    }
}

var memoized = memo();

console.log(memoized(2));


// recursion

function computeSum(arr) {
    if(arr.length <= 0) {
        return 0;
    }
    else {
        return arr.pop() + computeSum(arr);
    }
}

console.log(computeSum([7, 8, 9, 99]));

function add(num) {
    if(num == 0) {
        return 0;
    }
    else {
        return num + add(num-1);
    }
}

console.log(add(3));


//constructor

function Person (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var p1 = new Person("Arp", 23, "Female");
console.log(p1);

