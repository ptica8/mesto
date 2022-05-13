import './pages/index.css';
import * as constants from './scripts/constants.js';
import Card from './scripts/Card.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import Section from './scripts/Section.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import FormValidator from './scripts/FormValidator.js';

function handleCardClick(name, link, popup) {
     popup.openPopup(name, link);
 }

function handleAddCardFormSubmit(data) {
    cardsList.renderOneItem(data);
}

function handleProfileFormSubmit(data) {
    userInfo.setUserInfo(data.name, data.job);
}

const userInfo = new UserInfo(constants.profileNameSelector, constants.profileJobSelector);

const popupAddProfile = new PopupWithForm(constants.popupProfileSelector, handleProfileFormSubmit);
popupAddProfile.setEventListeners();

const popupAddCard = new PopupWithForm(constants.popupCardSelector, handleAddCardFormSubmit);
popupAddCard.setEventListeners();

const popupZoomCard = new PopupWithImage(constants.popupImageSelector);
popupZoomCard.setEventListeners();

const cardsList = new Section({
    items: constants.initialCards,
    renderer: (cardItem) => {
        const card = new Card(cardItem, '.list-template', handleCardClick, popupZoomCard);
        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
    }
}, '.list');
cardsList.renderItems();

const formValidatorProfile = new FormValidator(constants.formsAndInputsData, constants.popupProfileForm);
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(constants.formsAndInputsData, constants.popupCardForm);
formValidatorCard.enableValidation();

constants.openProfileButton.addEventListener('click',() => {
    popupAddProfile.openPopup(userInfo.getUserInfo());
    formValidatorProfile.resetValidation()
});
constants.openCardButton.addEventListener('click',() => {
    popupAddCard.openPopup();
    formValidatorCard.resetValidation()
});

