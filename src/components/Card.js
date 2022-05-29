export default class Card {
    constructor(data, templateSelector, handleCardClick, handleLikeCallback, handleDeleteCallback, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes.length;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeCallback = handleLikeCallback;
        this._handleDeleteCallback = handleDeleteCallback;
        this._cardId = data._id;
        this._userId = userId._id;
        this._ownerId = data.owner._id;
    }

    _getTemplate() {
       const cardElement = document.querySelector(this._templateSelector).content.querySelector('.list__element').cloneNode(true);
       return cardElement;
    }

    _handleLikeButton() {
        this._handleLikeCallback(this._cardId, this._listElementLike, this._likeButton);
    }

    _setEventListeners() {
        this._listElementImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
        this._likeButton = this._element.querySelector('.list__element-button_type_like');
        this._likeButton.addEventListener('click', () => {
            this._handleLikeButton()
        });
        if (this._userId === this._ownerId) {
            this._deleteButton.addEventListener('click', () => {
                this._handleDeleteCallback(this._cardId, this._element);
            });
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector('.list__element-button_type_delete');
        this._listElementImg = this._element.querySelector('.list__element-img');
        this._listElementImg.src = this._link;
        this._listElementImg.alt = this._name;
        const listElementTitle = this._element.querySelector('.list__element-title');
        this._listElementLike = this._element.querySelector('.list__element-number');
        listElementTitle.textContent = this._name;
        this._listElementLike.textContent = this._likes;
        if (this._userId !== this._ownerId) {
            this._deleteButton.remove();
        }
        this._setEventListeners();
        return this._element;
    }
}