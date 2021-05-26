import { closePopupBtn, validationPopup } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add(validationPopup.openPopup);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove(validationPopup.openPopup);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      const openPopup = document.querySelector(validationPopup.openPopupElement);
      this.close(openPopup);
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("click", (e) => {
      if (e.target.classList.contains(validationPopup.bodyOfPopup)) {
        this.close();
      }
      if (e.target.classList.contains(closePopupBtn)) {
        this.close();
      }
    });
  }
}
