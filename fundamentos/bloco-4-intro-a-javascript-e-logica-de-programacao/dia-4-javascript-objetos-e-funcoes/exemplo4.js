//4 - Acesse a chave bestInTheWorld e faça um console.log no 
//seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

let player = {
    nome: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}
console.log("A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes nos anos de: " + player['bestInTheWorld']);
