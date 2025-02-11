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

   document.addEventListener("DOMContentLoaded", function() {
    AOS.init();  // Initialiser AOS après le chargement du DOM
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

  setTimeout(changePassion, 6000); // Changement toutes les 6 secondes
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


// SECTION FORMATION
// Liste des formations
const formations = [
  { titre: "Bac C (Maths)", lieu: "Cameroun", annee: "Année d'obtention : XXXX" },
  { titre: "Première S", lieu: "LPO Glière", annee: "Année : XXXX" },
  { titre: "Terminale S", lieu: "LPO Glière", annee: "Année : XXXX" },
  { titre: "1ère Année Université", lieu: "USMB", annee: "Année : XXXX" }
];

// Sélectionne la section formations
const sectionFormations = document.querySelector("#formations .container");

if (sectionFormations) {
  // Créer un conteneur pour les formations
  const formationContainer = document.createElement("div");
  formationContainer.style.display = "flex";
  formationContainer.style.flexDirection = "column";
  formationContainer.style.gap = "15px";
  formationContainer.style.marginTop = "20px";

  // Générer les formations dynamiquement
  formations.forEach(formation => {
    const formationDiv = document.createElement("div");
    formationDiv.style.padding = "10px";
    formationDiv.style.borderRadius = "5px";
    formationDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    formationDiv.style.color = "#fff";
    formationDiv.style.fontSize = "18px";
    formationDiv.style.transition = "transform 0.3s";

    // Animation au survol
    formationDiv.onmouseover = () => formationDiv.style.transform = "scale(1.05)";
    formationDiv.onmouseout = () => formationDiv.style.transform = "scale(1)";

    formationDiv.innerHTML = `<strong>${formation.titre}</strong> - ${formation.lieu} <br> <small>${formation.annee}</small>`;

    formationContainer.appendChild(formationDiv);
  });

  // Ajouter le conteneur à la section formations
  sectionFormations.appendChild(formationContainer);
}

// === Animation en fond d'écran ===
function createAnimatedBackground() {
  const section = document.getElementById("formations");
  if (!section) return;

  section.style.position = "relative";
  section.style.overflow = "hidden";

  function createParticle() {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "10px";
    particle.style.height = "10px";
    particle.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    particle.style.borderRadius = "50%";
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.opacity = "0";
    particle.style.transition = "transform 5s linear, opacity 5s linear";

    section.appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translateY(-100vh) scale(${Math.random() * 1.5})`;
      particle.style.opacity = "1";
    }, 100);

    setTimeout(() => {
      particle.remove();
    }, 5000);
  }

  setInterval(createParticle, 500);
}

createAnimatedBackground();


//CONTACT
document.addEventListener("DOMContentLoaded", function () {
  // Gestion du clic sur le bouton "Contact"
  const contactBtn = document.querySelector("a.colored-btn[href='#Contact']");
  if (contactBtn) {
    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Vérifier si la section Contact existe déjà
      let contactSection = document.getElementById("Contact");
      if (!contactSection) {
        // Si elle n'existe pas, la créer dynamiquement
        contactSection = document.createElement("section");
        contactSection.id = "Contact";
        // On lui ajoute les classes "content-section" et "d-none" pour qu'elle soit masquée par défaut
        contactSection.className = "content-section d-none";

        // Création du conteneur
        const container = document.createElement("div");
        container.className = "container";

        // Titre de la section
        const title = document.createElement("h2");
        title.textContent = "Contactez-moi";
        container.appendChild(title);

        // Création du formulaire
        const form = document.createElement("form");
        form.id = "contact-form";
        // Ici, on utilise mailto: (mais pour une solution automatique, il faut un service tiers)
        form.action = "mailto:steevejordan19@yahoo.com";
        form.method = "post";
        form.enctype = "text/plain";

        // Fonction utilitaire pour créer un groupe (label + input)
        function createInputGroup(labelText, inputType, inputName) {
          const group = document.createElement("div");
          group.style.marginBottom = "15px";

          const label = document.createElement("label");
          label.textContent = labelText;
          label.style.display = "block";
          label.style.marginBottom = "5px";

          const input = document.createElement("input");
          input.type = inputType;
          input.name = inputName;
          input.required = true;
          input.style.width = "100%";
          input.style.padding = "8px";
          input.style.boxSizing = "border-box";

          group.appendChild(label);
          group.appendChild(input);
          return group;
        }

        // Ajout des champs du formulaire
        form.appendChild(createInputGroup("Prénom :", "text", "prenom"));
        form.appendChild(createInputGroup("Nom :", "text", "nom"));
        form.appendChild(createInputGroup("Votre Email :", "email", "email"));

        // Création du groupe pour le message (textarea)
        const messageGroup = document.createElement("div");
        messageGroup.style.marginBottom = "15px";
        const messageLabel = document.createElement("label");
        messageLabel.textContent = "Message :";
        messageLabel.style.display = "block";
        messageLabel.style.marginBottom = "5px";
        const textarea = document.createElement("textarea");
        textarea.name = "message";
        textarea.required = true;
        textarea.style.width = "100%";
        textarea.style.padding = "8px";
        textarea.rows = 5;
        messageGroup.appendChild(messageLabel);
        messageGroup.appendChild(textarea);
        form.appendChild(messageGroup);

        // Bouton de soumission
        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.textContent = "Envoyer";
        submitBtn.style.padding = "10px 20px";
        submitBtn.style.backgroundColor = "#3498db";
        submitBtn.style.color = "#fff";
        submitBtn.style.border = "none";
        submitBtn.style.cursor = "pointer";
        form.appendChild(submitBtn);

        // Assemblage du formulaire dans le conteneur
        container.appendChild(form);
        contactSection.appendChild(container);

        // Ajout de la section Contact à la balise <main> sans effacer les autres sections
        document.querySelector("main").appendChild(contactSection);
      }

      // Utiliser la fonction showSection pour afficher la section "Contact"
      showSection("Contact");
      window.history.pushState({}, "", "#Contact");
    });
  }
});
