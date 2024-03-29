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
        $(this).data('send')
        const el = $('.product-single__body-right-item__color-inner')
        if (el.length > 0)

            el.each(index => {
                let data = el.eq(index).data('color')
                if (!data) {
                    el.eq(index).parent().addClass('error-block')
                    el.eq(index).parent().find('.is-error').remove()
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
    $('.product-single__body-right__price-two-send').on('click', function () {
        let flag = false
        const elements = $('.product-single__body-right-item__color-inner')
        elements.each(index => {
            let data = elements.eq(index).data('color')
            if (!data) flag = true
        })
        if (elements.length === 0) flag = false
        // if(elements)
        if (!flag) {
            $('.product-single__body-right__price-two-send').html(`
                <a href="#">ПЕРЕЙТИ В КОРЗИНУ</a>
            `)
            $('.product-single__body-right__price-two-send').removeClass('btn')

        }
    })
    $('.modal-product__colors-menu-item').on('click', function () {
        $('.modal-product__colors-menu-item').removeClass('active')
        $(this).addClass('active')
        const tab = $(this).data('tab')
        if (tab === 'all') {
            $(this).parents('.product-tab').find('.modal-product__color').show()
        } else {
            $(this).parents('.product-tab').find('.modal-product__color').hide()
            $(this).parents(`.product-tab`).find(`.modal-product__color[data-tab="${tab}"]`).show()
        }
    })

    $('.change-star').on('click', function (e) {
        e.preventDefault()
        const star = $(this).data('star')
        const els = $(this).parent().find('.change-star')
        els.removeClass('active')

        els.each(i => {
            if (+star >= i + 1) els.eq(i).addClass('active')
        })
    })
    $('.feedback-star__header-star.change-star')
        .on('mouseenter', function () {
            const star = $(this).data('star')
            const els = $(this).parent().find('.change-star')

            els.each(i => {
                if (+star >= i + 1) els.eq(i).addClass('hover-active')
                else els.eq(i).addClass('hover-noactive')
            })
            // console.log($(this))
        })
        .on('mouseleave', function () {
            $('.change-star').removeClass('hover-active')
            $('.change-star').removeClass('hover-noactive')
            // console.log($(this))
        })

    $('.modal-review-step__form-item_photo').on('change', function (e) {
        let files = e.target.files; // Get the selected file
        for (let i = 0; i < files.length; i++) {
            if (files[i]) {
                console.log(e.target.result)
                let reader = new FileReader(); // Create a FileReader object
                reader.onload = function (event) {
                    let imageSrc = event.target.result; // Get the data URL for the current file
                    showImagePreview(imageSrc, files[i]); // Call the function to show the image preview
                };

                reader.readAsDataURL(files[i]); // Read the file as data URL
            } else {
                // If no file is selected, reset the image src to a placeholder or hide it
            }
        }


        // Check if a file was selected

    })

    function showImagePreview(src, file) {
        $('.modal-review-step__form-item-label-1 .photos').hide();
        $('.modal-review-step__form-item-label-2').show();
        let previewId = Date.now();
        const html = `
      <div id="preview_${previewId}"  class="modal-review-step__form-item-label-img">
        <img src="${src}" alt="files" />
        <div class="modal-review-step__form-item-label-img-close" data-preview-id="${previewId}">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.94002 8.00001L11.8067 5.14001C11.9322 5.01448 12.0027 4.84421 12.0027 4.66668C12.0027 4.48914 11.9322 4.31888 11.8067 4.19335C11.6811 4.06781 11.5109 3.99728 11.3334 3.99728C11.1558 3.99728 10.9856 4.06781 10.86 4.19335L8.00002 7.06001L5.14002 4.19335C5.01448 4.06781 4.84422 3.99728 4.66669 3.99728C4.48915 3.99728 4.31889 4.06781 4.19335 4.19335C4.06782 4.31888 3.99729 4.48914 3.99729 4.66668C3.99729 4.84421 4.06782 5.01448 4.19335 5.14001L7.06002 8.00001L4.19335 10.86C4.13087 10.922 4.08127 10.9957 4.04743 11.077C4.01358 11.1582 3.99615 11.2453 3.99615 11.3333C3.99615 11.4214 4.01358 11.5085 4.04743 11.5897C4.08127 11.671 4.13087 11.7447 4.19335 11.8067C4.25533 11.8692 4.32906 11.9188 4.4103 11.9526C4.49154 11.9865 4.57868 12.0039 4.66669 12.0039C4.75469 12.0039 4.84183 11.9865 4.92307 11.9526C5.00431 11.9188 5.07805 11.8692 5.14002 11.8067L8.00002 8.94001L10.86 11.8067C10.922 11.8692 10.9957 11.9188 11.077 11.9526C11.1582 11.9865 11.2453 12.0039 11.3334 12.0039C11.4214 12.0039 11.5085 11.9865 11.5897 11.9526C11.671 11.9188 11.7447 11.8692 11.8067 11.8067C11.8692 11.7447 11.9188 11.671 11.9526 11.5897C11.9865 11.5085 12.0039 11.4214 12.0039 11.3333C12.0039 11.2453 11.9865 11.1582 11.9526 11.077C11.9188 10.9957 11.8692 10.922 11.8067 10.86L8.94002 8.00001Z" fill="white"/>
            </svg>
        </div>
      </div>
    `;

        $('.modal-review-step__form-item-label-2-list').prepend(html);
        $('.modal-review-step__form-item-label-img-close').on('click', function () {
            let previewIdToDelete = $(this).data('preview-id');
            $(`#preview_${previewIdToDelete}`).remove();
            let remainingFiles = Array.from($('.modal-review-step__form-item_photo-input').files).filter((f) => f !== file);
            $('.modal-review-step__form-item_photo-input').prop('files', new FileList(remainingFiles));
        })
    }

    $('#review-photo').on('change', function (e) {
        let isChecked = $("#review-photo").prop("checked")
        // console.log(isChecked)
        let html = ``
        const el = '.feedback-item'
        console.log(isChecked)
        if (isChecked) {
            $(`${el}[data-photo="0"]`).addClass('d-none')
        } else {
            $(`${el}[data-photo="0"]`).removeClass('d-none')
        }
    })

    $('.review-filter-item .arrow').on('click', function () {
        const $this = $(this)
        const type = $this.data('type')
        const el = $this.parents('.review-filter-item')
        const elDate = el.data('el')
        $('.review-filter-item ').removeClass('active active-asc active-desc')
        el.removeClass('active-asc active-desc').addClass(`active active-${type}`)
        if (elDate === 'time') sortTime(type)
        if (elDate === 'stars') sortStars(type)
        else sortHealthy(type)
    })

    $('.review-filter-item').on('click', function () {
        const $this = $(this)
        const type = $this.data('type')
        const el = $this
        const elDate = el.data('el')
        $('.review-filter-item ').removeClass('active active-asc active-desc')
        el.removeClass('active-asc active-desc').addClass(`active active-${type}`)
        if (elDate === 'time') sortTime(type)
        if (elDate === 'stars') sortStars(type)
        else sortHealthy(type)
    })

    function sortTime(type) {
        const elements = '.feedback-item'
        let divElements = $(`${elements}[data-time]`);
        divElements.sort(function (a, b) {
            let dateA = new Date($(a).data("time"));
            let dateB = new Date($(b).data("time"));
            if (type === 'asc') return dateA - dateB;
            else return dateB - dateA;
        });
        divElements.appendTo(".feedback-list");
    }

    function sortStars(type) {
        const elements = '.feedback-item'
        let divElements = $(`${elements}[data-stars]`);
        divElements.sort(function (a, b) {
            let orderA = parseInt($(a).data("stars"));
            let orderB = parseInt($(b).data("stars"));
            if (type === 'asc') return orderA - orderB;
            else return orderB - orderA;
        });
        divElements.appendTo(".feedback-list");
    }

    function sortHealthy(type) {
        const elements = '.feedback-item'
        let divElements = $(`${elements}[data-healthy]`);
        divElements.sort(function (a, b) {
            let orderA = parseInt($(a).data("healthy"));
            let orderB = parseInt($(b).data("healthy"));
            if (type === 'asc') return orderA - orderB;
            else return orderB - orderA;
        });
        divElements.appendTo(".feedback-list");
    }


    $('.ui-spinner-up').on('click', function (e) {
        e.preventDefault()
        const $this = $(this)
        const el = $this.parents('.catalogue__table-spinner').find('.spinner.ui-spinner-input')
        const val = el.val()
        let sum = +val + 1
        el.val(sum)
    })
    $('.ui-spinner-down').on('click', function (e) {
        e.preventDefault()
        const $this = $(this)
        const el = $this.parents('.catalogue__table-spinner').find('.spinner.ui-spinner-input')
        const val = el.val()
        let sum = +val - 1
        if (sum <= 0) sum = 1
        el.val(sum)
    })
    $('.delete-element').on('click', function (e) {
        e.preventDefault()
        $(this).parents('.catalogue__table-row').remove()
    })

    $('.wishlist-filters__menu-item').on('click', function (e) {
        e.preventDefault()
        const $this = $(this)
        $('.wishlist-filters__menu-item').removeClass('active')
        $this.addClass('active')
        filterWishlist()
    })

    $('.wishlist-filters__radio input').on('change', function (e) {
        e.preventDefault()
        filterWishlist()
    })
    $('.wishlist-filters__sort select').on('change', function (e) {
        filterWishlist()
    })

    function filterWishlist() {
        const type = $('.wishlist-filters__menu-item.active').data('type')
        const have = $('.wishlist-filters__radio input:checked').data('have')
        const els = $('.catalogue__table-row')
        els.removeClass('d-none')
        els.each(i => {
            if (type && type !== els.eq(i).data('type')) els.eq(i).addClass('d-none')
            if (have && have !== els.eq(i).data('have')) els.eq(i).addClass('d-none')
        })
        const sort = $('.wishlist-filters__sort select').val()
        let divElements = $(`.catalogue__table-row`);
        divElements.sort(function (a, b) {
            console.log(parseInt($(a).attr(sort)), parseInt($(b).attr(sort)))
            let orderA, orderB;
            if (sort === 'data-date') {
                orderA = new Date($(a).attr(sort));
                orderB = new Date($(b).attr(sort));
            } else {
                orderA = parseInt($(a).attr(sort));
                orderB = parseInt($(b).attr(sort));
            }
            return orderA - orderB;
        });
        divElements.appendTo(".catalogue__table tbody");
    }

    $('.supplier__label--file input').on('change', function (e){
        const parent = $(this).parents('.supplier__label--file');
        const fileName = e.target.files[0].name;
        parent.find('.supplier__label-content').html(fileName);
    });
$('.order-story__show-button').on('click', function (){
    $(this).toggleClass('active')
    $(this).parents('.order-story__item').find('.order-story__body-group').slideToggle(300)
})
})