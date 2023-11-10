/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Boucle pour les nombres de 1 à 100
    for (let i = 1; i <= 100; i++) {
        // Condition pour vérifier si le nombre est à la fois multiple de 3 et de 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        // Condition pour vérifier si le nombre est multiple de 3
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        // Condition pour vérifier si le nombre est multiple de 5
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        // Affiche le nombre si aucune condition n'est satisfaite
        else {
            console.log(i);
        }
    }
})();
