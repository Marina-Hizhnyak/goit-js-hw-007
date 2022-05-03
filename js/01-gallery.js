import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}
const refs = {
    list: document.querySelector(".gallery"),
    img: document.querySelector(".gallery__image"),
}


const createGalleryItems = (item) => {
    return item.map(({ original, description, preview }) =>
        `<div class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
    ).join("");
}

refs.list.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));

refs.list.addEventListener("click", openBigImage)

function openBigImage(event) {
    event.preventDefault();
    console.log(event.target.nodeName);
    if (event.target.nodeName !== "IMG") {
    return
    }
  console.table(event.target.dataset.source);
  showModal(event.target.dataset.source);

}

  let instance;
function showModal(src) {
  instance = basicLightbox.create(`
   <img src="${src}">
`);
  instance.show();
  onModalOpen();
}

function onModalOpen() {
  window.addEventListener('keydown', onEscPress);
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    instance.close();
    onModalClose();
  }
}

function onModalClose() {
  window.removeEventListener('keydown', onEscPress);
}
