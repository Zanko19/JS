/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById('run').addEventListener('click', function() {
    // Récupérez les valeurs des champs de sélection
    let day = document.getElementById('dob-day').value;
    let month = document.getElementById('dob-month').value - 1;  // Les mois sont indexés à partir de 0 en JavaScript
    let year = document.getElementById('dob-year').value;

    // Créez une instance de Date avec la date de naissance de l'utilisateur
    let birthDate = new Date(year, month, day);

    // Obtenez la date actuelle et calculez l'âge de l'utilisateur
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Ajustez l'âge si l'anniversaire de l'utilisateur n'est pas encore passé cette année
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Affichez l'âge de l'utilisateur
    alert("Vous avez " + age + " ans.");
    // ou vous pouvez utiliser console.log si vous préférez afficher l'âge dans la console
    // console.log("Vous avez " + age + " ans.");
});
