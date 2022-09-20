const slider = document.querySelector(".depoimentos__slider");
const indicador = document.querySelectorAll(".indicador__btn");
const mobileMenu = document.querySelector(".mobile-menu");
const navItems = document.querySelectorAll(".header__nav-item");

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
  const nav = document.querySelector(".header__nav");
  nav.classList.toggle("ativo");
  const ativo = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}
navItems.forEach((link) => {
  const nav = document.querySelector(".header__nav");
  link.addEventListener("click", () => {
    nav.classList.toggle("ativo");
  });
});
mobileMenu.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("touchstart", toggleMenu);
