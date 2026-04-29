// Scroll animation (fade-in sections)
const sections = document.querySelectorAll("section");

function revealSections() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
}

// run on scroll
window.addEventListener("scroll", revealSections);
revealSections();

// debug log
console.log("PianoShabi site loaded 🎹");
