/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

function helloUser(user) {
    return "Hello " + user;
}

helloUser2 = (user) => "Hello " + user;

// Invoca la funzione qui e stampa il risultato in console

console.log(helloUser(userName));

console.log(helloUser2(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
