const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const firstOperationScreen = document.getElementById("firstOperationScreen");
const secondOperationScreen = document.getElementById("secondOperationScreen");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

let currentOperation = '';
let resetScreen = false;

numberBtn.forEach((button) => 
   button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorBtn.forEach((button) =>
   button.addEventListener('click', () => setOperation(button.textContent))
)

equalsBtn.addEventListener('click', () => operate(currentOperation, firstOperationScreen.textContent, secondOperationScreen.textContent));
clearBtn.addEventListener('click', () => clear());

function appendNumber(number) {
   if(resetScreen) {
      secondOperationScreen.textContent = '';
      resetScreen = false;
   }
   secondOperationScreen.textContent += number;
}

function setOperation(operator) {
   currentOperation = operator;
   firstOperationScreen.textContent = secondOperationScreen.textContent;
   secondOperationScreen.textContent = 0;
   resetScreen = true;
}

function clear() {
   firstOperationScreen.textContent = secondOperationScreen.textContent;
   secondOperationScreen.textContent = 0;
   resetScreen = true;
}

function add(a, b) {
   let sum = parseInt(a) + parseInt(b);
   secondOperationScreen.textContent = sum;
}

function subtract(a, b) {
   let difference = a - b;
   secondOperationScreen.textContent = difference;
}

function multiply(a, b) {
   let product = a * b;
   secondOperationScreen.textContent = product;
}

function divide(a, b) {
   let dividend = a / b;
   secondOperationScreen.textContent = dividend;
}

function operate(operator, a, b) {
   resetScreen = true;
   if(operator === '+')
      add(a, b);
   else if(operator === '-')
      subtract(a, b);
   else if(operator === '*')
      multiply(a, b);
   else if(operator === '/')
      divide(a, b);
}
