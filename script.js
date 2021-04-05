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
let profileAddButton = document.querySelector('.profile__add-button');
let popupInsert = document.querySelector('.popup__insert');
let popupImage = document.querySelector('.popup-image');
let popupImageClose = popupImage.querySelector('.popup__close');

const popupFormTypePlace = document.querySelector('.popup__place');
const popupInputTypePlace = popupFormTypePlace.querySelector('.popup__input_type_place');
const popupInputTypeImage = popupFormTypePlace.querySelector('.popup__input_type_image');
const elementsTemplate = document.querySelector('.elements-container').content;

function openPopup(e) {
    popup.classList.add('popup_open');
    popupName.value = profileInfoName.textContent;
    popupJob.value = profileInfoText.textContent;
}

// function deleteElement() {
//   const delteButton = elementsTemplate.querySelector('.element__delete');
//   deleteButton.addEventListener('cick', () =>{ 
//     elementsTemplate.remove();
//   })
// }

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

function closePopupImage (e) {
  popupImage.classList.remove('popup_open')
}


popupSave.addEventListener('click', saveClosePopup);
profileEditButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
elementAddButton.addEventListener('click',openPopupAdd);
popupPlaceClose.addEventListener('click',closePopupPlace);
popupImageClose.addEventListener('click', closePopupImage);

function createCard(link, name) {
  const elementTemplate = elementsTemplate.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__image').src = link;
  elementTemplate.querySelector('.element__text').textContent = name;
  // elementTemplate.querySelector('.element__delete').addEventListener('click', function(e) { 
  //   e.target.closest('.element').remove();  
  // })

  return elementTemplate;
}

function addElement(element) {
  const createdCard = createCard(element.link, element.name);
  elements.append(createdCard);
  createdCard.querySelector('.element__delete').addEventListener('click', function(e) { 
    e.target.closest('.element').remove();  
  })
  createdCard.querySelector('.element__like').addEventListener('click', (e) => {
    e.target.classList.toggle('element__like_type_active')
  })

  createdCard.querySelector('.element__image').addEventListener('click', (e) => {
    popupImage.classList.add('popup_open');
    picture = document.querySelector('.popup-image__picture');
    picture.src = element.link;
    const caption = document.querySelector('.popup-image__caption');
    caption.textContent = element.name  
  })
  
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

initialCards.forEach(addElement);

function formSubmitHandler(e) {
  e.preventDefault();
  inputValue = popupInputTypePlace.value;
  inputImage = popupInputTypeImage.value;
  createdCard = createCard(inputImage, inputValue)
  elements.prepend(createdCard);
};

popupInsert.addEventListener('click', formSubmitHandler);


// document.querySelector('.element__image').addEventListener('click', function(e) {
//   console.log('Hello, World')
// })