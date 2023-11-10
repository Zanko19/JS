/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Récupère l'élément avec l'ID "target"
    const targetElement = document.getElementById("target");

    // Récupère l'heure actuelle
    const currentHour = new Date().getHours();

    // Vérifie si l'heure est avant 18h
    if (currentHour < 18) {
        // Change le contenu de la balise si c'est le cas
        targetElement.innerHTML = "Bonjour";
    } else {
        // Sinon, change le contenu de la balise à "Bonsoir"
        targetElement.innerHTML = "Bonsoir";
    }
})();

