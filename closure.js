function x() {
    let num = 7;
    function y() {
        console.log(num);
    }
    return y;
}

const res = x();
console.log(res);
res();

function z() {
    for(var i = 0; i < 5; i++) {
        setTimeout(()=> {
            console.log(i);
        }, 1000)
    }
}
z();

function p() {
    for(let i = 0; i < 5; i++) {
        setTimeout(()=> {
            console.log(i);
        }, 1000)
    }
}
p();

function q() {
    for(var i = 0; i < 5; i++) {
        function close(num) {
            setTimeout(()=> {
                console.log(num);
            }, num * 1000)
        }
        close(i);
    }
}
q();