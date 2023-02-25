//======================popup===================


export function buttonOrder() {

    const popup = document.querySelector('.popup');
    const popupbody = document.querySelector('.popup__body');
    const body = document.querySelector('body');

    const popupsButtons = document.querySelectorAll("#order");

    popupsButtons.forEach(popupButton => {
        popupButton.addEventListener('click', () => {
            popup.classList.add('active');
            body.classList.add('_lock');

            setTimeout(function () {
                popupbody.style.opacity = '1';
            }, 400)
        })
    });
}

function removeClass(parent, child) {
    child.style.opacity = '0';
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
        removeClass(popup, popupbody);
        body.classList.remove('_lock');
        if (popup.classList.contains('_lock')) {
            popup.classList.remove('_lock');
        }
    })
    popupbody.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    popup.addEventListener('click', () => {
        removeClass(popup, popupbody);
        body.classList.remove('_lock');
        if (popup.classList.contains('_lock')) {
            popup.classList.remove('_lock');
        }
    })

}
