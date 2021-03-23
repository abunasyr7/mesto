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
    popup.classList.add('popup_open');
    popupName.value = profileInfoName.textContent;
    popupDescription.value = profileInfoText.textContent;
}

function closePopup(e) {
    popup.classList.remove('popup_open');
}

function saveClosePopup (e) {
    profileInfoName.textContent = popupName.value;
    profileInfoText.textContent = popupDescription.value;
    closePopup(e);
}

popupSave.addEventListener('click', saveClosePopup);