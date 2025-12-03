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
// Show thank-you message on form submit
window.addEventListener('load', () => {
  const form = document.getElementById('contact-form');
  const thankYou = document.getElementById('thank-you-message');

  if (form && thankYou) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // stop real submit/refresh for now
      thankYou.style.display = 'block';
      form.reset();
    });
  }
});
// script.js - WhatsApp Form Submission
document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Your WhatsApp number (with country code, remove + for URL)
  const yourWhatsappNumber = "919731878494"; // Replace with your number
  
  // Format message
  const formattedMessage = 
    `New Property Inquiry %0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Email: ${email || 'Not provided'}%0A` +
    `Message: ${message || 'No message'}`;
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${919731878494}?text=${formattedMessage}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
  
  // Show thank you message
  document.getElementById('thank-you-message').style.display = 'block';
  this.reset();
});
