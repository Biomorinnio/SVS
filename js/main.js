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

const popupLesson = document.querySelector('.popup__lesson');


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
    popupLesson?.classList.remove('active')
    burgerBtnText.textContent = 'ЗАКРЫТЬ'
    notePopup.classList.remove('active');
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
const authFormBtn = document.querySelector('.popup__auth .popup__auth-btn');

authBtn.addEventListener('click', ()=>{
  if(authPopup.classList.contains('active')){
    authPopup.classList.remove('active');
    authBtnText.textContent = 'ВХОД ДЛЯ УЧАСТНИКОВ КУРСА';
    unblockScroll();
  }
  else{
    blockScroll();
    authPopup.classList.add('active');
    popupLesson?.classList.remove('active')
    burgerMenu.classList.remove('active');
    burgerBtnText.textContent = 'МЕНЮ';
    authBtnText.textContent = 'ВЫХОД';
    notePopup.classList.remove('active');
  }
  
})

authFormBtn.addEventListener('click', ()=>{
  authFormBtn.classList.add('error')
})


const noteBtn = document.querySelectorAll('.popup__note-btn');
const notePopup = document.querySelector('.popup__note');
const notePopupClose = document.querySelector('.popup__note-link')
const noteFormBtn = document.querySelector('.popup__note .popup__auth-btn');
const noteNameInput = document.getElementById('name')
const noteTelInput = document.getElementById('tel')
const noteInstInput = document.getElementById('inst')

for(let i of noteBtn){
  i.addEventListener('click', ()=>{
    notePopup.classList.add('active');
    popupLesson?.classList.remove('active')
    blockScroll();
  })
}

notePopupClose.addEventListener('click', ()=>{
  notePopup.classList.remove('active');
  unblockScroll();
})

noteFormBtn.addEventListener('click', ()=>{
  if(!noteNameInput.value.length){
    noteFormBtn.classList.add('error-name')
  }
  else if(!noteTelInput.value.length){
    noteFormBtn.classList.add('error-tel')
  }
  else if(!noteInstInput.value.length){
    noteFormBtn.classList.add('error-inst')
  }
  else{
    noteFormBtn.classList.add('success')

    setTimeout(()=>{
      notePopup.classList.remove('active');
      unblockScroll();
    }, 1000)
  }
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

