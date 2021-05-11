export const validationConfig = {
  button: '.popup__save',
  inputSelector: ".form__input"    
};

export default class FormValidator {
        constructor(validationConfig, form) {
            this._validationConfig = validationConfig;
            this._form = form;
            this._button = this._form.querySelector(validationConfig.button);
            this._inputSelector = this._form.querySelector(validationConfig.inputSelector);
    }

    _setEventListeners = () => {
        this._form.addEventListener("submit", this._handleSubmitForm);
        this._form.addEventListener("input", this._eventHandler);
    }

    _eventHandler = (event) => {
        const input = event.target;
        this._setCustomError(input);
        this._setFieldError(input);
        this._setSubmitButtonState(input.closest('.form'));
    }


    _setSubmitButtonState = () => {
      const isValid = this._form.checkValidity();
      if (isValid) {
        this._button.removeAttribute("disabled");
      } else {
        this._button.setAttribute("disabled", true);
      }
  }

    _handleSubmitForm = (event) => {
        event.preventDefault();
        const isValid = this._form.checkValidity();
    }

    _setCustomError = (input) => {
        const validity = input.validity;
        input.setCustomValidity("");
        if (validity.valueMissing) {
          input.setCustomValidity("Вы пропустили это поле.");
          input.classList.add("form__input_type_error");
        }
        else if (validity.tooShort || validity.tooLong) {
          const current = input.value.length;
          const min = input.getAttribute("minlength");
          const max = input.getAttribute("maxlength");
          input.setCustomValidity(
            `Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}`
          );
          input.classList.add("form__input_type_error");
        }
        else if (validity.typeMismatch && input.type === "url") {
          input.setCustomValidity("Здесь должна быть ссылка");
          input.classList.add("form__input_type_error");
        } else {
          input.classList.remove("form__input_type_error");
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

}
