// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./script8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    // Escreva aqui seu código
    expect(getPokemonDetails('aalp')).toThrowError(Error('Não temos esse pokémon para você :('));
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    // Escreva aqui seu código
    expect(getPokemonDetails('Squirtle')).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água');
  });
});
