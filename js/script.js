const slider = document.querySelector('.depoimentos__slider');
const indicador = [...document.querySelectorAll('.indicador__btn')];

let currentTestimonial = 0;

indicador.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicador[currentTestimonial].classList.remove('active');
        slider.style.marginLeft = ` -${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    });
});