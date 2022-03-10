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
let nameInput = formElement.querySelector('.input__name');
let jobInput = formElement.querySelector('.input__job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    let nameOutput = document.querySelector('.profile__name');
    let jobOutput = document.querySelector('.profile__subtitle');
    nameOutput.textContent = nameInput.value ;
    jobOutput.textContent = jobInput.value;
}
popup.addEventListener('submit', formSubmitHandler);
