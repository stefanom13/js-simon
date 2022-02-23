// generare 5 numeri casuali  

function getRandomInt(min, max) {
    // 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const min = 1;
const max = 90;
const numeridaIndovinare = [];


do {
    const number = getRandomInt(min, max);

    if (numeridaIndovinare.includes(number) === false) {
        numeridaIndovinare.push(number);
        
    }
} while ( numeridaIndovinare.length < 5 );

console.log(numeridaIndovinare);


// dopo 30 secondi chiedere all utente 5 numeri

// dire all user  quanti e quali numeri ha indovinato