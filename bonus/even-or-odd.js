/* Esercizio 1 */

/* pari o dispari:
Chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
 */



let user_choice = prompt("Inserisci se pari o dispari, [pari, dispari]");
console.log(user_choice);

const user_Number = parseInt(prompt("Inserire un valore numerico compreso tra 1 e 9"));
console.log(user_Number);

let random_number = Math.floor(Math.random() * 9) + 1;
console.log(random_number);

const somma = user_Number + random_number;
console.log(somma)

 if (user_choice == "pari" && somma % 2 !== 0) {
    alert("hai perso sfigato!");

} else if (user_choice == "dispari" && somma % 2 === 0) {
    alert("hai perso");

} else {
    alert("hai vinto, bravissimo!");
}


