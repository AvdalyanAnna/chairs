ymaps.ready(init);

function init() {
    // Создание карты
    var myMap = new ymaps.Map("moscow-map", {
        center: [55.7558, 37.6176], // Координаты центра карты
        zoom: 10 // Уровень масштабирования
    });

    // Добавление метки на карту
    var myPlacemark = new ymaps.Placemark([55.7558, 37.6176], {
        hintContent: 'Москва!', // Подсказка при наведении на метку
        balloonContent: 'Столица России' // Контент балуна (всплывающего окна) при клике на метку
    });

    myMap.geoObjects.add(myPlacemark);
    // Создание карты
    var myMap1= new ymaps.Map("moscow-map1", {
        center: [55.7558, 37.6176], // Координаты центра карты
        zoom: 10 // Уровень масштабирования
    });

    // Добавление метки на карту
    var myPlacemark1 = new ymaps.Placemark([55.7558, 37.6176], {
        hintContent: 'Москва!', // Подсказка при наведении на метку
        balloonContent: 'Столица России' // Контент балуна (всплывающего окна) при клике на метку
    });

    myMap1.geoObjects.add(myPlacemark1);
}
