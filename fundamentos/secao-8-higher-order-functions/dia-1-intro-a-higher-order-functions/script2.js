const verificaAposta = (myNum, numAleatorio) => myNum === numAleatorio;

const resultado = (myNum, callback) => {
    const numAleatorio = Math.floor((Math.random() * 5) + 1);
    return callback(myNum, numAleatorio) ? 'Parabens' : 'Tente novamente, número sorteado foi: ' + numAleatorio;
};

console.log(resultado(3, verificaAposta));