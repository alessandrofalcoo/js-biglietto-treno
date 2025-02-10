/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const km = parseInt(prompt("Quanti km devi percorrere?"));
console.log(km);

const age = parseInt(prompt("Quanti anni hai?"));
console.log(age);


const ticket_price = 0.21 * km;
const underage_ticket =  (ticket_price / 100) * 20;
const adult_ticket = (ticket_price / 100) * 40;
const underage_price = ticket_price - underage_ticket;
const adult_price = ticket_price - adult_ticket;

if (age < 18) {
    console.log(underage_price);
} else if (age > 65) {
    console.log(adult_price);
} else {
    console.log(ticket_price);
}
