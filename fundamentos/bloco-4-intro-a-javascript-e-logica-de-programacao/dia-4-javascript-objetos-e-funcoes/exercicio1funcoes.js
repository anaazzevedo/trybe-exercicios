//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// let string = 'ama';
// let aux = '';

// function palavraAoContrario(){
//     for(let index=string.length - 1; index >=0; index-=1){
//         aux+=string[index];
//     }
//     return aux;
// }
// console.log(palavraAoContrario());


// function imprimirPalavra(){
//     for(let index=0; index < string.length; index+=1){
        
//     }
//     return string;
// }
// console.log(imprimirPalavra());


// function palindromo(){
//     if(palavraAoContrario() !== imprimirPalavra()  ){
//         return (" essa palavra não é um palindromo");
//     }

//     else if(palavraAoContrario() == imprimirPalavra()  ){
//         return (" essa palavra é um palindromo");
//     }
    
    
// }

let string = 'banana';
let aux = '';
let for1 = '';
let for2 = '';
    for(let index=string.length - 1; index >=0; index-=1){
        for1 = (aux+=string[index]);
    }
    for(let index=0; index < string.length; index+=1){ 
        for2 = (aux = string);  
    }
function palindromo(){
    if( for1 !== for2  ){
        return (" essa palavra não é um palindromo");
    }

    else if( for1 === for2 ){
        return (" essa palavra é um palindromo");
    }
}
        



console.log(palindromo());