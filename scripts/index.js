 const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const list = document.querySelector('.list');
const listTemplate = document.querySelector('.list-template').content.querySelector('.list__element');

initialCards.forEach(item => {
    const listElement = listTemplate.cloneNode(true);
    const listElementImg = listElement.querySelector('.list__element-img');
    listElementImg.src = item.link;
    const listElementTitle = listElement.querySelector('.card__element-title');
    listElementTitle.textContent = item.name;
    list.append(listElement);
});



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

