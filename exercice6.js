//Déclare la variable age
var num1=prompt('Veuillez entrer votre age');

while(isNaN(num1) || num1=="") // Si la valeur entrer est une chaine de caractère ou est vide
{
    alert("Vous n'avez pas entré de chiffre"); 
    var num1=prompt('Veuillez votre age');
 }
 while(num1>17 || isNaN(num1)) //Si la valeur est supérieur a 17 ans
 {
     alert("Désolé vous avez inserez une valeur supérieur a 17 ans");
     num1Convert=parseInt(num1);
     alert("Vous avez inséré " + num1Convert);
     var num1=prompt('Veuillez entrer un age inférieur a 17 ans');
 }

if(num1>=6 && num1<=7)
{
    alert("Vous etes poussin");
}else if(num1>=8 && num1<=9){
    alert("Vous etes pupille");
}else if(num1>=10 && num1<=11){
    alert("Vous etes minime");
}else{
    alert("Vous etes cadet");
}
