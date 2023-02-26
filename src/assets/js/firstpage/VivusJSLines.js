import Vivus from "vivus";


export function VivusLines() {
    const title = document.querySelector('#section__news--title');

    const lineLeft = new Vivus(
        'svg__line__left',
        {
            type: 'delayed',
            duration: 100,
            animTimingFunction: Vivus.EASE,
            start: 'manual'
        },
    );

    const lineRight = new Vivus(
        'svg__line__right',
        {
            type: 'delayed',
            duration: 100,
            animTimingFunction: Vivus.EASE,
            start: 'manual'
        },
    );

    const lineCenter = new Vivus(
        'svg__line__center',
        {
            type: 'delayed',
            duration: 100,
            animTimingFunction: Vivus.EASE,
            start: 'manual'
        },
    );

    //запуск анимации
    function playLineLeft() {
        lineLeft.stop().reset().play(() => {
            title.classList.add('activeaccent');
        });

    }
    function playLineCenter() {
        lineCenter.stop().reset().play(() => {
            title.classList.add('activeaccent');
        }

        );
    }
    function playLineRight() {
        lineRight.stop().reset().play(() => {
            title.classList.add('activeaccent');
        });
    }

    //функции удаления  анимации и цвета тайтла

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

        if (screenWidth >= 1300) {
            const linesItem = document.querySelectorAll('#section__top__card');

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
                    }
                    else if (element.dataset.center === 'center') {
                        //убираем анимацию
                        removeAnimation();
                        removeColorTitle();

                        //добавляем анимацию и красимtitle
                        playLineCenter();
                    }
                    else if (element.dataset.right === 'right') {
                        //убираем анимацию
                        removeAnimation();
                        removeColorTitle();

                        //добавляем анимацию и красимtitle
                        playLineRight();
                    }
                })
            });
        }


    }


    //вызов активной новости//карточки
    chooseNews();
}