const texts = {
  en: {
    heroTitle: "Private Piano Lessons in Tel Aviv 🎹",
    heroDesc: "Learn piano step by step with a professional teacher.",
    heroSub: "✔ 10+ years experience • ✔ All ages • ✔ Beginner friendly",

    whyTitle: "Why PianoShabi?",
    why1: "✔ One-on-one private lessons",
    why2: "✔ Fast structured learning",
    why3: "✔ Online & in-person lessons",
    why4: "✔ Flexible schedule",

    videoTitle: "Watch a Sample Lesson 🎥",

    locTitle: "Location",
    locText1: "📍 Tel Aviv – Israel",
    locText2: "Private home or online lessons available",

    ctaTitle: "Start Your Piano Journey Today 🎹",
    ctaDesc: "Send a message on WhatsApp",

    wa: "https://wa.me/972523726062"
  },

  he: {
    heroTitle: "שיעורי פסנתר פרטיים בתל אביב 🎹",
    heroDesc: "למד פסנתר צעד אחר צעד עם מורה מקצועי.",
    heroSub: "✔ ניסיון מעל 10 שנים • ✔ לכל הגילאים • ✔ מתאים למתחילים",

    whyTitle: "למה PianoShabi?",
    why1: "✔ שיעורים פרטיים אחד על אחד",
    why2: "✔ למידה מהירה ומובנית",
    why3: "✔ אונליין ובפרונטלי",
    why4: "✔ לוח זמנים גמיש",

    videoTitle: "צפה בשיעור לדוגמה 🎥",

    locTitle: "מיקום",
    locText1: "📍 תל אביב – ישראל",
    locText2: "שיעורים בבית או אונליין",

    ctaTitle: "התחל את המסע שלך 🎹",
    ctaDesc: "שלח הודעה בוואטסאפ",

    wa: "https://wa.me/972523726062"
  }
};

function setTextMode(lang) {
  const t = texts[lang];

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (t[key]) el.innerText = t[key];
  });

  document.getElementById("whatsappBtn").href = t.wa;
  document.getElementById("ctaBtn").href = t.wa;

  document.body.style.direction = lang === "he" ? "rtl" : "ltr";
  document.body.style.textAlign = lang === "he" ? "right" : "left";

  localStorage.setItem("lang", lang);
}

/* alias for HTML buttons */
function setLang(lang) {
  setTextMode(lang);
}

/* default */
setLang(localStorage.getItem("lang") || "en");