const config = {
    baseURL: 'https://nomoreparties.co/v1/wff-cohort-26',
    headers: {
        authorization: "0c7bb85f-b0d8-4afe-aeef-71823b5c6808",
        'Content-Type': 'application/json',
    },
};

const getResponseData = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const getProfileInfo = () => {
    return fetch(`${config.baseURL}/users/me`, {
        headers: config.headers,
    }).then(getResponseData);
};

const getCardList = () => {
    return fetch(`${config.baseURL}/cards`, {
        headers: config.headers,
    }).then(getResponseData);
};

export { getProfileInfo, getCardList };