
$(document).ready(function () {
    $('.js-filter-item__header').on('click',function (){
        const parent = $(this).parents('.filter-item__dropdown')
        parent.toggleClass('filter-item__open')
    })
    $('.filter-sort__group-item').on('click',function (e){
        e.preventDefault()
        $('.filter-sort__group-link').removeClass('active')
        $(this).children().toggleClass('active')
        $('.filter-sort__group-item').each(item=>{
            const el = $('.filter-sort__group-item').eq(item).data('columns')
            $('.products-list__grid').removeClass(el)
        })
        $('.products-list__grid').addClass($(this).data('columns'))
    })

    $('.open-filter').on('click',function (e){
        e.preventDefault()
        $('.filters').toggleClass('active')
    })

    $('.close-filter').on('click',function (e){
        e.preventDefault()
        $('.filters').removeClass('active')
    })
    $('.product-tab__item').on('click',function (e){
        e.preventDefault()
        const $this = $(this)
        const parentClass = $this.parents('.product-tabs').data('parent')
        const parent = $this.parents(`.${parentClass}`)
        const tab = $this.data('tab')

        parent.find('.product-tab__item').removeClass('product-tab__item--active')
        $this.addClass('product-tab__item--active')
        parent.find(`.product-tab`).hide()
        parent.find(`.product-tab[data-tab="${tab}"]`).show()
    })
    $('.product-delivery__title-button').on('click',function (e){
        const parent = $(this).parents('.product-delivery__item')
        const el = parent.find('.product-delivery__info')
        parent.toggleClass('product-delivery__item--closed')
        parent.toggleClass('product-delivery__item--opened')
        el.toggle(300)
    })
    $('.feedback-btn__more').on('click',function (e){
        $(this).parents('.feedback-item').find('.feedback-item-inner').show(300)
        $(this).hide()
    })
    $('.tabs__list-item').on('click', function (){
        const $this = $(this)
        const tab = $this.data('tab')
        $('.tabs__list-item').removeClass('active')
        $this.addClass('active')
        $('.tabs-content').hide()

        // parent.find('.product-tab__item').removeClass('product-tab__item--active')
        // $this.addClass('product-tab__item--active')
        // parent.find(`.product-tab`).hide()
        $(`.tabs-content[data-tab="${tab}"]`).show()
    })
})