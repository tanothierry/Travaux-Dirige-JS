
var num1=prompt('Entrez un chiffre');
while(isNaN(num1)){
    alert("Vous n'avez pas entré de chiffre"); 
    var num1=prompt('Veuillez entrez un chiffre');
 }

var num2=prompt('Entrez un second chiffre');
while(isNaN(num2)){
    alert("Vous n'avez pas entré de chiffre");
    var num2=prompt('Veuillez entrez un chiffre');
 }

var num3=prompt('Entrez un troisième chiffre');
while(isNaN(num3)){
    alert("Vous n'avez pas entré de chiffre");
    var num3=prompt('Veuillez entrez un chiffre');
 }
 //Conversion des chaines de caractère en valeur numériques
var num1Convert=parseInt(num1),num2Convert=parseInt(num2),num3Convert=parseInt(num3);

if(num1Convert==num2Convert==num3Convert)
{
    alert('Les trois variables sont égales');
}else if(num1Convert===num2Convert || num1Convert===num3Convert || num2Convert===num3Convert)
{
    alert("Deux des variables ont des valeurs égales");
}else{
    alert("les trois variables sont differentes");
}
