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

const popupPlaceForm = document.querySelector(".popup-place__form");
const popupInputTypePlace = popupPlaceForm.querySelector(
  ".popup__input_type_place"
);
const popupInputTypeImage = popupPlaceForm.querySelector(
  ".popup__input_type_image"
);
const elementsTemplate = document.querySelector(".elements-container").content;

function openModal(modal) {
  modal.classList.add("popup_open");
}

function closeModal(modal) {
  modal.classList.remove("popup_open");
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
}

profileEditButton.addEventListener("click", openProfileModal);
elementAddButton.addEventListener("click", () => openModal(popupPlace));
popupPlaceClose.addEventListener("click", () => closeModal(popupPlace));
popupImageClose.addEventListener("click", () => closeModal(popupImage));
popupClose.addEventListener("click", () => closeModal(popup));
popupForm.addEventListener("submit", submitProfileForm);
// popupPlaceForm.addEventListener("submit", submitCardForm);

function createCard(link, name) {
  const elementTemplate = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);
  elementTemplate.querySelector(".element__image").src = link;
  elementTemplate.querySelector(".element__text").textContent = name;
  elementTemplate
    .querySelector(".element__delete")
    .addEventListener("click", function (e) {
      e.target.closest(".element").remove();
    });
  elementTemplate
    .querySelector(".element__like")
    .addEventListener("click", (e) => {
      e.target.classList.toggle("element__like_type_active");
    });
  elementTemplate
    .querySelector(".element__image")
    .addEventListener("click", (e) => {
      popupImage.classList.add("popup_open");
      picture = document.querySelector(".popup-image__picture");
      picture.src = link;
      const caption = document.querySelector(".popup-image__caption");
      caption.textContent = name;
    });
  return elementTemplate;
}

function addCard(element) {
  const createdCard = createCard(element.link, element.name);
  elements.append(createdCard);
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


