// Simple scroll animation
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerPoint) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Initial setup
document.querySelectorAll("section").forEach((sec) => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.6s ease-out";
});
// Fade-in effect on scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const triggerPoint = window.innerHeight * 0.85; // when to trigger

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
});

// Run once on load (for top of page)
window.addEventListener("load", () => {
  const sections = document.querySelectorAll("section");
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
});
