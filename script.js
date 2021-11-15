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
            if (
                displayedNum === '0' || 
                previousKeyType === 'operator' ||
                previousKeyType === 'equal'
                ) {
                display.textContent = btnContent;
            } else {
                display.textContent = displayedNum + btnContent
            }

            container.dataset.previousKeyType = 'number'
        }

        
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const num1 = container.dataset.num1
            const operator = container.dataset.operator
            const num2 = displayedNum

            if (num1 && 
                operator && 
                previousKeyType !== 'operator' &&
                previousKeyType !== 'equal'
                ) {
                const calcValue = calculate(num1, operator, num2)
                display.textContent = calcValue
                container.dataset.num1 = calcValue
            } else {
                container.dataset.num1 = displayedNum
            }

        btn.classList.add('isDepressed')
            container.dataset.previousKeyType = 'operator'
            container.dataset.num1 = displayedNum
            container.dataset.operator = action
        } 

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (
                previousKeyType === 'operator' ||
                previousKeyType === 'equal'
            ) {
                display.textContent = '0.';
            }

            container.dataset.previousKeyType = 'decimal'
        }

        if (action === 'clear') {
            if (btn.textContent === 'AC') {
                container.dataset.num1 = "";
                container.dataset.modValue = "";
                container.dataset.operator = "";
                container.dataset.previousKeyType = "";
            } else {
                btn.textContent = 'AC'
            }


            display.textContent = '0'
            container.dataset.previousKeyType = 'clear'
        }

        if (action !== 'clear') {
            const btnClear = container.querySelector('[data-action=clear]')
            btnClear.textContent = 'CE'
        }

        if (action === 'delete') {
            container.dataset.previousKeyType = 'delete'
            console.log('delete');
        }

        if (action === 'equal') {
            const num1 = container.dataset.num1
            const operator = container.dataset.operator
            const num2 = displayedNum

            if(num1) {
                if (previousKeyType === 'equal') {
                    num1 = displayedNum
                    secondValue = container.dataset.modValue
                }

            display.textContent = calculate(num1, operator, num2)
            }

            container.dataset.modValue = num2;
            container.dataset.previousKeyType = 'equal'
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
