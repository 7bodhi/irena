// --- LANGUAGE DATA ---
const textContent = {
  en: {
    tagline: "Healing the Future",
    enter: "Enter Gallery",
    backHome: "Back Home",
    langLabel: "Slovenščina",
    bio: `
      <p><strong>Irena Gašperšič</strong>, born in Ljubljana, graduated from the Academy of Fine Arts under Prof. Janez Bernik, and after graduation she studied graphic arts under Prof. Kiar Meško outside the academy.</p>
      <p>Irena sees painting as part of the ancient tradition of shamanism and magical healing.</p>
      <p>In line with the philosophy that every thought has a tendency to some extent towards its realization, Irena also sees painting, that is, thoughts presented on two-dimensional surfaces, as a kind of visual guidelines of mental energies that attract more or less harmonious vibrations.</p>
      <p>In a world full of all kinds of problems, where art is increasingly subject to all possible trends that propagate dystopian futurisms or warn against them, Irena sees painting more as an opportunity to offer the observer shelter from fashion turbulences in timeless motifs and in imaginative strokes and color relationships.</p>
    `
  },
  sl: {
    tagline: "Zdravljenje prihodnosti",
    enter: "Vstopi",
    backHome: "Nazaj domov",
    langLabel: "English",
    bio: `
      <p><strong>Irena Gašperšič</strong>, rojena v Ljubljani, je diplomirala na Akademiji za likovno umetnost pri prof. Janezu Berniku, po diplomi pa je izven akademije študirala grafiko pri prof. Kiar Mešku.</p>
      <p>Slikarstvo vidi Irena kot del starodavne tradicije šamanizma in magičnega zdravilstva.</p>
      <p>V skladu s filozofijo, da ima vsaka misel do neke mere nagnjenje k svoji uresničitvi, vidi Irena tudi slikarstvo, torej misli, predstavljene na dvodimenzionalnih ploskvah, kot neke vrste vizualne smernice mentalnih energij, ki privlačijo bolj ali manj harmonične vibracije.</p>
      <p>V svetu, polnem vsakovrstnih težav, kjer se umetnost vedno bolj podreja vsem mogočim trendom, ki propagirajo distopične futurizme ali pred njimi svarijo, vidi Irena slikarstvo bolj kot priložnost, da nudi opazovalcu zavetje pred modnimi turbulencami v nadčasovnih motivih ter v domiselnih potezah in barvnih odnosih.</p>
    `
  }
};

// --- LANGUAGE FUNCTION ---
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  const t = textContent[lang];

  // Landing page
  const tagline = document.getElementById('tagline');
  const enterBtn = document.getElementById('enter-button');
  const langBtn = document.getElementById('lang-toggle');
  if (tagline) tagline.textContent = t.tagline;
  if (enterBtn) enterBtn.textContent = t.enter;
  if (langBtn) langBtn.textContent = t.langLabel;

  // Gallery page
  const backBtn = document.querySelector('.back-button');
  if (backBtn) backBtn.textContent = t.backHome;

  const bio = document.querySelector('.bio-text');
  if (bio) bio.innerHTML = t.bio;
}

// --- INITIAL LOAD ---
document.addEventListener("DOMContentLoaded", () => {
  let lang = localStorage.getItem('language') || 'en';
  setLanguage(lang);

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  const t = textContent[lang];

  const tagline = document.getElementById('tagline');
  const enterBtn = document.getElementById('enter-button');
  const langBtn = document.getElementById('lang-toggle');
  if (tagline) tagline.textContent = t.tagline;
  if (enterBtn) enterBtn.textContent = t.enter;
  if (langBtn) langBtn.textContent = t.langLabel;

  const backBtn = document.querySelector('.back-button');
  if (backBtn) backBtn.textContent = t.backHome;

  const bio = document.querySelector('.bio-text');
  if (bio) bio.innerHTML = t.bio;

  // Contact info
  const phoneEl = document.getElementById('phone');
  const emailLabel = document.getElementById('email-label');
  if (lang === 'sl') {
    if (phoneEl) phoneEl.textContent = '068 658 113';
    if (emailLabel) emailLabel.textContent = 'E-pošta';
  } else {
    if (phoneEl) phoneEl.textContent = '00 386 68 658 113';
    if (emailLabel) emailLabel.textContent = 'Email';
  }
}

  // Language toggle
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = lang === 'en' ? 'sl' : 'en';
      setLanguage(lang);
    });
  }

  // GALLERY MODAL
  const galleryImages = document.querySelectorAll('.gallery img');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content');
  const caption = document.querySelector('.caption');
  const closeBtn = document.querySelector('.close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      caption.innerHTML = img.dataset.info;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.style.display = "none");
  }

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});
// --- BACKGROUND MUSIC TOGGLE ---
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

if (bgMusic && musicToggle) {
  // Restore user preference
  const musicMuted = localStorage.getItem('musicMuted') === 'true';
  bgMusic.muted = musicMuted;
  musicToggle.textContent = musicMuted ? '🔈' : '🔊';

  musicToggle.addEventListener('click', () => {
    bgMusic.muted = !bgMusic.muted;
    localStorage.setItem('musicMuted', bgMusic.muted);
    musicToggle.textContent = bgMusic.muted ? '🔈' : '🔊';
  });
}
// --- START MUSIC ON "ENTER/VSTOPI" BUTTON CLICK ---
const enterBtn = document.getElementById('enter-button');
if (enterBtn && bgMusic) {
  enterBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {
        console.log("Autoplay prevented until user interacts again.");
      });
    }
  });
}

