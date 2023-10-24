// Зібрали всі посилання на елементи (інпут і спана)  

const refs = {
    nameElementInput: document.getElementById("name-input"),
    nameElementOutput: document.getElementById("name-output"),
}

// "Вішаємо" слухача подій на input 

refs.nameElementInput.addEventListener('input', onInputChange);

// Функція 

function onInputChange(event) {
    const inputTrim = event.currentTarget.value.trim();
    if (!event.currentTarget.value || !inputTrim) {
        refs.nameElementOutput.textContent = 'Anonimus'
    } else {
        refs.nameElementOutput.textContent = event.currentTarget.value
    }
}