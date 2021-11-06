
// store the first number that is input 
// into the calculator when a user presses an operator
const operators = document.querySelectorAll('.btnOperator').forEach(item => {
    item.addEventListener('click', event => {
        const operator = item.value;
        const num1 = document.getElementById('liveDisplay').textContent;
        const historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.textContent += `${num1} ${operator}`;
        clearLiveDisplay();
    } )
})


// save which operation has been chosen

// then operate() on them when the user presses the “=” key. 


// function to clear the content of liveDisplay
function clearLiveDisplay() {
    document.getElementById('liveDisplay').textContent = '';
}

// function to populate display
// Get the value of button clicked
const clickedBtn = document.querySelectorAll('.btnNum').forEach(item => {
    item.addEventListener('click', event => {
        // console.log(item.value);
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