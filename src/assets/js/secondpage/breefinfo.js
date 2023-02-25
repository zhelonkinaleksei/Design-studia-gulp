export function breefInfo(){
    const breefInfo = document.querySelector('.section__breef-tille');
const breefInfoDetails = document.querySelector('.breef__title-details');
const breeInfoDetailsTwo = document.querySelector('.form__send-button');

breefInfo.addEventListener('mouseover', function(){
    breefInfoDetails.classList.add('breef__title-details-active')
});
breefInfo.addEventListener('mouseout', function(){
    breefInfoDetails.classList.remove('breef__title-details-active')
});
}

