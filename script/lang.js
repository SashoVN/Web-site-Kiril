function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadLanguage(lang);
}

function loadLanguage(lang) {
  const page = window.location.pathname.split("/").pop().replace(".html", "");
  fetch(`lang/${page}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-key]').forEach(el => {
        let key = el.getAttribute('data-key');
        if (data[lang] && data[lang][key]) {
          el.innerHTML = data[lang][key];
        }
      });
    })
    .catch(err => console.error('Error loading language:', err));
}

function updateFlag(lang) {
  const flagMap = {
    bg: 'img/bg.svg',
    en: 'img/en.svg',
    tr: 'img/tr.svg'
  };
  document.getElementById('current-flag').src = flagMap[lang];
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadLanguage(lang);
  updateFlag(lang);
  document.querySelector('.lang-menu').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'bg';
  loadLanguage(savedLang);
  updateFlag(savedLang);

  const btn = document.querySelector('.lang-btn');
  const menu = document.querySelector('.lang-menu');

  btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });

});
