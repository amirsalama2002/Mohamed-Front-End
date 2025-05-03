const translations = {
    en: {
      title: "Welcome to Our Website",
      description: "This is a multi-language website using Tailwind CSS.",
      falcon : "Spandex",
      server:"server",
      contact:"contact",
      login:'Login',
      signup:"Sign Up",
      about : 'About',
      signup1:"Sign Up",
      amir:"Name",
      email:"Email Addres",
      Show:"Show",
      password:"Password"

    },
    ar: {
      title: "مرحباً بك في موقعنا",
      description: "هذا موقع متعدد اللغات باستخدام Tailwind CSS.",
      falcon : "امير سلامة",
      server: "خدمات",
      contact: "اتصال",
      login:"تسجيل الدخول",
      signup:"اشتراك",
      about: 'معلومات عنا',
      signup1: "تسجيل الدخول",
      amir:"الاسم الشخصي",
      email:"الايميل",
      Show:"شو",
      password:"تسجيل الدخول"
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
    document.getElementById('title').textContent = t.title;
    document.getElementById('description').textContent = t.description;
    document.getElementById('server').textContent = t.server;
    document.getElementById('contact').textContent = t.contact;
    document.getElementById('login').textContent = t.login;
    document.getElementById('signup').textContent = t.signup;
    document.getElementById('signup1').textContent = t.signup1;
    document.getElementById('about').textContent = t.about;
    document.getElementById('falcon').textContent = t.falcon;
    document.getElementById('amir').textContent = t.amir;
    document.getElementById('email').textContent = t.email;
    document.getElementById('Show').textContent = t.Show;
    document.getElementById('password').textContent = t.password;

    // تغيير اتجاه النص واللغة
    document.getElementById('htmlTag').lang = lang;
    document.getElementById('htmlTag').dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  // عند تحميل الصفحة
  const savedLang = localStorage.getItem('lang') || 'en';
  applyLanguage(savedLang);





  // const dropdownMenu = document.getElementById('language-dropdown-menu');
  // const toggleButton = document.querySelector('[data-dropdown-toggle="language-dropdown-menu"]');

  // document.addEventListener('click', function (event) {
  //   const isClickInsideMenu = dropdownMenu.contains(event.target);
  //   const isClickOnToggle = toggleButton.contains(event.target);

  //   if (!isClickInsideMenu && !isClickOnToggle) {
  //     dropdownMenu.classList.add('hidden'); 
  //   }
  // });

  // toggleButton.addEventListener('click', function () {
  //   dropdownMenu.classList.toggle('hidden');
  // });

  


