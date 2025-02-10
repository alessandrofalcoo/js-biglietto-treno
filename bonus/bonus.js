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

const random_number = Math.floor(Math.random() * 9) + 1;
console.log(random_number);


if (user_choice = "pari" && user_Number % 2 !== 0) {
    alert("ma se hai detto pari!");

} else if (user_choice = "dispari" && user_Number % 2 !== 0) {
    alert("ma se hai detto dispari!");

} else {
    alert("bravo!");
}
