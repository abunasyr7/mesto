const showInputError = (inputElement, errorMessage) => {
  const formSection = inputElement.closest(".form__section");
  const errorElement = formSection.querySelector(".form__input-error");

  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (inputElement) => {
  const formSection = inputElement.closest(".form__section");
  const errorElement = formSection.querySelector(".form__input-error");
  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
};

const setEventListeners = (formElement) => {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__submit");

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (event) => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });

  const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(
      (inputElement) => !inputElement.validity.valid
    );

    if (hasNotValidInput) {
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.removeAttribute("disabled");
    }
  };

  const getErrorMessage = (inputElement) => {
    const defaultErrorHandler = (inputElement) => {
        if (inputElement.validity.valueMissing){
            return 'Вы пропустили это поле.'
        }
    };
    const urlErrorHandler = (inputElement) => {
        if (inputElement.validity.typeMismatch) {
            return "Введите адрес сайта.";
        }
    };
    const errorHandlers = {
        url: urlErrorHandler,
        DEFAULT: defaultErrorHandler,
    }

    const inputName = inputElement.name;
    const errorHandler = errorHandlers[inputName] || errorHandlers.DEFAULT;

    return errorHandler(inputElement);
  };

  const checkInputValidity = (formElement, inputElement) => {
    const isValid = inputElement.validity.valid;

    if (!isValid) {
      const errorMessage = getErrorMessage(inputElement);
      showInputError(inputElement, errorMessage);
    } else {
      hideInputError(inputElement);
      popupPlaceForm.addEventListener("submit", submitCardForm);
    }
  };
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach(setEventListeners);
};

enableValidation();
