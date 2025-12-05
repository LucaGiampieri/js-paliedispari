/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//chiamiamo l'utente a scegliere pari o dispari
let pariDispari = prompt('Scegli se il risutalto finale sarà pari o dispari')
while (pariDispari !== 'pari' && pariDispari !== 'dispari' && pariDispari !== 'Pari' && pariDispari !== 'Dispari') {
    alert('Scelta non valida! Ritenta.');
    pariDispari = prompt('Scrivi solo "pari" o "dispari"');
}    
//chiamiamo l'utente a scegliere un numero da 1 a 5
let numUser = prompt('Scegli un numero da 1 a 5')
while (numUser < 1 || numUser > 5){
    alert('Scelta non valida! Ritenta.');
    numUser = prompt('Puoi scegliere solo un numero da 1 a 5')
}
//genero un numero random da 1 a 5 per il computer
numComputer = genNumRandInRange(1,5);
console.log(numComputer);









//creo una funzione che genera un numero random da 1 5
function genNumRandInRange(min,max){
    return Math.floor(Math.random() * (max -min)) + min;
}