//4- Um número primo é um número inteiro maior do que 1 que possui 
//somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numerosPrimos = [];
for(let index=2; index <= 50; index+=1){
    if((index % 1 === 0) && (index % index === 0) && (index % 2 !== 0)){
        numerosPrimos = numerosPrimos + "  " + index;    
    }
}    
console.log(numerosPrimos);
