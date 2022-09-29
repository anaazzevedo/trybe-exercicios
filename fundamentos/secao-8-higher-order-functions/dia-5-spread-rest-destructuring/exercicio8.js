// escreva greet abaixo

function greet(nome, saudadacao = 'Hi') {
    return `${saudadacao} ${nome}`;
};


// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'