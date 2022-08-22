const currentHour = 20;
let message = " ";

if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if(currentHour >= 18 && currentHour <22){
    message = "Rango da noite, vamos jantar :D";
}
else{
    message = "hmmm, cafe";
}
console.log(message);