$(function () {
    $('.modal-review-step__form-item-btn').on('click', function (e) {
        e.preventDefault()
        const next = $(this).data('next')
        if(!next){
            $('.modal').hide()
            return false
        }
        if(next === 'modal-review-step-2'){
            const el = $(this).parents('.modal-review-step').find('textarea')
            let flag = true
            $('.modal-review-step__form-item').removeClass('error-block')
            $('.modal-review-step__form-item .is-error').remove()
            el.each(i=>{
                const elVal = el.eq(i)
                if(elVal.val().length === 0){
                    flag = false
                    elVal.parents('.modal-review-step__form-item').append(`
                        <div class="is-error">Не заполнено</div>
                    `)
                    elVal.parents('.modal-review-step__form-item').addClass('error-block')
                }
            })
            if(flag) {
                $('.modal-review-step').hide()
                $(`.${next}`).show()
            }else{
                return false
            }
            return flag
        }
        if(next === 'modal-review-step-3'){
            const el = $(this).parents('.modal-review-step').find('input[type="text"]')

            let flag1 = true
            $('.modal-review-step__form-item').removeClass('error-block')
            $('.modal-review-step__form-item .is-error').remove()
            el.each(i=>{
                const elVal = el.eq(i)
                if(elVal.val().length === 0){
                    flag1 = false
                    elVal.parents('.modal-review-step__form-item').append(`
                        <div class="is-error">Не заполнено</div>
                    `)
                    elVal.parents('.modal-review-step__form-item').addClass('error-block')
                } else if(!isValidEmail(elVal.val())){
                    flag1 = false
                    elVal.parents('.modal-review-step__form-item').append(`
                        <div class="is-error">Не e-mail</div>
                    `)
                    elVal.parents('.modal-review-step__form-item').addClass('error-block')
                }
            })
            if(flag1) {
                $('.modal-review-step').hide()
                $(`.${next}`).show()
            }else{
                return false
            }
            return flag1
        }
        $('.modal-review-step').hide()
        $(`.${next}`).show()
    })

    function isValidEmail(email) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(emailPattern.test(email))
        return emailPattern.test(email);
    }
})