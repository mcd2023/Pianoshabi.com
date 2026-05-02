// =========================
// SMOOTH SCROLL (TEK VERSİYON)
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

    // küçük animasyon
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});


// =========================
// HEADER SCROLL EFFECT
// =========================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.style.background =
    window.scrollY > 50
      ? "rgba(0,0,0,0.9)"
      : "rgba(0,0,0,0.6)";
});


// =========================
// CAROUSEL (DOĞRU CLASS)
// =========================
let index = 0;
const reviews = document.querySelectorAll(".comment-item");

function showReview() {
  reviews.forEach(r => r.classList.remove("active"));
  reviews[index].classList.add("active");

  index = (index + 1) % reviews.length;
}

if (reviews.length > 0) {
  showReview();
  setInterval(showReview, 3000);
}
