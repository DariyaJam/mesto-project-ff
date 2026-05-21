import '@/pages/index.css';
import { initialCards } from "@/scripts/cards";

const cardTemplate = document.querySelector('#card-template').content;

const cardList = document.querySelector('.places__list');

const createCard = (cardData, deleteCard) => {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardDeleteButton.addEventListener('click', deleteCard);

    return cardElement;

};

const deleteCard = (event) => {
    event.target.closest('.card').remove();
};

initialCards.forEach((card) => {
    cardList.append(createCard(card, deleteCard));
});
