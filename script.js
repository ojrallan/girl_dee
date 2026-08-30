/* ==========================
MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

/* ==========================
DARK MODE
========================== */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});

/* ==========================
SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
  ".section, .card, .timeline-content, .about-card",
);

function revealOnScroll() {
  revealElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================
ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

function activeNavigation() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeNavigation);

/* ==========================
BACK TO TOP BUTTON
========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* ==========================
PAGE LOADING ANIMATION
========================== */

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* ==========================
CONTACT FORM DEMO
========================== */

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you for reaching out! I will get back to you soon.");

    form.reset();
  });
}
