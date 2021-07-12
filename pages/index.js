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
    validationIndex, avatar, popupDelete, avatarUploadContainer, popAvatar, popupAvatarEditButton
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
const validatorAvatarUpload = new FormValidator(
    validationConfig,
    document.querySelector(validationIndex.formAvatarCard));

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


/* Переменая для текста работы куда будет добавляться новый текст */
const profileTitle = profileInfoName,
  profileText = profileInfoText,
    profileAva = avatar,
  info = new UserInfo(profileTitle, profileText, profileAva);

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
    api.addCard(data.place, data.image)
        .then(res => {
            const element = addCard(res);
            cardList.addItem(element, 'prepend');
            popupAddCard.close();
        })
        .catch(err => {
            console.log(err);
        });
  }
});

//Попап удаления карточки
const popupDel = new PopupDelete(validationIndex.popupDelete, {
   handleSubmit: (cardId) => {
       console.log("----------");
        api.cardDelete(cardId)
            .then((data) => {
                popupDel.cardElement.remove();
                popupDel.close();
            })
            .catch(err => {
                console.log(err);
            });
   }
});

const popupAvatar = new PopupWithForm(validationIndex.popupAva, {
   handleSubmit: ({avatar}) => {
       api.updateAvatar(avatar)
           .then(({avatar}) => {
               info.setAvatar(avatar);
               popupAvatar.close();
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
          return api.setLike(cardId)
              .then(({likes}) => {
                  newCard._likes = likes;
                  newCard.updateLikeCount();
              })
              .catch(err => {
                  console.log(err);
              });
      },
      handleCardDislike: (cardId) => {
          return api.removeLike(cardId)
              .then(({likes}) => {
                  newCard._likes = likes;
                  newCard.updateLikeCount();
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

Promise.all([
    api.getUserInfo(),
    api.getInitialCards(),
])
        .then(([userData,initialCards]) => {
            info.setUserInfo(userData.name, userData.about, userData._id);
            info.setAvatar(userData.avatar);
            cardList.renderer(initialCards);
        })
    .catch((err) => {
        console.log(err);
    });

profileEditButton.addEventListener("click", openProfilePopup);
elementAddButton.addEventListener("click", () => {
  validatorAddCard.removeInputError();
  popupAddCard.open();
});
image.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();
popupAvatarEditButton.addEventListener('click', () => {
    validatorAvatarUpload.removeInputError();
    popupAvatar.open();
});

popupDel.setEventListeners();
popupAvatar.setEventListeners();

