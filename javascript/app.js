const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");

// responsive navbar
const navSlide = () => {
  burger.addEventListener("click", () => {
    navItems.classList.toggle("nav-active");
  });
};

navSlide();
