import Card from './Card.js';
// import initialCards from './initial-cards.js';
import FormValidator from './FormValidator.js';
import {validationConfig} from './FormValidator.js';
import {initialCards} from './initial-cards.js';

const popup = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close");
const profileInfoName = document.querySelector(".profile__info-name");
const popupForm = document.querySelector(".popup__form");
const profileInfoText = document.querySelector(".profile__info-text");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const elements = document.querySelector(".elements");
const elementAddButton = document.querySelector(".profile__add-button");
const popupPlace = document.querySelector(".popup-place");
const popupPlaceClose = popupPlace.querySelector(".popup__close");
const popupImage = document.querySelector(".popup-image");
const popupImageClose = popupImage.querySelector(".popup__close");
const picture = document.querySelector(".popup-image__picture");
const caption = document.querySelector(".popup-image__caption");
const popupPlaceForm = document.querySelector(".popup-place__form");
const popupInputTypePlace = popupPlaceForm.querySelector(
  ".popup__input_type_place"
);
const popupInputTypeImage = popupPlaceForm.querySelector(
  ".popup__input_type_image"
);



const validatorAddCard = new FormValidator(validationConfig, popupPlaceForm);
const validatorEditProfile = new FormValidator(validationConfig, popupForm);

validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();

function openModal(modal) {
  modal.classList.add("popup_open");
  modal.addEventListener('click', closePopupByOverlay);
  document.addEventListener('keydown', keyHandlers);

}

function closePopupByOverlay(e) {
  if (!e.target.closest('.popup__content')) {
    closeModal(e.target.closest('.popup'));
  }
}

function keyHandlers(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open');
    closeModal(openedPopup);
  }
}

function closeModal(modal) {
  modal.classList.remove("popup_open");
  modal.removeEventListener('click', closePopupByOverlay);
  document.removeEventListener('keydown', keyHandlers);
  // checkPopupForm(modal);
}

function openProfileModal() {
  openModal(popup);
  popupName.value = profileInfoName.textContent;
  popupJob.value = profileInfoText.textContent;
  validatorEditProfile.removeInputErrorProfile();
  addButtonActive();
}

function submitProfileForm(e) {
  e.preventDefault();
  profileInfoName.textContent = popupName.value;
  profileInfoText.textContent = popupJob.value;
  closeModal(popup);
}

function openAddCardPopup(element) {
  popupPlaceForm.reset();
  openModal(popupPlace);
  validatorAddCard.removeInputError();
}

function submitCardForm(e) {
  e.preventDefault();
  const name = popupInputTypePlace.value;
  const link = popupInputTypeImage.value;
  addCard({name, link});

  closeModal(popupPlace);
  popupPlaceForm.reset();
}

profileEditButton.addEventListener("click", openProfileModal);
elementAddButton.addEventListener("click", () => openAddCardPopup(popupPlace));
popupPlaceClose.addEventListener("click", () => {
  closeModal(popupPlace);
});
popupImageClose.addEventListener("click", () => closeModal(popupImage));
popupClose.addEventListener("click", () => closeModal(popup));
popupForm.addEventListener("submit", submitProfileForm);
popupPlaceForm.addEventListener("submit", submitCardForm);



export function showImage(name, link) {
  picture.src = link;
  picture.alt = name;
  caption.textContent = name; 
  openModal(popupImage);
}
// function createCard(link, name) {
//   const elementTemplate = elementsTemplate
//     .querySelector(".element")
//     .cloneNode(true);

//   elementImage.src = link;
//   elementTemplate.querySelector(".element__text").textContent = name;
//   elementImage.alt = name;
//   elementTemplate
//     .querySelector(".element__delete")
//     .addEventListener("click", function (e) {
//       e.target.closest(".element").remove();
//     });
//   elementTemplate
//     .querySelector(".element__like")
//     .addEventListener("click", (e) => {
//       e.target.classList.toggle("element__like_type_active");
//     });
//   elementTemplate
//     .querySelector(".element__image")
//     .addEventListener("click", (e) => {
//       openModal(popupImage);
//       picture.src = link;
//       picture.alt = name;
//       caption.textContent = name;
//     });
//   return elementTemplate;
// }




function addCard(element) {
  const cardSelector = ".elements-container";
  const newCard = new Card(element, cardSelector);
  const generatedCard = newCard.generateCard();
  elements.prepend(generatedCard);
}

initialCards.forEach(addCard);


const formList = Array.from(document.querySelectorAll(".form"));
formList.forEach((form) => {
  const formValidator = new FormValidator(validationConfig, form);
  formValidator.enableValidation();
});

