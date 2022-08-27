//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3];
let qualNumeroMaisRepete = [];

for(let index=0;index<array.length;index+=1){
    console.log(array[index])
        if(array[index] === array[index]){
            qualNumeroMaisRepete = array[index] + 1;
            console.log("o número que mais se repete é: " + qualNumeroMaisRepete[index])
        }
    }

