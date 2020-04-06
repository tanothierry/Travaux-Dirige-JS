
// On cherche les nombres premiers jusqu'à max
var max = 100;

for(i = 1; i <= max; i++) {

var j = 1;
var racine = Math.floor(Math.sqrt(i));

do {
    j++;
    } while(j <= racine && i%j != 0);

    if(j > racine) {

    // On affiche les nombres premiers trouvés
    document.write(i +"<br>")

    }
}