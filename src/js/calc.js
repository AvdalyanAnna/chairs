$(document).ready(function () {

    $('.product-count__item').on('click', function (e) {
        e.preventDefault()
        const $this = $(this)
        const count = $this.parents('.product-count').data('count')
        const max = $this.parents('.product-count').data('max')
        if (+max === 0) return false
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
    $('.product-single__body-right__price-two-send').on('click', function () {
        const el = $('.product-single__body-right-item__color-inner')
        el.each(index => {
            let data = el.eq(index).data('color')
            if (!data) {
                el.eq(index).parent().addClass('error-block')
                el.eq(index).parent().append('<div class="is-error">Не выбрано</div>')
            }
        })
        // const res = $('.product-single__body-right-item__color-inner').data('')
    })
    $('.modal-product__color').on('click', function (e) {
        e.preventDefault()
        const $this = $(this)
        const el = $this.data('el'),
            name = $this.data('name'),
            color = $this.data('color')
        $(el).removeClass('error-block')
        $(`.modal-product__color[data-el="${el}"]`).removeClass('active')
        $(this).addClass('active')
        $(el).find('.is-error').remove()
        $(el).find('.product-single__body-right-item__color-inner').attr('title', name)
        $(el).find('.product-single__body-right-item__color-inner').css('background-image', `url(${color})`)
        $(el).find('.product-single__body-right-item__color-inner').data('color', color)
        $(el).find('.product-single__body-right-item__color-sub-title').remove()
        $(el).append(`<div class="product-single__body-right-item__color-sub-title">${name}</div>`)

        const elements = $('.product-single__body-right-item__color-inner')
        let flag = false
        elements.each(index => {
            let data = elements.eq(index).data('color')
            if (!data) flag = true
        })
    })

    $('.product-single__body-right-item__content .product-single__body-right-item__color-inner').on('click', function () {
        $('.modal-product').show()
        $('.modal-product .product-tab__item').removeClass('product-tab__item--active')
        $(`.modal-product .product-tab__item[data-tab="${$(this).data('tab')}"]`).addClass('product-tab__item--active')
    })
    $('.product-single__body-right__price-two-send').on('click', function (){
        let flag = false
        elements.each(index => {
            let data = elements.eq(index).data('color')
            if (!data) flag = true
        })
        if (!flag) {
            $('.product-single__body-right__price-two-send').text('ПЕРЕЙТИ В КОРЗИНУ')
        }
    })
    $('.modal-product__colors-menu-item').on('click', function (){
        $('.modal-product__colors-menu-item').removeClass('active')
        $(this).addClass('active')
        const tab = $(this).data('tab')
        if(tab === 'all'){
            $(this).parents('.product-tab').find('.modal-product__color').show()
        }else{
            $(this).parents('.product-tab').find('.modal-product__color').hide()
            $(this).parents(`.product-tab`).find(`.modal-product__color[data-tab="${tab}"]`).show()
        }
    })

    $('.change-star').on('click', function (e){
        e.preventDefault()
       const star =  $(this).data('star')
        const els = $(this).parent().find('.change-star')
        els.each(i=>{
            let img = '/img/icon/star-active.svg'
            if(+star  >= i + 1)  img = '/img/icon/star-active.svg'
            else img = '/img/icon/star.svg'
            els.eq(i).html(
                `<img src="${img}" alt="star" />`
            )
        })
    })
})