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
    validationIndex, avatar, popupDelete, avatarUploadContainer, popAvatar
} from "../src/utils/constants.js";
import Section from "../src/components/Section.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import UserInfo from "../src/components/UserInfo.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import PopupDelete from "../src/components/PopupDelete";
import Api from "../src/components/Api";

const validatorAddCard = new FormValidator(
    validationConfig,
    document.querySelector(validationIndex.formAddCard)
);
const validatorEditProfile = new FormValidator(validationConfig, popupForm);
const validatorAvatarUpload = new FormValidator(validationConfig, avatarUploadContainer);

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-25',
    headers: {
        authorization: '1174dadd-027e-4ffe-b733-ac48b2285022',
        'Content-Type': 'application/json',
    }
});



validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();
validatorAvatarUpload.enableValidation();

const image = new PopupWithImage(validationIndex.popupWithImage);

// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const cardList = new Section(
  {
    renderer: (data) => {
      const card = addCard(data);
      cardList.addItem(card, "append");
    },
  },
  validationIndex.elements
);

cardList.createItems();

/* Переменая для текста работы куда будет добавляться новый текст */
const profileTitle = profileInfoName,
  profileText = profileInfoText,
  info = new UserInfo(profileTitle, profileText);

//Функция открытия попапа редактирования
function openProfilePopup() {
  const profileData = info.getUserInfo();
  popupName .value = profileData.name;
  popupJob.value = profileData.job;
  validatorEditProfile.removeInputErrorProfile();
  popupProfile.open();
}

//Попап профиля рекадирования
const popupProfile = new PopupWithForm(validationIndex.popupWithProfile, {
  handleSubmit: (data) => {
      api.editUserData(data.name, data.job)
          .then(res => {
              info.setUserInfo(res.name, res.about);
              popupProfile.close();
          })
          .catch(err => {
              console.log(err);
          });
  }
});

//Попап добавления карточки
const popupAddCard = new PopupWithForm(validationIndex.popupWithNewCard, {
  handleSubmit: (data) => {
    api.addCard(data.title, data.link)
        .then(res => {
            const element = addCard(res);
            cardList.addItem(element, 'prepend');
        })
        .catch(err => {
            console.log(err);
        });
      popupAddCard.close();
  }
});

//Попап удаления карточки
const popupDel = new PopupDelete(popupDelete, {
   handleSubmit: (cardId) => {
        api.cardDelete(cardId)
            .then(data => {
                popupDel.cardElement.remove();
                popupDel.close();
            })
            .catch(err => {
                console.log(err);
            });
   }
});

const popupAvatar = new PopupWithForm(popAvatar, {
   handleSubmit: ({link}) => {
       api.updateAvatar(link)
           .then(({avatar}) => {
               info.setAvatar(link);
               popAvatar.close();
           })
           .catch(err => {
               console.log(err);
           });
   }
});

function addCard(data) {
    const userId = info.getId();
    const newCard = new Card(
    data,
    {
      handleCardClick: (name, link) => {
        image.open({ name, link });
      },
      handleCardDelete: (cardId, elem) => {
          popupDel.open(cardId, elem);
      },
      handleCardLike: (cardId) => {
          api.setLike(cardId)
              .then(({likes}) => {
                  card._likes = likes;
                  card.updateLikeCount();
              })
              .catch(err => {
                  console.log(err);
              });
      },
      handleCardDislike: (cardId) => {
          api.removeLike(cardId)
              .then(({likes}) => {
                  card._likes = likes;
                  card.updateLikeCount();
              })
              .catch(err => {
                  console.log(err);
              });
      }
    },
    cardSelector, userId
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
