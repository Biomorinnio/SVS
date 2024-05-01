const swiperTariffs = new Swiper('.swiper-tariffs', {

  spaceBetween: 20,
  slidesPerView: 2,


  pagination: {
    el: '.swiper-tariffs .swiper-pagination',
    clickable: true,
  },


});

function blockScroll(){
  scrollY = window.pageYOffset;
  document.body.style.top = `-${window.pageYOffset}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}
function unblockScroll(){
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
}


const burgerBtn = document.querySelector('.header__menu-btn');
const burgerBtnText = document.querySelector('.header__menu-btn span');
const burgerMenu = document.querySelector('.header__menu');
const burgerMenuLinks = document.querySelectorAll('.header__menu .footer__nav-link');

burgerBtn.addEventListener('click', ()=>{
  if(burgerMenu.classList.contains('active')){
    burgerMenu.classList.remove('active');
    burgerBtnText.textContent = 'МЕНЮ';
    unblockScroll();
  }
  else{
    blockScroll();
    burgerMenu.classList.add('active');
    burgerBtnText.textContent = 'ЗАКРЫТЬ'

    authPopup.classList.remove('active');
  }
})

for(let i of burgerMenuLinks) i.addEventListener('click', ()=>{
  burgerMenu.classList.remove('active');
  burgerBtnText.textContent = 'МЕНЮ';
  unblockScroll();
});

const authBtn = document.querySelector('.header__btn-auth');
const authBtnText = document.querySelector('.header__btn-auth span');
const authPopup = document.querySelector('.popup__auth');
const authFormBtn = document.querySelector('.popup__auth-btn')

authBtn.addEventListener('click', ()=>{
  if(authPopup.classList.contains('active')){
    authPopup.classList.remove('active');
    authBtnText.textContent = 'ВХОД ДЛЯ УЧАСТНИКОВ КУРСА';
  }
  else{
    blockScroll();
    authPopup.classList.add('active');
    burgerMenu.classList.remove('active');
    burgerBtnText.textContent = 'МЕНЮ';
    authBtnText.textContent = 'ВЫХОД';
  }

})

authFormBtn.addEventListener('click', ()=>{
  authFormBtn.classList.add('error')
})

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 70;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

