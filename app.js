const numberButton = document.querySelectorAll('[data-number]');
const equalButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const operationButton = document.querySelectorAll('[data-operation]');
const previousTextElement = document.querySelector('[data-previous]');
const currentTextElement = document.querySelector('[data-current]');

numberButton.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(`${button.innerText} is pressed`)
        currentTextElement.innerText += button.innerText
    });
});

clearButton.addEventListener('click', () => {
    currentTextElement.innerText = '';
    previousTextElement.innerText = '';
    operator = null;
});

deleteButton.addEventListener('click', () => {
    currentTextElement.innerText = currentTextElement.innerText.slice(0, -1);
});

operationButton.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.innerText;
        currentTextElement.innerText += button.innerText.toString();
        previousTextElement.innerText += currentTextElement.innerText
        currentTextElement.innerText = '';
    });
});

equalButton.addEventListener('click', () => {
    let secondNumber = parseFloat(currentTextElement.innerText);
    let firstNumber = parseFloat(previousTextElement.innerText.substring(0, previousTextElement.innerText.length - 1));

    switch (operator) {
        case '/':
            var output = firstNumber / secondNumber;
            break;
        case '*':
            var output = firstNumber * secondNumber;
            break;
        case '+':
            var output = firstNumber + secondNumber;
            break;
        case '-':
            var output = firstNumber - secondNumber;
            break;
        default:
            return;
    }
    if (isNaN(output)) {
        previousTextElement.innerText = '';
        currentTextElement.innerText = 'Error';
        clearButton.click()
    } else {
        previousTextElement.innerText = '';
        currentTextElement.innerText = output;
    }
});