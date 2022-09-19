function substituaX(nome){
    const frase = 'Trybe x aqui!';
    let arrayDaFrase = frase.split(' ');
    for(let index=0; index<arrayDaFrase.length; index+=1){
        if(arrayDaFrase[index] === 'x'){
            arrayDaFrase[index] = nome;
        }
        
    }
    return arrayDaFrase.join(' ');
}
console.log(substituaX('ana'))