let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let profileInfoName = document.querySelector('.profile__info-name');
let profileInfoText = document.querySelector('.profile__info-text');
let popupName = document.querySelector('.popup__name');
let popupDescription = document.querySelector('.popup__description');
let popupSave = document.querySelector('.popup__save');

profileEditButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function openPopup(e) {
    popup.classList.add('popup_opened');
}

function closePopup(e) {
    popup.classList.remove('popup_opened');
}

function saveClosePopup (e) {
    function savePopup (e) {
        profileInfoName.textContent = popupName.value;
        profileInfoText.textContent = popupDescription.value;
    }

    function closePopup(e) {
        popup.classList.remove('popup_opened');
    }
    
    savePopup(e);
    closePopup(e);
}

popupName.value = profileInfoName.textContent;
popupDescription.value = profileInfoText.textContent;


popupSave.addEventListener('click', saveClosePopup);