console.log('js-paliedispari')

// esercizio 1 palindroma

// chiediamo all'utente di inserire una parola.
let getName = prompt('type a word')

// creiamo una funzione per capire se la parola
// inserita è un palindroma.

function isPalindroma(word) {

    // creiamo un array per inserire la parola invertita
    // utilizzando il ciclo for
    const reverseWord = []
    for (let i = word.length - 1; i >= 0; i--) {

      reverseWord.push(word[i])
      console.log(reverseWord)

      if (reverseWord === word) {
          return true
      } else {
          return false
      }

    }

}

isPalindroma(getName)

// _________________________________________
// esercizio 2 pari e dispari

// chiediamo all'utente di scegliere pari o dispari
let getPariDispari = prompt('scegli: pari o dispari?')
console.log(getPariDispari)

// chiediamo all'utente di scegliere un numero da 1 a 5
let numeroUtente = prompt('scrivi un numero da 1 a 5')
console.log(numeroUtente)

// generiamo un numero casuale generato dal computer (sempre da 1 a 5)
// usando una funzione

function getNumber(numb1, numb2) {
    let result = Math.floor(Math.random() * (numb2 - numb1 + 1)) + numb1;

    return result
}

// inserire all'interno della funzione l'argomento numb1 e numb2
// rispettivamente l'intervallo di inzio e di fine

// inzializziamo una variabile per chiamare la funzione (getNumber)
let numeroComputer = getNumber(1, 5)
console.log(numeroComputer)

// sommiamo numeroUtente e numeroComputer
let sommaNumeri = numeroUtente + numeroComputer

function isEven(number) {

    if (number % 2 === 0) {
        // console.log('pari') -> oppure così
        return 'pari'
    } else {
        // console.log('dispari') -> oppure così
        return 'dispari'
    }
}

// inizializziamo una varibile e chiamiamo la funzione
// per verificare se la somma dei numeri è pari o dispari

// isEven(sommaNumeri) -> oppure così
let risultato = isEven(sommaNumeri)
console.log(risultato)

// dichiariamo chi ha vinto confrontando la funzione (isEven)
// con (getPariDispari) ovvero la scelta iniziale dell'utente

// if (isEven(sommaNumeri) === 0) -> oppure così
if (risultato === getPariDispari) {
    console.log('HAI VINTO')
} else {
    console.log('ha vinto il computer')
}

