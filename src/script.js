import Card from './Card.js';

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
const profileAddButton = document.querySelector(".profile__add-button");
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
const elementsTemplate = document.querySelector(".elements-container").content;
const elementTemplate = elementsTemplate.querySelector(".element");
const elementImage =   elementTemplate.querySelector(".element__image");
const formPlace = document.querySelector('form[name="place"]');

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
}

function submitProfileForm(e) {
  e.preventDefault();
  profileInfoName.textContent = popupName.value;
  profileInfoText.textContent = popupJob.value;
  closeModal(popup);
}

function submitCardForm(e) {
  e.preventDefault();
  inputValue = popupInputTypePlace.value;
  inputImage = popupInputTypeImage.value;
  const createdCard = createCard(inputImage, inputValue);
  elements.prepend(createdCard);
  closeModal(popupPlace);
  formPlace.reset();
  setSubmitButtonState(formPlace);
}

profileEditButton.addEventListener("click", openProfileModal);
elementAddButton.addEventListener("click", () => openModal(popupPlace));
popupPlaceClose.addEventListener("click", () => {
  closeModal(popupPlace);
  formPlace.reset();
});
popupImageClose.addEventListener("click", () => closeModal(popupImage));
popupClose.addEventListener("click", () => closeModal(popup));
popupForm.addEventListener("submit", submitProfileForm);
popupPlaceForm.addEventListener("submit", submitCardForm);

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
  const newCard = new Card(element, openModal);
  elements.append(newCard.generateCard());
}

initialCards.forEach(addCard);


