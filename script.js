const container = document.querySelector('.calcContainer');
const btns = container.querySelector('.calcBtnBox');
const display = document.querySelector('.calcDisplay');


// functions that populate the display
// store the first number that is input 
// into the calculator when a user presses an operator

// const getBtnType = btn => {
//     const {action} = btn.dataset
//     if (!action) return 
// }
btns.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const btn = e.target
        const action = btn.dataset.action
        const btnContent = btn.textContent
        const displayedNum = display.textContent
        const previousKeyType = container.dataset.previousKeyType
    
        
        

        Array.from(btn.parentNode.children)
        .forEach(b => b.classList.remove('isDepressed'));

        

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = btnContent;
            } else {
                display.textContent = displayedNum + btnContent
            }
        }

        
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            btn.classList.add('isDepressed')
            container.dataset.previousKeyType = 'operator'
            container.dataset.num1 = displayedNum
            container.dataset.operator = action
            console.log(action);
        } else {
            container.dataset.previousKeyType = 'number'
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
            const num1 = container.dataset.num1
            const operator = container.dataset.operator
            const num2 = displayedNum

            display.textContent = calculate(num1, operator, num2)
            console.log('equal');
        }
    }
})




// save which operation has been chosen
// then operate() on them when the user presses the “=” key. 

// function to clear the content of liveDisplay


// Operater function
function calculate(num1, operator, num2) {
    let result = "";

    if (operator === "add") {
        result = parseFloat(num1) + parseFloat(num2)
    } else if (operator === "subtract") {
        result = parseFloat(num1) - parseFloat(num2)
    } else if (operator == "multiply") {
        result = parseFloat(num1) * parseFloat(num2)
    } else if (operator == "divide") {
        result = parseFloat(num1) / parseFloat(num2)
    }
    return result
}
