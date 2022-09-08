// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function href(event){
    event.preventDefault();
}
HREF_LINK.addEventListener('click',href);
INPUT_CHECKBOX.addEventListener('click', href)

function key(event){
    const keyPress = event.key;
    if(keyPress !== 'a'){
        event.preventDefault();
    }
}
INPUT_TEXT.addEventListener('keypress', key)