import Popup from "./Popup";

export default class PopupDelete extends Popup {
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
    }

    open(cardId, element) {
        super.open();
        this._cardId = cardId;
        this.cardElement = element;
    }

    setEventListeners() {
        super.setEventListeners();
        this.element.addEventListener('submit', e => {
            e.preventDefault();
            this._handleSubmit(this._cardId);
        });
    }

}