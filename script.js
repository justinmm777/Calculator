
// store the first number that is input 
// into the calculator when a user presses an operator
const operators = document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        if (item.className == '.btnNum') {
            const liveDisplay = document.getElementById('liveDisplay');
            liveDisplay.textContent += item.value;

        }



        // const operator = item.value;
        // console.log(operator);
        // const operatorDisplay = document.getElementById('operatorDisplay');
        // operatorDisplay.textContent = `${operator}`;
        // const historyDisplay = document.getElementById('historyDisplay');
        // historyDisplay.textContent = liveDisplay.textContent;
      
        // clearLiveDisplay();
        
        // console.log(num1);

        // if (item.className == 'btnOperator') {

        // }





        // const num2 = parseInt(document.getElementById('liveDisplay').textContent);
        // console.log(num2);
        // const result = operate(operator, num1, num2);
        // console.log(result);
    })
})

// save which operation has been chosen
// then operate() on them when the user presses the “=” key. 

// const total = document.querySelector('.btnOperator').addEventListener('click', event => {
//     const num1 = parseInt(document.getElementById('historyDisplay').textContent);
//     const num2 = parseInt(document.getElementById('liveDisplay').textContent);
//     const operator = document.getElementById('operatorDisplay').textContent;
//     const result = operate(operator, num1, num2);
//     clearLiveDisplay();
//     console.log(result);
//     const liveDisplay = document.getElementById('liveDisplay');
//     liveDisplay.textContent = `${result}`
    

// })



// function to clear the content of liveDisplay
function clearLiveDisplay() {
    document.getElementById('liveDisplay').textContent = '';
}

function clearHistoryDisplay() {
    document.getElementById('historyDisplay').textContent = '';
}

// function to populate display
// Get the value of button clicked
// const clickedBtn = document.querySelectorAll('.btnNum').forEach(item => {
//     item.addEventListener('click', event => {
//         // console.log(item.value);
//         const liveDisplay = document.getElementById('liveDisplay');
//         liveDisplay.textContent += item.value;
//     });
// });

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