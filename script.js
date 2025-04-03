const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => (b === 0) ? 'Divided by zero' : a / b;

const multiply = (a, b) =>  a * b;

let input1 = '';
let input2 = '';
let operator = '';

function operate(arg1, arg2, operator) {
    return operator(arg1, arg2)
}