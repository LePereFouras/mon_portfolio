//Toggling Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.home-title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home-img', { delay: 400 })
sr.reveal('.home-social', { delay: 400, })

sr.reveal('.about-img', {})
sr.reveal('.about-subtitle', { delay: 200 })
sr.reveal('.about-text', { delay: 400 })

sr.reveal('.skills-subtitle', { delay: 100 })
sr.reveal('.skills-text', { delay: 150 })
sr.reveal('.skills-data', { interval: 200 })
sr.reveal('.skills-img', { delay: 400 })

sr.reveal('.work-img', { interval: 200, origin: 'bottom', distance: '100px' })
sr.reveal('.sur_container', { interval: 200, origin: 'bottom', scale: 0.8 })

sr.reveal('.contact-input', { interval: 200 })

// Sélection des éléments
const cards = document.querySelectorAll('.unique-card');
const popup = document.getElementById('popup');
const popupInfo = document.getElementById('popup-info');
const popupClose = document.getElementById('popup-close');

// Ajout des événements sur chaque carte
cards.forEach(card => {
  card.addEventListener('click', () => {
    const info = card.getAttribute('data-info'); // Récupère les informations de la carte
    popupInfo.textContent = info; // Affiche l'information dans le popup
    popup.style.display = 'flex'; // Affiche le popup
  });
});

// Fermer le popup
popupClose.addEventListener('click', () => {
  popup.style.display = 'none'; // Cache le popup
});

// Fermer le popup en cliquant en dehors du contenu
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none'; // Cache le popup
  }
});

/* --- LOGIQUE POPUP PROJETS --- */
const projectDetailsBtns = document.querySelectorAll('.details-btn');
const projectPopup = document.getElementById('project-popup');
const projectPopupTitle = document.getElementById('project-popup-title');
const projectPopupDescription = document.getElementById('project-popup-description');
const projectPopupClose = document.getElementById('project-popup-close');

// Ouvrir le popup projet
projectDetailsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.sur_container');
    const title = parent.getAttribute('data-title');
    const description = parent.getAttribute('data-description');

    projectPopupTitle.textContent = title;
    projectPopupDescription.textContent = description;

    projectPopup.classList.add('show');
  });
});

// Fermer le popup projet (bouton X)
projectPopupClose.addEventListener('click', () => {
  projectPopup.classList.remove('show');
});

// Fermer le popup projet (clic à l'extérieur)
projectPopup.addEventListener('click', (e) => {
  if (e.target === projectPopup) {
    projectPopup.classList.remove('show');
  }
});
