/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function passLetterA(groupNames) {
    const finalNames = [];
    for (let i = 0; i < groupNames.length; i++) {
        if (groupNames[i].startsWith("A")) {
            finalNames.push(groupNames[i]);
        }
    }
    return finalNames;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(passLetterA(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
