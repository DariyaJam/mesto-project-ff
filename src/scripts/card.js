import { cardTemplate } from "@/scripts/index";

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

export { createCard, deleteCard };