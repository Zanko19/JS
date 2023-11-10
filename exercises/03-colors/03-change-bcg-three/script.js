/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    document.getElementById("run").addEventListener("click", () => {
        // Appelle la fonction pour générer une couleur aléatoire
        const randomColor = generateRandomColor();

        // Applique la couleur de fond à la page
        document.body.style.backgroundColor = randomColor;
    });

    // Fonction pour générer une couleur aléatoire
    function generateRandomColor() {
        // Génère trois valeurs de couleur (rouge, vert, bleu) entre 0 et 255
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        // Crée la chaîne hexadécimale en combinant les valeurs de couleur
        const hexColor = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;

        return hexColor;
    }

    // Fonction pour convertir une valeur en hexadécimal
    function toHex(value) {
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
})();
