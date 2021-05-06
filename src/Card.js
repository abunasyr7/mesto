export default class Card {
    constructor(data, openModal) {
        this._name = data.name;
        this._link = data.link;
        this._image = data.link;
        this._image = '.element__image';
        this._likeButton = '.element__like';
        this._deleteButton = '.element__delete';
        this._element = this._getTemplate();
        this._text = '.element__text';
        this._openModal = openModal;
        this._popupImage = document.querySelector(".popup-image");
    }

    _getTemplate() {
        const elementTemplate = document.querySelector(".elements-container").content;

        return elementTemplate.querySelector(".element").cloneNode(true);
    }

    _setEventListeners() {
        this._element.querySelector(this._likeButton).addEventListener("click", this._likeCard);
   
        this._element.querySelector(this._deleteButton).addEventListener("click", this._deleteCard);
        
        this._element.querySelector(this._image).addEventListener("click", this._openCard(this._link, this._name, this._openModal));
    }

    _likeCard(e) {
        e.target.classList.toggle("element__like_type_active");
    }

    _deleteCard(e) {
        e.target.closest(".element").remove();
    } 

    _openCard(link, name, openModal) {
        return function(e) {
            openModal(document.querySelector(".popup-image"));
            const picture = document.querySelector(".popup-image__picture");
            picture.src = link;
            picture.alt = name;
            picture.textContent = name;
        }
    }

    generateCard() {
        const image =   this._element.querySelector(this._image);
        image.src = this._link;
        this._element.querySelector(this._text).textContent = this._name;
        image.alt = this._name;
        this._setEventListeners();
        return this._element;

    }
}