/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        const num1 = parseFloat(document.getElementById("op-one").value);
        const num2 = parseFloat(document.getElementById("op-two").value);

  
        const result = num1 + num2;

    // Afficher le résultat
    alert(`Résultat de l'addition : ${result}`);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        const num1 = parseFloat(document.getElementById("op-one").value);
        const num2 = parseFloat(document.getElementById("op-two").value);
    
        // Effectuer une soustraction
        const result = num1 - num2;
    
        // Afficher le résultat
        alert(`Résultat de la soustraction : ${result}`);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        const num1 = parseFloat(document.getElementById("op-one").value);
        const num2 = parseFloat(document.getElementById("op-two").value);

    // Effectuer une multiplication
    const result = num1 * num2;

    // Afficher le résultat
    alert(`Résultat de la multiplication : ${result}`);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        const num1 = parseFloat(document.getElementById("op-one").value);
    const num2 = parseFloat(document.getElementById("op-two").value);

    // Effectuer une division
    if (num2 === 0) {
        alert("Division par zéro impossible !");
    } else {
        const result = num1 / num2;
        alert(`Résultat de la division : ${result}`);
    }
    });
})();
