function daquiDoisAnos(){
    let doisAnos = document.getElementsByTagName("p")[1];
    doisAnos.innerText = 'Trabalhando na area de tecnologia';
}
daquiDoisAnos();

function mudaCorAmarela(){
    let mudaPraVerde = document.getElementsByClassName('main-content')[0];
    mudaPraVerde.style.background  = "rgb(76,164,109)";
}
mudaCorAmarela();

function mudaCorVermelha(){
    let mudaPraBranco = document.getElementsByClassName('center-content')[0];
    mudaPraBranco.style.background  = "white";
}
mudaCorVermelha();

function corrigeTexto(){
    let correcao = document.getElementsByTagName('h1')[0];
    correcao.innerText = 'Exercício 5.1 - JavaScript';
}
corrigeTexto();

function tudoMaiusculo(){
    let maiusculo = document.getElementsByTagName('p')[0];
    maiusculo.innerText = maiusculo.innerText.toUpperCase();
}
tudoMaiusculo();

function exibir(){
    let exibe = document.getElementsByTagName('p')[0];
    exibe = exibe.innerText;
    return exibe;
}
console.log(exibir());