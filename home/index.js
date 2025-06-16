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
    english:"English",
    Chinese: "Chinese",
    Hindi:"Hindi",
    Italian:"Italian",
    French:"French",
    Spanish:"Spanish",
    Russian:"Russian",
    Portuguese:"Portuguese",
    Hebrew:"Hebrew",
    // NavBar
    // chat
    Messages:"Messages",
    // chat

    // Heder
       Heder:"Amir Salama Hassan"
    // Heder
  },
  // العربية
  ar: {
    // شريط التنقل
    navHome: "الرئيسية",
    falcon: "امير سلامة",
    about: "من نحن",
    server: "الخدمات",
    signup: "إنشاء حساب",
    login: "تسجيل الدخول",
    countactus: "اتصل بنا",
    arabe: "العربية",
    German: "الألمانية",
    english: "الإنجليزية",
    Chinese: "الصينية",
    Hindi: "الهندية",
    Italian: "الإيطالية",
    French: "الفرنسية",
    Spanish: "الإسبانية",
    Russian: "الروسية",
    Portuguese: "البرتغالية",
    Hebrew: "العبرية",
    // شريط التنقل
    // التسجيل
    signup1: "إنشاء حساب",
    amir: "الاسم",
    email: "البريد الإلكتروني",
    mo: "كلمة المرور",
    loo: "أوافق على الشروط",
    signup2: "إنشاء حساب",
    or: "أو",
    github: "التسجيل عبر GitHub",
    google: "التسجيل عبر Google",
    // التسجيل
    // chat
    Messages:"ارسال رسالة",
    // chat

    // Heder
    Heder:"امير سلامة حسن"

    // Heder
  },
  
  // الالمانية
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
    english: "Englisch",
    Chinese: "Chinesisch",
    Hindi: "Hindi", // بالألمانية
    Italian: "Italienisch",
    French: "Französisch",
    Spanish: "Spanisch",
    Russian: "Russisch",
    Portuguese: "Portugiesisch",
    Hebrew: "Hebräisch",
    // NavBar
    // chat
    Messages:"Messge"
    // chat
  },    

  // الالمانية
  
  // الصنية
  zh: {
    // NavBar
    navHome: "首页",
    falcon: "氨纶",
    about: "关于我们",
    server: "服务器",
    signup: "注册",
    login: "登录",
    countactus: "联系我们",
    arabe: "阿拉伯语",
    German: "德语",
    english: "英语",
    Chinese: "中文",
    Hindi: "印地语", // بالصينية
    Italian: "意大利语",
    French: "法语",
    Spanish: "西班牙语",
    Russian: "俄语",
    Portuguese: "葡萄牙语",
    Hebrew: "希伯来语"
    // NavBar
  },
  // الهندية
  hi: {
    navHome: "मुखपृष्ठ",         // Home
    falcon: "स्पैन्डेक्स",       // Spandex
    about: "हमारे बारे में",     // About
    server: "सर्वर",             // Server
    signup: "साइन अप करें",     // Sign Up
    login: "लॉगिन करें",        // Login
    countactus: "संपर्क करें",   // Contact Us
    arabe: "अरबी",               // Arabic
    German: "जर्मन",            // German
    english: "अंग्रेज़ी ", // English (US)
    Chinese: "चीनी" ,           // Chinese
    Hindi: "印地语", // بالصينية
    Italian: "इतालवी",
    French: "फ़्रेंच",
    Spanish: "西班牙语",
    Russian: "रूसी",
    Portuguese: "पुर्तगाली",
    Hebrew: "हिब्रू"


  },
  // الايطالية
  it: {
    navHome: "Home",
    falcon: "Spandex",
    about: "Chi siamo",
    server: "Server",
    signup: "Iscriviti",
    login: "Accedi",
    countactus: "Contattaci",
    arabe: "Arabo",
    German: "Tedesco",
    english: "Inglese",
    Chinese: "Cinese",
    Hindi: "Hindi",
    Italian: "Italiano",
    French: "Francese",
    Spanish: "Spagnolo",
    Russian: "Russo",
    Portuguese: "Portoghese",
    Hebrew: "Ebraico"

  },
  // الفرنسية
  fr: {
    navHome: "Accueil",
    falcon: "Spandex",
    about: "À propos",
    server: "Serveur",
    signup: "S'inscrire",
    login: "Se connecter",
    countactus: "Contactez-nous",
    arabe: "Arabe",
    German: "Allemand",
    english: "Anglais ",
    Chinese: "Chinois",
    Hindi: "Hindi",
    Italian: "Italien",
    French: "Français",
    Spanish: "Espagnol",
    Russian: "Russe",
    Portuguese: "Portugais",
    Hebrew: "Hébreu",
  },
  // الاسبانية
  es: {
    navHome: "Inicio",
    falcon: "Spandex",
    about: "Acerca de",
    server: "Servidor",
    signup: "Registrarse",
    login: "Iniciar sesión",
    countactus: "Contáctenos",
    arabe: "Árabe",
    German: "Alemán",
    english: "Inglés",
    Chinese: "Chino",
    Hindi: "Hindi",
    Italian: "Italiano",
    French: "Francés",
    Spanish: "Español",
    Russian: "Ruso",
    Portuguese: "Portugués",
    Hebrew: "Hebreo",
  },
  // الروسية
  ru: {
    navHome: "Главная",
    falcon: "Спандекс",
    about: "О нас",
    server: "Сервер",
    signup: "Зарегистрироваться",
    login: "Войти",
    countactus: "Связаться с нами",
    arabe: "Арабский",
    German: "Немецкий",
    english: "Английский",
    Chinese: "Китайский",
    Hindi: "Хинди",
    Italian: "Итальянский",
    French: "Французский",
    Spanish: "Испанский",
    Russian: "Русский",
    Portuguese: "Португальский",
    Hebrew: "Иврит"


  },
  // البرتغالية
  pt: {
    // NavBar
    navHome: "Início",
    falcon: "Spandex",
    about: "Sobre",
    server: "Servidor",
    signup: "Inscrever-se",
    login: "Entrar",
    countactus: "Contate-nos",
    arabe: "Árabe",
    German: "Alemão",
    english: "Inglês (EUA)",
    Chinese: "Chinês",
    Hindi: "Hindi",
    Italian: "Italiano",
    French: "Francês",
    Spanish: "Espanhol",
    Russian: "Russo",
    Portuguese: "Português",
    Hebrew: "Hebraico"


    // NavBar
  },
  // العبرية
  he: {
    // NavBar
    navHome: "בית",
    falcon: "ספנדקס",
    about: "אודות",
    server: "שרת",
    signup: "הרשמה",
    login: "התחברות",
    countactus: "צור קשר",
    arabe: "ערבית",
    German: "גרמנית",
    english: "אנגלית",
    Chinese: "סינית",
    Hindi: "הינדי",
    Italian: "איטלקית",
    French: "צרפתית",
    Spanish: "ספרדית",
    Russian: "רוסית",
    Portuguese: "פורטוגזית",
    Hebrew: "עברית"

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
  document.getElementById('Chinese').textContent = t.Chinese;
  document.getElementById('Hindi').textContent = t.Hindi;
  document.getElementById('Italian').textContent = t.Italian;
  document.getElementById('French').textContent = t.French;
  document.getElementById('Spanish').textContent = t.Spanish;
  document.getElementById('Russian').textContent = t.Russian;
  document.getElementById('Portuguese').textContent = t.Portuguese;
  document.getElementById('Hebrew').textContent = t.Hebrew;
  document.getElementById('Heder').textContent = t.Heder;
  // NavBar
  // chat
  document.getElementById('Messages').textContent = t.Messages;

  // chat
  // تغيير اتجاه النص واللغة
  document.getElementById('htmlTag').lang = lang;
  document.getElementById('htmlTag').dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// عند تحميل الصفحة
const savedLang = localStorage.getItem('lang') || 'en';
applyLanguage(savedLang);








// عند الضغط على الزرار نرجع لأعلى الصفحة
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});