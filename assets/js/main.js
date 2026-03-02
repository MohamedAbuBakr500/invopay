document.addEventListener("DOMContentLoaded", function() {

    /* ========= Header Include ========= */

    fetch("includes/header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;

        initHeaderEffects(); // نشغل تأثيرات الهيدر بعد ما يتحمل
      });

    /* ========= Slider ========= */

    const slides = document.querySelectorAll(".slide");
    let current = 0;

    function nextSlide() {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }

    setInterval(nextSlide, 4000);

});


/* ========= Functions ========= */

function initHeaderEffects() {

    const cursor = document.querySelector(".custom-cursor");
    const dot = document.querySelector(".cursor-dot");
    const header = document.querySelector(".main-header");

    if(cursor){
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }

    if(dot){
        document.addEventListener("mousemove", (e) => {
            dot.style.left = e.clientX + "px";
            dot.style.top = e.clientY + "px";
        });
    }

    if(header){
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }
}

const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
});

document.addEventListener("click", function (e) {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && toggle.contains(e.target)) {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  }
});
