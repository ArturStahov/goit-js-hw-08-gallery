export class CreateGallery {
  constructor(itemsArray) {
    this.inputItemsArray = itemsArray;
    this.galleryItemsArray = [];
    this.imageList = [];
  }

  createItemsArr() {
    this.inputItemsArray.forEach(element => {
      const { preview, original, description } = element;
      const $liEl = document.createElement("li");
      $liEl.classList.add("gallery__item");

      const $aEl = document.createElement("a");
      $aEl.classList.add("gallery__link");
      $aEl.setAttribute("href", original);

      const $imgEl = document.createElement("img");
      $imgEl.classList.add("gallery__image");
      $imgEl.setAttribute("src", preview);
      $imgEl.setAttribute("alt", description);
      $imgEl.setAttribute("data-source", original);

      $aEl.appendChild($imgEl);
      $liEl.appendChild($aEl);

      this.galleryItemsArray.push($liEl);
      this.imageList.push($imgEl)
    });
  }

  viewGallery(domInsertRef) {
    domInsertRef.append(...this.galleryItemsArray);
  }

  getItemImageList() {
    return this.imageList;
  }
}
