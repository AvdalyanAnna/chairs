$(function (){
    $('.product-count__item').on('click',function (e){
        e.preventDefault()
        const count = $(this).parents('.product-count').data('count')
        const el = $(this).parents('.product-count').find('.product-count__text')
        const price = $('.product-count__price').data('price')
        const elCount = el.text()
        let newCount = 0
        if($(this).hasClass('product-count__minus'))  newCount = +elCount - +count
        if($(this).hasClass('product-count__plus'))  newCount = +elCount + +count
        if(newCount <= 0) newCount = 1
        $('.product-count__price').text(+price * newCount)
        el.text(newCount)
    })
})