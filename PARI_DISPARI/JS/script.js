/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//chiamiamo l'utente a scegliere pari o dispari
let userChoice = prompt('Scegli se il risutalto finale sarà pari o dispari');
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    alert('Scelta non valida! Ritenta.');
    userChoice = prompt('Scrivi solo "pari" o "dispari"');
}    
//stampo la sua scelta
console.log(`la tua scelta è: ${userChoice}`)

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

//indetifico la somma in pari o disapri
numSommaEvenOdd = evenOrOdd(numbersSum);
//stampo il risultato 
console.log(`La somma dei due numeri è: ${numSommaEvenOdd}`);

//identifico il vincitore
userWinOrLose = winner(userChoice, evenOrOdd(numbersSum));
//stampo il risultato
console.log(userWinOrLose);




//////////////FUNZIONI

//creo una funzione che genera un numero random in un range
function genNumRandInRange(min,max){
    //creo e restituisco un range in cui si possono generare i numeri
    return Math.floor(Math.random() * (max -min)) + min;
}

//creo una funzione per sommare due variabili
function numSum (num1, num2){
    //faccio sommare i due dati
    let sum = num1 + num2;
    //restituisco la somma
    return sum
}

//creo una funzione per vedere se un numero è pari o dispari
function evenOrOdd (number){
    //creo una variabile che parta da dispari
    let evenOdd = 'dispari';
    //gli faccio valutare se il numero sia pari
    if (number % 2 === 0){
        //cambio la variabile in pari se la condizione è rispettata
        evenOdd = 'pari'
    }
    //restituisco il risultato
    return evenOdd;
}

//creo una funzione per identificare il vincitore
function winner (userData, compare){
    //creo una variabile che parta dalla sconfitta
    let winOrLose = 'HAI PERSO :(';
    //gli faccio valutare se la scelta dell'utente corrisponda con il risultato effettivo
    if (userData === compare){
        //cambio la varibile in vittoria nel caso la condizione sia rispettata
        winOrLose = 'HAI VINTO :)'
    }
    //restituisco il risultato
    return winOrLose;
}


