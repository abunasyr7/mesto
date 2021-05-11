import FormValidator from "./FormValidator";




// function setEventListeners(form) {
//   //Добавляем слушателя на форму form.
//   //Слушатель сабмита формы.
//   form.addEventListener("submit", handleSubmitForm);
//   form.addEventListener("input", eventHandler);
// }


// function eventHandler(event) {
//   // Устанавливаем кастомные тексты ошибок.
//   const input = event.target;
//   setCustomError(input);
//   // Записываем текст ошибок в специальные контейнеры под каждым полем.
//   setFieldError(input);
//   // Включаем или выключаем кнопку отправки формы.
//   setSubmitButtonState(input.closest(validationConfig.form));
// }

// //Функция-коллбэк, которая обрабатывает событие отправки формы.
// function handleSubmitForm(event) {
//   event.preventDefault();
//   // Форма - элемент, на котором было *установлено* событие, поэтому используем `event.currentTarget`.
//   const form = event.currentTarget;
//   // Если форма валидна, то сбросим её.
//   const isValid = form.checkValidity();
// }
// /* Функция для копирования текста ошибки из свойства поля ввода в span под ним. */
// function setFieldError(field) {
//   // span, куда будем класть ошибку, у нас всегда находится сразу после поля ввода.
//   // Поэтому простейшим способом его найти в документе будет взять следующий элемент после инпута.
//   const span = field.nextElementSibling;
//   // Возьмём `validationMessage` из инпута и переложим его в span.
//   span.textContent = field.validationMessage;
// }

// /*Функция для изменения состояния кнопки отправки формы */
// function setSubmitButtonState(form) {
//   const input = form.querySelectorAll(validationConfig.inputSelector);
//   const button = form.querySelector(validationConfig.button);
//   const isValid = form.checkValidity();
//   if (isValid) {
//     button.removeAttribute("disabled");
//   } else {
//     button.setAttribute("disabled", true);
//   }
// }
// /* Функция для установки кастомных текстов ошибок при одной из стандартных ошибок валидации формы. */
// function setCustomError(input) {
//   const validity = input.validity;
//   // Устанавливаем validity.customError в false
//   input.setCustomValidity("");
//   if (validity.valueMissing) {
//     input.setCustomValidity("Вы пропустили это поле.");
//     input.classList.add("form__input_type_error");
//   }
//   // Если сработало ограничение на `minlength` или `maxlength`, установим свой текст ошибки.
//   else if (validity.tooShort || validity.tooLong) {
//     const current = input.value.length;
//     const min = input.getAttribute("minlength");
//     const max = input.getAttribute("maxlength");
//     input.setCustomValidity(
//       `Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}`
//     );
//     input.classList.add("form__input_type_error");
//   }
//   // Если сработало ограничение по установленному типу элемента, и тип - ссылка, то выведем соответствующую ошибку.
//   else if (validity.typeMismatch && input.type === "url") {
//     input.setCustomValidity("Здесь должна быть ссылка");
//     input.classList.add("form__input_type_error");
//   } else {
//     input.classList.remove("form__input_type_error");
//   }
// }



// function enableValidation(validationConfig) {
//   const formList = Array.from(document.querySelectorAll(validationConfig.form));
//   formList.forEach((form) => {
//     form.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });

//     setEventListeners(form);
//   });
// }

// enableValidation(validationConfig);

const formList = Array.from(document.querySelectorAll(validationConfig.form));
formList.forEach((form) => {
  const formValidator = new FormValidator(validationConfig, form);
  formValidator.enableValidation();
});
