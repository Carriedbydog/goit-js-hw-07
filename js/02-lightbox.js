import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  newGallery: document.querySelector(".gallery"),
};

const makeGalleryImagesNewMarkup = ({ preview, original }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>`;
};
