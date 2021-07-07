import {validationCard } from '../utils/constants.js';

export default class Card {
    constructor({name, link, owner, _id, likes}, {
        handleCardClick,
        handleCardDislike,
        handleCardLike,
        handleCardDelete,
    } ,cardSelector, userId) {
        this._name = data.name;
        this._link = data.link;
        this._image = validationCard.image;
        this._likeButton = validationCard.likeBtn;
        this._deleteButton = validationCard.deleteBtn;
        this._text = validationCard.text;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const elementTemplate = document.querySelector(this._cardSelector).content;

        return elementTemplate.querySelector(".element").cloneNode(true);
    }

    _setEventListeners() {
        this._element.querySelector(this._likeButton).addEventListener("click", this._likeCard);
   
        this._element.querySelector(this._deleteButton).addEventListener("click", this._deleteCard);
        
        this._element.querySelector(this._image).addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }

    _likeCard(e) {
        e.target.classList.toggle("element__like_type_active");
    }

    _deleteCard(e) {
        e.target.closest(".element").remove();
    } 

    _openCard(link, name) {
        const picture = document.querySelector(".popup-image__picture");
        picture.src = link;
        picture.alt = name;
        picture.textContent = name;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector(this._image).src = this._link;
        this._element.querySelector(this._image).alt = this._name;
        this._element.querySelector(this._text).textContent = this._name;
        this._setEventListeners();
        return this._element;

    }
}