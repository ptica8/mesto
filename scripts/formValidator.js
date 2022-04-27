export class FormValidator {
    constructor(data, document){
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._errorBorder = data.errorBorder;
        this._formSelector = data.formSelector;
        this._document = document;
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputSelect) => {
            return !inputSelect.validity.valid;
        });
    }

    _checkInputValidity(fieldset, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(fieldset, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(fieldset, inputElement);
        }
    }

    _setEventListeners(fieldset) {
        const inputList = Array.from(fieldset.querySelectorAll(this._inputSelector));
        const buttonElement = fieldset.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(fieldset, inputElement);
                this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
            });
        });
    };

    _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(inactiveButtonClass);
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            buttonElement.classList.remove(inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

    _showInputError(fieldset, inputElement, errorMessage) {
        const errorElement = fieldset.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._errorBorder);
    };

    _hideInputError(fieldset, inputElement) {
        const errorElement = fieldset.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._errorBorder);
        errorElement.textContent = '';
    };

    enableValidation() {
        const formList = Array.from(this._document.querySelectorAll(this._formSelector));
        formList.forEach((formSelector) => {
            formSelector.addEventListener('submit', function(evt) {
                evt.preventDefault();
            });
        });
        const fieldsetList = Array.from(this._document.querySelectorAll('.popup__form-set'));
        fieldsetList.forEach((fieldset) => {
            this._setEventListeners(fieldset);
        });
    }
}

export const formsAndInputsData = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible',
    errorBorder: 'popup__border-error'
}