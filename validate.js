//Находим обе формы в DOM.
const formUser = document.querySelector('.form[name="user"]');
const formPlace = document.querySelector('.form[name="place"]');

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
function setSubmitButtonState(form) {
  const button = formPlace.querySelector('.popup__save');
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
  }

  // Если сработало ограничение по установленному типу элемента, и тип - ссылка, то выведем соответствующую ошибку.
  else if (validity.typeMismatch && input.type === 'url') {
    input.setCustomValidity('Введите адрес сайта.');
  }
}

