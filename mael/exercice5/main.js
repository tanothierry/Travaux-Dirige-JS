var nombre1 = Number(prompt("Veuillez Entrer le premier nombre"));
var nombre2 = Number(prompt("Veuillez Entrer le second nombre"));
var nombre3 = Number(prompt("Veuillez Entrer le troisieme nombre"));

if(nombre1 === nombre2 && nombre1 === nombre3){
    document.write("les nombres sont Identique Merci ");
}else if((nombre1 === nombre2) || (nombre1 === nombre3) || (nombre2 === nombre3)){
    document.write("Deux Nombres sont identiques");
}else{
    document.write("les nombres sont pas identiques");
}

