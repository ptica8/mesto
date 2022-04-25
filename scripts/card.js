export default class Card {
    constructor(data, templateSelector, openPopup, handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
        this._handleImageClick = handleImageClick;
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

    _setEventListeners(listElementImg, likeButton, deleteButton) {
        listElementImg.addEventListener('click', () => {
            this._openPopup(popupImage)
            this._handleImageClick(this._name, this._link)
        });
        likeButton.addEventListener('click', evt => evt.target.classList.toggle('list__element-button_type_active'));
        deleteButton.addEventListener('click', () =>  this._element.remove());
    }

    generateCard() {
        this._element = this._getTemplate();
        const listElementImg = this._element.querySelector('.list__element-img');
        listElementImg.src = this._link;
        listElementImg.alt = this._name;
        const listElementTitle = this._element.querySelector('.list__element-title');
        listElementTitle.textContent = this._name;
        const likeButton = this._addLikeButton(this._element);
        const deleteButton = this._addDeleteButton(this._element);
        this._setEventListeners(listElementImg, likeButton, deleteButton);
        return this._element;
    }
}