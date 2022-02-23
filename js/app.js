// generare 5 numeri casuali  
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const min = 1;
const max = 90;
const numeridaIndovinare = [];




// dopo 30 secondi chiedere all utente 5 numeri

// dire all user  quanti e quali numeri ha indovinato