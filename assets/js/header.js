// Custom Cursor Movement
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Header Scroll Effect
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// menu header button active 

// const dot = document.querySelector(".cursor-dot");

// document.addEventListener("mousemove", (e) => {
//   dot.style.left = e.clientX + "px";
//   dot.style.top = e.clientY + "px";
// });

// document.addEventListener("click", function (e) {
//   const toggle = document.querySelector(".menu-toggle");
//   const nav = document.querySelector(".nav-links");

//   if (toggle && toggle.contains(e.target)) {
//     toggle.classList.toggle("active");
//     nav.classList.toggle("active");
//   }
// });
