import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// // Add imports above this line
 import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = "none";

const imagesMarkup = galleryItems.map(({ original, preview, description }) =>
  `<li class="gallery__item">
    <a href="${original}" target="_blank">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
  </li>`
).join('');

gallery.insertAdjacentHTML('beforeend', imagesMarkup);



var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});


