// Custom Scripts
// @@include('main.js')
@@include('./libs/swiper.js')
@@include('./libs/jquery-3.6.0.js')
@@include('./libs/jquery-ui.js')
@@include('./libs/jquery.formstyler.min.js')
@@include('./filters.js')
@@include('./slider.js')
@@include('./calc.js')
@@include('./review.js')
@@include('./jquery-range-slide.js')

const citiesList = [
    {
        "city":"Москва",
        "domain":"https:\/\/arideya.ru\/"
    },
    {
        "city":"Санкт-Петербург",
        "domain":"https:\/\/spb.arideya.ru\/"
    },
    {
        "city":"Новосибирск",
        "domain":"https:\/\/novosibirsk.arideya.ru\/"
    },
    {
        "city":"Екатеринбург",
        "domain":"https:\/\/ekaterinburg.arideya.ru\/"
    },
    {
        "city":"Нижний Новгород",
        "domain":"https:\/\/nizhny-novgorod.arideya.ru\/"
    },
    {
        "city":"Казань",
        "domain":"https:\/\/kazan.arideya.ru\/"
    },
    {
        "city":"Челябинск",
        "domain":"https:\/\/chelyabinsk.arideya.ru\/"
    },
    {
        "city":"Омск",
        "domain":"https:\/\/omsk.arideya.ru\/"
    },
    {
        "city":"Самара",
        "domain":"https:\/\/samara.arideya.ru\/"
    },
    {
        "city":"Ростов-на-Дону",
        "domain":"https:\/\/rostov-na-donu.arideya.ru\/"
    },
    {
        "city":"Уфа",
        "domain":"https:\/\/ufa.arideya.ru\/"
    },
    {
        "city":"Красноярск",
        "domain":"https:\/\/krasnoyarsk.arideya.ru\/"
    },
    {
        "city":"Пермь",
        "domain":"https:\/\/perm.arideya.ru\/"
    },
    {
        "city":"Воронеж",
        "domain":"https:\/\/voronezh.arideya.ru\/"
    },
    {
        "city":"Волгоград",
        "domain":"https:\/\/volgograd.arideya.ru\/"
    },
    {
        "city":"Краснодар",
        "domain":"https:\/\/krasnodar.arideya.ru\/"
    },
    {
        "city":"Саратов",
        "domain":"https:\/\/saratov.arideya.ru\/"
    },
    {
        "city":"Тюмень",
        "domain":"https:\/\/tyumen.arideya.ru\/"
    },
    {
        "city":"Тольятти",
        "domain":"https:\/\/toliatti.arideya.ru\/"
    },
    {
        "city":"Ижевск",
        "domain":"https:\/\/izhevsk.arideya.ru\/"
    },
    {
        "city":"Барнаул",
        "domain":"https:\/\/barnaul.arideya.ru\/"
    },
    {
        "city":"Иркутск",
        "domain":"https:\/\/irkutsk.arideya.ru\/"
    },
    {
        "city":"Ульяновск",
        "domain":"https:\/\/ulianovsk.arideya.ru\/"
    },
    {
        "city":"Хабаровск",
        "domain":"https:\/\/habarovsk.arideya.ru\/"
    },
    {
        "city":"Ярославль",
        "domain":"https:\/\/yaroslavl.arideya.ru\/"
    },
    {
        "city":"Владивосток",
        "domain":"https:\/\/vladivostok.arideya.ru\/"
    },
    {
        "city":"Махачкала",
        "domain":"https:\/\/mahachkala.arideya.ru\/"
    },
    {
        "city":"Томск",
        "domain":"https:\/\/tomsk.arideya.ru\/"
    },
    {
        "city":"Оренбург",
        "domain":"https:\/\/orenburg.arideya.ru\/"
    },
    {
        "city":"Кемерово",
        "domain":"https:\/\/kemerovo.arideya.ru\/"
    },
    {
        "city":"Новокузнецк",
        "domain":"https:\/\/novokuznetsk.arideya.ru\/"
    },
    {
        "city":"Рязань",
        "domain":"https:\/\/ryazan.arideya.ru\/"
    },
    {
        "city":"Астрахань",
        "domain":"https:\/\/astrahan.arideya.ru\/"
    },
    {
        "city":"Набережные Челны",
        "domain":"https:\/\/naberezhnye-chelny.arideya.ru\/"
    },
    {
        "city":"Пенза",
        "domain":"https:\/\/penza.arideya.ru\/"
    },
    {
        "city":"Липецк",
        "domain":"https:\/\/lipetsk.arideya.ru\/"
    },
    {
        "city":"Киров",
        "domain":"https:\/\/kirov.arideya.ru\/"
    },
    {
        "city":"Чебоксары",
        "domain":"https:\/\/cheboksary.arideya.ru\/"
    },
    {
        "city":"Тула",
        "domain":"https:\/\/tula.arideya.ru\/"
    },
    {
        "city":"Калининград",
        "domain":"https:\/\/kaliningrad.arideya.ru\/"
    },
    {
        "city":"Курск",
        "domain":"https:\/\/kursk.arideya.ru\/"
    },
    {
        "city":"Улан-Удэ",
        "domain":"https:\/\/ulan-ude.arideya.ru\/"
    },
    {
        "city":"Ставрополь",
        "domain":"https:\/\/stavropol.arideya.ru\/"
    },
    {
        "city":"Севастополь",
        "domain":"https:\/\/sevastopol.arideya.ru\/"
    },
    {
        "city":"Балашиха",
        "domain":"https:\/\/balashiha.arideya.ru\/"
    },
    {
        "city":"Тверь",
        "domain":"https:\/\/tver.arideya.ru\/"
    },
    {
        "city":"Магнитогорск",
        "domain":"https:\/\/magnitogorsk.arideya.ru\/"
    },
    {
        "city":"Иваново",
        "domain":"https:\/\/ivanovo.arideya.ru\/"
    },
    {
        "city":"Брянск",
        "domain":"https:\/\/bryansk.arideya.ru\/"
    },
    {
        "city":"Сочи",
        "domain":"https:\/\/sochi.arideya.ru\/"
    },
    {
        "city":"Белгород",
        "domain":"https:\/\/belgorod.arideya.ru\/"
    },
    {
        "city":"Нижний Тагил",
        "domain":"https:\/\/nizhny-tagil.arideya.ru\/"
    },
    {
        "city":"Владимир",
        "domain":"https:\/\/vladimir.arideya.ru\/"
    },
    {
        "city":"Архангельск",
        "domain":"https:\/\/arhangelsk.arideya.ru\/"
    },
    {
        "city":"Сургут",
        "domain":"https:\/\/surgut.arideya.ru\/"
    },
    {
        "city":"Чита",
        "domain":"https:\/\/chita.arideya.ru\/"
    },
    {
        "city":"Калуга",
        "domain":"https:\/\/kaluga.arideya.ru\/"
    },
    {
        "city":"Симферополь",
        "domain":"https:\/\/simferopol.arideya.ru\/"
    },
    {
        "city":"Смоленск",
        "domain":"https:\/\/smolensk.arideya.ru\/"
    },
    {
        "city":"Волжский",
        "domain":"https:\/\/volzhsky.arideya.ru\/"
    },
    {
        "city":"Курган",
        "domain":"https:\/\/kurgan.arideya.ru\/"
    },
    {
        "city":"Орел",
        "domain":"https:\/\/orel.arideya.ru\/"
    },
    {
        "city":"Череповец",
        "domain":"https:\/\/cherepovec.arideya.ru\/"
    },
    {
        "city":"Вологда",
        "domain":"https:\/\/vologda.arideya.ru\/"
    },
    {
        "city":"Саранск",
        "domain":"https:\/\/saransk.arideya.ru\/"
    },
    {
        "city":"Владикавказ",
        "domain":"https:\/\/vladikavkaz.arideya.ru\/"
    },
    {
        "city":"Якутск",
        "domain":"https:\/\/yakutsk.arideya.ru\/"
    },
    {
        "city":"Мурманск",
        "domain":"https:\/\/murmansk.arideya.ru\/"
    },
    {
        "city":"Подольск",
        "domain":"https:\/\/podolsk.arideya.ru\/"
    },
    {
        "city":"Тамбов",
        "domain":"https:\/\/tambov.arideya.ru\/"
    },
    {
        "city":"Грозный",
        "domain":"https:\/\/grozny.arideya.ru\/"
    },
    {
        "city":"Стерлитамак",
        "domain":"https:\/\/sterlitamak.arideya.ru\/"
    },
    {
        "city":"Петрозаводск",
        "domain":"https:\/\/petrozavodsk.arideya.ru\/"
    },
    {
        "city":"Кострома",
        "domain":"https:\/\/kostroma.arideya.ru\/"
    },
    {
        "city":"Нижневартовск",
        "domain":"https:\/\/nizhnevartovsk.arideya.ru\/"
    },
    {
        "city":"Новороссийск",
        "domain":"https:\/\/novorossisk.arideya.ru\/"
    },
    {
        "city":"Йошкар-Ола",
        "domain":"https:\/\/yoshkar-ola.arideya.ru\/"
    },
    {
        "city":"Комсомольск-на-Амуре",
        "domain":"https:\/\/komsomolsk-na-amure.arideya.ru\/"
    },
    {
        "city":"Таганрог",
        "domain":"https:\/\/taganrog.arideya.ru\/"
    },
    {
        "city":"Сыктывкар",
        "domain":"https:\/\/syktyvkar.arideya.ru\/"
    },
    {
        "city":"Химки",
        "domain":"https:\/\/himki.arideya.ru\/"
    },
    {
        "city":"Нальчик",
        "domain":"https:\/\/nalchik.arideya.ru\/"
    },
    {
        "city":"Шахты",
        "domain":"https:\/\/shahty.arideya.ru\/"
    },
    {
        "city":"Нижнекамск",
        "domain":"https:\/\/nizhnekamsk.arideya.ru\/"
    },
    {
        "city":"Братск",
        "domain":"https:\/\/bratsk.arideya.ru\/"
    },
    {
        "city":"Дзержинск",
        "domain":"https:\/\/dzerzhinsk.arideya.ru\/"
    },
    {
        "city":"Орск",
        "domain":"https:\/\/orsk.arideya.ru\/"
    },
    {
        "city":"Ангарск",
        "domain":"https:\/\/angarsk.arideya.ru\/"
    },
    {
        "city":"Благовещенск",
        "domain":"https:\/\/blagoveschensk.arideya.ru\/"
    },
    {
        "city":"Энгельс",
        "domain":"https:\/\/engels.arideya.ru\/"
    },
    {
        "city":"Старый Оскол",
        "domain":"https:\/\/stary-oskol.arideya.ru\/"
    },
    {
        "city":"Великий Новгород",
        "domain":"https:\/\/veliky-novgorod.arideya.ru\/"
    },
    {
        "city":"Королев",
        "domain":"https:\/\/korolev.arideya.ru\/"
    },
    {
        "city":"Псков",
        "domain":"https:\/\/pskov.arideya.ru\/"
    },
    {
        "city":"Бийск",
        "domain":"https:\/\/biysk.arideya.ru\/"
    },
    {
        "city":"Мытищи",
        "domain":"https:\/\/mytischi.arideya.ru\/"
    },
    {
        "city":"Прокопьевск",
        "domain":"https:\/\/prokopevsk.arideya.ru\/"
    },
    {
        "city":"Южно-Сахалинск",
        "domain":"https:\/\/yuzhno-sahalinsk.arideya.ru\/"
    },
    {
        "city":"Балаково",
        "domain":"https:\/\/balakovo.arideya.ru\/"
    },
    {
        "city":"Рыбинск",
        "domain":"https:\/\/rybinsk.arideya.ru\/"
    },
    {
        "city":"Армавир",
        "domain":"https:\/\/armavir.arideya.ru\/"
    },
    {
        "city":"Люберцы",
        "domain":"https:\/\/lubercy.arideya.ru\/"
    },
    {
        "city":"Северодвинск",
        "domain":"https:\/\/severodvinsk.arideya.ru\/"
    },
    {
        "city":"Петропавловск-Камчатский",
        "domain":"https:\/\/petropavlovsk-kamchatsky.arideya.ru\/"
    },
    {
        "city":"Абакан",
        "domain":"https:\/\/abakan.arideya.ru\/"
    },
    {
        "city":"Норильск",
        "domain":"https:\/\/norilsk.arideya.ru\/"
    },
    {
        "city":"Сызрань",
        "domain":"https:\/\/syzran.arideya.ru\/"
    },
    {
        "city":"Волгодонск",
        "domain":"https:\/\/volgodonsk.arideya.ru\/"
    },
    {
        "city":"Новочеркасск",
        "domain":"https:\/\/novocherkassk.arideya.ru\/"
    },
    {
        "city":"Каменск-Уральский",
        "domain":"https:\/\/kamensk-uralsky.arideya.ru\/"
    },
    {
        "city":"Златоуст",
        "domain":"https:\/\/zlatoust.arideya.ru\/"
    },
    {
        "city":"Уссурийск",
        "domain":"https:\/\/ussuriysk.arideya.ru\/"
    },
    {
        "city":"Электросталь",
        "domain":"https:\/\/electrostal.arideya.ru\/"
    },
    {
        "city":"Салават",
        "domain":"https:\/\/salavat.arideya.ru\/"
    },
    {
        "city":"Находка",
        "domain":"https:\/\/nahodka.arideya.ru\/"
    },
    {
        "city":"Альметьевск",
        "domain":"https:\/\/almetevsk.arideya.ru\/"
    },
    {
        "city":"Миасс",
        "domain":"https:\/\/miass.arideya.ru\/"
    },
    {
        "city":"Керчь",
        "domain":"https:\/\/kerch.arideya.ru\/"
    },
    {
        "city":"Березники",
        "domain":"https:\/\/berezniki.arideya.ru\/"
    },
    {
        "city":"Рубцовск",
        "domain":"https:\/\/rubtsovsk.arideya.ru\/"
    },
    {
        "city":"Копейск",
        "domain":"https:\/\/kopeisk.arideya.ru\/"
    },
    {
        "city":"Пятигорск",
        "domain":"https:\/\/pyatigorsk.arideya.ru\/"
    },
    {
        "city":"Красногорск",
        "domain":"https:\/\/krasnogorsk.arideya.ru\/"
    },
    {
        "city":"Майкоп",
        "domain":"https:\/\/maikop.arideya.ru\/"
    },
    {
        "city":"Коломна",
        "domain":"https:\/\/kolomna.arideya.ru\/"
    },
    {
        "city":"Одинцово",
        "domain":"https:\/\/odincovo.arideya.ru\/"
    },
    {
        "city":"Ковров",
        "domain":"https:\/\/kovrov.arideya.ru\/"
    },
    {
        "city":"Хасавюрт",
        "domain":"https:\/\/hasavurt.arideya.ru\/"
    },
    {
        "city":"Кисловодск",
        "domain":"https:\/\/kislovodsk.arideya.ru\/"
    },
    {
        "city":"Серпухов",
        "domain":"https:\/\/serpuhov.arideya.ru\/"
    },
    {
        "city":"Новомосковск",
        "domain":"https:\/\/novomoskovsk.arideya.ru\/"
    },
    {
        "city":"Нефтекамск",
        "domain":"https:\/\/neftekamsk.arideya.ru\/"
    },
    {
        "city":"Новочебоксарск",
        "domain":"https:\/\/novocheboksarsk.arideya.ru\/"
    },
    {
        "city":"Нефтеюганск",
        "domain":"https:\/\/nefteugansk.arideya.ru\/"
    },
    {
        "city":"Первоуральск",
        "domain":"https:\/\/pervouralsk.arideya.ru\/"
    },
    {
        "city":"Щелково",
        "domain":"https:\/\/schelkovo.arideya.ru\/"
    },
    {
        "city":"Дербент",
        "domain":"https:\/\/derbent.arideya.ru\/"
    },
    {
        "city":"Черкесск",
        "domain":"https:\/\/cherkessk.arideya.ru\/"
    },
    {
        "city":"Батайск",
        "domain":"https:\/\/bataisk.arideya.ru\/"
    },
    {
        "city":"Орехово-Зуево",
        "domain":"https:\/\/orehovo-zuevo.arideya.ru\/"
    },
    {
        "city":"Невинномысск",
        "domain":"https:\/\/nevinnomyssk.arideya.ru\/"
    },
    {
        "city":"Домодедово",
        "domain":"https:\/\/domodedovo.arideya.ru\/"
    },
    {
        "city":"Димитровград",
        "domain":"https:\/\/dimitrovgrad.arideya.ru\/"
    },
    {
        "city":"Кызыл",
        "domain":"https:\/\/kyzyl.arideya.ru\/"
    },
    {
        "city":"Октябрьский",
        "domain":"https:\/\/oktyabrsky.arideya.ru\/"
    },
    {
        "city":"Назрань",
        "domain":"https:\/\/nazran.arideya.ru\/"
    },
    {
        "city":"Камышин",
        "domain":"https:\/\/kamyshin.arideya.ru\/"
    },
    {
        "city":"Обнинск",
        "domain":"https:\/\/obninsk.arideya.ru\/"
    },
    {
        "city":"Новый Уренгой",
        "domain":"https:\/\/novy-urengoy.arideya.ru\/"
    },
    {
        "city":"Каспийск",
        "domain":"https:\/\/kaspiysk.arideya.ru\/"
    },
    {
        "city":"Муром",
        "domain":"https:\/\/murom.arideya.ru\/"
    },
    {
        "city":"Раменское",
        "domain":"https:\/\/ramenskoe.arideya.ru\/"
    },
    {
        "city":"Новошахтинск",
        "domain":"https:\/\/novoshahtinsk.arideya.ru\/"
    },
    {
        "city":"Жуковский",
        "domain":"https:\/\/zhukovsky.arideya.ru\/"
    },
    {
        "city":"Северск",
        "domain":"https:\/\/seversk.arideya.ru\/"
    },
    {
        "city":"Пушкино",
        "domain":"https:\/\/pushkino.arideya.ru\/"
    },
    {
        "city":"Ноябрьск",
        "domain":"https:\/\/noyabrsk.arideya.ru\/"
    },
    {
        "city":"Евпатория",
        "domain":"https:\/\/evpatoriya.arideya.ru\/"
    },
    {
        "city":"Ессентуки",
        "domain":"https:\/\/essentuki.arideya.ru\/"
    },
    {
        "city":"Елец",
        "domain":"https:\/\/elec.arideya.ru\/"
    },
    {
        "city":"Ачинск",
        "domain":"https:\/\/achinsk.arideya.ru\/"
    },
    {
        "city":"Артем",
        "domain":"https:\/\/artem.arideya.ru\/"
    },
    {
        "city":"Сергиев Посад",
        "domain":"https:\/\/sergiev-posad.arideya.ru\/"
    },
    {
        "city":"Арзамас",
        "domain":"https:\/\/arzamas.arideya.ru\/"
    },
    {
        "city":"Элиста",
        "domain":"https:\/\/elista.arideya.ru\/"
    },
    {
        "city":"Новокуйбышевск",
        "domain":"https:\/\/novokuybyshevsk.arideya.ru\/"
    },
    {
        "city":"Бердск",
        "domain":"https:\/\/berdsk.arideya.ru\/"
    },
    {
        "city":"Ногинск",
        "domain":"https:\/\/noginsk.arideya.ru\/"
    },
    {
        "city":"Долгопрудный",
        "domain":"https:\/\/dolgoprudny.arideya.ru\/"
    },
    {
        "city":"Реутов",
        "domain":"https:\/\/reutov.arideya.ru\/"
    }
]
const homeSwiper = new Swiper(".home-slider__inner .homeSwiper", {
    loop: true,
    navigation: {
        nextEl: ".home-slider__inner .swiper-button-next",
        prevEl: ".home-slider__inner .swiper-button-prev",
    },
    pagination: {
        el: ".home-slider__inner .swiper-pagination",
    },
});

