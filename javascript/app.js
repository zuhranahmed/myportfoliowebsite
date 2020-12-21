const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");
const container = document.querySelector(".wrapper");
const overlay = document.querySelector(".overlay");

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
