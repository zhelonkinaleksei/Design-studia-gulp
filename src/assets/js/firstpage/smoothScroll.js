export function scroll(){

    const linksItems = document.querySelectorAll('.header__nav__item');
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
           // console.log(targetlink);
        })
        
    });
}