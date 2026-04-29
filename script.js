// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerPoint) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();