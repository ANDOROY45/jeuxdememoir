const cartes  = document.querySelectorAll('.carte');

let carteRetournee = false;
let premierCarte, secondeCarte;
let verouillage  = false;

cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})
function retourneCarte(){
    if(verouillage)return;

this.childNodes[1].classList.toggle('active');

    if(!carteRetournee){
        carteRetournee = true;
        premierCarte = this;
        return;
    }

    carteRetournee = false;
    secondeCarte = this;

    // console.log(premierCarte, secondeCarte);
    correspondance();

}

function correspondance(){

    if(premierCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')){

        premierCarte.removeEventListener('click', retourneCarte);
        secondeCarte.removeEventListener('click', retourneCarte);
    } else {
        verouillage = true;
        setTimeout(() => {

            
            premierCarte.childNodes[1].classList.remove('active');
            secondeCarte.childNodes[1].classList.remove('active');
            verouillage = false;      
        }, 1500)
    }
}
function aleatoire(){
    cartes.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}
aleatoire();