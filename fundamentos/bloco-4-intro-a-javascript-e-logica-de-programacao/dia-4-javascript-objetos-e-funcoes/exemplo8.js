//Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos 
//eles sejam funções de um mesmo arquivo. As variáveis que você define no começo 
//de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// const a = 10;
// const b = 5;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao, subtracao, multiplicacao, divisao, modulo);

function adicao (a,b){
    return a + b;
}
console.log(adicao(2,5));


function subtracao(a,b){
    return a - b;
}
console.log(subtracao(2,4));


function multiplicacao(a,b){
    return a * b;
}
console.log(multiplicacao(30,4));


function divisao(a,b){
    return a / b;
}
console.log(divisao(10,2));

function modulo(a,b){
    return a % b;
}
console.log(modulo(20,3));



// const n1 = 20;
// const n2 = 23;

// if(n1 > n2){
//     console.log(n1 + " é maior que " + n2)
// }
// else(
//     console.log(n2 + " é maior que " + n1)
// )

function numeroMaior(n1,n2){
    if(n1 > n2){
        return(n1 + " é maior que " + n2);
    }
    else{
        return(n2 + " é maior que " + n1);
    }
}
console.log(numeroMaior(2,10));


// const n1 = 20;
// const n2 = 23;
// const n3 = 18;

// if(n1 > n2 && n1 > n3){
//     console.log(n1 + " é maior que " + n2 + " e " + n3)
// }
// else if(n2 > n1 && n2 > n3){
//     console.log(n2 + " é maior que " + n1 + " e " + n3)
// }

// else(
//     console.log(n3 + " é maior que " + n1 + " e " + n2)
// )

function numeroMaiorDeTres(n1,n2, n3){
    if(n1 > n2 && n1 > n3){
        return(n1 + " é maior que " + n2 + " e " + n3)
    }
    else if(n2 > n1 && n2 > n3){
        return(n2 + " é maior que " + n1 + " e " + n3)
    }
    
    else{
        return(n3 + " é maior que " + n1 + " e " + n2)
    }
}
console.log(numeroMaiorDeTres(2,10,8));


// let numero = 0;

// if(numero > 0){
//     console.log("positive")
// }
// else if(numero < 0){
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }


function valoresPositivosOuNegativos(numero){
    if(numero > 0){
        return("positive")
    }
    else if(numero < 0){
        return("negative")
    }
    else{
        return("zero")
    }
}
console.log(valoresPositivosOuNegativos(0));


// const angulo1 = 100;
// const angulo2 = 50;
// const angulo3 = 30;

// if(angulo1 + angulo2 + angulo3 === 180){
//     console.log(true)
// }
// else if(angulo1 + angulo2 + angulo3 != 180){
//     console.log(false)
// }
// else if(angulo1 || angulo2 || angulo3 < 0){
//     console.log("valor do angulo invalido")
// } 

function calculaTriangulo(a1,a2,a3){
    if(a1 + a2 + a3 === 180){
        return(true);
    }
    else if(a1 + a2 + a3 != 180){
        return(false);
    }
    else if(a1 || a2 || a3 <= 0){
        return("valor do angulo invalido");
    }
}
console.log(calculaTriangulo(10,-20,-30));