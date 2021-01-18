// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//  RICORDA la  coppia chiave : valore = è una proprietà

// 1 ESERCIZIO
var studente = {
  'nome' : 'cleo' ,
   'cognome' : 'bianchi',
   'eta' : 5 ,
};
// STAMPO A SCHERMO TUTTE LE PROPRIETà ( se avessi voluto leggere proprio anche la chiave ? )
for (var key in studente) {
  console.log(studente[key]);
}
console.log(studente);

// 2 ESERCIZIO
