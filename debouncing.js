let counter = 0;

function getData() {
    console.log('fetching ' + counter++);
}

function myDebounce(func, time) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, time)
    }
}


const BetterFunction = myDebounce(getData, 1000);