/* **Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//chiediamo all'utente una parola
const word = prompt('Inserisci qui la tua parola');
console.log(palindromeVerifier(reverseWord(word),word));

//impostiamo la funzione per reversare la stringa
function reverseWord(string){
    //assegnamo una variabile per far uscire la parola reversata
    let reverseString = '';
    //trasformiamo la stringa in minuscolo per non dare problemi con eventuali lettere maiuscole o miuscole
    let lowerCaseString = string.toLowerCase()
    //facciamo partire un ciclo che parte dal massimo della lunghezza della parola fino a 0
    for (i = string.length -1; i >= 0; i--){
        //a ogni giro facciamo aggiungiamo la lettera che corrisponde all'indice
        reverseString = reverseString + lowerCaseString[i]
    }    
    //andiamo a far ritornare il risultare
    return reverseString;
    }
//impostiamo una funzione che controlla se la parola sia palindroma o meno     
function palindromeVerifier(original, reversed){
     //assegnamo una variabile booleana falsa da usare nel caso la parola non sia palindroma
    let Verifier = false;
    //andiamo a verificare se la parola ribaltata sia uguala alla parola non ribaltata
    if (original.toLowerCase() === reversed.toLowerCase()) {
       Verifier = true;
    }
    //andiamo a far ritornare il risultare
    return Verifier;
}


