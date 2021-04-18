const validationConfig = {
  inputSelector: '.popup__input',
  button: '.popup__save',
  formUser: '.form[name="user"]',
  formPlace: '.form[name="place"]',
  formInput: '.form__input'
};

const formInput = document.querySelector(validationConfig.formInput);

const formUser = document.querySelector(validationConfig.formUser);
formUser.addEventListener('submit', handleFormSubmit);
formUser.addEventListener('input', function (event) {
  const input = event.target;
  setDefaultError(input);
  setFieldError(input);
  setSubmitButtonStateProfile(formUser);
});


const formPlace = document.querySelector(validationConfig.formPlace);
//Добавляем слушателя на форму formPlace.
//Слушатель сабмита формы.
formPlace.addEventListener('submit', handleFormSubmit);
// Слушатель ввода на полях формы.
// Используя механизм делегирования событий, слушаем сразу все поля ввода на форме.
formPlace.addEventListener('input', function (event) {
  // Поле ввода, на котором произошло изменение.
  const input = event.target;
  // Устанавливаем кастомные тексты ошибок.
  setCustomError(input);
  // Записываем текст ошибок в специальные контейнеры под каждым полем.
  setFieldError(input);
  // Включаем или выключаем кнопку отправки формы.
  setSubmitButtonState(formPlace);
});

//Функция-коллбэк, которая обрабатывает событие отправки формы.
function handleFormSubmit(event) {
  event.preventDefault();
  // Форма - элемент, на котором было *установлено* событие, поэтому используем `event.currentTarget`.
  const form = event.currentTarget;
  // Если форма валидна, то сбросим её.
  const isValid = form.checkValidity();
}

/* Функция для копирования текста ошибки из свойства поля ввода в span под ним. */
function setFieldError(field) {
  // span, куда будем класть ошибку, у нас всегда находится сразу после поля ввода.
  // Поэтому простейшим способом его найти в документе будет взять следующий элемент после инпута.
  const span = field.nextElementSibling;
  // Возьмём `validationMessage` из инпута и переложим его в span.
  span.textContent = field.validationMessage;
}

/*Функция для изменения состояния кнопки отправки формы */
function setSubmitButtonState() {
  const button = formPlace.querySelector(validationConfig.button);
  const isValid = formPlace.checkValidity();
  if (isValid) {
    button.removeAttribute('disabled');
    popupPlaceForm.addEventListener("submit", submitCardForm);
  } else {
    button.setAttribute('disabled', true);
  }
}

/* Функция для установки кастомных текстов ошибок при одной из стандартных ошибок валидации формы. */
function setCustomError(input) {
  const validity = input.validity;

  // Устанавливаем validity.customError в false
  input.setCustomValidity('');

  // Если сработало ограничение на `minlength` или `maxlength`, установим свой текст ошибки.
  if (validity.tooShort || validity.tooLong || validity.valueMissing) {
    input.setCustomValidity("Вы пропустили это поле.");
    input.classList.add('form__input_type_error');
  }

  // Если сработало ограничение по установленному типу элемента, и тип - ссылка, то выведем соответствующую ошибку.
  else if (validity.typeMismatch && input.type === 'url') {
    input.setCustomValidity('Введите адрес сайта.');
    input.classList.add('form__input_type_error');
  } else {
    input.classList.remove('form__input_type_error');
  }
}

function setDefaultError(input) {
  const validity = input.validity;
  input.setCustomValidity('');
  if (validity.tooShort || validity.tooLong || validity.valueMissing) {
    const current = input.value.length;
    const min = input.getAttribute('minlength');
    const max = input.getAttribute('maxlength');
    input.classList.add('form__input_type_error');
    input.setCustomValidity(`Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}`);
  } else {
    input.classList.remove('form__input_type_error');
  }
}

function setSubmitButtonStateProfile(form) {
  const button = formUser.querySelector(validationConfig.formUser);
  const isValid = formUser.checkValidity();
  if (isValid) {
    button.removeAttribute('disabled');
    popupForm.addEventListener("submit", submitProfileForm);
  } else {
    button.setAttribute('disabled', true);
  }
}