/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Récupérer les valeurs des champs input
    const num1Input = document.getElementById("op-one");
    const num2Input = document.getElementById("op-two");
    const resultOutput = document.getElementById("op-result");

    const performOperation = operation => {
        // Récupérer les valeurs des champs d'entrée
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        // Effectuer l'opération en utilisant une structure switch
        switch (operation) {
            case "addition":
                const additionResult = num1 + num2;
                resultOutput.textContent = `Résultat de l'addition : ${additionResult}`;
                break;

            case "substraction":
                const substractionResult = num1 - num2;
                resultOutput.textContent = `Résultat de la soustraction : ${substractionResult}`;
                break;

            case "multiplication":
                const multiplicationResult = num1 * num2;
                resultOutput.textContent = `Résultat de la multiplication : ${multiplicationResult}`;
                break;

            case "division":
                if (num2 === 0) {
                    resultOutput.textContent = "Division par zéro impossible !";
                } else {
                    const divisionResult = num1 / num2;
                    resultOutput.textContent = `Résultat de la division : ${divisionResult}`;
                }
                break;

            default:
                resultOutput.textContent = "Opération non reconnue";
        }
    };

    // Ajouter des écouteurs d'événements aux boutons d'opération
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener("click", () => performOperation($btn.id))
    );
})();

