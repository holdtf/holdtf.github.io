new Swiper('.image-slider', {// инициализация слайдера 
    // стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // навигация
    // булеты, текущее положение, прогресс бар
    pagination: {
        el: '.swiper-pagination',
        // булеты
        clickable: true,
        // угол срабатывания свайпа
        touchAngle: 20,
    },
    // отступ между слайдами
    spaceBetween: 10,// 200
    // вид курсора
    grabCursor: true,
    // управление клавиатурой
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    // управление мышкой
    // mousewheel: {
    //     eventsTarget: ".image-slider"
    // },
    // бесконечное прокручивание
    loop: true,
    // автопрокрутка
    autoplay: {
        delay: 5000,// 3000 = 3 sec
        // откл после свайпа true
        disableOnInteraction: false,
    },
    // скорость движения 300
    speed: 1500,
    // Эффекты переключения слайдов
    // листание
    //effect: 'slide',

    // смена прозрачности
    effect: 'fade',
    // 'fade'
    fadeEffect: {
        // паралельная смена прозрачности
        crossFade: true,
    }

})


/*
<div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    1
                </div>
                <div class="swiper-slide">
                    2
                </div>
                <div class="swiper-slide">
                    3
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-pagination"></div>
            <div class="swipper-scrollbar"></div>
        </div>
*/