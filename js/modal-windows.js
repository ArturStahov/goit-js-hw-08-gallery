export class ModalWindow {
    constructor(imageShablonRef, modalWindowsRef) {
        this.imageShablonRef = imageShablonRef;
        this.modalWindowsRef = modalWindowsRef;
        this.indexEl = 0;
        this.arrayImg = [];
    }

    show(eventTarget, arrayImg) {
        this.imageShablonRef.alt = eventTarget.alt;
        this.imageShablonRef.src = eventTarget.dataset.source;
        this.modalWindowsRef.classList.add("is-open");
        this.arrayImg = [...arrayImg];
        this.indexEl = this.arrayImg.indexOf(eventTarget);
    }

    close() {
        this.modalWindowsRef.classList.remove("is-open");
        this.imageShablonRef.src = "";
    }

    righScrool() {
        if (this.indexEl <= this.arrayImg.length - 2) {
            this.indexEl += 1;
            this.imageShablonRef.src = this.arrayImg[this.indexEl].dataset.source;
            this.imageShablonRef.alt = this.arrayImg[this.indexEl].alt;
        }
    }

    leftScrool() {
        if (this.indexEl >= 1) {
            this.indexEl -= 1;
            this.imageShablonRef.src = this.arrayImg[this.indexEl].dataset.source;
            this.imageShablonRef.alt = this.arrayImg[this.indexEl].alt;
        }
    }

}
