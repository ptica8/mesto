import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._deleteButton = this._popupElement.querySelector('.popup__button');
    }

    open(cardId, element) {
        super.open();
        this._cardId = cardId;
        this._element = element;
    }

    setEventListeners() {
        super.setEventListeners();
        this._deleteButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._cardId, this._element);
        });
    }
}