// swiper
const portfolioSlide = new Swiper('.portfolio',{
    direction: 'vertical',
    mousewheel:{
        invert:false,
    },
})
const posterSlide = new Swiper('.poster_wrap',{
    nested:true,
    slidesPerView: 5,
    spaceBetween:16,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
})

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        const slideNumber = Number(target.replace('#slide', '')) - 1;
        portfolioSlide.slideTo(slideNumber, 800);
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

//포스터 누르면 크게 볼 수 있도록
const poster = document.querySelectorAll('.swiper-slide img');