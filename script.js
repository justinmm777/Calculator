const container = document.querySelector('.calcContainer');
const btns = container.querySelector('.calcBtnBox');
const display = document.querySelector('.calcDisplay');

// functions that populate the display
btns.addEventListener('click', e => {
    if (!e.target.matches('button')) return
    const btn = e.target
    const displayedNum = display.textContent

    const displayString = createDisplayString(btn, displayedNum, container.dataset)

    display.textContent = displayString

    updateCalcState(btn, container, displayString, displayedNum)
    pressDepress(btn, container)
})

// save which operation has been chosen
const createDisplayString = (btn, displayedNum, state) => {
    const btnContent = btn.textContent
    const previousKeyType = state.previousKeyType
    const action = btn.dataset.action
    const num1 = state.num1
    const operator = state.operator
    const modValue = state.modValue
    const btnType = getBtnType(btn)

    if (btnType === 'number') {
        return displayedNum === '0' || 
        previousKeyType === 'operator' ||
        previousKeyType === 'equal'
        ? btnContent
        :displayedNum + btnContent
    }
        
    if (btnType === 'decimal') {
        if (!displayedNum.includes('.')) return displayedNum + '.';
        if (previousKeyType === 'operator' || previousKeyType === 'equal') return '0.';
        return displayedNum
    }

    // store the first number that is input 
    // into the calculator when a user presses an operator  
    if (btnType === 'operator') {
        return num1 && 
            operator && 
            previousKeyType !== 'operator' &&
            previousKeyType !== 'equal'
            ? calculate(num1, operator, displayedNum)
            : displayedNum  
    } 
    
    // function to clear the content of liveDisplay
    if (btnType === 'clear') return 0;


    if (action === 'delete') {
        return displayedNum.slice(0, -1)
    }


    // then operate() on them when the user presses the “=” key.
    if (btnType === 'equal') {
        if (previousKeyType === 'equal') {
            return displayedNum
        }
        if (previousKeyType !== 'equal') {
            return calculate(num1, operator, displayedNum)
        }
    }
}

// function that changes the calculator's visual appearance and custom attributes.
const updateCalcState = (btn, container, calculatedValue, displayedNum) => {
    const btnType = getBtnType(btn)
    const {
        num1,
        operator,
        modValue,
        previousKeyType
    } = container.dataset
    container.dataset.previousKeyType = btnType

    if (btnType === 'operator') {
        btn.classList.add('isDepressed')
        container.dataset.operator = btn.dataset.action
        container.dataset.num1 = num1 &&
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'equal'
            ? calculatedValue
            : displayedNum
    }

    if (btnType === 'clear') {
        if (btn.textContent === 'AC') {
            container.dataset.num1 = "";
            container.dataset.modValue = "";
            container.dataset.operator = "";
            container.dataset.previousKeyType = "";
        } else {
            btn.textContent = 'AC'
        }
    }
    if (btnType !== 'clear') {
        const clearButton = container.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
    }

    if(btnType === 'equal') {
        container.dataset.modValue = num1 && previousKeyType === 'equal'
        ? modValue
        : displayedNum
    }
}

// function for pressing / depressing operators
const pressDepress = (btn, container) => {
    const btnType = getBtnType(btn)
    Array.from(btn.parentNode.children).forEach(b => b.classList.remove('isDepressed'))

    if (btnType === 'operator') btn.classList.add('isDepressed')

    if (btnType === 'clear' && btn.textContent !== 'AC') {
        btn.textContent = 'AC'
    }

    if (btnType !== 'clear') {
        const clearButton = container.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
    }

}

// function to find the keytype
const getBtnType = (btn) => {
    const {action} = btn.dataset
    if (!action) return 'number'
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) return 'operator'
   return action
}


// Operater function
function calculate(num1, operator, num2) {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (operator === "add") return n1 + n2
    if (operator === "subtract") return n1 - n2
    if (operator === "multiply") return n1 * n2
    if (operator === "divide") {
        if (n2 === 0) return "Zero Division Error!"
        return n1 / n2
    } 
}

// Keyboard Support
document.addEventListener("keydown", e => {
    const key = e.key
    console.log(key)
    if (
        key === "0" ||
        key === "1" ||
        key === "2" ||
        key === "3" ||
        key === "4" ||
        key === "5" ||
        key === "6" ||
        key === "7" ||
        key === "8" ||
        key === "9" ||
        key === "." ||
        key === "/" ||
        key === "*" ||
        key === "-" ||
        key === "+" ||
        key === "=" ||
        key === "Enter" ||
        key === "Backspace" ||
        key === "Delete"
    ) {
        btnClick(key)
    }  
    
});

function btnClick(key) {
    const buttons = document.querySelectorAll('button')
    const equal = document.querySelector('.btnEqual')
    const backSpace = document.getElementById('btnDelete')
    const clear = document.getElementById('btnClear')
    buttons.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
        if (key === "Enter") {
            equal.click();
        }
        if (key === "Backspace") {
            backSpace.click();
        }
        if (key === "Delete") {
            clear.click()
        }
    })
}

