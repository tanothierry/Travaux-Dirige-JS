let btn = document.getElementById('btn');
let isValid = true;
btn.addEventListener('click', function(){
    let age =parseInt(prompt('Quel age avez vous?'));
    if(age === null || typeof(age) !== 'Number'){
        isValid = false;
    }else{
        isValid = true;
    }
    if(isValid = true){
        if(age == 6 || age == 7){
            alert('Poussin');
        }else if(age == 8 || age == 9){
            alert('Pupille');
        }else if(age == 10 || age == 11){
            alert('Minime');
        }else if(age >= 12 && age <= 17){
            alert('Cadet');
        }else{
            alert('Erreur ');
        }
    }else{
        alert('Erreur ');
    }
})
