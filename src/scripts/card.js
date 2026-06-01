import {cardTemplate} from "@/scripts/index";

const createCard = (cardData, currentUserID, handleCardLike, handleOpenCardImagePopup, handleCardDelete) => {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.addEventListener('click', handleOpenCardImagePopup);

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const counter = cardElement.querySelector('.card__like-counter');

    counter.classList.add('card__like-counter_is-active');
    counter.textContent = cardData.likes.length;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    if (cardData.owner['_id'] === currentUserID) {
        cardDeleteButton.classList.add('card__delete-button_is-active');
        cardDeleteButton.addEventListener('click', () => handleCardDelete(cardData['_id'], cardDeleteButton));
    }

    const cardLikeButton = cardElement.querySelector('.card__like-button');

    if (cardData.likes.find((cardElement) => cardElement['_id'] === currentUserID)) {
        cardLikeButton.classList.add('card__like-button_is-active');
    }

    cardLikeButton.addEventListener('click', () => handleCardLike(cardData['_id'], currentUserID, cardLikeButton, counter));

    return cardElement;

};

export {createCard};