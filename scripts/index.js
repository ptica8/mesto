import Card from './card.js';

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

const popups = document.querySelectorAll('.popup');
const list = document.querySelector('.list');
const listTemplate = document.querySelector('.list-template').content.querySelector('.list__element');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const popupImage = document.querySelector('.popup_type_image');
const openProfileButton = document.querySelector('.profile__edit');
const openCardButton = document.querySelector('.profile__button');
const popupImagePicture = popupImage.querySelector('.popup__img');
const popupImageSubtitle = popupImage.querySelector('.popup__subtitle');
const profileNameInput = popupProfile.querySelector('.popup__input_type_name');
const profileJobInput = popupProfile.querySelector('.popup__input_type_job');
const profileNameOutput = document.querySelector('.profile__name');
const profileJobOutput = document.querySelector('.profile__subtitle');
const addCardCityInput = popupCard.querySelector('.popup__input_type_city');
const addCardImgInput = popupCard.querySelector('.popup__input_type_img');

function handleEsc(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup)
    }
}

function handleOutsideClick (evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target)
    }
}

function openPopup(popupType) {
    popupType.classList.add('popup_opened');
    document.addEventListener('keydown', handleEsc);
}

function openProfilePopup() {
    openPopup(popupProfile);
    profileNameInput.value = profileNameOutput.textContent;
    profileJobInput.value = profileJobOutput.textContent;
}

function closePopup(popupType) {
    popupType.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEsc);
}

//function handleImageClick(event) {
  //  popupImagePicture.src = event.link;
 //   popupImagePicture.alt = event.name;
 //   popupImageSubtitle.textContent = event.name;
//}

 function handleImageClick2(name, link) {
     popupImagePicture.src = link;
     popupImagePicture.alt = name;
     popupImageSubtitle.textContent = name;
 }

function createCard(item) {
    const listElement = listTemplate.cloneNode(true);
    const listElementImg = listElement.querySelector('.list__element-img');
    listElementImg.src = item.link;
    listElementImg.alt = item.name;
    const listElementTitle = listElement.querySelector('.list__element-title');
    listElementTitle.textContent = item.name;
    listElementImg.addEventListener('click', () => {
        openPopup(popupImage)
        handleImageClick(item)
    });
    const likeButton = listElement.querySelector('.list__element-button_type_like');
    likeButton.addEventListener('click', evt => evt.target.classList.toggle('list__element-button_type_active'));
    const deleteButton = listElement.querySelector('.list__element-button_type_delete');
    deleteButton.addEventListener('click', () => listElement.remove());
    return listElement;
}

function appendCard(listElement) {
    list.append(listElement);
}

function prependCard(listElement) {
    list.prepend(listElement);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    prependCard(createCard({
        name: addCardCityInput.value,
        link: addCardImgInput.value
    }));
    closePopup(popupCard);
    addCardCityInput.value = '';
    addCardImgInput.value = '';
    const buttonElement = popupCard.querySelector('.popup__button');
    buttonElement.classList.add('popup__button_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileNameOutput.textContent = profileNameInput.value;
    profileJobOutput.textContent = profileJobInput.value;
    closePopup(popupProfile);
}

initialCards.map(data => {
    const card = new Card(data, '.list-template', openPopup, handleImageClick2);
    const cardElement = card.generateCard();
    document.body.append(cardElement)
})

openProfileButton.addEventListener('click',() => openProfilePopup());
openCardButton.addEventListener('click',() => openPopup(popupCard));
popups.forEach(popup => {
    popup.addEventListener('mousedown', evt => {
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
        handleOutsideClick(evt);
    });
});
popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit', handleAddCardFormSubmit);
