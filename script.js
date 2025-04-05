let input1 = '';
let input2 = '';
let currentInput = '';
let currentOperator = '';

let display = document.querySelector(".display")
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', calculator)

function operate(arg1, arg2, operator) {
    let result = operator(+arg1, +arg2);
    return Number.isInteger(result) ? result : result.toFixed(2);
}
const operators = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => (b === 0) ? 'Undefined' : a / b,
    multiply: (a, b) =>  a * b,
}

function clear(){
    input1 = '';
    input2 = '';
    currentOperator = '';
    currentInput = '';
    display.value = currentInput;
}

function populateDisplayWith(element) {
    currentInput += element.textContent;
    display.value = currentInput;
}

function calculator(e){
    let target = e.target;
    
    if (target.classList.contains('number')) {
        if (input1 !== '' && 
            input2 === '' &&
            currentOperator === '') 
        {
            input1 = '';
        }
        populateDisplayWith(target);
    }
    else if (target.classList.contains('operator')) {
        if (input1 === '' && 
            input2 === '') 
        {
            input1 = currentInput;
            currentInput = '';
        }
        else if (input1 !== '' && 
                 input2 === '' && 
                 currentInput !== '' &&
                 currentOperator !== '') 
        {
            input2 = currentInput;
            currentInput = `${operate(input1, input2, operators[currentOperator])}`;
            display.value = currentInput;
            input1 = currentInput;
            input2 = '';
            currentInput = '';
        }
        currentOperator = target.id;
    }
    else if (target.classList.contains('equal')) {
        
        if (input1 !== '' && 
            input2 === '' &&
            currentOperator !== '') 
        {
            input2 = currentInput;
            currentInput = `${operate(input1, input2, operators[currentOperator])}`;
            display.value = currentInput;
            input1 = currentInput;
            input2 = '';
            currentInput = '';
            currentOperator = '';
        }
        
    }
    else if (target.classList.contains('clear')) clear();
}
