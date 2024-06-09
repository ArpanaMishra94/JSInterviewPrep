// SHALLOW COPY -> only main object can copy, copy by reference/memory location
// DEEP COPY -> nested object can copy aswell, copy values

let obj1 = {
    name: 'peter'
}

let user = obj1;

user.name = 'arpana';

console.log(obj1);  //arpana    copy by reference



let obj2 = {
    name: 'peter'
}

// let user2 = Object.assign({}, obj2);
let user2 = {...obj2};

user2.name = 'arpana';

console.log(obj2);  //peter    copy by reference


// shallow copy {...obj3} only cover first level of object
let obj3 = {
    name: 'peter',
    address: {
        city: 'Noida'
    }
}

let user3 = {...obj3};

user3.address.city = 'Bangalore';

console.log(obj3);  //Bangalore   


//To 0vercome this we have to use JSON.Stringify() => DEEP COPY  (but it will not work if we have function or date in the object)
let obj4 = {
    name: 'peter',
    address: {
        city: 'Noida'
    }
}

let user4 = JSON.parse(JSON.stringify(obj4));

user4.address.city = 'Bangalore'

console.log(obj4);  //Noida 


let obj5 = {
    name: 'peter',
    address: {
        city: 'Noida'
    },
    getFunction: function() {
        console.log('func');
    }
}

let user5 = _.cloneDeep(obj5);

user5.address.city = 'Bangalore'

console.log(obj5);  //Bangalore 



let x = 'arp';

let y = x;

y = 'mis';

console.log(y); // mis copy by value

