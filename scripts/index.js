const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit');
const closePopup = popup.querySelector('.popup__close');

function togglePopup(event) {
    popup.classList.toggle('popup__opened');
}

popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        togglePopup();
    }
});

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

let formElement = document.querySelector('.input');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.input__name');
let jobInput = formElement.querySelector('.input__job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    /* Получите значение полей jobInput и nameInput из свойства value*/
    let nameOutput = document.querySelector('.profile__name');
    let jobOutput = document.querySelector('.profile__subtitle');
     // Выберите элементы, куда должны быть вставлены значения полей
    nameOutput.textContent = nameInput.value ;
    jobOutput.textContent = jobInput.value;
     // Вставьте новые значения с помощью textContent*/
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', formSubmitHandler);
