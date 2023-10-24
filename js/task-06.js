// Посилання на input
const inputEl = document.getElementById("validation-input");

// Слухач на input
inputEl.addEventListener('input', onInputChange);
inputEl.addEventListener('blur', onInputBlur);


// Функція на Сhange
function onInputChange(event) {
    console.log(event.currentTarget.value);
}

// Функція на Blur
function onInputBlur(event) {
    const userValue = event.currentTarget.value.length;
    console.log(userValue);
    const validLength = Number(inputEl.dataset.length);
    console.log(validLength);

    inputEl.classList.remove('valid', 'invalid');
    
    if (userValue === validLength) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
}

