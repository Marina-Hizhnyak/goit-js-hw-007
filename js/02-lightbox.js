import { galleryItems } from './gallery-items.js';
// Change code below this line

const conteinerImgEl = document.querySelector(`.gallery`);

conteinerImgEl.addEventListener(`click`, lightbox);

const galleryMarkUp = createGalleryMarkUp(galleryItems);

function createGalleryMarkUp(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
    )
    .join('');
}

conteinerImgEl.insertAdjacentHTML('beforeend', galleryMarkUp);

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: `alt`,
  captionDelay: 250,
});