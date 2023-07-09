$(function () {
    $('.modal-review-step__form-item-btn').on('click', function (e) {
        e.preventDefault()
        const next = $(this).data('next')
        if(!next){
            $('.modal').hide()
            return false
        }
        $('.modal-review-step').hide()
        $(`.${next}`).show()
    })
})