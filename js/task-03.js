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

const galleryContainer = document.querySelector(".gallery");

const galleryItems = images.map((image) => `
  <li style="margin-right: 10px;">
    <img src="${image.url}" alt="${image.alt}" style="max-width: 100%; height: auto;">
  </li>
`).join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryItems);

galleryContainer.style.display = "flex";
galleryContainer.style.listStyle = "none";
galleryContainer.style.padding = "0";




