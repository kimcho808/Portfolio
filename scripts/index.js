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