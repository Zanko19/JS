/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Sélectionne le bouton et l'input par leur ID
    const runButton = document.getElementById("run");
    const colorInput = document.getElementById("color");

    // Ajoute un écouteur d'événements au bouton
    runButton.addEventListener("click", () => changeBackgroundColor());

    // Fonction pour changer la couleur de fond
    function changeBackgroundColor() {
        // Récupère la valeur de l'input
        const colorName = colorInput.value.toLowerCase(); // Convertit en minuscules pour la correspondance insensible à la casse

        // Tableau d'objets associant les noms de couleur avec leurs valeurs hexadécimales
        const colorMap = {
            rouge: "#ff0000",
            jaune: "#ffff00",
            vert: "#00ff00",
            mauve: "#800080",
            orange: "#ffa500",
            bleu: "#0000ff",
            rose: "#ff69b4",
            brun: "#a52a2a",
            cyan: "#00ffff",
            doré: "#ffd700",
            indigo: "#4b0082",
            lavande: "#e6e6fa",
            olive: "#808000",
            corail: "#ff7f50",
            argent: "#c0c0c0",
            turquoise: "#40e0d0",
            sable: "#f4a460",
            saumon: "#fa8072",
            kaki: "#c3b091",
            orchidée: "#da70d6",
            // Ajoute d'autres couleurs au besoin
        };

        // Vérifie si la valeur est un nom de couleur valide
        if (colorMap.hasOwnProperty(colorName)) {
            document.body.style.backgroundColor = colorMap[colorName];
        } else {
            alert("Veuillez entrer un nom de couleur valide.");
        }
    }
})();

