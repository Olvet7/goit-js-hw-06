const categoriesEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoriesEl.length}`);


categoriesEl.forEach(element => {
    const categoryName = element.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);
    const elementsQuantity = element.querySelectorAll(`li`).length;
    console.log(`Elements: ${elementsQuantity}`)
}); 