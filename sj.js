document.addEventListener("DOMContentLoaded", function () {
    // Initialisation des compétences
    const skills = [
      { name: "HTML/CSS", level: 90 },
      { name: "Pharo", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "Rédaction de script", level: 75 }
    ];
    // Fonction pour changer la couleur de fond et adapter tous les textes
function changeBackgroundColorSmoothly() {
  const section = document.getElementById("competences");
  if (!section) return;

  let hue = 0; // Teinte de départ

  function updateColor() {
    hue = (hue + 1) % 360; // Cycle de couleurs HSL
    const bgColor = `hsl(${hue}, 50%, 20%)`; // Fond sombre et doux
    const textColor = `hsl(${hue}, 100%, 85%)`; // Texte clair et lisible

    // Appliquer la couleur de fond
    section.style.transition = "background-color 2s linear";
    section.style.backgroundColor = bgColor;

    // Adapter la couleur de tous les textes dans la section
    section.querySelectorAll("h2, p, li, span, div").forEach(element => {
      element.style.transition = "color 2s linear";
      element.style.color = textColor;
    });

    setTimeout(updateColor, 100); // Mise à jour fluide
  }

  updateColor();
}

changeBackgroundColorSmoothly();


    const container = document.getElementById("skills-container");

    if (container) {
      skills.forEach(skill => {
        const skillDiv = document.createElement("div");
        skillDiv.innerHTML = `
          <p>${skill.name}</p>
          <div style="width: 100%; background-color: #ddd; height: 20px; border-radius: 5px; overflow: hidden;">
            <div style="width: ${skill.level}%; background-color: #4caf50; height: 100%;"></div>
          </div>
        `;
        container.appendChild(skillDiv);
      });
    }

    // Initialisation du Typed.js
    new Typed("#type-it", {
      strings: ["ETUDIANT", "MUSICIEN"],
      typeSpeed: 105,
      backSpeed: 105,
      loop: true
    });

    // Gestion des animations
    const animElements = document.querySelectorAll(".anim-element");

    function getRandomValue(min, max) {
      return Math.random() * (max - min) + min;
    }

    function animateElement(element) {
      const duration = getRandomValue(0.5, 1.5);
      const translateX = getRandomValue(-100, 100);
      const translateY = getRandomValue(-100, 100);
      const rotate = getRandomValue(-360, 360);
      const scale = getRandomValue(0.8, 1.5);

      element.style.transition = `transform ${duration}s linear`;
      element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      element.style.fontSize = "4rem";

      setTimeout(() => animateElement(element), duration * 1000);
    }

    animElements.forEach((element) => {
      animateElement(element);
    });
  });

  // Fonction pour afficher la section correspondante
  function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
      section.classList.add("d-none");
      section.classList.remove("d-block");
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove("d-none");
      targetSection.classList.add("d-block");
    }
  }

  // Gestion des clics sur les liens de navigation
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = this.getAttribute("data-target");
      showSection(targetSection);
      window.history.pushState({}, "", `#${targetSection}`);
    });
  });

  // Affichage de la section par défaut au démarrage
  window.addEventListener("load", () => {
    const defaultSection = "accueil";
    showSection(defaultSection);
  });

  // Gestion du header fixe lors du scroll
  window.addEventListener("scroll", function () {
    var scrolltop = window.scrollY;
    if (scrolltop >= 80) {
      document.body.classList.add("fixed-header");
    } else {
      document.body.classList.remove("fixed-header");
    }
  });

  // Liste des passions à afficher
const passions = ["Le football ⚽", "La natation 🏊‍♂️", "La cuisine 🍳", "La lecture 📖", "Les voyages ✈️", "La musique 🎵", "Les jeux vidéo 🎮"];

let index = 0;
const textElement = document.getElementById("welcome-text");

function changePassion() {
  if (!textElement) return;

  textElement.style.opacity = "0"; // Disparition en fondu

  setTimeout(() => {
    textElement.textContent = passions[index]; // Changer le texte
    textElement.style.opacity = "1"; // Réapparition en fondu
    index = (index + 1) % passions.length; // Passer à la passion suivante
  }, 1000); // Temps pour l'effet de fondu

  setTimeout(changePassion, 6000); // Changement toutes les 3 secondes
}

changePassion();


// Liste des projets avec leurs liens officiels
const projets = [
  { nom: "GitHub - Mon Portfolio", lien: "https://github.com" },
  { nom: "Application Mobile - Google Play", lien: "https://play.google.com/store" },
  { nom: "Blog Personnel - Medium", lien: "https://medium.com" },
  { nom: "Projet Data Science - Kaggle", lien: "https://www.kaggle.com" },
  { nom: "E-commerce - Amazon", lien: "https://www.amazon.com" }
];

// Sélectionne la section projets
const sectionProjets = document.querySelector("#projets .container");

if (sectionProjets) {
  // Crée un conteneur pour les boutons
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexWrap = "wrap";
  buttonContainer.style.gap = "10px";
  buttonContainer.style.marginTop = "20px";

  // Génère les boutons dynamiquement
  projets.forEach(projet => {
    const bouton = document.createElement("button");
    bouton.textContent = projet.nom;
    bouton.style.padding = "10px 15px";
    bouton.style.border = "none";
    bouton.style.borderRadius = "5px";
    bouton.style.cursor = "pointer";
    bouton.style.backgroundColor = "#3498db";
    bouton.style.color = "#fff";
    bouton.style.fontSize = "16px";
    bouton.style.transition = "background 0.3s";

    // Effet hover
    bouton.onmouseover = () => bouton.style.backgroundColor = "#2980b9";
    bouton.onmouseout = () => bouton.style.backgroundColor = "#3498db";

    // Redirection au clic
    bouton.onclick = () => window.open(projet.lien, "_blank");

    // Ajoute le bouton au conteneur
    buttonContainer.appendChild(bouton);
  });

  // Ajoute le conteneur à la section projets
  sectionProjets.appendChild(buttonContainer);
}

