// Récupération et déclaration des éléments a intégrer
const wattsInput = document.getElementById('watts');
const hoursInput = document.getElementById('hours');
const kwhInput = document.getElementById('kwh')
const calculButton = document.getElementById('calculer');
const resultatElement = document.getElementById('resultat');
const costElement = document.getElementById('cout');


// Déclaration de la fonction
calculButton.addEventListener('click', () => {
    const watts = wattsInput.value;
    const hours = hoursInput.value;

    //Calcul des kWh
    const kWh = (watts * hours) / 1000;

    //calcul du cout en euros
    const coutEnEuros = kWh * kwhInput.value;


    //Appel et affichage du résultat
    resultatElement.textContent = "Resultat : " + kWh.toFixed(2) + " kWh"
    costElement.textContent = "Cout en euros : " + coutEnEuros.toFixed(2) + "€";
});