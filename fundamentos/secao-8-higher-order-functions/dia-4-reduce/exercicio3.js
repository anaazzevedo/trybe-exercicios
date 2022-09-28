// Dado o array de nomes, utilize o reduce para retornar a quantidade 
// de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
// const expectedResult = 20;

function containsA(array) {
    let totalOfLettersA = 0;
    array.forEach((names) => {
        const newArr = names.split('');
        totalOfLettersA += newArr.reduce((valorIni, valorAtu) => {
        if (valorAtu === 'a' || valorAtu === 'A') {
            return valorIni + 1;
        }
        return valorIni;
    }, 0)   
    });
    return totalOfLettersA;  
};

console.log(containsA(names));
