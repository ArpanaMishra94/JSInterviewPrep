let div = document.querySelector('div');
let button = document.querySelector('button');
let buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         console.log(e.target.innerText)
//     })
// });

// div.addEventListener('click', () => {
//     console.log('div')
// }, true);

//we can add true for capturing

    div.addEventListener('click', (e) => {
        const target = e.target;
        if(target.tagName == 'BUTTON') {
            console.log(target.innerText);
        }
        // console.log('div')
});

// button.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     console.log('button')
// });

// button.addEventListener('click', (e) => {
//     e.stopImmediatePropagation();
//     console.log('button2')
// });
