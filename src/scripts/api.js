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

const setProfileInfoApi = (profileInfo) => {
    return fetch(`${config.baseURL}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: profileInfo.name,
            about: profileInfo.about,
        }),
    }).then(getResponseData);
};

const setProfileAvatarApi = (profileInfo) => {
    return fetch(`${config.baseURL}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: profileInfo.avatar,
        }),
    }).then(getResponseData);
};

const createCardApi = (cardInfo) => {
    return fetch(`${config.baseURL}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: cardInfo.name,
            link: cardInfo.link,
        }),
    }).then(getResponseData);
};

const deleteCardApi = (cardID) => {
    return fetch(`${config.baseURL}/cards/${cardID}`, {
        method: 'DELETE',
        headers: config.headers,
    }).then(getResponseData);
};

const getCardApi = (cardID) => {
    return getCardList()
        .then((res) => {
            return Array.from(res).find(element => element['_id'] === cardID);
        });
};

const likeCardApi = (cardID) => {
    return fetch(`${config.baseURL}/cards/likes/${cardID}`, {
        method: "PUT",
        headers: config.headers,
    }).then(getResponseData);
};

const unlikeCardApi = (cardID) => {
    return fetch(`${config.baseURL}/cards/likes/${cardID}`, {
        method: "DELETE",
        headers: config.headers,
    }).then(getResponseData);
};

export {
    getProfileInfo,
    getCardList,
    setProfileInfoApi,
    createCardApi,
    setProfileAvatarApi,
    deleteCardApi,
    getCardApi,
    likeCardApi,
    unlikeCardApi
};