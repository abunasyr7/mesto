const popup = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupClose = document.querySelector(".popup__close");
const profileInfoName = document.querySelector(".profile__info-name");
const popupForm = document.querySelector('.popup__form');
const profileInfoText = document.querySelector(".profile__info-text");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");
const popupSave = document.querySelector(".popup__save");
const elements = document.querySelector(".elements");
const elementAddButton = document.querySelector(".profile__add-button");
const popupPlace = document.querySelector(".popup_place");
const popupPlaceClose = popupPlace.querySelector(".popup__close");
const profileAddButton = document.querySelector(".profile__add-button");
const popupInsert = document.querySelector(".popup__insert");
const popupImage = document.querySelector(".popup-image");
const popupImageClose = popupImage.querySelector(".popup__close");

const popupFormTypePlace = document.querySelector(".popup__place");
const popupInputTypePlace = popupFormTypePlace.querySelector(
  ".popup__input_type_place"
);
const popupInputTypeImage = popupFormTypePlace.querySelector(
  ".popup__input_type_image"
);
const elementsTemplate = document.querySelector(".elements-container").content;

function openPopup(e) {
  popup.classList.add("popup_open");

}


function openModal(modal) {
  modal.classList.add('popup_open')
}

function closeModal(modal) {
  modal.classList.remove('popup_open')
}

function openProfileModal() {
  openModal(popup)
  popupName.value = profileInfoName.textContent;
  popupJob.value = profileInfoText.textContent;
}

function submitProfileForm(e) {
  e.preventDefault();
  profileInfoName.textContent = popupName.value;
  profileInfoText.textContent = popupJob.value;
  closePopup(e);
}


function closePopupImage(e) {
  popupImage.classList.remove("popup_open");
}


profileEditButton.addEventListener("click", openProfileModal);
elementAddButton.addEventListener("click", () => openModal(popupPlace));
popupPlaceClose.addEventListener("click", () => closeModal(popupPlace));
popupImageClose.addEventListener("click", () => closeModal(popupImage));
popupClose.addEventListener("click", () => closeModal(popup));
popupForm.addEventListener('submit', submitProfileForm);

function createCard(link, name) {
  const elementTemplate = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);
  elementTemplate.querySelector(".element__image").src = link;
  elementTemplate.querySelector(".element__text").textContent = name;

  return elementTemplate;
}

function addCard(element) {
  const createdCard = createCard(element.link, element.name);
  elements.append(createdCard);
  createdCard
    .querySelector(".element__delete")
    .addEventListener("click", function (e) {
      e.target.closest(".element").remove();
    });
  createdCard.querySelector(".element__like").addEventListener("click", (e) => {
    e.target.classList.toggle("element__like_type_active");
  });

  createdCard
    .querySelector(".element__image")
    .addEventListener("click", (e) => {
      popupImage.classList.add("popup_open");
      picture = document.querySelector(".popup-image__picture");
      picture.src = element.link;
      const caption = document.querySelector(".popup-image__caption");
      caption.textContent = element.name;
    });
}

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach(addCard);

function submitCardForm(e) {
  e.preventDefault();
  inputValue = popupInputTypePlace.value;
  inputImage = popupInputTypeImage.value;
  const createdCard = createCard(inputImage, inputValue);
  elements.prepend(createdCard);
}

popupInsert.addEventListener("submit", submitCardForm);