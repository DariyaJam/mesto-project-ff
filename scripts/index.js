// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element.name;

  const cardImage = cardElement.querySelector('.card__image')
  cardImage.setAttribute('src', `${element.link}`);
  cardImage.setAttribute('alt', `${element.name}`);

  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard)

  return cardElement;
};

const deleteCard = function (evt) {
  evt.target.closest('.card').remove();
};

initialCards.forEach(function (element) {
  const card = createCard(element);
  cardList.append(card);
});