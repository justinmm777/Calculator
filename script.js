const container = document.querySelector('.calcContainer');
const btns = document.querySelector('.calcBtnBox');
const display = document.querySelector('.calcDisplay');
console.log(display)


// functions that populate the display


// store the first number that is input 
// into the calculator when a user presses an operator
btns.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const btn = e.target;
        const action = btn.dataset.action;
        const btnContent = btn.textContent;
        const displayedNum = display.textContent;
        const previousBtnType = container.dataset.previousBtnType;
        console.log(displayedNum)

        Array.from(btn.parentNode.children)
        .forEach(b => b.classList.remove('isDepressed'));



        if (!action) {
            if (displayedNum === '0' || previousBtnType === 'operator') {
                display.textContent = btnContent;
            } else {
                display.textContent = displayedNum + btnContent;
            }
            console.log('numKey!');
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            btn.classList.add('isDepressed');
            container.dataset.previousBtnType = 'operator';
            console.log(action);
        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
            console.log('decimal');
        }
        if (action === 'clear') {
            console.log('clear');
        }
        if (action === 'delete') {
            console.log('delete');
        }
        if (action === 'equal') {
            console.log('equal');
        }
    }
    
})




// save which operation has been chosen
// then operate() on them when the user presses the “=” key. 

// function to clear the content of liveDisplay


// Operater function
function operate(a, operator, b) {
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