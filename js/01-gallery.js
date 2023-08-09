import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeGalleryImagesMarkup = ({ preview, original }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="Image description"
    />
  </a>
</li>`;
};

const refs = {
  gallery: document.querySelector(".gallery"),
};

const makeGalleryImagesGroup = galleryItems
  .map(makeGalleryImagesMarkup)
  .join("");
refs.gallery.insertAdjacentHTML("beforeend", makeGalleryImagesGroup);

refs.gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nameNode !== "LI") return;
  console.log(event.target);
}

// import * as basicLightbox from "basiclightbox";
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
