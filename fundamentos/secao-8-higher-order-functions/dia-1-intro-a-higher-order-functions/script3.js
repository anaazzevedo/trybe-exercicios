const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const estudante1 = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaRespostas = (solucoes, respostaEstudante) => {
    if(solucoes === respostaEstudante){
        return 1;
    }
    if(respostaEstudante === 'N.A'){
        return 0;
    }
    return -0.5;
};

const resultado = (solucoes, respostaEstudante, callback) => {
    let pontuação = 0;
    for(let index=0; index<solucoes.length; index+=1){
        const count = callback(solucoes[index], respostaEstudante[index]);
            pontuação += count;
    }
    return `Sua pontuação é: ${pontuação}`;
};

console.log(resultado(gabarito, estudante1, comparaRespostas));

