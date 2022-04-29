import Card from './Card.js';
import {FormValidator, formsAndInputsData} from './FormValidator.js';

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

const popups = document.querySelectorAll('.popup');
const list = document.querySelector('.list');
const listTemplate = document.querySelector('.list-template').content.querySelector('.list__element');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const popupImage = document.querySelector('.popup_type_image');
const openProfileButton = document.querySelector('.profile__edit');
const openCardButton = document.querySelector('.profile__button');
const popupImagePicture = popupImage.querySelector('.popup__img');
const popupImageSubtitle = popupImage.querySelector('.popup__subtitle');
const profileNameInput = popupProfile.querySelector('.popup__input_type_name');
const profileJobInput = popupProfile.querySelector('.popup__input_type_job');
const profileNameOutput = document.querySelector('.profile__name');
const profileJobOutput = document.querySelector('.profile__subtitle');
const addCardCityInput = popupCard.querySelector('.popup__input_type_city');
const addCardImgInput = popupCard.querySelector('.popup__input_type_img');
const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
const popupCardForm = popupCard.querySelector('.popup__form_card');

function handleEsc(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup)
    }
}

function handleOutsideClick (evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target)
    }
}

function openPopup(popupType) {
    popupType.classList.add('popup_opened');
    document.addEventListener('keydown', handleEsc);
}

function openProfilePopup() {
    openPopup(popupProfile);
    profileNameInput.value = profileNameOutput.textContent;
    profileJobInput.value = profileJobOutput.textContent;
}

function closePopup(popupType) {
    popupType.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEsc);
}

 function handleImageClick(name, link) {
     popupImagePicture.src = link;
     popupImagePicture.alt = name;
     popupImageSubtitle.textContent = name;
 }

function prependCard(listElement) {
    list.prepend(listElement);
}

function createCard(data, templateSelector, openPopupFunction, handleImageClickFunction, popupImage) {
    const card = new Card(data, templateSelector, openPopupFunction, handleImageClickFunction, popupImage);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const cardElement = createCard({name: addCardCityInput.value, link: addCardImgInput.value}, '.list-template', openPopup, handleImageClick, popupImage);
    prependCard(cardElement);
    closePopup(popupCard);
    addCardCityInput.value = '';
    addCardImgInput.value = '';
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileNameOutput.textContent = profileNameInput.value;
    profileJobOutput.textContent = profileJobInput.value;
    closePopup(popupProfile);
}

initialCards.map(data => {
    const cardElement = createCard(data, '.list-template', openPopup, handleImageClick, popupImage);
    list.append(cardElement);
})

const formValidatorProfile = new FormValidator(formsAndInputsData, popupProfileForm);
const formValidatorCard = new FormValidator(formsAndInputsData, popupCardForm);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();

openProfileButton.addEventListener('click',() => {
    openProfilePopup()
    formValidatorProfile.resetValidation()
});
openCardButton.addEventListener('click',() => {
    openPopup(popupCard)
    formValidatorCard.resetValidation()
});
popups.forEach(popup => {
    popup.addEventListener('mousedown', evt => {
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
        handleOutsideClick(evt);
    });
});
popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit', handleAddCardFormSubmit);
