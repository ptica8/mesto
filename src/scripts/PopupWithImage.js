import Popup from './Popup.js';
import {popupImagePicture, popupImageSubtitle} from './constants.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    openPopup(name, link) {
        popupImagePicture.src = link;
        popupImagePicture.alt = name;
        popupImageSubtitle.textContent = name;
        super.openPopup();
    }
}