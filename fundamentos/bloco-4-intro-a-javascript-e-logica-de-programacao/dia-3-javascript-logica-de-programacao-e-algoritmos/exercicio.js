//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let resultado = 1;
for(let index = fatorial; index >= 1; index-=1){
    resultado = resultado + " x " + index;
}
console.log(resultado);

 