let addTag = document.getElementsByTagName('body')[0];
let texto = 'Exercício 5.2 - JavaScript DOM';
let criandoTag = document.createElement('h1');
criandoTag.innerText = texto;
addTag.appendChild(criandoTag);
console.log(addTag)


const adicionaElementoMain = document.createElement('main');
adicionaElementoMain.className = 'main-content';
document.body.appendChild(adicionaElementoMain);