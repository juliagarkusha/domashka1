const startBtnElement = document.querySelector('#startBtn');

const concatenationHandler = () => {
    const string1 = prompt('Введите первую строку');

    if (!string1) {
        return;
    }

    const string2 = prompt('Введите вторую строку');

    if(!string2) {
        return;
    }

    const string3 = prompt('Введите третью строку');

    if(!string3) {
        return;
    }

    const result = `${string1} ${string2} ${string3}`;
    alert(`Результат: ${result}`);
    console.log('debug result', result, typeof result);
}

startBtnElement.addEventListener('click', concatenationHandler);
