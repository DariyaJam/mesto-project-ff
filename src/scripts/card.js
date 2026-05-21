import { cardTemplate } from "@/scripts/index";

const createCard = (cardData, deleteCard, likeCard, handleOpenCardImagePopup) => {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.addEventListener('click', handleOpenCardImagePopup);

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', deleteCard);

    const cardLikeButton = cardElement.querySelector('.card__like-button');
    cardLikeButton.addEventListener('click', likeCard);

    return cardElement;

};

const deleteCard = (event) => {
    event.target.closest('.card').remove();
};

const likeCard = (event) => {
    event.target.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard };