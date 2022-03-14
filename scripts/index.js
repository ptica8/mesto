const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit');
const closePopup = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_job');
let nameOutput = document.querySelector('.profile__name');
let jobOutput = document.querySelector('.profile__subtitle');

function startPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;
}

function endPopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;
    endPopup();
}

openPopup.addEventListener('click', startPopup);
closePopup.addEventListener('click', endPopup);
formElement.addEventListener('submit', formSubmitHandler);

/* function eventClose(event) {
    if (event.target === event.currentTarget) {
        endPopup();
    }
}
popup.addEventListener('click', eventClose); */
