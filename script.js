// =========================
// SMOOTH SCROLL (NAV LINKLER)
// =========================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =========================
// HERO BUTTON CLICK ACTION
// =========================
const buttons = document.querySelectorAll(".main-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Butona tıklandı!");
  });
});


// =========================
// HEADER SCROLL EFFECT
// =========================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
  } else {
    header.style.background = "rgba(0,0,0,0.6)";
  }
});