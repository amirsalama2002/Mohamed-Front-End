const translations = {
    en: {
      title: "Welcome to the website",
      description: "This is a simple multilingual site."
    },
    ar: {
      title: "مرحبًا بك في الموقع",
      description: "هذا موقع متعدد اللغات بسيط."
    }
  };
  
  function setLanguage(lang) {
    document.getElementById("htmlTag").lang = lang;
    document.getElementById("htmlTag").dir = lang === "ar" ? "rtl" : "ltr";
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
  }

  function setLanguage(lang) {
    document.getElementById("htmlTag").lang = lang;
    document.getElementById("htmlTag").dir = lang === "ar" ? "rtl" : "ltr";
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
  }


  window.onload = () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
  };
  
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    // باقي الكود...
  }