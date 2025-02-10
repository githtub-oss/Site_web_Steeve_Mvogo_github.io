// Fonction pour afficher la section correspondante
function showSection(sectionId) {
  // Masquer toutes les sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('d-none'); // Masquer avec Bootstrap
    section.classList.remove('d-block');
  });

  // Afficher la section correspondante
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('d-none'); // Afficher avec Bootstrap
    targetSection.classList.add('d-block');
  }
}

// Gestion des clics sur les liens de navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Récupérer la section à afficher
    const targetSection = this.getAttribute('data-target');

    // Afficher la section correspondante
    showSection(targetSection);

    // Mettre à jour l'URL dans la barre d'adresse
    window.history.pushState({}, '', `#${targetSection}`);
  });
});

// Afficher la section par défaut (Accueil) au démarrage
window.addEventListener('load', () => {
  const defaultSection = 'accueil'; // Section par défaut
  const defaultSection = 'accueil'; // Section par défaut
  showSection(defaultSection);
});

// Gestion du header fixe lors du scroll
window.addEventListener("scroll", function() {
  var scrolltop = window.scrollY;
  if (scrolltop >= 80) {
    document.body.classList.add('fixed-header'); 
  } else {
    document.body.classList.remove('fixed-header'); 
  }
});

// Initialisation du Typed.js
document.addEventListener("DOMContentLoaded", function() {
  new Typed('#type-it', { 
    strings: ['ETUDIANT', 'MUSICIEN'],
    typeSpeed: 105,
    backSpeed: 105,
    loop: true  
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animElements = document.querySelectorAll(".anim-element");

  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  function animateElement(element) {
    const duration = getRandomValue(0.5, 1.5); // Durée entre 3 et 6 secondes
    const translateX = getRandomValue(-100, 100); // Mouvement en X
    const translateY = getRandomValue(-100, 100); // Mouvement en Y
    const rotate = getRandomValue(-360, 360); // Rotation aléatoire
    const scale = getRandomValue(0.8, 1.5); // Zoom aléatoire

    element.style.transition = `transform ${duration}s linear`;
    element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    element.style.fontSize = "4rem"; // Augmenter la taille des icônes

    setTimeout(() => animateElement(element), duration * 1000); // Relancer l'animation
  }

  animElements.forEach((element) => {
    animateElement(element);
  });
});


