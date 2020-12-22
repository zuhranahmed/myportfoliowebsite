const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");
const container = document.querySelector(".wrapper");
const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

// responsive navbar
const navSlide = () => {
  burger.addEventListener("click", () => {
    navItems.classList.toggle("nav-active");
    overlay.classList.toggle("hidden");
  });
};

overlay.addEventListener("click", function () {
  navItems.classList.remove("nav-active");
  overlay.classList.add("hidden");
});

navSlide();

// Navbar Fade Animation

const hoverNavItems = function (e, opacity) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const navItems = link.closest(".navbar").querySelectorAll(".nav-link");

    navItems.forEach((el) => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

navbar.addEventListener("mouseover", function (e) {
  hoverNavItems(e, 0.5);
});
navbar.addEventListener("mouseout", function (e) {
  hoverNavItems(e, 1);
});
