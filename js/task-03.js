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
const gallery = document.querySelector(`.gallery`);
const markup = images.map(({ url, alt }) =>
  `<li class="gallery__item">
   <img class="gallery__image" src="${url}" alt="${alt}"></li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', markup);
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.gap = '10px';
gallery.style.listStyle = 'none';
gallery.style.padding = '0';
gallery.style.margin = '0';
gallery.querySelectorAll('.gallery__image').forEach(image => {
  image.style.width = '300px';
  image.style.height = '200px';
  image.style.objectFit = 'cover';
  image.style.borderRadius = '10px';
});



