document.addEventListener("DOMContentLoaded", function () {
  // === Initialisation des compétences avec Chart.js ===
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "Pharo", level: 70 },
    { name: "JavaScript", level: 85 },
    { name: "Rédaction de script", level: 75 }
  ];

  const ctx = document.getElementById('skillsChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skills.map(skill => skill.name),
        datasets: [{
          label: 'Niveau de compétence (%)',
          data: skills.map(skill => skill.level),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }

  // === Changement de couleur de fond pour la section Compétences ===
  function changeBackgroundColorSmoothly() {
    const section = document.getElementById("competences");
    if (!section) return;

    let hue = 0;

    function updateColor() {
      hue = (hue + 1) % 360;
      const bgColor = `hsl(${hue}, 50%, 20%)`;
      const textColor = `hsl(${hue}, 100%, 85%)`;

      section.style.transition = "background-color 2s linear";
      section.style.backgroundColor = bgColor;

      section.querySelectorAll("h2, p, li, span, div").forEach(element => {
        element.style.transition = "color 2s linear";
        element.style.color = textColor;
      });

      setTimeout(updateColor, 100);
    }

    updateColor();
  }

  changeBackgroundColorSmoothly();

    // Initialisation du Typed.js
    new Typed("#type-it", {
      strings: ["ETUDIANT", "MUSICIEN"],
      typeSpeed: 105,
      backSpeed: 105,
      loop: true
    });

  // === Initialisation des animations des icônes ===
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

  // === Gestion des sections ===
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

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = this.getAttribute("data-target");
      showSection(targetSection);
      window.history.pushState({}, "", `#${targetSection}`);
    });
  });

  window.addEventListener("load", () => {
    const defaultSection = "accueil";
    showSection(defaultSection);
  });

  // === Gestion du header fixe ===
  window.addEventListener("scroll", function () {
    var scrolltop = window.scrollY;
    if (scrolltop >= 80) {
      document.body.classList.add("fixed-header");
    } else {
      document.body.classList.remove("fixed-header");
    }
  });

  // === Gestion des passions ===
  const passions = ["Le football ⚽", "La natation 🏊‍♂️", "La cuisine 🍳", "La lecture 📖", "Les voyages ✈️", "La musique 🎵", "Les jeux vidéo 🎮"];
  let index = 0;
  const textElement = document.getElementById("welcome-text");

  function changePassion() {
    if (!textElement) return;

    textElement.style.opacity = "0";
    setTimeout(() => {
      textElement.textContent = passions[index];
      textElement.style.opacity = "1";
      index = (index + 1) % passions.length;
    }, 1000);
    setTimeout(changePassion, 6000);
  }

  changePassion();

  // === Gestion des projets ===
  const projets = [
    { nom: "GitHub - Mon Portfolio", lien: "https://github.com" },
    { nom: "Application Mobile - Google Play", lien: "https://play.google.com/store" },
    { nom: "Blog Personnel - Medium", lien: "https://medium.com" },
    { nom: "Projet Data Science - Kaggle", lien: "https://www.kaggle.com" },
    { nom: "E-commerce - Amazon", lien: "https://www.amazon.com" }
  ];

  const sectionProjets = document.querySelector("#projets .container");
  if (sectionProjets) {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexWrap = "wrap";
    buttonContainer.style.gap = "10px";
    buttonContainer.style.marginTop = "20px";

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

      bouton.onmouseover = () => bouton.style.backgroundColor = "#2980b9";
      bouton.onmouseout = () => bouton.style.backgroundColor = "#3498db";
      bouton.onclick = () => window.open(projet.lien, "_blank");

      buttonContainer.appendChild(bouton);
    });

    sectionProjets.appendChild(buttonContainer);
  }

  // === Gestion des formations ===
  const formations = [
    { titre: "Bac C (Maths)", lieu: "Cameroun", annee: "Année d'obtention : XXXX" },
    { titre: "Première S", lieu: "LPO Glière", annee: "Année : XXXX" },
    { titre: "Terminale S", lieu: "LPO Glière", annee: "Année : XXXX" },
    { titre: "1ère Année Université", lieu: "USMB", annee: "Année : XXXX" }
  ];

  const sectionFormations = document.querySelector("#formations .container");
  if (sectionFormations) {
    const formationContainer = document.createElement("div");
    formationContainer.style.display = "flex";
    formationContainer.style.flexDirection = "column";
    formationContainer.style.gap = "15px";
    formationContainer.style.marginTop = "20px";

    formations.forEach(formation => {
      const formationDiv = document.createElement("div");
      formationDiv.style.padding = "10px";
      formationDiv.style.borderRadius = "5px";
      formationDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      formationDiv.style.color = "#fff";
      formationDiv.style.fontSize = "18px";
      formationDiv.style.transition = "transform 0.3s";

      formationDiv.onmouseover = () => formationDiv.style.transform = "scale(1.05)";
      formationDiv.onmouseout = () => formationDiv.style.transform = "scale(1)";

      formationDiv.innerHTML = `<strong>${formation.titre}</strong> - ${formation.lieu} <br> <small>${formation.annee}</small>`;
      formationContainer.appendChild(formationDiv);
    });

    sectionFormations.appendChild(formationContainer);
  }

  // === Gestion du formulaire de contact ===
  const contactBtn = document.querySelector("a.colored-btn[href='#Contact']");
  if (contactBtn) {
    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let contactSection = document.getElementById("Contact");
      if (!contactSection) {
        contactSection = document.createElement("section");
        contactSection.id = "Contact";
        contactSection.className = "content-section d-none";
        const container = document.createElement("div");
        container.className = "container";
        const title = document.createElement("h2");
        title.textContent = "Contactez-moi";
        container.appendChild(title);

        const form = document.createElement("form");
        form.id = "contact-form";
        form.action = "mailto:steevejordan19@yahoo.com";
        form.method = "post";
        form.enctype = "text/plain";

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

        form.appendChild(createInputGroup("Prénom :", "text", "prenom"));
        form.appendChild(createInputGroup("Nom :", "text", "nom"));
        form.appendChild(createInputGroup("Votre Email :", "email", "email"));

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

        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.textContent = "Envoyer";
        submitBtn.style.padding = "10px 20px";
        submitBtn.style.backgroundColor = "#3498db";
        submitBtn.style.color = "#fff";
        submitBtn.style.border = "none";
        submitBtn.style.cursor = "pointer";
        form.appendChild(submitBtn);

        container.appendChild(form);
        contactSection.appendChild(container);
        document.querySelector("main").appendChild(contactSection);
      }

      showSection("Contact");
      window.history.pushState({}, "", "#Contact");
    });
  }
});