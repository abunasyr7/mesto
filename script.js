const popupLink = document.querySelectorAll('.popup-link');


let unlock = true;

popupLink.addEventListener('click', function(e) {
    const currentPopup = document.querySelector('.popup');
    popupOpen(currentPopup);
    e.preventDefault();
});

const popupCloseIcon = document.querySelector('.close-popup');
const el = popupCloseIcon; 
el.addEventListener('click', function(e) {
    popupClose(el.closest('.popup'));
    e.preventDefault();
});


function popupOpen(currentPopup) {
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function(e) {
        if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        }
    });
}


function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
    }
}