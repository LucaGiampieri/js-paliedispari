/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//chiamiamo l'utente a scegliere pari o dispari
let pariDispari = 'pari'; //prompt('Scegli se il risutalto finale sarà pari o dispari');
while (pariDispari !== 'pari' && pariDispari !== 'dispari' && pariDispari !== 'Pari' && pariDispari !== 'Dispari') {
    alert('Scelta non valida! Ritenta.');
    pariDispari = prompt('Scrivi solo "pari" o "dispari"');
}    
//stampo la sua scelta
console.log(`la tua scelta è: ${pariDispari}`)

//chiamiamo l'utente a scegliere un numero da 1 a 5
let numUser = Number(prompt('Scegli un numero da 1 a 5'))
while (numUser < 1 || numUser > 5){
    alert('Scelta non valida! Ritenta.');
    numUser = Number(prompt('Puoi scegliere solo un numero da 1 a 5'))
}
//stampo il numero da lui scelto
console.log(`Il numero da te scelto è: ${numUser}`);

//non posso generare il numero random al di fuori della stringa finale altrimenti me lo cambia
//quindi:
console.log('Il computer ha generato casualmente il suo numero');

//la somma la volevo mettere sempre nella stringa finale ma non ho modo di verificare se funziona quindi la metto ora
let numbersSum = numSum(genNumRandInRange(1,5),numUser);
//la stampo
console.log(`La somma dei due numeri è: ${numbersSum}`);

numSommaEvenOdd = evenOdd(numbersSum);
console.log(numSommaEvenOdd)




//////////////FUNZIONI

//creo una funzione che genera un numero random da 1 5
function genNumRandInRange(min,max){
    return Math.floor(Math.random() * (max -min)) + min;
}

//creo una funzione per sommare due variabili
function numSum (num1, num2){
    let sum = num1 + num2;
    return sum
}

//creo una funzione per vedere se un numero è pari o dispari
function evenOdd (number){
    let evenOdd = 'odd';
    if (number % 2 === 0){
        evenOdd = 'even'
    }
    return evenOdd;
}

