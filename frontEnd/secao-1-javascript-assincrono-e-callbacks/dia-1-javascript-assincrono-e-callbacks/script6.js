const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
// A função sendMarsTemperature imprima no console o seguinte texto: 
//“A temperatura de Marte é: temperaturaAtual graus celsius” onde, 
//temperaturaAtual é o valor recebido da função getMarsTemperature

const sendMarsTemperature = () => {
    console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`);
};

setTimeout(() => (sendMarsTemperature()), messageDelay); 
// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo