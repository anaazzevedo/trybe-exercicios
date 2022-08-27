//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];
let aux = [];

function retornarMaiorIndice(){
    for(let index=0;index < array.length; index +=1){
        if (array[index] > aux){
            aux = (array[index]);
            aux = array.indexOf(aux);
        }
    }
    return aux;
}
console.log(retornarMaiorIndice());