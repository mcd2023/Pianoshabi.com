// =========================
// SMOOTH SCROLL (NAV LINKLER)
// =========================

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // küçük tıklama animasyonu
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});


// =========================
// HERO BUTTON CLICK ACTION
// =========================

document.querySelectorAll(".main-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.getAttribute("data-action");

    if (action === "contact") {
      document.querySelector("#contact")?.scrollIntoView({
        behavior: "smooth"
      });
    }

    if (action === "lessons") {
      document.querySelector("#lessons")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =========================
// WHATSAPP BUTTON
// =========================

document.querySelector("#whatsappBtn")?.addEventListener("click", () => {

  const phone = "972523726062";

  const message = "Merhaba, piano dersleri hakkında bilgi almak istiyorum.";

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");

});


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

function openWhatsApp() {

  const phone = "972523726062";

  const message = "Merhaba, deneme piyano dersi için randevu almak istiyorum.";

  const url = "https://wa.me/972523726062?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}