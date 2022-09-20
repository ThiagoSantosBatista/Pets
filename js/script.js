const slider = document.querySelector(".depoimentos__slider");
const indicador = document.querySelectorAll(".indicador__btn");
const mobileMenu = document.querySelector(".mobile-menu");
const navItems = document.querySelectorAll(".header__nav-item");
const nav = document.querySelector(".header__nav");
const ativo = nav.classList.contains("ativo");

let currentTestimonial = 0;

indicador.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicador[currentTestimonial].classList.remove("active");
    slider.style.marginLeft = ` -${100 * i}%`;
    item.classList.add("active");
    currentTestimonial = i;
  });
});

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  nav.classList.toggle("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
    navItems.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.toggle("ativo");
      });
    });
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

mobileMenu.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("touchstart", toggleMenu);
