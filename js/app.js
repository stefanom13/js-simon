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
const numeriUser = [];
const numeriIndovinati = [];

do {
    const number = getRandomInt(min, max);

    if (numeridaIndovinare.includes(number) === false) {
        numeridaIndovinare.push(number);

    }
} while ( numeridaIndovinare.length < 5 );

console.log(numeridaIndovinare);


alert( ` Memorizza questi 5 numeri ; ${numeridaIndovinare.join(', ')}`)


// dopo 3 secondi chiedere all utente 5 numeri
// (mettere set timeout sotto alert)
setTimeout ( () => {
    
    do {

        const num = parseInt(prompt (`Inserisci un numero compreso tra  ${min} e  ${max}`) );
        numeriUser.push(num);

        if (numeridaIndovinare.includes(num)) {
            numeriIndovinati.push( num );
        } 

    } while (numeriUser.length < numeridaIndovinare.length);

    console.log(numeriUser,numeriIndovinati);

}, 3000 );

// dire all user  quanti e quali numeri ha indovinato