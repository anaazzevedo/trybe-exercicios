function criaElementos(elemento, classes){
    const aux = document.createElement(elemento);
    aux.className = classes;
    return aux;
}

let addTag = document.getElementsByTagName('body')[0];
let texto = 'Exercício 5.2 - JavaScript DOM';
let criandoTag = document.createElement('h1');
criandoTag.innerText = texto;
addTag.appendChild(criandoTag);

const adicionaElementoMain = document.createElement('main');
adicionaElementoMain.className = 'main-content';
document.body.appendChild(adicionaElementoMain);

// let adiconaElementoSection = document.createElement('section');
let addTag2 = document.getElementsByTagName('main')[0];
// adiconaElementoSection.className = 'center-content';
addTag2.appendChild(criaElementos('section', 'center-content'));

let adicionaElementoP = document.createElement('p');
let addTag3 = document.getElementsByTagName('section')[0];
adicionaElementoP.innerText = 'Algum texto';
addTag3.appendChild(adicionaElementoP);

let adiconaElementoSection2 = document.createElement('section');
let addTag4 = document.getElementsByTagName('main')[0];
adiconaElementoSection2.className = 'left-content';
addTag4.appendChild(adiconaElementoSection2);

let adiconaElementoSection3 = document.createElement('section');
let addTag5 = document.getElementsByTagName('main')[0];
adiconaElementoSection3.className = 'right-content';
addTag5.appendChild(adiconaElementoSection3);

let adicionaImagem = document.createElement('img');
let addImg = document.getElementsByTagName('section')[1];
adicionaImagem.className = 'small-image';
adicionaImagem.setAttribute('src', 'https://picsum.photos/200');
addImg.appendChild(adicionaImagem);

// let adicionaElementoLista = document.createElement('ul');
// let addTag6 = document.getElementsByTagName('section')[2];
// addTag6.appendChild(adicionaElementoLista);
// let array = ['um','dois','tres','quatro','cinco','seis'];
// for (let index=0;index=array.length;index+=1){
//     const criaLista = document.createElement('li');
//     criaLista.innerText = array[index];
//     adicionaElementoLista.appendChild(criaLista);
// }

let addTag7 = document.getElementsByTagName('main')[0];
addTag7.appendChild(criaElementos('h3'))

let addTag8 = document.getElementsByTagName('main')[0];
addTag8.appendChild(criaElementos('h3'))

let addTag9 = document.getElementsByTagName('main')[0];
addTag9.appendChild(criaElementos('h3'))





 