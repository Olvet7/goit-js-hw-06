const counterElements = document.querySelector(`#value`);
const targetBntDecrement = document.querySelector('[data-action="decrement"]');
const targetBntAdd = document.querySelector('[data-action="increment"]');

let counterValue = 0;

targetBntDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counterElements.textContent = counterValue;
})

targetBntAdd.addEventListener('click', () => {
    counterValue += 1;
    counterElements.textContent = counterValue;
})