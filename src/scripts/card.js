import { cardTemplate } from "@/scripts/index";

const createCard = (cardData, currentUserID, likeCard, handleOpenCardImagePopup, handleCardDelete) => {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.addEventListener('click', handleOpenCardImagePopup);

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    if (cardData.owner['_id'] === currentUserID) {
        cardDeleteButton.classList.add('card__delete-button_is-active');
        cardDeleteButton.addEventListener('click', () => handleCardDelete(cardData['_id'], cardDeleteButton));
    }

    const cardLikeButton = cardElement.querySelector('.card__like-button');
    cardLikeButton.addEventListener('click', likeCard);

    return cardElement;

};

const likeCard = (event) => {
    event.target.classList.toggle('card__like-button_is-active');
}

export { createCard, likeCard };