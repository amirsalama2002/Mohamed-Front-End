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
      Login:"Login",
      Email:"Email",
      Password:"Password",
      Forgotpassword:"Forgot password ?",
      Rememberme:"Remember me",
      Sign_In:"Sign In",
      sore:"Don't have an account ? ",
      Sign_up:"   Sign up"
    },
    // العربية
    ar: {
      // NavBar
      navHome:"الصفحة الرئسية",
      falcon : "امير سلامة",
      about:"حول الصفحة",
      server: "خدمات",
      signup: "إنشاء حساب",
      login:"تسجيل الدخول",
      countactus:"اتصل بنا",
      arabe:"عربية",
      German:"الألمانية",
      english:"انجلزية",
      Chinese: "الصينية",
      Hindi: "الهندية",
      Italian: "إيطالية",
      French: "فرنسية",
      Spanish: "اسبانية",
      Russian: "روسية",
      Portuguese: "برتغالية",
      Hebrew: "عبرية",
      // NavBar
      Login:"تسجيل الدخول",
      Email:"البريد الإلكتروني",
      Password:"كلمة المرور",
      Forgotpassword:"هل نسيت كلمة السر؟",
      Rememberme:"تذكرنى",
      Sign_In:"تسجيل الدخول",
      sore:" ليس لديك حساب  ؟  ",
      Sign_up:"قم بالتسجيل  ",
  
    
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
        Hindi: "Hindi",
        Italian: "Italienisch",
        French: "Französisch",
        Spanish: "Spanisch",
        Russian: "Russisch",
        Portuguese: "Portugiesisch",
        Hebrew: "Hebräisch",
        // NavBar
        Login: "Anmelden",
        Email: "E-Mail",
        Password: "Passwort",
        Forgotpassword: "Passwort vergessen?",
        Rememberme: "Angemeldet bleiben",
        Sign_In: "Einloggen",
        sore: "Haben Sie noch kein Konto?",
        Sign_up: "Registrieren"
      
    },    
  
    // الصنية
    zh:
    {
      // NavBar
      navHome: "首页",
      falcon: "斯潘德克斯",
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
      // NavBar
      Login: "登录",
      Email: "电子邮件",
      Password: "密码",
      Forgotpassword: "忘记密码？",
      Rememberme: "记住我",
      Sign_In: "登录",
      sore: "没有帐户？",
      Sign_up: "注册"
    },
    
    // الهندية
    hi:
    {
      // NavBar
      navHome: "मुखपृष्ठ",
      falcon: "स्पैन्डेक्स",
      about: "हमारे बारे में",
      server: "सर्वर",
      signup: "साइन अप",
      login: "लॉगिन",
      countactus: "संपर्क करें",
      arabe: "अरबी",
      German: "जर्मन",
      english: "अंग्रेज़ी",
      Chinese: "चीनी",
      Hindi: "हिंदी",
      Italian: "इतालवी",
      French: "फ्रेंच",
      Spanish: "स्पेनिश",
      Russian: "रूसी",
      Portuguese: "पुर्तगाली",
      Hebrew: "हिब्रू",
      // NavBar
      Login: "लॉगिन",
      Email: "ईमेल",
      Password: "पासवर्ड",
      Forgotpassword: "पासवर्ड भूल गए?",
      Rememberme: "मुझे याद रखें",
      Sign_In: "साइन इन करें",
      sore: "क्या आपका खाता नहीं है?",
      Sign_up: "साइन अप करें"
    },
    
    // الايطالية
    it:
    {
      // NavBar
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
      // NavBar
      Login: "Accedi",
      Email: "Email",
      Password: "Password",
      Forgotpassword: "Hai dimenticato la password?",
      Rememberme: "Ricordami",
      Sign_In: "Accedi",
      sore: "Non hai un account?",
      Sign_up: "Registrati"
    },
    
    // الفرنسية
    fr:
    {
      // NavBar
      navHome: "Accueil",
      falcon: "Spandex",
      about: "À propos",
      server: "Serveur",
      signup: "S'inscrire",
      login: "Se connecter",
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
      // NavBar
      Login: "Se connecter",
      Email: "E-mail",
      Password: "Mot de passe",
      Forgotpassword: "Mot de passe oublié ?",
      Rememberme: "Se souvenir de moi",
      Sign_In: "Se connecter",
      sore: "Vous n'avez pas de compte ?",
      Sign_up: "S'inscrire"
    },
    
    // الاسبانية
    es:
    {
      // NavBar
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
      // NavBar
      Login: "Iniciar sesión",
      Email: "Correo electrónico",
      Password: "Contraseña",
      Forgotpassword: "¿Olvidaste tu contraseña?",
      Rememberme: "Recuérdame",
      Sign_In: "Iniciar sesión",
      sore: "¿No tienes una cuenta?",
      Sign_up: "Registrarse"
    },
    
    // الروسية
    ru:
    {
      // NavBar
      navHome: "Главная",
      falcon: "Спандекс",
      about: "О нас",
      server: "Сервер",
      signup: "Зарегистрироваться",
      login: "Войти",
      countactus: "Свяжитесь с нами",
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
      // NavBar
      Login: "Войти",
      Email: "Электронная почта",
      Password: "Пароль",
      Forgotpassword: "Забыли пароль?",
      Rememberme: "Запомнить меня",
      Sign_In: "Войти",
      sore: "У вас нет аккаунта?",
      Sign_up: "Зарегистрироваться"
    },
    
    // البرتغالية
    pt:
    {
      // NavBar
      navHome: "Início",
      falcon: "Spandex",
      about: "Sobre",
      server: "Servidor",
      signup: "Cadastrar",
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
      // NavBar
      Login: "Entrar",
      Email: "E-mail",
      Password: "Senha",
      Forgotpassword: "Esqueceu a senha?",
      Rememberme: "Lembrar de mim",
      Sign_In: "Entrar",
      sore: "Não tem uma conta?",
      Sign_up: "Cadastrar"
    },
    
    // العبرية
    he:
    {
      // NavBar
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
      Hindi: "הינדי",
      Italian: "איטלקית",
      French: "צרפתית",
      Spanish: "ספרדית",
      Russian: "רוסית",
      Portuguese: "פורטוגזית",
      Hebrew: "עברית",
      // NavBar
      Login: "התחבר",
      Email: "דוא\"ל",
      Password: "סיסמה",
      Forgotpassword: "שכחת סיסמה?",
      Rememberme: "זכור אותי",
      Sign_In: "התחבר",
      sore: "אין לך חשבון?",
      Sign_up: "הירשם"
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
    // NavBar
    // heder
    document.getElementById('Login').textContent = t.Login;
    document.getElementById('Email').textContent = t.Email;
    document.getElementById('Password').textContent = t.Password;
    document.getElementById('Forgotpassword').textContent = t.Forgotpassword;
    document.getElementById('Rememberme').textContent = t.Rememberme;
    document.getElementById('Sign_In').textContent = t.Sign_In;
    document.getElementById('sore').textContent = t.sore;
    document.getElementById('Sign_up').textContent = t.Sign_up;

    // heder
    // تغيير اتجاه النص واللغة
    document.getElementById('htmlTag').lang = lang;
    document.getElementById('htmlTag').dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
  
  // عند تحميل الصفحة
  const savedLang = localStorage.getItem('lang') || 'en';
  applyLanguage(savedLang);
  
  
  
  
  