//====================================alert===========================

export function alertButton() {
    const alert = document.querySelector('.alert');
    const arrayalertButton = document.querySelectorAll("#portfolio");
    const alertContent = document.querySelector('.alert__content');
    // console.log(arrayalertButton);

    arrayalertButton.forEach(alertButton => {
        if (alertButton) {


            alertButton.addEventListener("click", function () {
                alert.classList.add("_open-alert");

                setTimeout(function () {
                    alert.style.opacity = "1";
                }, 400)
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