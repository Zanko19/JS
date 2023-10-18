/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let confirmation = false;

while (!confirmation) {
  const age = prompt("Quel est ton âge ?");
  const sexe = prompt("Quel est ton sexe ?");
  const ville = prompt("Dans quelle ville habites-tu ?");

  const confirmationMessage = `Confirme tes informations :\n\nAge : ${age}\nSexe : ${sexe}\nVille : ${ville}\n\nClique sur OK pour confirmer, ou Annuler pour recommencer.`;

  confirmation = confirm(confirmationMessage);

  if (!confirmation) {
    alert("Veuillez reprendre le processus pour fournir des informations correctes.");
  }
}

})();
