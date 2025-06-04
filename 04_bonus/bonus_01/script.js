/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function countVocals(text) {
    const vocali = "aeiouAEIOU";
    let contatore = 0;

    for (let i = 0; i < text.length; i++) {
        if (vocali.includes(text[i])) {
            contatore++;
        }
    }

    return contatore;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
