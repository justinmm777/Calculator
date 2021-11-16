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

        
// save which operation has been chosen
        const createDisplayString = () => {
            // Variables required are:
            // 1. btnContent
            // 2. displayedNum
            // 3. previousKeyType
            // 4. action

            if (!action) {
                return displayedNum === '0' || 
                previousKeyType === 'operator' ||
                previousKeyType === 'equal'
                ? btnContent
                :displayedNum + btnContent
            }
                // container.dataset.previousKeyType = 'number'

            if (action === 'decimal') {
                if (!displayedNum.includes('.')) return displayedNum + '.';
                if (previousKeyType === 'operator' || previousKeyType === 'equal') return '0.';
            }
                // container.dataset.previousKeyType = 'decimal'
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

// function to clear the content of liveDisplay
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
// then operate() on them when the user presses the “=” key.
        if (action === 'equal') {
            const num1 = container.dataset.num1
            const operator = container.dataset.operator
            const num2 = displayedNum

            if(num1) {
                if (previousKeyType === 'equal') {
                    num1 = displayedNum
                    num2= container.dataset.modValue
                }

            display.textContent = calculate(num1, operator, num2)
            }

            container.dataset.modValue = num2;
            container.dataset.previousKeyType = 'equal'
        }
    }
})


// Operater function
function calculate(num1, operator, num2) {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (operator === "add") return n1 + n2
    if (operator === "subtract") return n1 - n2
    if (operator === "multiply") return n1 * n2
    if (operator === "divide") return n1 / n2
}
