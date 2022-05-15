import './index.css';
import * as constants from '../components/constants.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards} from '../utils/utils.js';

function createCard(data) {
    const card = new Card(data, '.list-template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleCardClick(name, link) {
    popupZoomCard.open(name, link);
 }

function handleAddCardFormSubmit(data) {
    const cardElement = createCard(data);
    cardsList.addItem(cardElement);
}

function handleProfileFormSubmit(data) {
    userInfo.setUserInfo(data);
}

const userInfo = new UserInfo(constants.userInfoData);

const popupAddProfile = new PopupWithForm(constants.popupProfileSelector, handleProfileFormSubmit);
popupAddProfile.setEventListeners();

const popupAddCard = new PopupWithForm(constants.popupCardSelector, handleAddCardFormSubmit);
popupAddCard.setEventListeners();

const popupZoomCard = new PopupWithImage(constants.popupImageSelector);
popupZoomCard.setEventListeners();

const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const cardElement = createCard(cardItem);
        cardsList.addItem(cardElement);
    }
}, '.list');
cardsList.renderItems();

const formValidatorProfile = new FormValidator(constants.formsAndInputsData, constants.popupProfileForm);
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(constants.formsAndInputsData, constants.popupCardForm);
formValidatorCard.enableValidation();

constants.openProfileButton.addEventListener('click',() => {
    formValidatorProfile.resetValidation();
    const dataUserInfo = userInfo.getUserInfo();
    constants.profileNameInput.value = dataUserInfo.name;
    constants.profileJobInput.value = dataUserInfo.job;
    popupAddProfile.open();
});
constants.openCardButton.addEventListener('click',() => {
    formValidatorCard.resetValidation();
    popupAddCard.open();
});

