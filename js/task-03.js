const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Підготовлюю місце для додавання в DOM
const gallery = document.querySelector(`.gallery`);
console.log(gallery);

// Створюємо масив елементів для галереї методом map  

const galleryElements = images.map((image) => {
  const imageEl = document.createElement("img");
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  // gallery.appendChild(imageEl);
  return imageEl;
})

// Додаємо в DOM розпилений масив картинок
gallery.append(...galleryElements)




