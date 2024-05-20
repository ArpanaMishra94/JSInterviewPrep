function greet(name) {
    console.log(`Hi, My name is ${name}`);
}

// same as the set interval if we do it recursively
function greet2(name) {
    console.log(`Hi, My name is ${name}`);
    setTimeout(greet, 2000, 'Arpana');
}

const t = setTimeout(greet2, 2000, 'Arpana');
clearTimeout(t); // nothing will log to the console

const interval = setInterval(greet, 2000, 'Arpana');
clearInterval(interval); 


function higherOrderFunction(callback) {
    const name = 'Arpana Mishra';
    callback(name);
}

higherOrderFunction(greet)

let numbers = [1, 2, 3, 5, 8, 4, 9];
let sortedNumbers = numbers.sort((a, b) => a-b)
let map = numbers.map(n => n*2)
let filter = numbers.filter(n => n%2 === 0);
console.log(filter);
