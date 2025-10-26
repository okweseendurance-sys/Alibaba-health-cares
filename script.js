/* ===== Alibaba Health Cares - Script ===== */

/* ---------- Smooth Scroll for Navigation ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ---------- Active Navigation Highlight ---------- */
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ---------- Contact Form Submission ---------- */
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("✅ Thank you for reaching out to Alibaba Health Cares! Our team will contact you shortly.");
    form.reset();
  });
}

/* ---------- Scroll Fade-in Animation ---------- */
const fadeElements = document.querySelectorAll(".service, .faq-item, .about p");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

