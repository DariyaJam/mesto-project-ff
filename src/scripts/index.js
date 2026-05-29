/* Импорт файлов и модулей */

import '@/pages/index.css';
import {initialCards} from "@/scripts/cards";
import {openModal, closeModal, closeModalByOverlay} from "@/scripts/modal";
import {createCard, deleteCard, likeCard} from "@/scripts/card";
import {enableValidation, clearValidation} from "@/scripts/validation";
import * as API from "@/scripts/api";
import {getProfileInfo} from "@/scripts/api";

/* Темплейт карточки */

export const cardTemplate = document.querySelector('#card-template').content;

/* DOM-узлы */

const cardList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');
const profileEditForm = document.forms['edit-profile'];

const profileData = document.querySelector('.profile__info');
const profileName = profileData.querySelector('.profile__title');
const profileDescription = profileData.querySelector('.profile__description');

const createCardButton = document.querySelector('.profile__add-button');
const createCardPopup = document.querySelector('.popup_type_new-card');
const createCardForm = document.forms['new-place'];

const openCardImagePopup = document.querySelector('.popup_type_image');

const imageLink = openCardImagePopup.querySelector('.popup__image');
const imageCaption = openCardImagePopup.querySelector('.popup__caption');

const closePopupButtons = document.querySelectorAll('.popup__close');

const editAvatarForm = document.forms['edit-avatar'];

/* Объект с настройками валидаци */

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

/* Загрузка информации о пользователе с сервера */

const setProfileInfo = (profileInfo) => {
    profileName.textContent = profileInfo.name;
    profileDescription.textContent = profileInfo.about;
};

/* Действия с попапом открытия картинки */

const handleOpenCardImagePopup = (event) => {
    imageLink.src = event.target.src;
    imageLink.alt = event.target.alt;
    imageCaption.textContent = event.target.alt;

    openModal(openCardImagePopup);
    openCardImagePopup.addEventListener('click', closeModalByOverlay);
}

/* Действия с попапом профиля */

const handleProfileEditPopupOpen = () => {
    profileEditForm.name.value = profileName.textContent;
    profileEditForm.description.value = profileDescription.textContent;

    clearValidation(profileEditForm, validationConfig);

    openModal(profileEditPopup);
    profileEditPopup.addEventListener('click', closeModalByOverlay);
};

profileEditButton.addEventListener('click', handleProfileEditPopupOpen);

/* Действия с формой профиля */

function handleProfileEditFormSubmit(event) {
    event.preventDefault();

    const profileInfo = {
        name: profileEditForm.name.value,
        about: profileEditForm.description.value,
    };

    API.setProfileInfoApi(profileInfo)
        .then((profileInfo) => {
            setProfileInfo(profileInfo);
    });

    closeModal(profileEditPopup);
}

profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);

/* Действия с попапом создания карточки */

const handleCreateCardPopupOpen = () => {
    clearValidation(createCardForm, validationConfig);

    openModal(createCardPopup);
    createCardPopup.addEventListener('click', closeModalByOverlay);
};

createCardButton.addEventListener('click', handleCreateCardPopupOpen);

/* Действия с формой создания карточки */

function handleCreateCardFormSubmit(event) {
    event.preventDefault();

    const cardInfo = {
        name: createCardForm['place-name'].value,
        link: createCardForm.link.value,
    };

    API.createCardApi(cardInfo)
        .then((cardInfo) => {
            cardList.prepend(createCard(cardInfo, deleteCard, likeCard, handleOpenCardImagePopup));
        }).catch((err) => {
            console.error(err);
        });

    closeModal(createCardPopup);
    createCardForm.reset();
}

createCardForm.addEventListener('submit', handleCreateCardFormSubmit);

/* Функция для закрытия всех попапов */

const handleClosePopup = () => {
    closeModal(document.querySelector('.popup_is-opened'));
};

closePopupButtons.forEach(button => {
    button.addEventListener('click', handleClosePopup);
});

enableValidation(validationConfig);

Promise.all([API.getProfileInfo(), API.getCardList()])
    .then(([profileInfo, cardsData]) => {

        setProfileInfo(profileInfo);

        cardsData.forEach((card) => {
            cardList.append(createCard(card, deleteCard, likeCard, handleOpenCardImagePopup));
        });
    });