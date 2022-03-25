 const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const list = document.querySelector('.list');
const listTemplate = document.querySelector('.list-template').content.querySelector('.list__element');
const popupProfile = document.querySelector('.popup__type_profile');
const popupCard = document.querySelector('.popup__type_card');
const popupImage = document.querySelector('.popup__type_image');
const openProfileButton = document.querySelector('.profile__edit');
const openCardButton = document.querySelector('.profile__button');
const closeProfileButton = popupProfile.querySelector('.popup__close');
const closeCardButton = popupCard.querySelector('.popup__close');
const closeImageButton = popupImage.querySelector('.popup__close');
const imageClick = document.querySelector('.popup__img');
const titleClick = document.querySelector('.popup__subtitle');
let profilePopupFormElement = document.querySelector('.popup__type_profile');
let profileNameInput = profilePopupFormElement.querySelector('.popup__text_type_name');
let profileJobInput = profilePopupFormElement.querySelector('.popup__text_type_job');
let profileNameOutput = document.querySelector('.profile__name');
let profileJobOutput = document.querySelector('.profile__subtitle');

 function openPopup(popupType) {
    popupType.classList.add('popup_opened');
}

function closePopup(popupType) {
    popupType.classList.remove('popup_opened');
}

function imageClickHandler(event) {
    imageClick.src = event.link;
    titleClick.textContent = event.name;
}

function createCard(item, addType = 'append') {
    const listElement = listTemplate.cloneNode(true);
    const listElementImg = listElement.querySelector('.list__element-img');
    listElementImg.src = item.link;
    const listElementTitle = listElement.querySelector('.list__element-title');
    listElementTitle.textContent = item.name;
    if (addType === 'append') {
        list.append(listElement);
    } else {
        list.prepend(listElement);
    }
    listElementImg.addEventListener('click', () => {
        openPopup(popupImage)
        imageClickHandler(item)
    });
    const likeButton = listElement.querySelector('.list__element-button_type_like');
    likeButton.addEventListener('click', evt => evt.target.classList.toggle('list__element-button_type_active'));
    const deleteButton = listElement.querySelector('.list__element-button_type_delete');
    deleteButton.addEventListener('click', () => listElement.remove());
}

function addCardFormSubmitHandler(evt) {
    evt.preventDefault();
    let addCardCityInput = popupCard.querySelector('.popup__text_type_city');
    let addCardImgInput = popupCard.querySelector('.popup__text_type_img');
    const newCardAtList = {
        name: addCardCityInput.value,
        link: addCardImgInput.value
    };
    createCard(newCardAtList, 'prepend');
    closePopup(popupCard);
}

function profileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileNameOutput.textContent = profileNameInput.value;
    profileJobOutput.textContent = profileJobInput.value;
    closePopup(profilePopupFormElement);
}

initialCards.map(newCardAtList => createCard(newCardAtList));

openProfileButton.addEventListener('click',() => openPopup(popupProfile));
openCardButton.addEventListener('click',() => openPopup(popupCard));
closeProfileButton.addEventListener('click',() => closePopup(popupProfile));
closeCardButton.addEventListener('click',() => closePopup(popupCard));
closeImageButton.addEventListener('click',() => closePopup(popupImage));
profilePopupFormElement.addEventListener('submit', profileFormSubmitHandler);
popupCard.addEventListener('submit', addCardFormSubmitHandler);

