
// store the first number that is input 
// into the calculator when a user presses an operator
document.querySelectorAll('.btnOperator').forEach(item => {
    item.addEventListener('click', event => {
        const operatorDisplay = document.getElementById('operatorDisplay');
        operatorDisplay.textContent = item.value;
        const historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.textContent = liveDisplay.textContent;
        clearLiveDisplay();
    })
})

document.getElementById('btnEqual').addEventListener('click', event => {
    const operatorDisplay = document.getElementById('operatorDisplay');
    const operator = operatorDisplay.textContent;
    console.log(operator)
    const historyDisplay = document.getElementById('historyDisplay');
    const num1 = parseInt(historyDisplay.textContent);
    const liveDisplay = document.getElementById('liveDisplay');
    const num2 = parseInt(liveDisplay.textContent);
    const result = operate(operator, num1, num2)
    console.log(result);
    clearHistoryDisplay();
    historyDisplay.textContent = `${num1} ${operator} ${num2}`
    liveDisplay.textContent = `${result}`
});

// save which operation has been chosen
// then operate() on them when the user presses the “=” key. 

// function to clear the content of liveDisplay
function clearLiveDisplay() {
    document.getElementById('liveDisplay').textContent = '';
}

function clearHistoryDisplay() {
    document.getElementById('historyDisplay').textContent = '';
}

// // function to populate display
document.querySelectorAll('.btnNum').forEach(item => {
    item.addEventListener('click', event => {
        const liveDisplay = document.getElementById('liveDisplay');
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