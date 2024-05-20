const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve('Bringing Tacos');
    }, 2000)
 })

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Not Bringing tacos. Food truct not there');
    }, 2000)
})

const onFulfillment = (result) => {
    console.log(result);
    console.log('Set up the table to eat Tacos');
}

const onRejection = (result) => {
    console.log(result);
    console.log('Start cooking Pasta');
}

promise1.then(onFulfillment).catch(onRejection);
promise2.catch(onRejection);


// async/await

const fun = async () => {
//    return 'Hello';
    return Promise.resolve('Hello'); 
}

// console.log(fun());
// fun().then((value) => console.log(value))

function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello')
        }, 2000)
    })
}

function greet2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('World')
        }, 1000)
    })
}

// async function start() {
//     const g1 = await greet();
//     const g2 = await greet2();

//     console.log(g1);
//     console.log(g2);

//     const g3 =  greet();
//     const g4 =  greet2();

//     console.log(await g3);
//     console.log(await g4);
// }

async function parallel() {
    await Promise.all([
        (async () => console.log(await greet()))(),
        (async () => console.log(await greet2()))(),
    ])
}

// start();
parallel();