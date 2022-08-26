//2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com 
//as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for(let infos in car){
    console.log(infos, car[infos]);
}