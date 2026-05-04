// =========================
// SMOOTH SCROLL (NAV LINKLER)
// =========================
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    this.style.transform = "scale(0.9)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});


// =========================
// HERO BUTTON ACTIONS
// =========================
document.querySelectorAll(".main-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.getAttribute("data-action");

    if (action === "contact") {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }

    if (action === "lessons") {
      document.querySelector("#lessons")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// =========================
// WHATSAPP BUTTON
// =========================
function openWhatsApp() {
  const phone = "972523726062";
  const message = "שלום, אני רוצה לקבל מידע על שיעורי פסנתר. Hi, I would like to get information about piano lessons.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


// =========================
// HEADER SCROLL EFFECT
// =========================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
  } else {
    header.style.background = "rgba(0,0,0,0.6)";
  }
});


// =========================
// BACKGROUND MUSIC (SAFE AUTOPLAY)
// =========================
window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");
  audio?.play().catch(() => {});
});

document.addEventListener("click", () => {
  const audio = document.getElementById("bg-music");
  if (audio && audio.paused) {
    audio.volume = 0.4;
    audio.play();
  }
}, { once: true });


// =========================
// TESTIMONIAL SLIDER (CLASSIC)
// =========================
const slider = document.getElementById("slider");

if (slider) {
  let index = 0;
  const cards = slider.querySelectorAll(".card");

  function showSlide(i) {
    cards.forEach(c => c.classList.remove("active"));
    if (cards[i]) cards[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % cards.length;
    showSlide(index);
  }

  setInterval(nextSlide, 4000);

  // swipe support
  let startX = 0;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) {
      index = (index - 1 + cards.length) % cards.length;
      showSlide(index);
    }
  });
}


// =========================
// 17 COMMENT FADE SYSTEM
// =========================
const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Shani Hogi",
    location: "Tel Aviv, Israel",
    time: "לפני 4 חודשים",
    original:" אני לומד פסנתר עם שבי כבר שנה והחוויה מדהימה. הוא סבלני מאוד, מקצועי ומוכשר.",
    text: "I have been learning piano with Shabi for a year and the experience is amazing. He is very patient, professional and talented."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Doron Yosef",
    location: "Tel Aviv, Israel",
    time: "לפני 4 חודשים",
    original: " מורה לפסנתר ברמה גבוהה עם גישה מקצועית וגמישה.",
    text: "A top-level piano teacher with a professional and flexible approach."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "K N",
    location: "Israel",
    time: "לפני 3 חודשים",
    original: " קשה מאוד למצוא מורה מקצועי ואדיב כזה. מומלץ מאוד.",
    text: "Very hard to find such a professional and kind teacher. Highly recommended."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Omri Klug",
    location: "Israel",
    time: "לפני 4 חודשים",
    original:" מורה נדיב, סבלני ומקצועי שהופך את הלמידה למהנה.",
    text: "Kind, patient and professional teacher who makes learning enjoyable."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Yuval",
    location: "Israel",
    time: "לפני 4 חודשים",
    original: "המורה הכי טוב שהיה לי...",
    text: "The best teacher I ever had. He made me love piano again."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Sandra Treves",
    location: "Israel",
    time: "לפני 4 חודשים",
    original:" המורה הכי טוב שהיה לי אי פעם. הוא גרם לי לאהוב את הפיאנו שוב.",
    text: "Shabi is a wonderful piano teacher. Very professional and patient."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Romy Attar",
    location: "Israel",
    time: "לפני 2 חודשים",
    original:" מורה לפסנתר מצוין, סבלני ומוכשר מאוד.",
    text: "Excellent piano teacher, very patient and talented."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Lior Sabag",
    location: "Israel",
    time: "לפני 4 חודשים",
    original:"מורה נהדרת שעזרה לי להשיג את החלום שלי לנגן מוזיקה.",
    text: "Amazing teacher who helped me achieve my dream of playing music."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Vered Forbes Lavon",
    location: "Israel",
    time: "לפני 4 חודשים",
    original:" מורה נהדר, בתי נהנתה מכל שיעור.",
    text: "Great teacher, my daughter enjoyed every lesson."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Ortal Dai Zaguri",
    location: "Israel",
    time: "לפני 3 חודשים",
    original: "מורה מושלם, מאוד מקצועי ומעורר השראה.",
    text: "Perfect teacher, very professional and inspiring."    
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Marina Papp",
    location: "Israel",
    time: "לפני 3 חודשים",
    original: "מאוד מקצועי, משלב סגנונות מודרניים וקלאסיים.",
    text: "Very professional, mixes modern and classical styles."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Guy Kazari",
    location: "Israel",
    time: "לפני 3 חודשים",
    original:"מורה גדול ומוכשר שמסתגל לתלמידים.",
    text: "Great and talented teacher who adapts to students."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Ilana Buchval",
    location: "Israel",
    time: "לפני 4 חודשים",
    original:"נהנה מאוד משיעורי פסנתר. מאוד מקצועי.",
    text: "Enjoying piano lessons very much. Very professional."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Yair Natan",
    location: "Israel",
    time: "לפני 3 חודשים",
    original: "המורה הכי טוב שהיה לי...",
    text: "Best piano teacher I have ever had."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Merav Schlam",
    location: "Israel",
    time: "לפני 4 חודשים",
    original: "מורה מעולה!!!",
    text: "Excellent teacher!!!"
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Lihi Zilberberg",
    location: "Israel",
    time: "5 days ago",
    original: "מורה מאוד טובה, הילדים שלי אוהבים את השיעורים.",
    text: "Very kind teacher, my kids love the lessons."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Shira Manusevitz",
    location: "Israel",
    time: "לפני 4 חודשים",
    original:" מורה מצוין, מאוד מקצועי.",
    text: "Great teacher, very professional."
  }
];

let i = 0;

const card = document.getElementById("reviewCard");
const stars = document.getElementById("stars");
const nameEl = document.getElementById("reviewName");
const locationEl = document.getElementById("reviewLocation");
const timeEl = document.getElementById("reviewTime");
const original = document.getElementById("reviewOriginal");
const text = document.getElementById("reviewText");

function showReview() {
  if (!card) return;

  card.classList.remove("show");

  setTimeout(() => {
    const r = reviews[i];

    stars.innerText = r.stars;
    nameEl.innerText = r.name;
    locationEl.innerText = r.location;
    timeEl.innerText = r.time;
    original.innerText = r.original;
    text.innerText = r.text;    
    
    card.classList.add("show");

    i = (i + 1) % reviews.length;
  }, 500);
}

showReview();
setInterval(showReview, 4000);

window.addEventListener("scroll", function () {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