const youtubeSwiper = new Swiper(".youtube-slider__inner .youtubeSwiper", {
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".youtube-slider__inner .swiper-button-next",
        prevEl: ".youtube-slider__inner .swiper-button-prev",
    },
    pagination: {
        el: ".youtube-slider__inner .swiper-pagination",
    },
    breakpoints: {
        "580": {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        "767": {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        "800": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "1200": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
})
const productSwiper = new Swiper(".products-inner .productSwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 5,
    navigation: {
        nextEl: ".productSwiper .swiper-button-next",
        prevEl: ".productSwiper .swiper-button-prev",
    },
    // pagination: {
    //     el: ".productSwiper .swiper-pagination",
    // },
    breakpoints: {
        "767": {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        "800": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "1000": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
})

const homePagination = document.querySelectorAll('.home-slider__inner .swiper-pagination-bullet');
for (let i = 0; i < homePagination.length; i++) {
    homePagination[i].addEventListener('click', () => homeSwiper.slideTo(i))
}

const youtubePagination = document.querySelectorAll('.youtube-slider__inner .swiper-pagination-bullet');
for (let i = 0; i < youtubePagination.length; i++) {
    youtubePagination[i].addEventListener('click', () => youtubeSwiper.slideTo(i))
}
$(document).ready(function () {
    $('.account__tabs-item').on('click', function () {
        const tab = $(this).data('tab')
        const paret = $(this).parents('.account__col')
        const child1 = paret.find('.account__tabs-content')
        const child2 = paret.find('.account__tabs')
        child2.find('.account__tabs-item').removeClass('active')
        child2.find(`[data-tab="${tab}"]`).addClass('active')
        child1.find('.account__tabs-content-item').hide()
        child1.find(`[data-tab="${tab}"]`).show()
        $('.footer-fix').toggle()
    })
    if ($('select').hasClass('select')) {
        $('.select').styler({
            placeholder: 'ui-state-highlight',
        });
        $('.select.jq-selectbox__select-text.placeholder').text('Выбрать тип проекта')
    }

    $(".modal .modal__container").on("click", function (e) {
        e.stopPropagation();
    });
    $(".modal .close, .modal ").on("click", function (e) {
        e.preventDefault();
        $(".modal").fadeOut(function () {
            $("body").css("overflow", "auto");
            $('header').css('visibility', 'unset')

        });
    });
    $(".open__modal").on("click", function (e) {
        e.preventDefault();
        const $this = $(this);
        const modal = $this.attr('data-modal');
        if(!$(this).hasClass('with-scroll')){
            $("body").css("overflow", "hidden");
            $('header').css('visibility', 'hidden')
        }
        $(`${modal}`).fadeIn();
    });
    $('.header-top__city-pop__btn').on('click', function () {
        $('.header-top__city-pop').hide()
    })
    function getCities(){
       let cities =  citiesList
        let html = ``
        cities.forEach(item=>{
            html += `<div class="prmn-cmngr-cities__search-item">
                                        <a href="#" class="prmn-cmngr-cities__city-name">${item.city}</a>
                </div>`
        })
        if(html === '') html = '<p class="footer-info"> пусто </p>'

        $('.prmn-cmngr-cities__search-list').html(html)

    }
    getCities()

    $('.prmn-cmngr-cities__search-list').on('click', '.prmn-cmngr-cities__city-name', function(е) {
        е.preventDefault()
        let cityName = $(this).text();
        $('.product-single__body-right-item__footer-title .open__modal').text(cityName)
        $('.modal').hide()
    });


    $('.prmn-cmngr-cities__search.form-control').on('input',function(){
        const search = $(this).val()
        let cities =  citiesList
        let html = ``
        cities.forEach(item=>{
            let test = item.city.toUpperCase()
                if(item.city.toUpperCase().search(`${search.toUpperCase()}`) !== -1){
                    html += `<div class="prmn-cmngr-cities__search-item">
                    <a href="#" class="prmn-cmngr-cities__city-name">${item.city}</a>
                </div>`
            }

        })
        if(html === '') html = '<p class="footer-info"> пусто </p>'
        $('.prmn-cmngr-cities__search-list').html(html)

    })

    $('.footer-top__title').on('click',function (){
        const parent = $(this).parents('.footer-top__item')
        const el = parent.find('.footer-top__menu')
        el.toggle()
        $(this).toggleClass('active')
    })
    $('.nav-submenu__title.js-submenu-link').on('click',function (e){
        e.preventDefault()
        const parent = $(this).parents('.nav-submenu__list-item.nav-submenu__item')
        const el = parent.find('.nav-submenu__list.nav-submenu__item')
        el.toggleClass('active')
    })
    $('.nav-submenu__list-item.nav-submenu__list-item--title').on('click', function (e){
        e.preventDefault()
        const parent = $(this).parents('.nav-submenu__list-item.nav-submenu__item')
        const el = parent.find('.nav-submenu__list.nav-submenu__item')
        el.toggleClass('active')
    })
})

$(document).on('click', function (e) {
    if (e.target.classList.contains('header-call__button-phone-inner') || e.target.classList.contains('header-call__button-phone-icon')) {
        $('.header-actions__item-content.account-popup-shadow').hide()
        $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').toggle()
        $('.header-call__button-content').toggleClass('active')
    } else if (e.target.classList.contains('header-actions__item-inner-1') || e.target.classList.contains('header-actions__item-inner-svg-1') ) {
        $('.header-actions__item-content.account-popup-shadow').hide()
         $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').hide()
        $('.header-actions__item-inner').removeClass('active')
        console.log($('.header-actions__item-content-1.account-popup-shadow'))
        if( $('.header-actions__item-content-1.account-popup-shadow').hasClass('active')){
            $('.header-actions__item-content-1.account-popup-shadow').hide()
            $('.header-actions__item-content-1.account-popup-shadow').removeClass('active')
            $('.header-actions__item-inner-1').removeClass('active')
        }else{
            $('.header-actions__item-content-1.account-popup-shadow').show()
            $('.header-actions__item-content-1.account-popup-shadow').addClass('active')
            $('.header-actions__item-inner-1').addClass('active')

        }
        // $('.header-actions__item-content-1.account-popup-shadow').toggle()
        // $('.header-actions__item-content-1.account-popup-shadow').toggleClass('active')
        // $('.header-actions__item-inner-1').toggleClass('active')


    } else if (e.target.classList.contains('header-actions__item-inner-2') || e.target.classList.contains('header-actions__item-inner-svg-2') ) {
        $('.header-actions__item-content.account-popup-shadow').hide()
         $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').hide()
        $('.header-actions__item-inner').removeClass('active')
        if( $('.header-actions__item-content-2.account-popup-shadow').hasClass('active')){
            $('.header-actions__item-content-2.account-popup-shadow').hide()
            $('.header-actions__item-content-2.account-popup-shadow').removeClass('active')
            $('.header-actions__item-inner-2').removeClass('active')
        }else{
            $('.header-actions__item-content-2.account-popup-shadow').show()
            $('.header-actions__item-content-2.account-popup-shadow').addClass('active')
            $('.header-actions__item-inner-2').addClass('active')
        }

    } else {
        $('.header-actions__item-content.account-popup-shadow').hide()
        $('.header-actions__item-inner').removeClass('active')
        $('.header-call__button-content').hide()
        $('.header-call__button-content').removeClass('active')

    }

})
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

$('.scroll-to-top').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
});

$(document).ready(function () {
    const filterTags = $('.filter-tags-item')
    const filterTagsMore = 'filter-tags-item-more'
    filterTags.map(i =>{
        if(i > 7 && !filterTags.eq(i).hasClass(filterTagsMore))filterTags.eq(i).hide()
    })
    $('.filter-tags-item-more').on('click',function (e){
        e.preventDefault()
        filterTags.map(i =>{
            filterTags.eq(i).show()
        })
        $(this).hide()
    })
})

