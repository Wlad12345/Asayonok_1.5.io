const sliderItems=document.querySelector('.service__items');
const sliderItem=document.querySelectorAll('.service__item');
const showAllBtn = document.querySelector('.service__button');
const paginationBox = document.querySelector('.service__pagination');
paginationBox.innerHTML =`<button class='pagination'></button>`.repeat(sliderItem.length);
paginationBox.firstChild.classList.add('active');

let paginationArray = [...paginationBox.children];
for (let i = 0; i < paginationArray.length; i++) {
    paginationArray[i].addEventListener('click', () => {
        for (let j = 0; j < paginationArray.length; j++) {
            paginationArray[j].classList.remove('active');
        }
        paginationArray[i].classList.add('active');
        sliderItems.style.left = -sliderItems.offsetWidth / sliderItem.length * i + 'px';
    });
}

const arrow = document.querySelector('.show__arrow');
const btnText = document.querySelector('.service__button--info');

showAllBtn.addEventListener('click', () => {
    sliderItems.classList.toggle('show__brands');
    arrow.classList.toggle('hide__arrow');
    arrow.classList.contains('hide__arrow') ? 
        btnText.textContent = 'Скрыть':
        btnText.textContent = 'Показать все';
    
});
