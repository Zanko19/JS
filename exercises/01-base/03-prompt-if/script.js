/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const reponse = prompt("Veux-tu du gâteau ? (Réponds par 'oui' ou 'non')");

if (reponse.toLowerCase() === "oui") {
  alert("Félicitations ! Du gâteau, ça ne se refuse pas.");
} else {
  alert("Oh, dommage ! Du gâteau, ça ne se refuse pas.");
}

})();
