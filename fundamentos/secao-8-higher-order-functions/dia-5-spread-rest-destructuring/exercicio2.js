function sum(...numeros) {
    return numeros.reduce((valorIni, valorAtu) => valorIni + valorAtu);
};

console.log(sum(4,5,6));
