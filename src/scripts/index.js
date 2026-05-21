import '@/pages/index.css';
import { initialCards } from "@/scripts/cards";
import { openModal, closeModal, closeModalByOverlay } from "@/scripts/modal";
import { createCard, deleteCard } from "@/scripts/card";

export const cardTemplate = document.querySelector('#card-template').content;

const cardList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');
const profileEditForm = document.forms['edit-profile'];

const userData = document.querySelector('.profile__info');
const userName = userData.querySelector('.profile__title');
const userDescription = userData.querySelector('.profile__description');

const createCardButton = document.querySelector('.profile__add-button');
const createCardPopup = document.querySelector('.popup_type_new-card');
const createCardForm = document.forms['new-place'];

const openCardImagePopup = document.querySelector('.popup_type_image');

const closePopupButtons = document.querySelectorAll('.popup__close');

const editAvatarForm = document.forms['edit-avatar'];

initialCards.forEach((card) => {
    cardList.append(createCard(card, deleteCard));
});

const handleProfileEditPopupOpen = () => {
    profileEditForm.name.value = userName.textContent;
    profileEditForm.description.value = userDescription.textContent;

    openModal(profileEditPopup);
    profileEditPopup.addEventListener('click', closeModalByOverlay);
};

function handleProfileEditFormSubmit(event) {
    event.preventDefault();

    userName.textContent = profileEditForm.name.value;
    userDescription.textContent = profileEditForm.description.value;
}

profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);

const handleCreateCardPopupOpen = () => {
    openModal(createCardPopup);
    createCardPopup.addEventListener('click', closeModalByOverlay);
};

const handleImagePopupOpen = () => {

};

const handleClosePopup = () => {
    closeModal(document.querySelector('.popup_is-opened'));
};

closePopupButtons.forEach(button => {
    button.addEventListener('click', handleClosePopup);
});

profileEditButton.addEventListener('click', handleProfileEditPopupOpen);
createCardButton.addEventListener('click', handleCreateCardPopupOpen);

