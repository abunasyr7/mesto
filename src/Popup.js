export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._listCloseButtons = Array.from(document.querySelectorAll('.close-popup'));
    }

    open() {
        this._popupSelector.classList.add("popup_open")
    }

    close() {
        this._popupSelector.classList.remove("popup_open")
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
            const openPopup = document.querySelector('.popup_open');
            this.close(openPopup);
        }
    }

    setEventListeners() {
        this._listCloseButtons.forEach((button) => {
            button.addEventListener('click', this.close)
        })
    }
}