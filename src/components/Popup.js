import { closePopupBtn, validationPopup } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popup.classList.add(validationPopup.openPopup);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popup.classList.remove(validationPopup.openPopup);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close(this.popup);
    }
  }

  setEventListeners() {
    this.popup.addEventListener("click", (e) => {
      if (e.target.classList.contains(validationPopup.bodyOfPopup)) {
        this.close();
      }
      if (e.target.classList.contains(closePopupBtn)) {
        this.close();
      }
    });
  }
}
