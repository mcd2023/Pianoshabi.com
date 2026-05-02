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
  const message = "Merhaba, piano dersleri hakkında bilgi almak istiyorum.";
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
    time: "4 months ago",
    text: "I have been learning piano with Shabi for a year and the experience is amazing. He is very patient, professional and talented.",
    original: "אני לומדת פסנתר אצל שבי כבר שנה והחוויה כל כך טובה..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Doron Yosef",
    location: "Tel Aviv, Israel",
    time: "4 months ago",
    text: "A top-level piano teacher with a professional and flexible approach.",
    original: "מורה לפסנתר ברמה גבוהה מאוד..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "K N",
    location: "Israel",
    time: "3 months ago",
    text: "Very hard to find such a professional and kind teacher. Highly recommended.",
    original: "קשה למצוא מורים כאלה מקצועיים..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Omri Klug",
    location: "Israel",
    time: "4 months ago",
    text: "Kind, patient and professional teacher who makes learning enjoyable.",
    original: "מורה סבלני ונחמד מאוד..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Yuval",
    location: "Israel",
    time: "4 months ago",
    text: "The best teacher I ever had. He made me love piano again.",
    original: "המורה הכי טוב שהיה לי..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Sandra Treves",
    location: "Israel",
    time: "4 months ago",
    text: "Shabi is a wonderful piano teacher. Very professional and patient.",
    original: "שבי הוא מורה נהדר..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Romy Attar",
    location: "Israel",
    time: "2 months ago",
    text: "Excellent piano teacher, very patient and talented.",
    original: "מורה מצוין לפסנתר..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Lior Sabag",
    location: "Israel",
    time: "4 months ago",
    text: "Amazing teacher who helped me achieve my dream of playing music.",
    original: "מורה מדהים שעזר לי..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Vered Forbes Lavon",
    location: "Israel",
    time: "4 months ago",
    text: "Great teacher, my daughter enjoyed every lesson.",
    original: "שבי הוא מורה נהדר לילדים..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Ortal Dai Zaguri",
    location: "Israel",
    time: "3 months ago",
    text: "Perfect teacher, very professional and inspiring.",
    original: "מורה מושלם..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Marina Papp",
    location: "Israel",
    time: "3 months ago",
    text: "Very professional, mixes modern and classical styles.",
    original: "מאוד מקצועי..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Guy Kazari",
    location: "Israel",
    time: "3 months ago",
    text: "Great and talented teacher who adapts to students.",
    original: "מורה מדהים..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Ilana Buchval",
    location: "Israel",
    time: "4 months ago",
    text: "Enjoying piano lessons very much. Very professional.",
    original: "נהנית מאוד משיעורי פסנתר..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Yair Natan",
    location: "Israel",
    time: "3 months ago",
    text: "Best piano teacher I have ever had.",
    original: "המורה הכי טוב שהיה לי..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Merav Schlam",
    location: "Israel",
    time: "4 months ago",
    text: "Excellent teacher!!!",
    original: "מורה מעולה!!!"
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Lihi Zilberberg",
    location: "Israel",
    time: "5 days ago",
    text: "Very kind teacher, my kids love the lessons.",
    original: "מורה מקסימה..."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    name: "Shira Manusevitz",
    location: "Israel",
    time: "4 months ago",
    text: "Great teacher, very professional.",
    original: "מורה נהדרת..."
  }
];

let i = 0;

const card = document.getElementById("reviewCard");
const stars = document.getElementById("stars");
const nameEl = document.getElementById("reviewName");
const locationEl = document.getElementById("reviewLocation");
const timeEl = document.getElementById("reviewTime");
const text = document.getElementById("reviewText");
const original = document.getElementById("reviewOriginal");

function showReview() {
  if (!card) return;

  card.classList.remove("show");

  setTimeout(() => {
    const r = reviews[i];

    stars.innerText = r.stars;
    nameEl.innerText = r.name;
    locationEl.innerText = r.location;
    timeEl.innerText = r.time;
    text.innerText = r.text;
    original.innerText = r.original;    
    
    card.classList.add("show");

    i = (i + 1) % reviews.length;
  }, 500);
}

showReview();
setInterval(showReview, 4000);

