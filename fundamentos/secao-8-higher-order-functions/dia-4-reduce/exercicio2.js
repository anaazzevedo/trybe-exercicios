const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames() {
   return books.reduce((acc, curr) => `${acc} ${curr.author.name},`, '')
}

// console.log(reduceNames());

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const expectedResult = 43;

function averageAge() {
    return books.map((book) => book.releaseYear - book.author.birthYear)
    .reduce((acc, curr) => (acc + curr), 0) / books.length;
};

// console.log(averageAge());

// Encontre o livro com o maior nome.

function longestNamedBook() {
    return books.reduce((maiorNomeDoLivro, livroAtual) => 
    livroAtual.name.length < maiorNomeDoLivro.name.length ? maiorNomeDoLivro : livroAtual)
};

console.log(longestNamedBook());