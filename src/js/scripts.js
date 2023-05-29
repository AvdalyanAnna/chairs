// Custom Scripts
// @@include('main.js')
@@include('./libs/swiper.js')
@@include('./libs/jquery-3.6.0.js')
@@include('./libs/jquery.formstyler.min.js')
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
    $('.fix').on('click',function (){
         $('.header-call__button-phone .header-call__button-content').hide()
         $('.header-actions__item-content.account-popup-shadow').hide()
        $('.header-actions__item-inner').removeClass('active')
        $('.fix').hide()
    })
    $('.header-call__button-phone .header-call__button-inner').on('click', function () {
        $('.header-actions__item-content.account-popup-shadow').hide()
        $('.header-actions__item-inner').removeClass('active')

        const el = $(this).parent().find('.header-call__button-content')
        $('.fix').toggle()
        $('.footer-fix').addClass('active')
        el.toggle()
    })
    $('.account__tabs-item').on('click', function () {
        const el = $(this).parent().find('.account__tabs-item')
        const content = $('.account__tabs-content-item')
        el.removeClass('active')
        $(this).addClass('active')
        content.hide()
        $('.footer-fix').toggle()
    })
    $('.header-actions__item-inner').on('click', function () {
        $('.header-actions__item-content.account-popup-shadow').hide()
        $('.header-call__button-phone .header-call__button-content').hide()
        $('.fix').toggle()
        $('.header-actions__item-inner').removeClass('active')
        $(this).toggleClass('active')
        const el = $(this).parent().find('.header-actions__item-content')
        el.toggle()
    })
    if ($('select').hasClass('select')) {
        $('.select').styler({
            placeholder: 'ui-state-highlight',
        });
        $('.select.jq-selectbox__select-text.placeholder').text('Выбрать тип проекта')
    }

    $(".modal .modal__container").on("click", function (e) {
        e.stopPropagation();
    });
    $(".modal .close, .modal ").on("click", function (e) {
        e.preventDefault();
        $(".modal").fadeOut(function () {
            $("body").css("overflow", "auto");
            $('header').css('visibility', 'unset')

        });
    });
    $(".open__modal").on("click", function (e) {
        e.preventDefault();
        const $this = $(this);
        const modal = $this.attr('data-modal');
        $("body").css("overflow", "hidden");
        $('header').css('visibility', 'hidden')
        $(`${modal}`).fadeIn();
    });
$('.header-top__city-pop__btn').on('click',function (){
    $('.header-top__city-pop').hide()
})
})


$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

$('.scroll-to-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
});