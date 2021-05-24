import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {validationConfig} from './FormValidator.js';
import {cardSelector, elements, initialCards, popupPlaceForm, popupForm, popupImage} from './utils/constants.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';


const cardList = new Section({
  data: initialCards, 
  renderer: (data) => {
    const newCard = new Card(data, cardSelector);
    const cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  },
}, 
cardSelector
);


const validatorAddCard = new FormValidator(validationConfig, popupPlaceForm);
const validatorEditProfile = new FormValidator(validationConfig, popupForm);

validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();

const popupImage = new PopupWithImage(popupImage);

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






const formList = Array.from(document.querySelectorAll(".form"));
formList.forEach((form) => {
  const formValidator = new FormValidator(validationConfig, form);
  formValidator.enableValidation();
});

