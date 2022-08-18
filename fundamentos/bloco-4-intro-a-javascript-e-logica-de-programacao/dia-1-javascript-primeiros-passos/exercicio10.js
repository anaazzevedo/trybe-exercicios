const custo = 100;
const valorDeVenda = 180;
let custoComImposto = (custo * 0.20) + custo;

let lucro = valorDeVenda - custoComImposto;

console.log(lucro * 1000);