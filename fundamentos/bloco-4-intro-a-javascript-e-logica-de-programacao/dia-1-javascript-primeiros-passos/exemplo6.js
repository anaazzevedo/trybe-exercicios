let estadoNoProcessoSeletivo = "Aprovado";

switch (estadoNoProcessoSeletivo){
    case "Reprovado":
        console.log("sinto muito");
        break;
    
    case "Aprovado":
        console.log("Parabéns");
        break;
        
    case "Lista de espera":
        console.log("Você está na lista de espera");
        break;
        
    default:
        console.log("Não se aplica");

}