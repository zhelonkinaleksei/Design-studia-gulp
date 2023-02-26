//======================popup===================


export function buttonOrder() {

    const popup = document.querySelector('.popup');
    const popupbody = document.querySelector('.popup__body');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const popupsButtons = document.querySelectorAll("#order");

    popupsButtons.forEach(popupButton => {
        popupButton.addEventListener('click', (event) => {
            event.preventDefault();
            popup.classList.add('active');
            body.classList.add('_lock');

            setTimeout(function () {
                popup.style.opacity = '1';
            }, 400)

            if(header.classList.contains('activebg')){
                header.classList.remove('activebg');
            }
        })
    });
}

function removeClass(parent) {
    parent.style.opacity = '0';
    setTimeout(function () {
        parent.classList.remove('active');
    }, 400)
}

export function popupCancel() {
    const popup = document.querySelector('.popup');
    const popupbody = document.querySelector('.popup__body');
    const cancel = document.querySelector('.form__cancel__close');
    const body = document.querySelector('body');

    cancel.addEventListener('click', () => {
        removeClass(popup);
        body.classList.remove('_lock');
        if (popup.classList.contains('_lock')) {
            popup.classList.remove('_lock');
        }
    })
    popupbody.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    popup.addEventListener('click', () => {
        removeClass(popup);
        body.classList.remove('_lock');
        if (popup.classList.contains('_lock')) {
            popup.classList.remove('_lock');
        }
    })

}
