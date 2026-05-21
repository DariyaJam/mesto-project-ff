const closeModalByKey = (event) => {
    if (event.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    }
};

const closeModalByOverlay = (event) => {
    if (event.target.classList.contains("popup_is-opened")) {
        closeModal(document.querySelector(".popup_is-opened"));
    }
}

const openModal = (popup) => {
    popup.classList.add('popup_is-animated');
    popup.classList.add('popup_is-opened');

    document.addEventListener('keydown', closeModalByKey);
};

const closeModal = (popup) => {
    popup.classList.remove('popup_is-opened');
    popup.classList.remove('popup_is-animated');
};

export {openModal, closeModal, closeModalByOverlay};