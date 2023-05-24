// Custom Scripts
// @@include('main.js')
@@include('./libs/swiper.js')
@@include('./libs/jquery-3.6.0.js')
const homeSwiper = new Swiper(".home-slider__inner .homeSwiper", {
    loop: true,
    navigation: {
        nextEl: ".home-slider__inner .swiper-button-next",
        prevEl: ".home-slider__inner .swiper-button-prev",
    },
    pagination: {
        el: ".home-slider__inner .swiper-pagination",
    },
});

const youtubeSwiper = new Swiper(".youtube-slider__inner .youtubeSwiper", {
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".youtube-slider__inner .swiper-button-next",
        prevEl: ".youtube-slider__inner .swiper-button-prev",
    },
    pagination: {
        el: ".youtube-slider__inner .swiper-pagination",
    },
})

const homePagination = document.querySelectorAll('.home-slider__inner .swiper-pagination-bullet');
for (let i = 0; i < homePagination.length; i++) {
    homePagination[i].addEventListener('click', () => homeSwiper.slideTo(i))
}

const youtubePagination = document.querySelectorAll('.youtube-slider__inner .swiper-pagination-bullet');
for (let i = 0; i < youtubePagination.length; i++) {
    youtubePagination[i].addEventListener('click', () => youtubeSwiper.slideTo(i))
}
$(document).ready(function () {
    $('.header-call__button-phone .header-call__button-inner').on('click', function () {
        const el = $(this).parent().find('.header-call__button-content')
        el.toggle()
    })
    $('.account__tabs-item').on('click', function () {
        const el = $(this).parent().find('.account__tabs-item')
        const content = $('.account__tabs-content-item')
        el.removeClass('active')
        $(this).addClass('active')
        content.hide()
        content.eq($(this).index()).show()
    })
    $('.header-actions__item-inner').on('click', function () {
        $(this).toggleClass('active')
        const el = $(this).parent().find('.header-actions__item-content')
        el.toggle()
    })
})

