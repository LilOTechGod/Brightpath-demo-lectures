//target DevM button

let count = 0;
// when + is clikedd count++
let plusBtn = document.querySelector('#plus-btn');
let displayNum = document.querySelector('h1');
let minusBtn = document.querySelector('#minus-btn');
let resetBtn = document.querySelector('#reset-btn');

let increment = () => {
    count++
    console.log(count);
    displayNum.textContent = count;
}

let decrement = () => {
    count--
    console.log(count);
    displayNum.textContent = count;
}

let reset = () => {
    count = 0;
    displayNum.textContent = count;
}

plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);


// when - is clicked count--
// when reset is clicked count = 0;

// ---------------------------- \\

// let facebookBtn = document.querySelector('.fb-buttons');

// let fbTheme = () => {
//     let buttons = document.querySelectorAll('.theme-buttons');
//     let main = document.querySelector('main')


//     // update element css
//     main.className = 'facebook';
//     ReportBody.className = 'facebook';
//     buttons[0].className = 'facebook';
// }

// facebookBtn.addEventListener('click', fbTheme);

function selecTheme(theme) {
    document.querySelector('main').className = theme;
    document.querySelector('body').className = theme;

    // main.className = theme.
    let buttons = document.querySelectorAll('button');
    for(let i=0; i<buttons.length; i++) {
        buttons[i].className.theme
    }
}