export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
       const cardElement = document.querySelector(this._templateSelector).content.querySelector('.list__element').cloneNode(true);
       return cardElement;
    }

    _handleLikeButton() {
        this._likeButton.classList.toggle('list__element-button_type_active');
    }

    _handleDeleteButton() {
        this._element.remove();
    }

    _setEventListeners() {
        this._listElementImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
        this._likeButton = this._element.querySelector('.list__element-button_type_like');
        this._likeButton.addEventListener('click', () => {
            this._handleLikeButton()
        });
        this._deleteButton = this._element.querySelector('.list__element-button_type_delete');
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteButton()
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._listElementImg = this._element.querySelector('.list__element-img');
        this._listElementImg.src = this._link;
        this._listElementImg.alt = this._name;
        const listElementTitle = this._element.querySelector('.list__element-title');
        listElementTitle.textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
}