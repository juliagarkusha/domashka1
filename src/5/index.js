const startBtnElement = document.querySelector('#startBtn');

const numberHandler = () => {
    const myNumber = prompt('Введите первую строку');

    if (!myNumber) {
        return;
    }

    const myNumberCustom = myNumber.split('').join(" ");

    alert(`Результат: ${myNumberCustom}`);
    console.log('debug myNumberCustom', myNumberCustom);
}

startBtnElement.addEventListener('click', numberHandler);
