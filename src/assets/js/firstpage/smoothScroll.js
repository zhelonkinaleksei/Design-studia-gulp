export function scroll(){
    const menuIcon = document.querySelector(".menu__icon");
    const headerNav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');
    const linksItems = document.querySelectorAll('.header__nav__item');
    const body = document.querySelector('body');
    linksItems.forEach(element => {
        element.addEventListener('click', (event)=>{
            event.preventDefault();
            let href = element.dataset.link;
            let targetlink = document.getElementById(href);
            let targetPosition = targetlink.getBoundingClientRect().top;

            window.scrollBy({
                top: targetPosition,
                behavior: "smooth"
            })

            if (headerNav.classList.contains('_actived')){
                headerNav.classList.remove('_actived');
                header.classList.remove('activebg');
                body.classList.remove('_lock');
                menuIcon.classList.remove("_active");
            }
            
           // console.log(targetlink);
        })
        
    });
}