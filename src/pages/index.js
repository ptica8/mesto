import './index.css';
import * as constants from '../components/constants.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

function createCard(data, userId) {
    const card = new Card(data, '.list-template', handleCardClick, handleCardLike, handleDeleteCallback, userId);
    const cardElement = card.generateCard();
    return cardElement;
}

function handleDeleteCallback(cardId, element) {
    popupConfirmDelete.open(cardId, element);
}

function handleDeleteCard(id, element) {
    api.deleteCard(id)
        .then(() => {
            element.remove();
        })
        .catch((err) => console.log(err))
}

function handleAddCardFormSubmit(data) {
    constants.popupSubmitButtonCard.textContent = 'Сохранение...';
    api.addNewCard(data)
        .then((newData) => {
            const cardElement = createCard(newData, userIdObj);
            cardsList.addItem(cardElement);
            popupAddCard.close();
            constants.popupSubmitButtonCard.textContent = 'Создать';
        })
        .catch((err) => console.log(err))
}

function handleCardClick(name, link) {
    popupZoomCard.open(name, link);
}

function handleCardLike(id, listElementLike, likeButton) {
    if (likeButton.classList.contains('list__element-button_type_active')) {
        api.deleteLike(id)
            .then((data) => {
                listElementLike.textContent = data.likes.length;
            })
            .catch((err) => console.log(err))
    } else {
        api.putLikeOnCard(id)
            .then((data) => {
                listElementLike.textContent = data.likes.length;
            })
            .catch((err) => console.log(err))
    }
}

function handleProfileFormSubmit(data) {
    constants.popupSubmitButtonProfile.textContent = 'Сохранение...';
    api.editProfileInfo(data)
        .then((newData) => {
            userInfo.setUserInfo(newData)
            popupAddProfile.close();
            constants.popupSubmitButtonProfile.textContent = 'Сохранить';
        })
        .catch((err) => console.log(err))
}

function handleEditAvatarFormSubmit(data) {
    constants.popupSubmitButtonAvatar.textContent = 'Сохранение...';
    api.editAvatar(data)
        .then((newData) => {
            constants.avatarImage.src = newData.avatar;
            popupEditAvatar.close();
            constants.popupSubmitButtonAvatar.textContent = 'Сохранить';
        })
        .catch((err) => console.log(err))
}

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-41',
  headers: {
       Authorization: '64093150-cd2b-4857-920b-cb790fed6f1f',
      'Content-Type': 'application/json'
  }
})

const userIdObj = {}
api.getUserInfo()
    .then((data) => {
        userIdObj._id = data._id;
        constants.avatarImage.src = data.avatar;
    })
    .catch((err) => console.log(err));

const cardsList = new Section(
    (cardItem) => {
        const cardElement = createCard(cardItem, userIdObj);
        cardsList.addItem(cardElement);
        }, '.list')

api.getAllCards()
    .then((data) => {
        cardsList.renderItems(data);
    })
    .catch((err) => console.log(err));

const userInfo = new UserInfo(constants.userInfoData);

api.getUserInfo()
    .then((data) => {
        userInfo.setUserInfo(data)
    })
    .catch((err) => console.log(err));

const popupConfirmDelete = new PopupWithSubmit(constants.popupDeleteSelector, handleDeleteCard);
popupConfirmDelete.setEventListeners();

const popupAddProfile = new PopupWithForm(constants.popupProfileSelector, handleProfileFormSubmit);
popupAddProfile.setEventListeners();

const popupAddCard = new PopupWithForm(constants.popupCardSelector, handleAddCardFormSubmit);
popupAddCard.setEventListeners();

const popupEditAvatar = new PopupWithForm(constants.popupAvatarSelector, handleEditAvatarFormSubmit);
popupEditAvatar.setEventListeners();

const popupZoomCard = new PopupWithImage(constants.popupImageSelector);
popupZoomCard.setEventListeners();

const formValidatorProfile = new FormValidator(constants.formsAndInputsData, constants.popupProfileForm);
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(constants.formsAndInputsData, constants.popupCardForm);
formValidatorCard.enableValidation();

constants.openProfileButton.addEventListener('click',() => {
    formValidatorProfile.resetValidation();
    const dataUserInfo = userInfo.getUserInfo();
    constants.profileNameInput.value = dataUserInfo.name;
    constants.profileJobInput.value = dataUserInfo.about;
    popupAddProfile.open();
});
constants.openCardButton.addEventListener('click',() => {
    formValidatorCard.resetValidation();
    popupAddCard.open();
});
constants.avatarProfile.addEventListener('click',() => {
    popupEditAvatar.open();
});


