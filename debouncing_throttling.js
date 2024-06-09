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

function throttling(func, time) {
    let last = 0;
    return function(...args) {
       let now = new Date().getTime();
        if(now - last < time) {
            return;
        } 
        last = now;
        return func();
    }
}

const fn = myDeb(getData, 1000);
const th = throttling(getData, 1000);