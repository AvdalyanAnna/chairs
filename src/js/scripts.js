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
    $('.account__tabs-item').on('click', function () {
        const el = $(this).parent().find('.account__tabs-item')
        const content = $('.account__tabs-content-item')
        el.removeClass('active')
        $(this).addClass('active')
        content.hide()
        $('.footer-fix').toggle()
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
    $('.header-top__city-pop__btn').on('click', function () {
        $('.header-top__city-pop').hide()
    })
    function getCities(){
       let cities =  $('#cities').text()
        cities = JSON.parse(cities)
        let html = ``
        cities.forEach(item=>{
            html += `<div class="prmn-cmngr-cities__search-item">
                                        <a href="#" class="prmn-cmngr-cities__city-name">${item.city}</a>
                </div>`
        })
        if(html === '') html = '<p class="footer-info"> пусто </p>'

        $('.prmn-cmngr-cities__search-list').html(html)

    }
    getCities()

    $('.prmn-cmngr-cities__search.form-control').on('input',function(){
        const search = $(this).val()
        let cities =  $('#cities').text()
        cities = JSON.parse(cities)
        let html = ``
        cities.forEach(item=>{
            let test = item.city.toUpperCase()
                if(item.city.toUpperCase().search(`${search.toUpperCase()}`) !== -1){
                    html += `<div class="prmn-cmngr-cities__search-item">
                    <a href="#" class="prmn-cmngr-cities__city-name">${item.city}</a>
                </div>`
            }

        })
        if(html === '') html = '<p class="footer-info"> пусто </p>'
        $('.prmn-cmngr-cities__search-list').html(html)

    })
})

$(document).on('click', function (e) {
    if (e.target.classList.contains('header-call__button-phone-inner') || e.target.classList.contains('header-call__button-phone-icon')) {
        $('.header-actions__item-content.account-popup-shadow').hide()
        $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').toggle()
        $('.header-call__button-content').toggleClass('active')
    } else if (e.target.classList.contains('header-actions__item-inner-1') || e.target.classList.contains('header-actions__item-inner-svg-1') ) {
        $('.header-actions__item-content.account-popup-shadow').hide()
         $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').hide()
        $('.header-actions__item-inner').removeClass('active')
        console.log($('.header-actions__item-content-1.account-popup-shadow'))
        if( $('.header-actions__item-content-1.account-popup-shadow').hasClass('active')){
            $('.header-actions__item-content-1.account-popup-shadow').hide()
            $('.header-actions__item-content-1.account-popup-shadow').removeClass('active')
            $('.header-actions__item-inner-1').removeClass('active')
        }else{
            $('.header-actions__item-content-1.account-popup-shadow').show()
            $('.header-actions__item-content-1.account-popup-shadow').addClass('active')
            $('.header-actions__item-inner-1').addClass('active')

        }
        // $('.header-actions__item-content-1.account-popup-shadow').toggle()
        // $('.header-actions__item-content-1.account-popup-shadow').toggleClass('active')
        // $('.header-actions__item-inner-1').toggleClass('active')


    } else if (e.target.classList.contains('header-actions__item-inner-2') || e.target.classList.contains('header-actions__item-inner-svg-2') ) {
        $('.header-actions__item-content.account-popup-shadow').hide()
         $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').hide()
        $('.header-actions__item-inner').removeClass('active')
        if( $('.header-actions__item-content-2.account-popup-shadow').hasClass('active')){
            $('.header-actions__item-content-2.account-popup-shadow').hide()
            $('.header-actions__item-content-2.account-popup-shadow').removeClass('active')
            $('.header-actions__item-inner-2').removeClass('active')
        }else{
            $('.header-actions__item-content-2.account-popup-shadow').show()
            $('.header-actions__item-content-2.account-popup-shadow').addClass('active')
            $('.header-actions__item-inner-2').addClass('active')

        }

    } else {
        $('.header-actions__item-content.account-popup-shadow').hide()
        $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').hide()
        $('.header-call__button-content').removeClass('active')

    }

})
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

$('.scroll-to-top').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
});