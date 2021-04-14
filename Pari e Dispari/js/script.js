/* prompt per richieste utente */
var scelta_utente = prompt("Pari o Dispari");
var numero_utente = parseInt(prompt("Inserisci un numero da 1 a 5"));
var numero_computer = numero_generator(5);
var somma = numero_utente + numero_computer;

console.log(scelta_utente);
console.log(numero_utente);
console.log(numero_computer);
console.log(somma);

/* condizione per stabilire se la somma dei numeri è pari o dispari tramite funzione */
if(check_pari(somma)) {
  console.log("La somma è pari!");
} else {
  console.log("La somma è dispari!");
} 

/* creo numero random da 1 a 5 per computer con funzione */
function numero_generator(limit){
  for(var i = 0; i <= limit; i++){
    var num_random = Math.floor(Math.random() * limit) + 1;
  }
  return num_random;
}

/* funzione per stabilire se il num è pari o dispari */
function check_pari(numero){
  if(numero % 2 === 0){
    return true
  } else {
    return false
  }
}
