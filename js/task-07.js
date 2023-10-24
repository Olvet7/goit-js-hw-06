
const refs = {
    input: document.querySelector('[id="font-size-control"]'),
    text: document.querySelector('[id="text"]'),
};
refs.text.style.fontSize = refs.input.value + 'px';
refs.input.addEventListener('input', onInputValue);

function onInputValue (event) {
    refs.text.style.fontSize = refs.input.value + 'px';
}

