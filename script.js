// ===== NAVBAR HIGHLIGHT ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "#64748b";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#16a34a";
    }
  });
});

// ===== FADE-IN ANIMATION ON SCROLL =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".skill-card, .project-card, .about-content, .contact-links a").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ===== TYPING EFFECT ON HERO =====
const roles = ["Aspiring Developer", "IT Student", "Problem Solver", "Web Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.querySelector(".hero-text h2");

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingEl.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();

// ===== SMOOTH SCROLL FOR NAV LINKS =====
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
