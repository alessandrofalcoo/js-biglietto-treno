/* Esercizio 1 */

/* pari o dispari:
Chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
 */



const user_choice = prompt("Inserisci se pari o dispari, [pari, dispari]");
console.log(user_choice);

const userNumber = parseInt(prompt("Inserire un valore numerico compreso tra 1 e 9 [1, 2, 3]"));
console.log(userNumber);

const random_number = Math.floor(Math.random() * 9) + 1;
