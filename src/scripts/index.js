import '@/pages/index.css';
import { initialCards } from "@/scripts/cards";
import { openModal, closeModal, closeModalByOverlay } from "@/scripts/modal";
import { createCard, deleteCard } from "@/scripts/card";

export const cardTemplate = document.querySelector('#card-template').content;

const cardList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');

const createCardButton = document.querySelector('.profile__add-button');
const createCardPopup = document.querySelector('.popup_type_new-card');

const openCardImagePopup = document.querySelector('.popup_type_image');

const closePopupButtons = document.querySelectorAll('.popup__close');

initialCards.forEach((card) => {
    cardList.append(createCard(card, deleteCard));
});

const handleProfileEditPopupOpen = () => {
    openModal(profileEditPopup);
    profileEditPopup.addEventListener('click', closeModalByOverlay);
}

const handleCreateCardPopupOpen = () => {
    openModal(createCardPopup);
    createCardPopup.addEventListener('click', closeModalByOverlay);
}

const handleImagePopupOpen = () => {

}

const handleClosePopup = () => {
    closeModal(document.querySelector('.popup_is-opened'));
}

closePopupButtons.forEach(button => {
    button.addEventListener('click', handleClosePopup);
});

profileEditButton.addEventListener('click', handleProfileEditPopupOpen);
createCardButton.addEventListener('click', handleCreateCardPopupOpen);

