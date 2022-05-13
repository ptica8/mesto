export default class Card {
    constructor(data, templateSelector, handleCardClick, popupZoomCard) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._popup = popupZoomCard;
    }

    _getTemplate() {
       const cardElement = document.querySelector(this._templateSelector).content.querySelector('.list__element').cloneNode(true);
       return cardElement;
    }

    _addLikeButton(listElement) {
        const likeButton = listElement.querySelector('.list__element-button_type_like');
        return likeButton;
    }

    _addDeleteButton(listElement) {
        const deleteButton = listElement.querySelector('.list__element-button_type_delete');
        return deleteButton;
    }

    _setEventListeners(listElementImg) {
        listElementImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link, this._popup);
        });
        this._likeButton = this._addLikeButton(this._element);
        this._deleteButton = this._addDeleteButton(this._element);
        this._likeButton.addEventListener('click', evt => evt.target.classList.toggle('list__element-button_type_active'));
        this._deleteButton.addEventListener('click', () =>  this._element.remove());
    }

    generateCard() {
        this._element = this._getTemplate();
        const listElementImg = this._element.querySelector('.list__element-img');
        listElementImg.src = this._link;
        listElementImg.alt = this._name;
        const listElementTitle = this._element.querySelector('.list__element-title');
        listElementTitle.textContent = this._name;
        this._setEventListeners(listElementImg, this._popup);
        return this._element;
    }
}