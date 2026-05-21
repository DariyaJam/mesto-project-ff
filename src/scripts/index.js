import '@/pages/index.css';
import { initialCards } from "@/scripts/cards";
import { openModal } from "@/scripts/modal";
import { createCard, deleteCard } from "@/scripts/card";

export const cardTemplate = document.querySelector('#card-template').content;

const cardList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const profileEditPopup = document.querySelector('.popup_type_edit');
const createCardPopup = document.querySelector('.popup_type_new-card');

initialCards.forEach((card) => {
    cardList.append(createCard(card, deleteCard));
});

const handleProfileEditPopupOpen = () => {
    openModal(profileEditPopup);
}

const handleCreateCardPopupOpen = () => {
    openModal(createCardPopup);
}

profileEditButton.addEventListener('click', handleProfileEditPopupOpen);
addCardButton.addEventListener('click', handleCreateCardPopupOpen);

