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
      // Countactus
      Contact_Us:"Contact Us",
      name_Contact_Us:"Name",
      email_Contact_Us:"Email",
      phone_Contact_Us:"Phone",
      messge_Contact_Us:"Message",
      send_Contact_Us:"Send Message",
      fill:"Fill up the form below to send us a message."
      // Countactus
    },
    // العربية
    ar: {
      // NavBar
      navHome:"الصفحة الرئسية",
      falcon : "امير سلامة",
      about:"من نحن",
      server: "الخدمات",
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
      // Countactus
      Contact_Us:"اتصل بنا ",
      email_Contact_Us:"البريد الإلكتروني",
      name_Contact_Us:"الاسم",
      phone_Contact_Us:"التلفون",
      messge_Contact_Us:"رسالة",
      send_Contact_Us:"أرسل رسالة",
      fill:"إملأ النموذج أدناه لإرسال رسالة إلينا."
      // Countactus
    
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
      // Countactus
      Contact_Us: "Kontaktiere uns",
      name_Contact_Us:"Name",
      email_Contact_Us:"E-Mail",
      phone_Contact_Us:"Telefon",
      messge_Contact_Us:"Nachricht",
      send_Contact_Us:"Nachricht senden",
      fill:"Füllen Sie das folgende Formular aus, um uns eine Nachricht zu senden."
      // Countactus
    },    
  
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
      Hebrew: "希伯来语",
      // NavBar
      // Countactus
      Contact_Us:"联系我们",
      name_Contact_Us:"姓名",
      email_Contact_Us:"电子邮件",
      phone_Contact_Us:"电话",
      messge_Contact_Us: "信息",
      send_Contact_Us:"发送消息",
      fill:"请填写下面的表格以向我们发送消息。"
      // Countactus
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
      Hebrew: "हिब्रू",
      // Countactus
      Contact_Us: "संपर्क करें",
      name_Contact_Us: "नाम",
      email_Contact_Us:"ईमेल",
      phone_Contact_Us:"फ़ोन",
      messge_Contact_Us:"संदेश",
      send_Contact_Us:"संदेश भेजें",
      fill:"कृपया हमें संदेश भेजने के लिए नीचे दिया गया फ़ॉर्म भरें।"
      // Countactus
  
  
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
      Hebrew: "Ebraico",
      // Countactus
      Contact_Us:"Contattaci",
      name_Contact_Us:"Nome",
      email_Contact_Us:"Email",
      phone_Contact_Us:"Telefono",
      messge_Contact_Us:"Messaggio",
      send_Contact_Us:"Invia messaggio",
      fill:"Compila il modulo qui sotto per inviarci un messaggio."
  
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
      // Countactus
      Contact_Us: "Contactez-nous",
      name_Contact_Us:"Nom",
      email_Contact_Us:"Email",
      phone_Contact_Us:"Téléphone",
      messge_Contact_Us:"Message",
      send_Contact_Us:"Envoyer le message",
      fill:"Veuillez remplir le formulaire ci-dessous pour nous envoyer un message."
      // Countactus
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
      // Countactus
      Contact_Us:"Contáctanos",
      name_Contact_Us:"Nombre",
      email_Contact_Us:"Correo electrónico",
      phone_Contact_Us:"Teléfono",
      messge_Contact_Us:"Mensaje",
      send_Contact_Us: "Enviar mensaje",
      fill:"Por favor, rellena el siguiente formulario para enviarnos un mensaje."
      // Countactus
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
      Hebrew: "Иврит",
      // Countactus
      Contact_Us:"Связаться с нами",
      name_Contact_Us: "Имя",
      email_Contact_Us:"Электронная почта",
      phone_Contact_Us: "Телефон",
      messge_Contact_Us:"Сообщение",
      send_Contact_Us:"Отправить сообщение",
      fill:"Пожалуйста, заполните форму ниже, чтобы отправить нам сообщение."
      // Countactus
  
  
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
      Hebrew: "Hebraico",
      // Countactus
      Contact_Us:"Fale Conosco",
      name_Contact_Us:"Nome",
      email_Contact_Us:"Email",
      phone_Contact_Us:"Telefone",
      messge_Contact_Us:"Mensagem",
      send_Contact_Us:"Enviar Mensagem",
      fill:"Por favor, preencha o formulário abaixo para nos enviar uma mensagem."
      // Countactus
  
  
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
      Hebrew: "עברית",
      // Countactus
      Contact_Us: "צור קשר",
      name_Contact_Us:"שם",
      email_Contact_Us:"דוא\"ל",
      phone_Contact_Us:"טלפון",
      messge_Contact_Us:"הודעה",
      send_Contact_Us:"שלח הודעה",
      fill:"אנא מלא את הטופס למטה כדי לשלוח לנו הודעה.",
      // Countactus
  
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
    // NavBar
    // Countact-us
    document.getElementById('Contact_Us').textContent = t.Contact_Us;
    document.getElementById('name_Contact_Us').textContent = t.name_Contact_Us;
    document.getElementById('email_Contact_Us').textContent = t.email_Contact_Us;
    document.getElementById('phone_Contact_Us').textContent = t.phone_Contact_Us;
    document.getElementById('messge_Contact_Us').textContent = t.messge_Contact_Us;
    document.getElementById('send_Contact_Us').textContent = t.send_Contact_Us;
    document.getElementById('fill').textContent = t.fill;

    // Countact-us
    // تغيير اتجاه النص واللغة
    document.getElementById('htmlTag').lang = lang;
    document.getElementById('htmlTag').dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
  
  // عند تحميل الصفحة
  const savedLang = localStorage.getItem('lang') || 'en';
  applyLanguage(savedLang);
  
  
  
  
  

  // Countact uS
  const form = document.getElementById('form');
  const result = document.getElementById('result');
  
  form.addEventListener('submit', function(e) {
      const formData = new FormData(form);
      e.preventDefault();
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      result.innerHTML = "Please wait..."
  
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
              result.innerHTML = json.message;
              result.classList.remove("text-gray-500");
              result.classList.add("text-green-500");
            } else {
              console.log(response);
              result.innerHTML = json.message;
              result.classList.remove("text-gray-500");
              result.classList.add("text-red-500");
            }
          })
          .catch((error) => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });