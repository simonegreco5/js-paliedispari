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

      if (reverseWord === word) {
          return true
      } else {
          return false
      }

    }

}

// isPalindroma(getName)