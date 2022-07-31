const calcStartElement = document.querySelector('#calcStart');

const calculatorCalcHandler = (operator, number1, number2) => {
    if(!operator.length) {
        return 'Для дальнейшей работы с числами сначала введите оператор';
    }

    if(operator.length > 1) {
        return 'Ошибка! Вы не ввели не корректное значение оператора';
    }

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
            return 'Ошибка! Вы не ввели не корректное значение оператора';
    }
}

const calculatorViewHandler = () => {
    const operator = prompt(`Введите оператор: 
      + (для сложения), 
      / (для деления), 
      * (для умножения), 
      - (для вычитания)
     `
    );

    if(!operator) {
        alert('Для дальнейшей работы с числами сначала введите оператор');
        return;
    }

    const firstNumber = prompt('Введите первое число');

    if(!firstNumber) {
        alert('Вы не ввели число. Попробуйте еще раз');
        return;
    }

    if(!(+firstNumber) && firstNumber !== '0') {
        alert('Вы ввели некоректное число. Попробуйте еще раз');
        return;
    }

    const secondNumber = prompt('Введите второе число');

    if(!secondNumber) {
        alert('Вы не ввели число. Попробуйте еще раз');
        return;
    }

    if(!(+secondNumber) && secondNumber !== '0') {
        alert('Вы ввели некоректное число. Попробуйте еще раз');
        return;
    }

    const result = calculatorCalcHandler(operator, +firstNumber, +secondNumber);
    alert(`Результат: ${result}`);
    console.log('debug result', result, typeof result);
};

calcStartElement.addEventListener('click', calculatorViewHandler);
