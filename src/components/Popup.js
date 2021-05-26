import { closePopupBtn } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      const openPopup = document.querySelector(".popup_open");
      this.close(openPopup);
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup__body")) {
        this.close();
      }
      if (e.target.classList.contains(closePopupBtn)) {
        this.close();
      }
    });
  }
}
