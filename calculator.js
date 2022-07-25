const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const firstOperationScreen = document.getElementById("firstOperationScreen");
const secondOperationScreen = document.getElementById("secondOperationScreen");

let firstValue = firstOperationScreen.textContent;
let secondValue = secondOperationScreen.textContent;

numberBtn.forEach((button) => 
   button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorBtn.forEach((button) =>
   button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
   if(secondValue === '0')
      secondOperationScreen.textContent = "";
   secondOperationScreen.textContent += number;
}

function setOperation(operator) {
   currentOperation = operator;
   firstValue = secondValue;
   secondOperationScreen.textContent = 0;
}

function add(a, b) {
   let sum = a + b;
   return sum;
}

function subtract(a, b) {
   let difference = a - b;
   return difference;
}

function multiply(a, b) {
   let product = a * b;
   return product;
}

function divide(a, b) {
   let dividend = a / b;
   return dividend;
}

function operate(operator, a, b) {
   if(operator === '+')
      add(a, b);
   else if(operator === '-')
      subtract(a, b);
   else if(operator === '*')
      multiply(a, b);
   else if(operator === '/')
      divide(a, b);
}
