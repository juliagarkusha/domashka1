const startBtnElement = document.querySelector('#startBtn');

const numberHandler = (number) => {
    return +number;
}

const compareValuesHandler = () => {
    const value1 = prompt('Введите первое число');

    if (!value1) {
        return;
    }

    const value2 = prompt('Введите второе число');

    if(!value2) {
        return;
    }

    const value3 = prompt('Введите третье число');

    if(!value3) {
        return;
    }

    const arithmeticMean = (numberHandler(value1) + numberHandler(value2) + numberHandler(value3)) / 3;
    alert(`Среднее арифметическое чисел ${value1}, ${value2} и ${value3} - ${arithmeticMean}`);
    console.log('debug arithmeticMean', arithmeticMean, typeof arithmeticMean);
}

startBtnElement.addEventListener('click', compareValuesHandler);
