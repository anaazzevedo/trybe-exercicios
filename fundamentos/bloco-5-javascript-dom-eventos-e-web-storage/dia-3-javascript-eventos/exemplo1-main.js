const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function removeEAddClasse(event){
    const classeInicial = document.querySelector('.tech');
    classeInicial.classList.remove('tech');
    event.target.className = 'tech';
}
const primeiroItemLista = document.getElementById('first-li');
const segundoItemLista = document.getElementById('second-li');
const terceiroItemLista = document.getElementById('third-li');

primeiroItemLista.addEventListener('click',removeEAddClasse);
segundoItemLista.addEventListener('click',removeEAddClasse);
terceiroItemLista.addEventListener('click',removeEAddClasse);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function digitarUmTexto(event){
    // const caixaDeTexto = document.getElementById('input');
    const classeTech = document.querySelector('.tech');
    classeTech.innerText = event.target.value;
    // tudo que inserimos na entrada pode ser acessada por event.target.value
}
const caixaDeTexto = document.getElementById('input');
caixaDeTexto.addEventListener('input', digitarUmTexto)
// 'input' - o evento ocorre quando um elemento obtém a entrada do usuário

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function clicaDuasVezes(event){
    const top3 = document.getElementById('my-spotrybefy');
    const redirecione = window.location.href = "https://www.betrybe.com/";
    top3.event.target = redirecione;
}
const top3 = document.getElementById('my-spotrybefy');
top3.addEventListener('dblclick', clicaDuasVezes);


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

function alteraCor(){
    const top3 = document.getElementById('my-spotrybefy');
    top3.style.color = 'black';
} 

top3.addEventListener('mouseleave',alteraCor);
