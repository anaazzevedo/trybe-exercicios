function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
    createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function diasDoMes(){
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const todosOsDiasDoMes = document.querySelector('#days');

  for(let index=0;index<decemberDaysList.length;index+=1){
    const days = decemberDaysList[index];
    const elementoParaOsDias = document.createElement('li');
    elementoParaOsDias.innerHTML = days;
    elementoParaOsDias.classList = 'day';
    if(days === 24 || days === 25 || days === 31){
        elementoParaOsDias.className = 'day holiday';
    }
    if(days === 4 || days === 11 || days === 18 || days === 25){
        elementoParaOsDias.className = 'day friday';
    }
    todosOsDiasDoMes.appendChild(elementoParaOsDias);
  };
};
    diasDoMes();


function botao(){
    const botaoFilhoDe = document.querySelector('.buttons-container');
    let button = document.createElement('BUTTON');
    const id = document.createElement('id');
    button.id = 'btn-holiday';
    button.innerHTML = 'Feriados'
    botaoFilhoDe.appendChild(button);
}

botao();

function mudaCorDeFundo(){
    let diasHoliday = document.querySelectorAll('.holiday');
    let buttonFeriados = document.querySelector('#btn-holiday');

    for(let index = 0; index<diasHoliday.length;index+=1){
        diasHoliday[index].style.backgroundColor = 'grey';
        buttonFeriados = diasHoliday[index];

    }
}
const buttonFeriados = document.querySelector('#btn-holiday');
buttonFeriados.addEventListener('click', mudaCorDeFundo);


function botao2(){
    const botaoFilhoDe = document.querySelector('.buttons-container');
    let button = document.createElement('BUTTON');
    const id = document.createElement('id');
    button.id = 'btn-friday';
    button.innerHTML = 'Sexta-feira'
    botaoFilhoDe.appendChild(button);
}

botao2();

function modificaTextoDeSexta(){
    let friday = document.querySelectorAll('.friday');
    let botaoDeSexta = document.getElementById('btn-friday');
    for(let index=0;index<friday.length;index+=1){
        friday[index].innerHTML = 'sextou';
        botaoDeSexta = friday[index];
    }
}

const buttonSexta = document.querySelector('#btn-friday');
buttonSexta.addEventListener('click', modificaTextoDeSexta);



function mouseOver(event){
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '600';

}
let days = document.querySelector('#days');
days.addEventListener('mouseover', mouseOver);



function mouseOut(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';

}
days.addEventListener('mouseout',mouseOut);


function adicionaTarefa(tarefa){
    let ondeAdd = document.querySelector('.my-tasks');
    let span = document.createElement('span');
    span.innerHTML = tarefa;
    ondeAdd.appendChild(span);
}
adicionaTarefa('Aprender a aprender');


function adicionaCor(cor){
    let ondeAdd = document.querySelector('.my-tasks');
    let div = document.createElement('div');
    div.style.backgroundColor = cor;
    ondeAdd.appendChild(div);

}
adicionaCor('green');


