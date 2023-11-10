(() => {
    document.getElementById("run").addEventListener("click", () => {
        // Récupère la valeur de l'input
        let inputNumbers = document.getElementById("numbers").value;

        // Convertit la chaîne de nombres en un tableau d'entiers
        let numbersArray = inputNumbers.split(", ").map(Number);

        // Trie le tableau
        numbersArray.sort((a, b) => a - b);

        // Affiche les nombres triés
        alert("Nombres classés : " + numbersArray.join(", "));
    });
})();
