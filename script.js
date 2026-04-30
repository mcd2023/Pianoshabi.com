
// =====================
// 🌍 LANGUAGE SYSTEM
// =====================

const texts = {
  en: {
    heroTitle: "Private Piano Lessons in Tel Aviv 🎹",
    heroDesc: "Learn piano step by step with a professional private teacher.",
    heroSub: "✔ 10+ years experience • ✔ All ages • ✔ Beginner friendly",
    whyTitle: "Why PianoShabi?",
    locTitle: "Location",
    locText1: "📍 Tel Aviv – Israel",
    locText2: "Private home or online lessons available",
    ctaTitle: "Start Your Piano Journey Today 🎹",
    ctaDesc: "Send a message on WhatsApp. Response within 1 hour."
  },

  he: {
    heroTitle: "שיעורי פסנתר פרטיים בתל אביב 🎹",
    heroDesc: "למד פסנתר צעד אחר צעד עם מורה מקצועי.",
    heroSub: "✔ ניסיון מעל 10 שנים • ✔ לכל הגילאים • ✔ מתאים למתחילים",
    whyTitle: "למה PianoShabi?",
    locTitle: "מיקום",
    locText1: "📍 תל אביב – ישראל",
    locText2: "שיעורים בבית או אונליין",
    ctaTitle: "התחל את המסע שלך בפסנתר 🎹",
    ctaDesc: "שלח הודעה בוואטסאפ. מענה תוך שעה."
  }
};

function setLang(lang){
  const t = texts[lang];

  for (let key in t){
    const el = document.getElementById(key);
    if(el) el.innerText = t[key];
  }

  // RTL fix
  document.body.style.direction = (lang === "he") ? "rtl" : "ltr";
  document.body.style.textAlign = (lang === "he") ? "right" : "left";

  localStorage.setItem("lang", lang);
}

// default
setLang(localStorage.getItem("lang") || "en");


// =====================
// 🎬 SCROLL ANIMATION
// =====================

const sections = document.querySelectorAll("section");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

console.log("PianoShabi landing page loaded 🎹");