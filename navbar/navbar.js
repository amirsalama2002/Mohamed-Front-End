function togglePassword() {
    const password = document.getElementById("password");
    const toggle = document.querySelector(".toggle");
    if (password.type === "password") {
      password.type = "text";
      toggle.textContent = "Hide";
    } else {
      password.type = "password";
      toggle.textContent = "Show";
    }
  }

//   

const translations = {
    en: {
      // NavBar
      navHome:"Home",
      falcon : "Spandex",
      about:"About",
      server:"server",
      signup:"Sign Up",
      login:'Login',
      countactus:"Countact Us",
      arabe:"Arab",
      German:"German",
      english:"English (US) ",
      // NavBar

   
    },
    ar: {
      // NavBar
      navHome:"الصفحة الرئسية",
      falcon : "امير سلامة",
      about:"حول الصفحة",
      server: "خدمات",
      signup:"تسجيل الدخول",
      login:"تسجيل الدخول",
      countactus:"اتصل بنا",
      arabe:"عربي",
      German:"الألمانية",
      english:"انجلزية",
      // NavBar
    
    },
    de: {
      // NavBar
      navHome: "Startseite",
      falcon: "Spandex",
      about: "Über uns",
      server: "Server",
      signup: "Registrieren",
      login: "Anmelden",
      countactus: "Kontaktieren Sie uns",
      arabe: "Arabisch",
      German: "Deutsch",
      english: "Englisch (US)",
      // NavBar


    }
        
  };

  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
  });

  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    const t = translations[lang];
    // NavBar
    document.getElementById('navHome').textContent = t.navHome;
    document.getElementById('falcon').textContent = t.falcon;
    document.getElementById('about').textContent = t.about;
    document.getElementById('server').textContent = t.server;
    document.getElementById('countactus').textContent = t.countactus;
    document.getElementById('signup').textContent = t.signup;
    document.getElementById('login').textContent = t.login;
    document.getElementById('arabe').textContent = t.arabe;
    document.getElementById('German').textContent = t.German;
    document.getElementById('english').textContent = t.english;
    // NavBar
    // تغيير اتجاه النص واللغة
    document.getElementById('htmlTag').lang = lang;
    document.getElementById('htmlTag').dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  // عند تحميل الصفحة
  const savedLang = localStorage.getItem('lang') || 'en';
  applyLanguage(savedLang);

