const swiperFooter1 = new Swiper('.swiper-footer1', {

    spaceBetween: 0,
    slidesPerView: 2.7,
  
  
  
  });
const swiperFooter2 = new Swiper('.swiper-footer2', {

    spaceBetween: 0,
    slidesPerView: 2.7,
  
  
  
  });

const courseVideo = document.querySelector(".course__content-video");
const courseVideoInner = document.querySelector(".course__content-inner");
const courseVideoPlay = document.querySelector(".course__content-icon");

courseVideoPlay.addEventListener("click", () => {
  courseVideoInner.classList.add("unvisible");
  courseVideo.play();
});

courseVideo.addEventListener("playing", () => {
  courseVideoInner.classList.add("unvisible");
});
courseVideo.addEventListener("pause", () => {
  courseVideoInner.classList.remove("unvisible");
});
courseVideo.addEventListener("ended", () => {
  courseVideoInner.classList.remove("unvisible");
});


const popupLessonBtn = document.querySelectorAll('.course__descr-btn');
const popupLessonClose = document.querySelector('.popup__lesson-link')

for(let i of popupLessonBtn) i.addEventListener('click', ()=>{
    if(!window.matchMedia("(max-width: 768px)").matches)    blockScroll();

    popupLesson.classList.add('active')
})

popupLessonClose.addEventListener('click', ()=>{
    unblockScroll();
    popupLesson.classList.remove('active')
})

const footerModuleBtns = document.querySelectorAll(
  ".course__footer-btns:first-of-type .course__footer-btn"
);
const footerLessonBtns = document.querySelectorAll(
  ".course__footer-btns:last-of-type .course__footer-btn"
);

for (let i of footerModuleBtns)
  i.addEventListener("click", () => {
    for (let j of footerModuleBtns) j.classList.remove("active");
    i.classList.add("active");
  });

for (let i of footerLessonBtns)
  i.addEventListener("click", () => {
    for (let j of footerLessonBtns) j.classList.remove("active");
    i.classList.add("active");
  });

const footerModuleBtnsMobile = document.querySelectorAll(
  ".swiper-footer1 .course__footer-btn"
);
const footerModuleBtnsSlides = document.querySelectorAll(
    ".swiper-footer1 .swiper-slide"
  );
  const footerLessonBtnsMobile = document.querySelectorAll(
      ".swiper-footer2 .course__footer-btn"
      );
      const footerLessonBtnsSlides = document.querySelectorAll(
          ".swiper-footer2 .swiper-slide"
        );

for (let i = 0; i < footerModuleBtnsMobile.length; i++)
footerModuleBtnsMobile[i].addEventListener("click", () => {
    for (let j of footerModuleBtnsMobile) j.classList.remove("active");
    for (let j of footerModuleBtnsSlides) j.classList.remove("active");
    footerModuleBtnsMobile[i].classList.add("active");
    footerModuleBtnsSlides[i].classList.add("active");
});
for (let i = 0; i < footerLessonBtnsMobile.length; i++)
footerLessonBtnsMobile[i].addEventListener("click", () => {
    for (let j of footerLessonBtnsMobile) j.classList.remove("active");
    for (let j of footerLessonBtnsSlides) j.classList.remove("active");
    footerLessonBtnsMobile[i].classList.add("active");
    footerLessonBtnsSlides[i].classList.add("active");
  });

