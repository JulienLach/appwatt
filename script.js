// Récupération et déclaration des éléments a intégrer

const wattsInput = document.getElementById('watts');
const hoursInput = document.getElementById('hours');
const calculButton = document.getElementById('calculer');
const resultatElement = document.getElementById('resultat');
const costElement = document.getElementById('cout');

// Ajout de la fonction

calculButton.addEventListener('click', () => {

    // Récupération des inputs
    const watts = wattsInput.valueAsNumber;
    const hours = hoursInput.valueAsNumber;

    //Calcul des kWh
    const kWh = (watts * hours) / 1000;


    //calcul du cout en euros
    const coutEnEuros = kWh * 0.15;


    //Appel et affichage du résultat
    resultatElement.textContent = `Résultat: ${kWh.toFixed(2)} kWh`;
    costElement.textContent = `Cout en euros ${coutEnEuros.toFixed(2)} €`;

});