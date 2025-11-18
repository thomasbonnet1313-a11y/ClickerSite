// compteur de clics
let count = 0;

// récupérer le bouton et le compteur
const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

// créer les objets Audio (.wav)
const clickWave = new Audio('click.wav'); // son pop à chaque clic
clickWave.preload = 'auto'; // précharger pour réduire la latence

const fartWave = new Audio('fart.wav');   // son pet tous les 10 clics
fartWave.preload = 'auto';

// événement clic sur le bouton
button.addEventListener('click', () => {
    count++; // augmenter de 1 à chaque clic
    counter.textContent = count; // mettre à jour le compteur

    // jouer le son pop
    clickWave.play();

    // jouer le son de pet tous les 10 clics
    if (count % 10 === 0) {
        fartWave.play();
    }
// changer le fond tous les 10 clics
if (count % 10 === 0) {
    const bgColors = ['#a22b2bff', '#4c4ffcff', '#6310b1ff', '#898906ff', '#03c20cff'];
    document.body.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
}
    // message tous les 50 clics
    if (count % 50 === 0) {
        alert(`Bien joué ! Vous avez atteint ${count} clics ! 🎉`);
    }

    // changer la couleur du bouton aléatoirement
    const colors = ['#ff8c00', '#1e90ff', '#32cd32', '#ff1493', '#ffa500'];
    button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});