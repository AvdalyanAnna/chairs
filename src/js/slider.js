$(document).ready(function () {
    function $slider(elClass, params) {
        return new Swiper(elClass, {
            loop: params.loop || false,
            slidesPerView: params.slidesPerView || 4,
            spaceBetween: params.spaceBetween || 0,
            centeredSlides: params.centeredSlides || false,
            navigation: {
                nextEl: `${elClass} .swiper-button-next`,
                prevEl: `${elClass} .swiper-button-prev`,
            },
            breakpoints: params.breakpoints || {},
            direction: params.direction || "horizontal",
        })
    }

    const productMin = $slider('.products-min__slider-inner', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        loop: true,
    })
    const productMinSwiper = $slider('.productMinSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        direction: "vertical",
    })
    const productBigSwiper1 = $slider('.productBigSwiper1', {
        spaceBetween: 8,
        slidesPerView: 1,
    })
    productBigSwiper1.on('slideChange', function () {
        productMinSwiper.slideTo(productBigSwiper1.activeIndex)
    })
    productMinSwiper.on('slideChange', function () {
        productBigSwiper1.slideTo(productMinSwiper.activeIndex)
    })

    const productBig = $slider('.products-big__slider-inner', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
    })
    const categoriesList = $slider('.categories__list', {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            // "580": {
            //     slidesPerView: 1,
            //     spaceBetween: 40,
            // },
            "580": {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            "900": {
                slidesPerView: 5,
            },
            "1200": {
                slidesPerView: 6,
            },
            "1600": {
                slidesPerView: 7,
            }
        },
    })
    console.log(categoriesList)
    $(' .products-min__slider-inner .swiper-slide').on('click', function () {
        const data = $(this).data('swiper-slide-index')
        const parentIndex = $(this).parents('.products-item').data('index') || 0
        productBig[parentIndex].slideTo(data + 1)
        productMin[parentIndex].slideTo(data)
    })

    let feedbackSwiper = new Swiper(".feedbackSwiper", {
        slidesPerView: 'auto',
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        }
    });
    $('.productMinSwiper .swiper-slide').on('click', function () {
        let data = $(this).attr('aria-label')
        data = data.split('/')[0]
        productBigSwiper1.slideTo(+data)
    })
    $('.feedbackSwiper .swiper-button-next').on('click', function () {
        feedbackSwiper.slideNext()
    })
    $('.feedbackSwiper .swiper-button-prev').on('click', function () {
        feedbackSwiper.slidePrev()
    })
})
