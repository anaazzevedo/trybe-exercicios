window.onload = function(){
    let backGroundColor = document.querySelector('#background-color');
    backGroundColor.addEventListener('change',mudaCorBakcground)
}

function mudaCorBakcground(){
    let backGroundc = document.getElementById('background-color');
    let paragrafo = document.querySelector('.content');
    for(index = 0; index < backGroundc.children.length; index+=1){
        if(backGroundc[index] === backGroundc[index][2]){
            paragrafo.style.backGroundColor = 'black';
        }
    }
}
