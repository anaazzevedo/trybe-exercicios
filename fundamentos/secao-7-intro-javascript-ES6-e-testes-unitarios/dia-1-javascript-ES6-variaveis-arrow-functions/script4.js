
// let trasformArray = frase.split(' ');
// let maiorPalavra = ' ';

// for(let index=0; index<trasformArray.length; index+=1){
//     let arrayDaFrase = trasformArray[index];
//     if(arrayDaFrase.length > maiorPalavra.length){
//         maiorPalavra = arrayDaFrase;
//     }
// }
// console.log(maiorPalavra)

function maiorPalavra(frase){
    let trasformArray = frase.split(' ');
    let maiorPalavraDaFrase = ' ';
    for(let index=0; index<trasformArray.length; index+=1){
        let arrayDaFrase = trasformArray[index];
        if(arrayDaFrase.length > maiorPalavraDaFrase.length){
            maiorPalavraDaFrase = arrayDaFrase;
        }
    }
    console.log(maiorPalavraDaFrase);
}
let ex = 'Antônio foi ao banheiro e não sabemos o que aconteceu';
maiorPalavra(ex);

