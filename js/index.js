function sliderMain() {
    var swiper = new Swiper('.relaxation .swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ' .relaxation .swiper-button-next',
            prevEl: ' .relaxation .swiper-button-prev',
        },
        pagination: {
            el: '.relaxation .swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
        }
    })
}

function sliderMainTwo() {
    var swiper = new Swiper('.contacts .swiper2', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ' .contacts .swiper-button-next',
            prevEl: ' .contacts .swiper-button-prev',
        },
        pagination: {
            el: '.contacts .swiper-pagination__contacts',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
        }
    })
}





$(document).ready(function() {
    sliderMain()
    sliderMainTwo()

    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header").toggleClass("header--active")
        $(".header__logo").toggleClass("header__logo--active")
        $(".header__right").toggleClass("header__right--active")
        $("body").toggleClass("fixed-body")

    })

    $(".blog__left-tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".blog__left-tab").removeClass("blog__left-tab--active");
        $(this).addClass("blog__left-tab--active");
        $(".blog__content").removeClass("blog__content--active");
        $(`.blog__content[data-content-path="${path}"]`).addClass("blog__content--active");
    })

    $(".tours__title").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".tours__title").removeClass("tours__title-active");
        $(this).addClass("tours__title-active");
        $(".tours__blocks").removeClass("tours__blocks--active");
        $(`.tours__blocks[data-content-path="${path}"]`).addClass("tours__blocks--active");
    })

    $(".tours__input-checkbox input").change(function() {

        if ($(this).is(':checked')) {
            $(".tours__title").removeClass("tours__title-active");
            $(`.tours__title[data-tab-path="2"]`).addClass("tours__title-active");
            $(".tours__blocks").removeClass("tours__blocks--active");
            $(`.tours__blocks[data-content-path="2"]`).addClass("tours__blocks--active");
        } else {
            $(".tours__title").removeClass("tours__title-active");
            $(`.tours__title[data-tab-path="1"]`).addClass("tours__title-active");
            $(".tours__blocks").removeClass("tours__blocks--active");
            $(`.tours__blocks[data-content-path="1"]`).addClass("tours__blocks--active");
        }
    })

    $(".tours__button1").click(function() {
        let path = $(this).attr("data-btn-path");
        $(".tours__button1").removeClass("tours__button--active");
        $(this).addClass("tours__button--active");
        $(".tours__items1").removeClass("tours__items--active");
        $(`.tours__items1[data-items-path="${path}"]`).addClass("tours__items--active");
    })

    $(".tours__button2").click(function() {
        let path = $(this).attr("data-btn-path");
        $(".tours__button2").removeClass("tours__button--active");
        $(this).addClass("tours__button--active");
        $(".tours__items2").removeClass("tours__items--active");
        $(`.tours__items2[data-items-path="${path}"]`).addClass("tours__items--active");
    })

    // $(".tours__button2").click(function() {
    //     let path = $(this).attr("data-btn2-path");
    //     $(".tours__button2").removeClass("tours__button2--active");
    //     $(this).addClass("tours__button2--active");
    //     $(".tours__items2").removeClass("tours__items2--active");
    //     $(`.tours__items2[data-items2-path="${path}"]`).addClass("tours__items2--active");
    // })
})