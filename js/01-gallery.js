import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__img");
  galleryImg.src = item.preview;
  galleryImg.setAttribute("data-source", item.original);
  galleryImg.alt = item.description;

  galleryItem.append(galleryLink)
  galleryLink.append(galleryImg)
  gallery.append(galleryItem)
});

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  }
  const selectedImage = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${selectedImage}" width = "800" height = "600">`);
  instance.show();

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    instance.close()
  }
})
});
