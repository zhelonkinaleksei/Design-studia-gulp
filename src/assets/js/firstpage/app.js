import $ from "jquery";
import slick from "slick-slider";
import AOS from "aos";
import { scroll } from "./smoothScroll";
import { colorScroll } from "./ScrollMagic";
import { particleJS } from "./particle";
import { alertButton } from "./alert";
import { buttonOrder, popupCancel } from "./buttonOrder";
import { neonPartners } from "./neonPartners";

import { burger } from "./burger";
import { VivusLines } from "./VivusJSLines";



function changeColor() {
    let buttons = document.querySelectorAll('[data-filter="servises"]');

    buttons.forEach(element => {
        element.addEventListener('mouseover', () => {
            const parentEl = element.closest('.services__inner__wrapper__item__list');
            const title = parentEl.querySelector('.services__inner__wrapper__item__list__title');
            title.classList.add('accent');

            element.addEventListener('mouseout', () => {
                title.classList.remove('accent');
            })
        })
    });
}


$('.slick-slider').slick({
    slidesToShow: 4, // Количество слайдов которое нужно отобразить за раз
    prevArrow: '<button type="button" class="slick-prev slide__right"></button>',
    nextArrow: '<button type="button" class="slick-next slide__left "></button>',
    dotsClass: 'slick-dots my-slick-dots',
    adaptiveHeight: true,
    infinite: false,
    responsive: [ // Позволяет задавать брэйкпоинты для слайдера
        {
            breakpoint: 1550, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                slidesToShow: 3,
                centerMode: true,

            }
        },
        {
            breakpoint: 1485, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                centerMode: false,
                slidesToShow: 3

            }
        },
        {
            breakpoint: 1360, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                slidesToShow: 3
            }
        },
  
        {
            centerMode: true,
            breakpoint: 992, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                slidesToShow: 2,
                centerMode: false, // Слайд становится по центру.

            }
        },
        {
            breakpoint: 768, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                slidesToShow: 1,
                centerMode: true,
                // arrows: false,
                // dots: true
            }
        },
        {
            breakpoint: 571, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                slidesToShow: 1,
                // arrows: false,
                // dots: true
                //  centerMode: true,
            }
        },
        {
            breakpoint: 489, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                slidesToShow: 1,
                 arrows: false,
                 dots: true,
                //centerMode: true,
            }
        }
    ],
});





//=========================aos=====================

AOS.init();


//==========================вызовы===========================
//изменения цвета на "сервисах"
changeColor();
//изменения цвета на "svg"
// changeColorSvg();
//подсветка при нажатии на кнопку партнеров
neonPartners();
//плавный скролл до якорных ссылок
scroll();
//изменения цвета цифр на "этапах" при скролле
colorScroll();
//фон
particleJS();
//уведомление о технических работах
alertButton();
//оформить заказ
buttonOrder();
popupCancel();
//вызов активной новости//карточки
// chooseNews();
//вызов бургера модалки и уведомлений
burger();
//
VivusLines();