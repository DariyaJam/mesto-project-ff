// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__title").textContent = element.name;
  cardElement.querySelector(".card__image").setAttribute("src", `${element.link}`);

  cardElement.querySelector(".card__delete-button").addEventListener("click", function (evt) {
      evt.target.closest(".card").remove();
    });

  cardList.append(cardElement);
});
