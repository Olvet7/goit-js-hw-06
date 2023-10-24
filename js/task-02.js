const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector(`#ingredients`);

const ingredientElement = ingredients.map((ingredient) => {
  const element = document.createElement(`li`);
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
})

  listElement.append(...ingredientElement);

console.dir(listElement);
