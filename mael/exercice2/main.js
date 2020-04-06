
var nombre = Number(prompt("veuillez entrez un nombre positive pour le calcul du factoriel"));

if(nombre < 0){
    alert("veuiller renter un nombre positif");
} else{
    var f=1,i=1;
	while(i<=nombre){
		f*=i;
		i++;
	}
   document.write(nombre+"! = "+f);
}
	
