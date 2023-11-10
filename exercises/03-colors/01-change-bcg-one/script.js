/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Sélectionne les boutons par leur ID
    const redButton = document.getElementById("red");
    const greenButton = document.getElementById("green");
    const yellowButton = document.getElementById("yellow");
    const blueButton = document.getElementById("blue");

    // Ajoute un écouteur d'événements à chaque bouton
    redButton.addEventListener("click", () => changeBackgroundColor("red"));
    greenButton.addEventListener("click", () => changeBackgroundColor("green"));
    yellowButton.addEventListener("click", () => changeBackgroundColor("yellow"));
    blueButton.addEventListener("click", () => changeBackgroundColor("blue"));

    // Fonction pour changer la couleur de fond
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }
})();

