/* **Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//chiediamo all'utente una parola
const word = prompt('Inserisci qui la tua parola');
console.log(reverseWord(word));

//impostiamo la funzione per reversare la stringa
function reverseWord(string){
    //assegnamo una variabile per far uscire la parola reversata
    let reverseString = '';
    //assegnamo una variabile booleana
    let verifier = false;
    //assegnamo una variabile per verificare o smentire il risultato
    let palindrome = '';
    //trasformiamo la stringa in minuscolo per non dare problemi con eventuali lettere maiuscole o miuscole
    let lowerCaseString = string.toLowerCase()
    console.log(lowerCaseString)
    //facciamo partire un ciclo che parte dal massimo della lunghezza della parola fino a 0
    for (i = string.length -1; i >= 0; i--){
        //a ogni giro facciamo aggiungiamo la lettera che corrisponde all'indice
        reverseString = reverseString + lowerCaseString[i]
    }
    //andiamo a verificare se la parola ribaltata sia uguala alla parola non ribaltata
    if (reverseString === lowerCaseString){
        palindrome = true;
    }
    //andiamo ad assegnare la dicitura in caso la parola sia palindroma
    if (palindrome === true){
        palindrome = `La parola ${string} è palindroma`;
    }
    //andiamo ad assegnare la dicitura in caso la parola non sia palindroma
    else{
        palindrome = `La parola ${string} non è palindroma`;
    }
    //andiamo a far ritornare il risultare
    return palindrome;
}

