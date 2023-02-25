import $ from "jquery";
import slick from "slick-slider";
import AOS from "aos";
import { scroll } from "./smoothScroll";
import { colorScroll } from "./ScrollMagic";
import { particleJS } from "./particle";
import { alertButton } from "./alert";
import { buttonOrder, popupCancel } from "./buttonOrder";
import { neonPartners } from "./neonPartners";
import Vivus from "vivus";
import { burger } from "./burger";


// =================vivus================

// Here, the ease animation will be use for the global drawing.
const lineLeft = new Vivus(
    'svg__line__left',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE,
        start: 'manual'
    },
);

const lineRight = new Vivus(
    'svg__line__right',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE,
        start: 'manual'
    },
);

const lineCenter = new Vivus(
    'svg__line__center',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE,
        start: 'manual'
    },
);

function playLineLeft() {
    lineLeft.stop().reset().play();
}
function playLineCenter() {
    lineCenter.stop().reset().play();
}
function playLineRight() {
    lineRight.stop().reset().play();
}
function removeAnimation() {
    lineRight.stop().reset();
    lineLeft.stop().reset();
    lineCenter.stop().reset();
}
function removeColorTitle() {
    const title = document.querySelector('#section__news--title');
    if (title.classList.contains('activeaccent')) {
        title.classList.remove('activeaccent');
    }
}

function chooseNews() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth >= 1300){
        const linesItem = document.querySelectorAll('#section__top__card');
        const title = document.querySelector('#section__news--title');
    
        linesItem.forEach(element => {
            element.addEventListener('click', () => {
                //убираем active,если есть
                linesItem.forEach(element => {
                    if (element.classList.contains('active')) {
                        element.classList.remove('active')
                    }
                });
    
                //устанавливаем новый active
                element.classList.add('active');
    
                if (element.dataset.left === 'left') {
                    //убираем анимацию
                    removeAnimation();
                    removeColorTitle();
                    //добавляем анимацию и красимtitle
                    playLineLeft();
                    setTimeout(function () {
                        title.classList.add('activeaccent');
                    }, 2500)
                }
                else if (element.dataset.center === 'center') {
                    //убираем анимацию
                    removeAnimation();
                    removeColorTitle();
    
                    //добавляем анимацию и красимtitle
                    playLineCenter();
                    setTimeout(function () {
                        title.classList.add('activeaccent');
                    }, 2500)
                }
                else if (element.dataset.right === 'right') {
                    //убираем анимацию
                    removeAnimation();
                    removeColorTitle();
    
                    //добавляем анимацию и красимtitle
                    playLineRight();
                    setTimeout(function () {
                        title.classList.add('activeaccent');
                    }, 2500)
                }
            })
        });
    }

   
}



// ================================

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
    responsive: [ // Позволяет задавать брэйкпоинты для слайдера

        {
            breakpoint: 1288, // Указываем ширину экрана при которой срабатывает брэйкпоинт
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
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 571, // Указываем ширину экрана при которой срабатывает брэйкпоинт
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
                //  centerMode: true,
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
chooseNews();
//вызов бургера модалки и уведомлений
burger();