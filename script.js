let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let profileInfoName = document.querySelector('.profile__info-name');
let profileInfoText = document.querySelector('.profile__info-text');
let popupName = document.querySelector('.popup__input_type_name');
let popupJob = document.querySelector('.popup__input_type_job');
let popupSave = document.querySelector('.popup__save');

function openPopup(e) {
    popup.classList.add('popup_open');
    popupName.value = profileInfoName.textContent;
    popupJob.value = profileInfoText.textContent;
}

function closePopup(e) {
    popup.classList.remove('popup_open');
}

function saveClosePopup (e) {
    e.preventDefault();
    profileInfoName.textContent = popupName.value;
    profileInfoText.textContent = popupJob.value;
    closePopup(e);
}

popupSave.addEventListener('click', saveClosePopup);
profileEditButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);