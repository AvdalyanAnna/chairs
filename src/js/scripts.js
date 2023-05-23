// Custom Scripts
// @@include('main.js')
@@include('./libs/swiper.js')
var homeSwiper = new Swiper(".home-slider__inner .homeSwiper", {
    loop: true,
    navigation: {
        nextEl: ".home-slider__inner .swiper-button-next",
        prevEl: ".home-slider__inner .swiper-button-prev",
    },
    pagination: {
        el: ".home-slider__inner .swiper-pagination",
    },
});


const homePagination = document.querySelectorAll('.home-slider__inner .swiper-pagination-bullet');
for (let i = 0; i < homePagination.length; i++) {
    homePagination[i].addEventListener('click', () => homeSwiper.slideTo(i))
}
