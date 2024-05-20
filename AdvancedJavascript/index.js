// Closures
function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
// outer();
// outer();

const fn = outer();
fn();
fn();

//Function Currying
const sum = (a, b, c) => {
    return a + b + c;
}

function curry (fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(3)(4));
console.log(sum(1, 3, 4));

// this keyword

// const sayMyNAme = (name) => {
//     console.log(`My name is ${name}`)
// }
// sayMyNAme('Arpana');


//Implicit Binding Rule
const person = {
    name: 'Arpana Mis',
    sayMyName: function() {
        console.log(`My name is ${this.name}`)
    }
}

person.sayMyName();

// Explicit Binding
function sayMyName() {
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person);

// New Binding
function Person(name) {
    // this = {}
    this.name = name;
}

const p1 = new Person('Arp');
const p2 = new Person('Mis');

console.log(p1.name, p2.name)

// Default Binding
globalThis.name = 'AM'
function abb() {
    console.log(`My name is ${this.name}`)
}
abb();

// Order
// 1. New Binding
// 2. Explicit Binding
// 2. Implicit Binding
// 3. Default Binding


// Prototype

function People(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new People('Arpa', 'Mish');
const person2 = new People('Akh', 'Mish');

// person1.getFullName = function (){
//     return (this.firstName + " " + this.lastName)
// }

People.prototype.getFullName = function (){
    return (this.firstName + " " + this.lastName)
}

console.log(person1.getFullName());
console.log(person2.getFullName());


// Prototypal Inheritance


/*
 call, bind, apply, fat arrow function, event bubbling, delegation, event loop,
 DOM methods, getElement, HTML semantics, HTML Form, Akshay(async defer),generators,
 JS Methods eg. map, reduce, slice, splice, filter, deep copy, shallow copy from mdn doc, setTimeout, setInterval, memoize

 css-> grid, position, flex-box, selector
*/