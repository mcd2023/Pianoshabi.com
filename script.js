// Sadece görsel animasyon (bozma riski yok)

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

// CSS ile birlikte soft animation
window.addEventListener("scroll", reveal);
reveal();

// debug
console.log("PianoShabi landing page loaded 🎹");
