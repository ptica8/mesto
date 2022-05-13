export default class FormValidator {
    constructor(data, form) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._errorBorder = data.errorBorder;
        this._formSelector = data.formSelector;
        this._form = form;
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputSelect) => {
            return !inputSelect.validity.valid;
        });
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._inputList = Array.from(this._field.querySelectorAll(this._inputSelector));
        this._buttonElement = this._field.querySelector(this._submitButtonSelector);
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'disabled');
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._field.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._errorBorder);
    };

    _hideInputError(inputElement) {
        const errorElement = this._field.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._errorBorder);
        errorElement.textContent = '';
    };

    enableValidation() {
        this._form.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        this._field = this._form.querySelector('.popup__form-set');
        this._setEventListeners();
    }
}

