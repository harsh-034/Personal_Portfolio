// script.js

// AOS Init
AOS.init();

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursorDot.style.top = `${y}px`;
  cursorDot.style.left = `${x}px`;
  cursorOutline.style.top = `${y}px`;
  cursorOutline.style.left = `${x}px`;
});

// Smooth Hover Scaling
const hireBtn = document.querySelector(".hire-button");
hireBtn.addEventListener("mouseover", () => {
  cursorOutline.style.transform = "scale(1.5) translate(-50%, -50%)";
});

hireBtn.addEventListener("mouseout", () => {
  cursorOutline.style.transform = "scale(1) translate(-50%, -50%)";
});
