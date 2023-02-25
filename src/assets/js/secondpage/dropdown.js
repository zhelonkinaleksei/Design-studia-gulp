export function dropdown(){
    
document.querySelectorAll('.custom__dropdown').forEach(function (dropDownWrapper) {

    const dropdownButton = dropDownWrapper.querySelector('.dropdown__button');
    const dropdownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropdownListItems = dropdownList.querySelectorAll('.dropdown__list-item');
    const dropdownInput = dropDownWrapper.querySelector('.dropdown__input');


    dropdownButton.addEventListener('click', function(e){
        dropdownList.classList.toggle('dropdown__list-active');
    });

    dropdownListItems.forEach(function(listItem){
        listItem.addEventListener('click', function(){
            dropdownButton.innerText = this.innerText;
            dropdownInput.value = this.dataset.value;
            dropdownList.classList.remove('dropdown__list-active');
        })
    })

    document.addEventListener('click', function (e) {
        if (e.target !== dropdownButton) {
            dropdownList.classList.remove('dropdown__list-active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropdownList.classList.remove('dropdown__list-active');
        }
    });

});





}