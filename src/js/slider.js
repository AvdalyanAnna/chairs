
$(document).ready(function () {

    function $slider(elClass,params ){
       return  new Swiper(elClass, {
            loop: true,
            slidesPerView: params.slidesPerView || 4,
            spaceBetween: params.spaceBetween || 0,
           centeredSlides:params.centeredSlides || false,
            navigation: {
                nextEl: `${elClass} .swiper-button-next`,
                prevEl: `${elClass} .swiper-button-prev`,
            },
        })

    }
    const productMin = $slider('.products-min__slider-inner',{spaceBetween:8})
    const productBig = $slider('.products-big__slider-inner',{slidesPerView:1,spaceBetween:0})
    const productNewSwiper = $slider('.productNewSwiper',{})
    console.log({productMin,productBig,productNewSwiper})
})