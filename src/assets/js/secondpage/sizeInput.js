export function sizeInput() {
    let fileInputs = document.getElementById('breefattach');
    fileInputs.addEventListener('change', sizeInput);
    function sizeInput() {
        const counterSize = document.querySelector('.counter-size__current');
        const filesSize = document.querySelector('.input__attach-standart');
        const sumSize = filesSize.files[0];
        const size = sumSize.size / 1024 / 1024;
        if (size > 1024) {
            return alert("Вы не можете прикрепить файлы размером больше 1Гб");
        } else {
            counterSize.innerText = size.toFixed(2);
        };
    }

}



