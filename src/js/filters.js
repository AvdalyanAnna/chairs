
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
})