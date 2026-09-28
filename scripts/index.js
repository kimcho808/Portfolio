// swiper
const portfolioSlide = new Swiper('.portfolio',{
    direction: 'vertical',
    mousewheel:{
        invert:false,
    },
})

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // <a> 태그의 기본 튕김 현상 막기
        portfolioSlide.slideTo(index); // portfolioSlide 변수를 사용해서 해당 번호로 이동!
    });
});

const projectLinks = document.querySelectorAll('.project_gr > a');

projectLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        const slides = Array.from(document.querySelectorAll('.portfolio .swiper-slide'));
        const index = slides.indexOf(target);

        portfolioSlide.slideTo(index);
    });
});