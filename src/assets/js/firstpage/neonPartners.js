
export function neonPartners() {
    let partners = document.querySelector('#partners');
    let itemSlide = document.querySelector('.slick-slider');

    partners.addEventListener('click', () => {
        itemSlide.classList.toggle('neon');
    })
}