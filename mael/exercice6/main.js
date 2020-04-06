var btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    var categorie = Number(prompt("Veuillez entrer son age"));
    
    if(categorie > 0 && categorie <= 7){
        alert("categorie de votre enfant est poussin");
    } else  if(categorie > 7 && categorie <= 9){
        alert("categorie de votre enfant est Pupile");
    } else  if(categorie > 9 && categorie <= 11){
        alert("categorie de votre enfant est Minime");
    } if(categorie > 11 && categorie <= 17){
        alert("categorie de votre enfant est Cadet");
    } else if(categorie > 17){
        alert("veuillez entrer un nombre compris entre 0 et 17");
    }   
})