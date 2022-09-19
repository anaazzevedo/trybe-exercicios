// const testingScope = escopo => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     //   ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
// //     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// //   }
// }
// testingScope(true);


let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
const testingScope = escopo => escopo === true ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) : console.log(elseScope);
testingScope(true);