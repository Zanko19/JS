(() => {
    document.getElementById("run").addEventListener("click", () => {
        // Récupère la valeur de l'input
        let inputValue = document.getElementById("number").value;

        // Convertit la valeur en nombre entier
        let number = parseInt(inputValue);

        // Vérifie si l'entrée est un nombre valide
        if (!isNaN(number) && number >= 0) {
            // Calcule la factorielle
            let factorial = calculateFactorial(number);

            // Affiche la factorielle
            alert(`La factorielle de ${number} est ${factorial}`);
        } else {
            alert("Veuillez entrer un nombre entier positif.");
        }
    });

    // Fonction pour calculer la factorielle
    function calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }
})();
