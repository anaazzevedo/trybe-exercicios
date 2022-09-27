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

function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
};

// console.log(formatedBookNames());

function authorAndAges() {
    return books.map((book) => ({
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name
    })).sort((age1, age2) => age1.age - age2.age);
};

// console.log(authorAndAges());
// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function genreFantayOrFiction() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
};

// console.log(genreFantayOrFiction());

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. 
// Esse array deve ser ordenado do livro mais velho ao mais novo.

function oldBooksOrdered() {
  return books.filter((book) => (2022 - book.releaseYear) > 60)
  .sort((a,b) => a.releaseYear - b.releaseYear);
};

// console.log(oldBooksOrdered());

// Crie um array em ordem alfabética apenas com os nomes de todas 
//as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  .map((book) => book.author.name).sort();
}

// console.log(fantasyOrScienceFictionAuthors());

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  return books.filter((book) => (2022 - book.releaseYear) > 60)
  .map((book) => book.name);
};

// console.log(oldBooks());

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.


function authorWith3DotsOnName() {
  return books.find((book) => (book.author.name.split(' '))
  .filter((element) => element.endsWith('.')).length === 3).name;
};

console.log(authorWith3DotsOnName());