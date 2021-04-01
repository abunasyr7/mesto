let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let profileInfoName = document.querySelector('.profile__info-name');
let profileInfoText = document.querySelector('.profile__info-text');
let popupName = document.querySelector('.popup__input_type_name');
let popupJob = document.querySelector('.popup__input_type_job');
let popupSave = document.querySelector('.popup__save');
let elements = document.querySelector('.elements');
let elementAddButton = document.querySelector('.profile__add-button');
let popupPlace = document.querySelector('.popup_place');
let popupPlaceClose = popupPlace.querySelector('.popup__close');

function openPopup(e) {
    popup.classList.add('popup_open');
    popupName.value = profileInfoName.textContent;
    popupJob.value = profileInfoText.textContent;
}



function closePopup(e) {
    popup.classList.remove('popup_open');
}

function closePopupPlace(e) {
  popupPlace.classList.remove('popup_open');
}

function saveClosePopup (e) {
    e.preventDefault();
    profileInfoName.textContent = popupName.value;
    profileInfoText.textContent = popupJob.value;
    closePopup(e);
}

function openPopupAdd(e) {
  popupPlace.classList.add('popup_open')
}


popupSave.addEventListener('click', saveClosePopup);
profileEditButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
elementAddButton.addEventListener('click',openPopupAdd);
popupPlaceClose.addEventListener('click',closePopupPlace);

function addElement(element) {
  const elementsTemplate = document.querySelector('.elements-container').content;
  const elementTemplate = elementsTemplate.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__image').src = element.link;
  elementTemplate.querySelector('.element__text').textContent = element.name;
  elements.append(elementTemplate);
} 




const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  initialCards.forEach(addElement)


