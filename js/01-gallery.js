import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');
    
(function () {
    const markup = galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`).join('');

    container.insertAdjacentHTML('beforeend', markup);
})();
container.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) { 
    return;
  }
  const currentCard = evt.target.closest('.gallery__item');
  const data = galleryItems.find(item => item.preview === evt.target.src);
 
  const instance = basicLightbox.create(`<img src="${data.original}" width="800" height="600">`);
    instance.show();

    document.addEventListener('keydown', onKey);
    function onKey(evt) {
        if (evt.code === 'Escape') {
            instance.close()
            document.removeEventListener('keydown', onKey);
        }
    }
}


