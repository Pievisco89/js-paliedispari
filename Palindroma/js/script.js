/* chiediamo all'utente di inserire una parola */
var parola_utente = prompt("Inserisci una parola");
var nuova_parola = parola_reverse(parola_utente);

/* condizione per verifica se la parola è palindroma */
if(parola_utente == nuova_parola){
  console.log("La parola da te inserita è palindroma!");
} else {
  console.log("La parola da te inserita non è palindroma!");
}

/* fare una funzione in cui scomporre la parola, prendere ogni lettera e ricomporre la parola al contrario con un ciclo for o while*/
function parola_reverse(parola){
  var nuova_parola = "";
  var i = parola.length - 1;
  while (i >= 0) {
    nuova_parola += parola[i];
    i--;
  }
  return nuova_parola;
}