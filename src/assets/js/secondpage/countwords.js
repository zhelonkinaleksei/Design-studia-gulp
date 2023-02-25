export function countWords() {
    const ta = document.querySelector('.textarea__comment');
    const counter = document.querySelector('.counter-text__current');
    
    ta.addEventListener('input', onInput);
    
    function onInput(evt){
    const length = evt.target.value.length;
    counter.innerText = length;
    };
    
}