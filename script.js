
const operatorDisplay = document.getElementById('operatorDisplay');
const historyDisplay = document.getElementById('historyDisplay');
const liveDisplay = document.getElementById('liveDisplay');
const numbers = document.querySelectorAll('.btnNum');
const equal = document.getElementById('btnEqual');
const operators = document.querySelectorAll('.btnOperator');

// store the first number that is input 
// into the calculator when a user presses an operator
operators.forEach(item => {
    item.addEventListener('click', event => {
        operatorDisplay.textContent = item.value;
        historyDisplay.textContent = liveDisplay.textContent;
        clearLiveDisplay();
    })
})

equal.addEventListener('click', event => {
    if (operatorDisplay.textContent === "=") {
        return;
    }
    const operator = operatorDisplay.textContent;
    const num1 = parseInt(historyDisplay.textContent);
    const num2 = parseInt(liveDisplay.textContent);
    const result = operate(operator, num1, num2)
    console.log(result);
    clearHistoryDisplay();
    clearOperatordisplay();
    operatorDisplay.textContent = equal.value;
    historyDisplay.textContent = `${num1} ${operator} ${num2}`;
    liveDisplay.textContent = `${result}`;
});

// save which operation has been chosen
// then operate() on them when the user presses the “=” key. 

// function to clear the content of liveDisplay
function clearLiveDisplay() {
    liveDisplay.textContent = "";
}

function clearHistoryDisplay() {
    historyDisplay.textContent = "";
}

function clearOperatordisplay() {
    operatorDisplay.textContent = "";
}

// // function to populate display
numbers.forEach(item => {
    item.addEventListener('click', event => {
        liveDisplay.textContent += item.value;
    });
});



// Operater function
function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    }
}


// functions for all of the basic math operators
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by Zero!"
    }
    return a / b;
}