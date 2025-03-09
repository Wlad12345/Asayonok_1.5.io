const swiper = new Swiper('.service__slider', {
  wrapperClass: 'service__items',
  SlideClass: 'service__item',
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    768: {
      enabled: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true
  },
});

var showAllButton = document.querySelector(".service__button--show");
var brandsList = document.querySelector('.service__items');

showAllButton.addEventListener('click', function () {
  showAllButton.classList.toggle('button-all--hidden');
  brandsList.classList.toggle('show__brands');
  if (showAllButton.classList.contains("button-all--hidden")) {
    showAllButton.textContent = 'Скрыть';
  } else {
    showAllButton.textContent = 'Показать все';
  }
});
