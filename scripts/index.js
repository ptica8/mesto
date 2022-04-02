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
const profileNameInput = popupProfile.querySelector('.popup__text_type_name');
const profileJobInput = popupProfile.querySelector('.popup__text_type_job');
const profileNameOutput = document.querySelector('.profile__name');
const profileJobOutput = document.querySelector('.profile__subtitle');
const addCardCityInput = popupCard.querySelector('.popup__text_type_city');
const addCardImgInput = popupCard.querySelector('.popup__text_type_img');

function handlerEsc(evt) {
    const activePopup = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
      closePopup(activePopup)
    }
}

function handlerClick (evt) {
    const activePopup = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup__close')) {
      closePopup(activePopup)
    }
}

function handlerOutsideClick (evt) {
    const activePopup = document.querySelector('.popup_opened');
    if (evt.target === evt.currentTarget) {
      closePopup(activePopup)
    }
}

function openPopup(popupType) {
    popupType.classList.add('popup_opened');
    document.addEventListener('keydown', handlerEsc);
    document.addEventListener('click', handlerClick);
    popupType.addEventListener('click', handlerOutsideClick);
}

function openProfilePopup() {
    openPopup(popupProfile)
    profileNameInput.value = profileNameOutput.textContent
    profileJobInput.value = profileJobOutput.textContent
}

function closePopup(popupType) {
    popupType.classList.remove('popup_opened');
}

function imageClickHandler(event) {
    popupImagePicture.src = event.link;
    popupImagePicture.alt = event.name;
    popupImageSubtitle.textContent = event.name;
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
        imageClickHandler(item)
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

function addCardFormSubmitHandler(evt) {
    evt.preventDefault();
    prependCard(createCard({
        name: addCardCityInput.value,
        link: addCardImgInput.value
    }));
    closePopup(popupCard);
    evt.currentTarget.reset();
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileNameOutput.textContent = profileNameInput.value;
    profileJobOutput.textContent = profileJobInput.value;
    closePopup(popupProfile);
    evt.currentTarget.reset();
}

initialCards.map(newCardAtList => appendCard(createCard(newCardAtList)));

openProfileButton.addEventListener('click',() => openProfilePopup());
openCardButton.addEventListener('click',() => openPopup(popupCard));
popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit', addCardFormSubmitHandler);
