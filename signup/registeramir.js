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
    // signup
signup1:"Sign up",
amir:"Name",
email:"Email Addres",
mo:"Password",
loo:"I Accept The Terms",
signup2:"Sign up",
or:"OR",
github:"Sign up with GitHub",
google:"Sign up with Google",
// Signup
  },
  // العربية
  ar: {
    // شريط التنقل
    navHome: "الرئيسية",
    falcon: "سبانديكس",
    about: "من نحن",
    server: "الخادم",
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
    github: "سجّل باستخدام GitHub",
    google: "سجّل باستخدام Google",
    // التسجيل
  },  // 
  // الالمانية
  de: {
    // Navigationsleiste
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
    Hindi: "Hindi",
    Italian: "Italienisch",
    French: "Französisch",
    Spanish: "Spanisch",
    Russian: "Russisch",
    Portuguese: "Portugiesisch",
    Hebrew: "Hebräisch",
    // Navigationsleiste
    // Registrierung
    signup1: "Registrieren",
    amir: "Name",
    email: "E-Mail-Adresse",
    mo: "Passwort",
    loo: "Ich akzeptiere die Bedingungen",
    signup2: "Registrieren",
    or: "ODER",
    github: "Mit GitHub registrieren",
    google: "Mit Google registrieren",
    // Registrierung
  },
  

  // الصنية
  zh: {
    // 导航栏
    navHome: "主页",
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
    Hindi: "印地语",
    Italian: "意大利语",
    French: "法语",
    Spanish: "西班牙语",
    Russian: "俄语",
    Portuguese: "葡萄牙语",
    Hebrew: "希伯来语",
    // 导航栏
    // 注册
    signup1: "注册",
    amir: "姓名",
    email: "电子邮箱地址",
    mo: "密码",
    loo: "我接受条款",
    signup2: "注册",
    or: "或",
    github: "使用 GitHub 注册",
    google: "使用 Google 注册",
    // 注册
  },
  
  // الهندية
  hi: {
    // नेविगेशन बार
    navHome: "मुखपृष्ठ",
    falcon: "स्पैन्डेक्स",
    about: "हमारे बारे में",
    server: "सर्वर",
    signup: "साइन अप करें",
    login: "लॉगिन करें",
    countactus: "संपर्क करें",
    arabe: "अरबी",
    German: "जर्मन",
    english: "अंग्रेज़ी",
    Chinese: "चीनी",
    Hindi: "हिंदी",
    Italian: "इतालवी",
    French: "फ़्रेंच",
    Spanish: "स्पेनिश",
    Russian: "रूसी",
    Portuguese: "पुर्तगाली",
    Hebrew: "हिब्रू",
    // नेविगेशन बार
    // साइनअप
    signup1: "साइन अप करें",
    amir: "नाम",
    email: "ईमेल पता",
    mo: "पासवर्ड",
    loo: "मैं नियमों को स्वीकार करता हूँ",
    signup2: "साइन अप करें",
    or: "या",
    github: "GitHub से साइन अप करें",
    google: "Google से साइन अप करें",
    // साइनअप
  },
  
  // الايطالية
  it: {
    // Barra di navigazione
    navHome: "Home",
    falcon: "Spandex",
    about: "Chi siamo",
    server: "Server",
    signup: "Registrati",
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
    Hebrew: "Ebraico",
    // Barra di navigazione
    // Registrazione
    signup1: "Registrati",
    amir: "Nome",
    email: "Indirizzo Email",
    mo: "Password",
    loo: "Accetto i termini",
    signup2: "Registrati",
    or: "OPPURE",
    github: "Registrati con GitHub",
    google: "Registrati con Google",
    // Registrazione
  },
  
  // الفرنسية
  fr: {
    // Barre de navigation
    navHome: "Accueil",
    falcon: "Spandex",
    about: "À propos",
    server: "Serveur",
    signup: "S'inscrire",
    login: "Connexion",
    countactus: "Contactez-nous",
    arabe: "Arabe",
    German: "Allemand",
    english: "Anglais",
    Chinese: "Chinois",
    Hindi: "Hindi",
    Italian: "Italien",
    French: "Français",
    Spanish: "Espagnol",
    Russian: "Russe",
    Portuguese: "Portugais",
    Hebrew: "Hébreu",
    // Barre de navigation
    // Inscription
    signup1: "S'inscrire",
    amir: "Nom",
    email: "Adresse e-mail",
    mo: "Mot de passe",
    loo: "J'accepte les conditions",
    signup2: "S'inscrire",
    or: "OU",
    github: "S'inscrire avec GitHub",
    google: "S'inscrire avec Google",
    // Inscription
  },
  
  // الاسبانية
  es: {
    // Barra de navegación
    navHome: "Inicio",
    falcon: "Spandex",
    about: "Acerca de",
    server: "Servidor",
    signup: "Registrarse",
    login: "Iniciar sesión",
    countactus: "Contáctanos",
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
    // Barra de navegación
    // Registro
    signup1: "Registrarse",
    amir: "Nombre",
    email: "Correo electrónico",
    mo: "Contraseña",
    loo: "Acepto los términos",
    signup2: "Registrarse",
    or: "O",
    github: "Registrarse con GitHub",
    google: "Registrarse con Google",
    // Registro
  },
  
  // الروسية
  ru: {
    // Навигационная панель
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
    Hebrew: "Иврит",
    // Навигационная панель
    // Регистрация
    signup1: "Зарегистрироваться",
    amir: "Имя",
    email: "Электронная почта",
    mo: "Пароль",
    loo: "Я принимаю условия",
    signup2: "Зарегистрироваться",
    or: "ИЛИ",
    github: "Регистрация через GitHub",
    google: "Регистрация через Google",
    // Регистрация
  },
  
  // البرتغالية
  pt: {
    // Barra de navegação
    navHome: "Início",
    falcon: "Spandex",
    about: "Sobre nós",
    server: "Servidor",
    signup: "Cadastrar-se",
    login: "Entrar",
    countactus: "Contate-nos",
    arabe: "Árabe",
    German: "Alemão",
    english: "Inglês",
    Chinese: "Chinês",
    Hindi: "Hindi",
    Italian: "Italiano",
    French: "Francês",
    Spanish: "Espanhol",
    Russian: "Russo",
    Portuguese: "Português",
    Hebrew: "Hebraico",
    // Barra de navegação
    // Cadastro
    signup1: "Cadastrar-se",
    amir: "Nome",
    email: "Endereço de e-mail",
    mo: "Senha",
    loo: "Aceito os termos",
    signup2: "Cadastrar-se",
    or: "OU",
    github: "Cadastrar-se com GitHub",
    google: "Cadastrar-se com Google",
    // Cadastro
  },
  
  // العبرية
  he: {
    // סרגל ניווט
    navHome: "דף הבית",
    falcon: "ספנדקס",
    about: "אודות",
    server: "שרת",
    signup: "הירשם",
    login: "התחבר",
    countactus: "צור קשר",
    arabe: "ערבית",
    German: "גרמנית",
    english: "אנגלית",
    Chinese: "סינית",
    Hindi: "הינדית",
    Italian: "איטלקית",
    French: "צרפתית",
    Spanish: "ספרדית",
    Russian: "רוסית",
    Portuguese: "פורטוגזית",
    Hebrew: "עברית",
    // סרגל ניווט
    // הרשמה
    signup1: "הירשם",
    amir: "שם",
    email: "כתובת אימייל",
    mo: "סיסמה",
    loo: "אני מקבל את התנאים",
    signup2: "הירשם",
    or: "או",
    github: "הירשם עם GitHub",
    google: "הירשם עם Google",
    // הרשמה
  },
  
  
  
  
  
  
  
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
  // NavBar
  // signup
  document.getElementById('signup1').textContent = t.signup1;
  document.getElementById('amir').textContent = t.amir;
  document.getElementById('email').textContent = t.email;
  document.getElementById('mo').textContent = t.mo;
  document.getElementById('loo').textContent = t.loo;
  document.getElementById('signup2').textContent = t.signup2;
  document.getElementById('or').textContent = t.or;
  document.getElementById('github').textContent = t.github;
  document.getElementById('google').textContent = t.google;
  // signup
  // تغيير اتجاه النص واللغة
  document.getElementById('htmlTag').lang = lang;
  document.getElementById('htmlTag').dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// عند تحميل الصفحة
const savedLang = localStorage.getItem('lang') || 'en';
applyLanguage(savedLang);




