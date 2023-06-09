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

const list = document.querySelector('.gallery');

const elements = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`).join('');

list.insertAdjacentHTML("beforeend", elements);

list.style.cssText =
  'list-style: none; padding: 0; display: flex; flex-wrap: wrap; justify-content: space-around; gap: 24px;';
const imagesGallery = document.querySelectorAll('img');
imagesGallery.forEach(img => {
  img.style.cssText =
    'width: 300px; height: 200px; box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 10px rgba(0, 0, 0, 0.2);';
});