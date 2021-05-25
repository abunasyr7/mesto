import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./utils/initialCards.js";
import {
  cardSelector,
  popupForm,
  profileInfoName,
  profileInfoText,
  validationConfig,
  profileEditButton,
  elementAddButton,
  popupName,
  popupJob
} from "./utils/constants.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";

const validatorAddCard = new FormValidator(
  validationConfig,
  document.querySelector(".popup-place__form")
);
const validatorEditProfile = new FormValidator(validationConfig, popupForm);

validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();

const image = new PopupWithImage(".popup-image");

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = addCard(data);
      cardList.addItem(card, "append");
    },
  },
  ".elements"
);

cardList.createItems();

const profileTitle = profileInfoName,
  profileText = profileInfoText,
  info = new UserInfo(profileTitle, profileText);

function openProfilePopup() {
  const profileData = info.getUserInfo();
  popupName .value = profileData.name;
  popupJob.value = profileData.job;
  validatorEditProfile.removeInputErrorProfile();
  popupProfile.open();
}

const popupProfile = new PopupWithForm('.popup_profile', {
  handleSubmit: (options) => {
      info.setUserInfo(options);
      popupProfile.close();
  }
});

const popupAddCard = new PopupWithForm('.popup-place', {
  handleSubmit: (data) => {
      const element = addCard({
          name: data.place,
          link: data.image
      })
    cardList.addItem(element, 'prepend');
    popupAddCard.close();
  }
});

// function openModal(modal) {
//   modal.classList.add("popup_open");
//   modal.addEventListener("click", closePopupByOverlay);
//   document.addEventListener("keydown", keyHandlers);
// }

// function closePopupByOverlay(e) {
//   if (!e.target.closest(".popup__content")) {
//     closeModal(e.target.closest(".popup"));
//   }
// }

// function keyHandlers(event) {
//   if (event.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_open");
//     closeModal(openedPopup);
//   }
// }

// function closeModal(modal) {
//   modal.classList.remove("popup_open");
//   modal.removeEventListener("click", closePopupByOverlay);
//   document.removeEventListener("keydown", keyHandlers);
// }

// function openProfileModal() {
//   openModal(popup);
//   popupName.value = profileInfoName.textContent;
//   popupJob.value = profileInfoText.textContent;
//   validatorEditProfile.removeInputErrorProfile();
//   addButtonActive();
// }

// function submitProfileForm(e) {
//   e.preventDefault();
//   profileInfoName.textContent = popupName.value;
//   profileInfoText.textContent = popupJob.value;
//   closeModal(popup);
// }

// function openAddCardPopup(element) {
//   popupPlaceForm.reset();
//   openModal(popupPlace);
//   validatorAddCard.removeInputError();
// }

// function submitCardForm(e) {
//   e.preventDefault();
//   const name = popupInputTypePlace.value;
//   const link = popupInputTypeImage.value;
//   addCard({ name, link });

//   closeModal(popupPlace);
//   popupPlaceForm.reset();
// }

function addCard(data) {
  const newCard = new Card(
    data,
    {
      handleCardClick: (name, link) => {
        image.open({ name, link });
      },
    },
    cardSelector
  );
  const cardElement = newCard.generateCard();
  return cardElement;
}

profileEditButton.addEventListener("click", openProfilePopup);
elementAddButton.addEventListener("click", () => {
  validatorAddCard.removeInputError();
  popupAddCard.open()
});
image.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();



// export function showImage(name, link) {
//   picture.src = link;
//   picture.alt = name;
//   caption.textContent = name;
//   openModal(popupImage);
// }

// const formList = Array.from(document.querySelectorAll(".form"));
// formList.forEach((form) => {
//   const formValidator = new FormValidator(validationConfig, form);
//   formValidator.enableValidation();
// });
