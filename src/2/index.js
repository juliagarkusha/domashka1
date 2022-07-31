const startBtnElement = document.querySelector('#startBtn');

const calculateHandler = () => {
    const value1 = prompt('Введите первое значение');

    if (!value1) {
        return;
    }

    const value2 = prompt('Введите второе значение');

    if(!value2) {
        return;
    }

    const isSomeValues = value1 === value2;
    alert(`Результат: ${isSomeValues}`);
    console.log('debug isSomeValues', isSomeValues);
}

startBtnElement.addEventListener('click', calculateHandler);
