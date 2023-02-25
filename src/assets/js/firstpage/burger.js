



export function burger() {
    //========================burger==============================
    'use strict'
    const menuIcon = document.querySelector(".menu__icon");
    if (menuIcon) {
        const headMenu = document.querySelector(".header__nav");
        const buttonOrder = document.querySelector(".button__order");
        const header = document.querySelector('.header');

        menuIcon.addEventListener("click", function (e) {
            menuIcon.classList.toggle("_active");
            headMenu.classList.toggle("_actived");
            buttonOrder.classList.toggle("_disable");
            header.classList.toggle('activebg');

            document.body.classList.toggle("_lock");
        });
        const burgerPopupButton = document.querySelector(".button__order-innernav");
        if (burgerPopupButton) {
            burgerPopupButton.addEventListener("click", function () {
                popup.classList.toggle("_open");
                menuIcon.classList.remove("_active");
                headMenu.classList.remove("_actived");
            });
        }

        const alertButtonBurger = document.querySelector(".button__portfolio");
        const alertBurger = document.querySelector('.alert');
        if (alertButtonBurger) {
            alertButtonBurger.addEventListener("click", function () {
                menuIcon.classList.remove("_active");
                headMenu.classList.remove("_actived");
                document.body.classList.remove("_lock");
            });
        }
    }


}