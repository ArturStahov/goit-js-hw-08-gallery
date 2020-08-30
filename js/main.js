import galleryItemsArr from "../js/gallery-items.js";
import { CreateGallery } from "../js/create-galleryItems.js";
import { ModalWindow } from "../js/modal-windows.js";


const refs = {
  galleryListRef: document.querySelector(".js-gallery"),
  imageShablonModWindowRef: document.querySelector(".lightbox__image"),
  modalWindowsRef: document.querySelector(".js-lightbox"),
  buttonCloseModWindow: document.querySelector("button[data-action='close-lightbox']"),
  divOverleyRef: document.querySelector(".lightbox__content"),
  buttonLeftScroolRef: document.querySelector("button[data-action='left-lightbox']"),
  buttonRightScroolRef: document.querySelector("button[data-action='right-lightbox']")
};

const newGallery = new CreateGallery(galleryItemsArr);
newGallery.createItemsArr();
newGallery.viewGallery(refs.galleryListRef);

const modalWindow = new ModalWindow(refs.imageShablonModWindowRef, refs.modalWindowsRef);

const galleryEventShowHundler = event => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalWindow.show(event.target, newGallery.getItemImageList());
  window.addEventListener("keydown", onPressEventCodeHandler)
}

const closeModal = () => {
  modalWindow.close();
  window.removeEventListener("keydown", onPressEventCodeHandler)
}

const galleryEventCloseHundler = () => {
  closeModal();
}

const overleyGalleryHandler = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

const onPressEventCodeHandler = (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
  if (event.code === "ArrowRight") {
    modalWindow.righScrool();
  }
  if (event.code === "ArrowLeft") {
    modalWindow.leftScrool();
  }
}

const buttonScroolLeftHundler = () => {
  modalWindow.leftScrool();
}

const buttonScroolRightHundler = () => {
  modalWindow.righScrool();
}

refs.galleryListRef.addEventListener("click", galleryEventShowHundler);
refs.buttonCloseModWindow.addEventListener("click", galleryEventCloseHundler);
refs.divOverleyRef.addEventListener("click", overleyGalleryHandler);
refs.buttonLeftScroolRef.addEventListener("click", buttonScroolLeftHundler);
refs.buttonRightScroolRef.addEventListener("click", buttonScroolRightHundler);
