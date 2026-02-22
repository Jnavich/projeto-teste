const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const cards = document.querySelectorAll(".game-card");

/* Navbar muda ao scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* Menu mobile */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Clique nos cards */
cards.forEach(card => {
  card.addEventListener("click", () => {
    const gameName = card.querySelector("h3").textContent;
    alert(`Você clicou em ${gameName}`);
  });
  const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("active");
    }
  });
  const slider = document.querySelector(".news-slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const cards = document.querySelectorAll(".news-card");
const dotsContainer = document.querySelector(".slider-dots");

/* Animação em cascata */
cards.forEach((card, i) => {
  setTimeout(() => card.classList.add("show"), i * 200);
});




/* Bolinhas */
cards.forEach((_, i) => {
  const dot = document.createElement("div");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

/* Filtro */
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;

    cards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
});

/* Modal */
const modal = document.getElementById("newsModal");
const closeModal = document.querySelector(".close-modal");

cards.forEach(card => {
  card.onclick = () => modal.style.display = "flex";
});

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
});
document.querySelector('.card-destaque').addEventListener('click', () => {
  // ...
});
});
