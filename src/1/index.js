const calcStartElement = document.querySelector('#calcStart');

const getPromptNumber = (message = '') => {
    const userNumber = prompt(message);

    if(userNumber === null) {
        return;
    }

    if(!userNumber.length) {
        alert('Вы не ввели число. Попробуйте еще раз');
        return getPromptNumber(message);
    }

    if(!(+userNumber) && userNumber !== '0') {
        alert('Вы ввели некоректное число. Попробуйте еще раз');
        return getPromptNumber(message);
    }

    return userNumber;
}

const getPromptOperator = (message = '') => {
    const operator = prompt(message);
    const validOperators = ['+', '-', '/', '*'];

    if(operator === null) {
        return;
    }

    if(!operator.length) {
        alert('Для дальнейшей работы с числами сначала введите оператор');
        return getPromptOperator(message);
    }

    if(operator.length > 1) {
        alert('Ошибка! Вы не ввели не корректное значение оператора');
        return getPromptOperator(message);
    }

    if(!validOperators.includes(operator)) {
        alert(`Ошибка! Введенный вами оператор "${operator}" не яаляется валидным`);
        return getPromptOperator(message);
    }

    return operator;
}

const calculatorCalcHandler = (operator, number1, number2) => {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "/":
            return number1 / number2;
        case "*":
            return number1 * number2;
        case "-":
            return number1 - number2;
        default:
            return;
    }
}

const calculatorViewHandler = () => {
    const operator = getPromptOperator(`Введите оператор: 
      + (для сложения), 
      / (для деления), 
      * (для умножения), 
      - (для вычитания)
     `
    );

    if(operator === undefined) {
        return;
    }

    const firstNumber = getPromptNumber('Введите первое число');

    if(firstNumber === undefined) {
        return;
    }

    const secondNumber = getPromptNumber('Введите второе число');

    if(secondNumber === undefined) {
        return;
    }

    const result = calculatorCalcHandler(operator, +firstNumber, +secondNumber);
    alert(`Результат: ${result}`);
    console.log('debug result', result, typeof result);
};

calcStartElement.addEventListener('click', calculatorViewHandler);
