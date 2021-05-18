export const validationConfig = {
  formSelector: '.form',
  inputSelector: ".form__input",
  submitButtonSelector: '.popup__save',
  inputErrorClass: ".form__input_type_error",
  inputErrorMessage: ".form__input-error",
};


export default class FormValidator {
        constructor(validationConfig, form) {
            this._validationConfig = validationConfig;
            this._form = form;
            this._button = this._form.querySelector(validationConfig.submitButtonSelector);
            this._inputSelector = this._form.querySelector(validationConfig.inputSelector);
            this._inputList = Array.from(this._form.querySelectorAll(validationConfig.inputSelector));
            this._errorList = Array.from(this._form.querySelectorAll(validationConfig.inputErrorMessage));
    }

    _setEventListeners = () => {
        this._form.addEventListener("submit", this._handleSubmitForm);
        this._form.addEventListener("input", this._eventHandler);
    }

    _eventHandler = (event) => {
        const input = event.target;
        this._setCustomError(input);
        this._setFieldError(input);
        this._setSubmitButtonState(input.closest(validationConfig.formSelector));
    }


    _setSubmitButtonState = () => {
      const isValid = this._form.checkValidity();
      if (isValid) {
        this._button.removeAttribute("disabled", false);
      } else {
        this._button.setAttribute("disabled", true);
      }
  }

    _handleSubmitForm = (event) => {
        event.preventDefault();
        const isValid = this._form.checkValidity();
    }

    _showError(input) {
      this._errorList.forEach((element) => {
        element.classList.add('form__input_type_error');
      })
    }

    _hideError(input) {
      this._errorList.forEach((element) => {
        element.classList.remove('form__input_type_error');
      })
  }

    _setCustomError = (input) => {
        const validity = input.validity;
        input.setCustomValidity("");
        // this._hideError(input, this._validationConfig);
        if (validity.valueMissing) {
          input.setCustomValidity("Вы пропустили это поле.");
          // this._showError(input)
        }
        else if (validity.tooShort || validity.tooLong) {
          const current = input.value.length;
          const min = input.getAttribute("minlength");
          const max = input.getAttribute("maxlength");
          input.setCustomValidity(
            `Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}`
          );
          // this._showError(input, this._validationConfig)
        }
        else if (validity.typeMismatch && input.type === "url") {
          input.setCustomValidity("Здесь должна быть ссылка");
          
        } else {
          // this._hideError(input, this._validationConfig);
        }
    }

     _setFieldError =(field) => {
        const span = field.nextElementSibling;
        span.textContent = field.validationMessage;
      }

    enableValidation = () => {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }

    removeInputError() {
      this._inputList.forEach((input) => {
        // this._hideError()
        input.nextElementSibling.textContent = ''
      });
      this._button.setAttribute("disabled", true);
    }

    removeInputErrorProfile() {
      this._inputList.forEach((input) => {
        // this._hideError()
        input.nextElementSibling.textContent = ''
      });
      this._button.removeAttribute("disabled", true);
    }

}
