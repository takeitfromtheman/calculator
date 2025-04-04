const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => (b === 0) ? 'Divided by zero' : a / b;

const multiply = (a, b) =>  a * b;

let input1 = '';
let input2 = '';
let currentInput = '';
let operator = '';

function operate(arg1, arg2, operator) {
    return operator(arg1, arg2)
}

let display = document.querySelector(".display")
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', populateDisplay)

function populateDisplay(e) {
    let target = e.target;
    
    if (target.classList.contains('number')) {
        currentInput += target.textContent;
        display.value = currentInput;
    }
}
