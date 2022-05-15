import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImagePicture = this._popupElement.querySelector('.popup__img');
        this._popupImageSubtitle = this._popupElement.querySelector('.popup__subtitle');
    }

    open(name, link) {
        this._popupImagePicture.src = link;
        this._popupImagePicture.alt = name;
        this._popupImageSubtitle.textContent = name;
        super.open();
    }
}