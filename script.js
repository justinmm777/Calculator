let num1;
// function to populate display
// Get the value of button clicked
const clickedBtn = document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        // console.log(item.value);
        const liveDisplay = document.getElementById('liveDisplay');
        num1 = liveDisplay.textContent += item.value;
    })
})



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