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
    const userValue = event.currentTarget.value;
    
    let minLength = 6;

    inputEl.classList.remove('valid', 'invalid');
    
    userValue.length < minLength || !userValue
    ? inputEl.classList.add('invalid') 
    : inputEl.classList.add('valid'); 
}

