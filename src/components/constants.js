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
export const popupCard = document.querySelector('.popup_type_card');
export const openProfileButton = document.querySelector('.profile__edit');
export const openCardButton = document.querySelector('.profile__button');
export const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
export const popupCardForm = popupCard.querySelector('.popup__form_card');
export const userInfoData = {name: profileNameSelector, job: profileJobSelector};
export const profileNameInput = document.querySelector('.popup__input_type_name');
export const profileJobInput = document.querySelector('.popup__input_type_job');