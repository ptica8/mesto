export const formsAndInputsData = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible',
    errorBorder: 'popup__border-error'
};

export const popupProfile = document.querySelector('.popup_type_profile');
export const popupProfileSelector = '.popup_type_profile';
export const popupCardSelector = '.popup_type_card';
export const popupImageSelector = '.popup_type_image';
export const profileNameSelector = '.profile__name';
export const profileJobSelector = '.profile__subtitle';
export const popupDeleteSelector = '.popup_type_delete';
export const popupAvatarSelector = '.popup_type_avatar';
export const avatarProfile = document.querySelector('.profile__overlay');
export const avatarImage = document.querySelector('.profile__img');
export const popupCard = document.querySelector('.popup_type_card');
export const openProfileButton = document.querySelector('.profile__edit');
export const openCardButton = document.querySelector('.profile__button');
export const popupSubmitButtonCard = document.querySelector('.popup__button_card');
export const popupSubmitButtonAvatar = document.querySelector('.popup__button_avatar');
export const popupSubmitButtonProfile = document.querySelector('.popup__button_profile');
export const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
export const popupCardForm = popupCard.querySelector('.popup__form_card');
export const userInfoData = {name: profileNameSelector, about: profileJobSelector};
export const profileNameInput = document.querySelector('.popup__input_type_name');
export const profileJobInput = document.querySelector('.popup__input_type_job');