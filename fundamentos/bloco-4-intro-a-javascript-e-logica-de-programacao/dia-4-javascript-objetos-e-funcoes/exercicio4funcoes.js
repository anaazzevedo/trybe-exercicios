//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let aux = [];

function maiorNome (){
    for(let index=0; index < array.length; index+=1){
        if(array[index].length > aux.length){
            aux = (array[index]);
        }
    } return aux;
}

console.log(maiorNome());
