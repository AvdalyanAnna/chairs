$(function () {
    $('.product-count__item').on('click', function (e) {
        e.preventDefault()
        const $this = $(this)
        const count = $this.parents('.product-count').data('count')
        const max = $this.parents('.product-count').data('max')
        if(+max === 0) return false
        const el = $this.parents('.product-count').find('.product-count__text')
        const price = $('.product-count__price').data('price')
        const assembly = $('.product-assembly').data('assembly')
        const elCount = el.text()
        let newCount = 0
        if ($this.hasClass('product-count__minus')) newCount = +elCount - +count
        if ($this.hasClass('product-count__plus')) newCount = +elCount + +count
        if (newCount <= 0) newCount = 1
        if (newCount >= max) newCount = max
        const res = +price * newCount
        console.log(res)
        $('.product-count__price').text(+price * newCount)
        $('.product-assembly').text(+assembly * newCount)
        const credit = Math.floor(res / 12)
        $('.product-single__body-right__price-tag__inner span').text(credit)
        el.text(newCount)
    })

    $('.go-to-tab').on('click', function (e) {
        //go to tab
        e.preventDefault()
        const tab = $(this).data('tab')
        $('.product-tab__item').removeClass('product-tab__item--active')
        $(`.product-tab__item[data-tab="${tab}"]`).addClass('product-tab__item--active')
        $('.product-tab').hide()
        $(`.product-tab[data-tab="${tab}"]`).show()
        //go to tab
        const top = $('.product-tabs').offset().top
        $('html, body').animate({
            scrollTop: top
        }, 500)
    })
})