const showInputError = (formSelector, inputSelector, errorMessage) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_visible');
    inputSelector.classList.add('popup__border-error');
};

const hideInputError = (formSelector, inputSelector) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_visible');
    inputSelector.classList.remove('popup__border-error');
    errorElement.textContent = '';
};

const checkInputValidity = (formSelector, inputSelector) => {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
        hideInputError(formSelector, inputSelector);
    }
};

const setEventListeners = (formSelector) => {
    const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
    const buttonElement = formSelector.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function () {
            checkInputValidity(formSelector, inputSelector);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = ({formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
    });
    const fieldsetList = Array.from(document.querySelectorAll('.popup__form-set'));
    fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
    });
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
}

const toggleButtonState = (inputList, submitButtonSelector) => {
    if (hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add('popup__button_disabled');
        submitButtonSelector.setAttribute('disabled', 'disabled');
    } else {
        submitButtonSelector.classList.remove('popup__button_disabled');
        submitButtonSelector.removeAttribute('disabled');
    }
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
});
