export function clicking () {

    const clickObject = document.querySelector(".options-color");
    const inputColor = document.querySelector(".input__color");

    if (clickObject) {
        clickObject.addEventListener("click", function (e) {
            inputColor.click();
        });
    }
}