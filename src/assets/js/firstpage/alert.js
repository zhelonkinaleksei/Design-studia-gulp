//====================================alert===========================

export function alertButton() {
    const alert = document.querySelector('.alert');
    const arrayalertButton = document.querySelectorAll("#portfolio");
    const alertContent = document.querySelector('.alert__content');
    const header = document.querySelector('.header');
    // console.log(arrayalertButton);

    arrayalertButton.forEach(alertButton => {
        if (alertButton) {


            alertButton.addEventListener("click", function (event) {
                event.preventDefault();
                alert.classList.add("_open-alert");

                setTimeout(function () {
                    alert.style.opacity = "1";
                }, 400)

                if(header.classList.contains('activebg')){
                    header.classList.remove('activebg');
                }
            });
        };

    });


    const alertCancel = document.querySelector('.alert__cancel');

    if (alertCancel) {
        // console.log(alertCancel)
        alertCancel.addEventListener("click", function () {
            alert.style.opacity = "0";

            setTimeout(function () {
                alert.classList.remove("_open-alert");

            }, 400)
        });
    }

    alertContent.addEventListener('click', (event) => {
        event.stopPropagation();
    })
    alert.addEventListener('click', () => {
        alert.style.opacity = "0";
        setTimeout (function() {
            alert.classList.remove("_open-alert");

        },400)    })
}