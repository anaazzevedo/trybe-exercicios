//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3];
let aux = [];

function retornarMenorIndice(){
    for(let index=0;index < array.length; index +=1){
        if (array[index] < aux){
            aux = (array[index]);
            aux = array.indexOf(aux);
        }
    }
    return aux;
}
console.log(retornarMenorIndice());

