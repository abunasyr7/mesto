import './index.css'; // добавьте импорт главного файла стилей
import Card from "../src/components/Card.js";
import FormValidator from "../src/components/FormValidator.js";
import { initialCards } from "../src/utils/initialCards.js";
import {
    cardSelector,
    popupForm,
    profileInfoName,
    profileInfoText,
    validationConfig,
    profileEditButton,
    elementAddButton,
    popupName,
    popupJob,
    validationIndex, avatar
} from "../src/utils/constants.js";
import Section from "../src/components/Section.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import UserInfo from "../src/components/UserInfo.js";
import PopupWithForm from "../src/components/PopupWithForm.js";


const validatorAddCard = new FormValidator(
  validationConfig,
  document.querySelector(validationIndex.formAddCard)
);
const validatorEditProfile = new FormValidator(validationConfig, popupForm);

validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();

const image = new PopupWithImage(validationIndex.popupWithImage);

 const newCards = fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards',{
     headers: {
         authorization: '1174dadd-027e-4ffe-b733-ac48b2285022'
     }
 })
    .then(res => res.json())
     .then ((data) => {
         console.log(data);
     });

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = addCard(data);
      cardList.addItem(card, "append");
    },
  },
  validationIndex.elements
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

const popupProfile = new PopupWithForm(validationIndex.popupWithProfile, {
  handleSubmit: (options) => {
      info.setUserInfo(options);
      popupProfile.close();
  }
});

const popupAddCard = new PopupWithForm(validationIndex.popupWithNewCard, {
  handleSubmit: (data) => {
      const element = addCard({
          name: data.place,
          link: data.image
      });
    cardList.addItem(element, 'prepend');
    popupAddCard.close();
  }
});

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
  popupAddCard.open();
});
image.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();

    fetch('https://nomoreparties.co/v1/cohort-25/users/me', {
        headers: {
            authorization: '1174dadd-027e-4ffe-b733-ac48b2285022'
        }
    })
        .then((res) => res.json())
        .then((res) => {
            avatar.src = res.avatar;
            profileInfoName.textContent = res.name;
            profileInfoText.textContent = res.about;
        });
