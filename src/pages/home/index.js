console.log('Hello, World!');

import "../header.js";
import "./styles.css";


const carousel = document.querySelector("#by-category .category-grid");

const leftArrow = document.querySelector(".prev-btn");
leftArrow.className = "arrow left-arrow";
leftArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: -1300, behavior: "smooth" });
});
const rightArrow = document.querySelector(".next-btn");
rightArrow.className = "arrow right-arrow";
rightArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: 1300, behavior: "smooth" });
});

menu.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});


