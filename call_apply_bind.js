let personName = {
    firstName: 'Arp',
    lastname: 'Mis',
    printFullName: function() {
        console.log(this.firstName + ' ' + this.lastname);
    }
}

personName.printFullName();

let person2 = {
    firstName: 'Ayu',
    lastname: 'Sin',
}


// function borrowing
personName.printFullName.call(person2);

const printFullName = function(hometown, state) {
    console.log(this.firstName + ' ' + this.lastname + ' is from ' + hometown + " " + state);
}

let person3 = {
    firstName: 'Akh',
    lastname: 'Sin',
}

let person4 = {
    firstName: 'kam',
    lastname: 'Sin',
}
printFullName.call(person3, 'GKP', 'UP');
printFullName.apply(person4, ['GKP', 'UP']);

//bind [help to bind and keep a copy of that method and use it later]
let print = printFullName.bind(person3, 'GKP', 'UP');
console.log(print);
print();
