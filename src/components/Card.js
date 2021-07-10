import {validationCard } from '../utils/constants.js';

export default class Card {
    constructor({name, link, owner, _id, likes}, {
        handleCardClick,
        handleCardDislike,
        handleCardLike,
        handleCardDelete,
    },
                cardSelector,
                userId)
    {
        this._name = name;
        this._link = link;
        this._image = validationCard.image;
        this._likeButton = validationCard.likeBtn;
        this._deleteButton = validationCard.deleteBtn;
        this._text = validationCard.text;
        this._likes = likes;
        this._owner = owner._id;
        this._id = _id;
        this._userId = userId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDislike = handleCardDislike;
        this._handleCardLike = handleCardLike;
        this._handleCardDelete = handleCardDelete;
        this._element = this._getTemplate();
        this._cardElement = this._element.querySelector(this._image);
        this._cardLikeElement = this._element.querySelector(this._likeButton);
    }

    _getTemplate() {
        const elementTemplate = document.querySelector(this._cardSelector).content;

        return elementTemplate.querySelector(".element").cloneNode(true);
    }

    _setEventListeners() {
        this._cardElement.addEventListener('click', () =>
        {
            this._handleCardClick(this._name, this._link);
        });

        this._cardLikeElement.addEventListener("click", () => {
            const trigger = this._element
                .querySelector(this._likeButton)
                .classList
                .contains("element__like_type_active");

            if (trigger) {
                this._dislikeCard();
            } else {
                this._likeCard();
            }
        });
   
        this._element.querySelector(this._deleteButton).addEventListener("click", () => this._deleteCard());

    }

    generateCard() {
        this._setEventListeners();
        this.updateLikeCount();
        this._element.querySelector(this._image).src = this._link;
        this._element.querySelector(this._image).alt = this._name;
        this._element.querySelector(this._text).textContent = this._name;
        if (this._userId === this._owner) {
            this._element.querySelector(this._deleteButton).classList.add('element__delete_active');
        }

        this._likes.forEach(like => {
            if (like._id===this._userId) {
                this._element.querySelector(this._likeButton).classList.toggle("element__like_type_active");
                return;
            }
        });
        return this._element;

    }

    updateLikeCount() {
        this._element.querySelector('.element__number').textContent = this._likes.length;
    }

    _likeCard() {
        console.log(this._handleCardLike)
        console.log(this._id)
        this._handleCardLike(this._id).then(() => {
            this._element.querySelector(this._likeButton).classList.toggle("element__like_type_active");
        });
    }

    _dislikeCard() {
        this._handleCardDislike(this._id).then(() => {
            this._element.querySelector(this._likeButton).classList.toggle("element__like_type_active");
        });
    }

    _deleteCard() {
        this._handleCardDelete(this._id, this._element);
    } 

    _openCard(link, name) {
        const picture = document.querySelector(".popup-image__picture");
        picture.src = link;
        picture.alt = name;
        picture.textContent = name;
    }

}