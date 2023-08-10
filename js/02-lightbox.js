import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  newGallery: document.querySelector(".gallery"),
};

const makeGalleryImagesNewMarkup = ({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
        <img class="gallery__image" src=${preview} alt="${description}" />
   </a>
</li>`;
};

const makeNewGalleryImagesGroup = galleryItems
  .map(makeGalleryImagesNewMarkup)
  .join("");

refs.newGallery.insertAdjacentHTML("beforeend", makeNewGalleryImagesGroup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// ========================================

function onImageElClick(event) {
  event.preventDefault();
  const imgSrc = event.target.src;
  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {
    const modalLightBox = new SimpleLightbox(`<a href="${imgSrc}">
          <img src="${imgSrc}"/></a>`);
    modalLightBox.open();
  });
}
