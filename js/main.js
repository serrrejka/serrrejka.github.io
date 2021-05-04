$(document).ready(function() {
    // slider
    $('.tours__slider').slick({
        slidesToShow: 3,
        prevArrow: 
        '<button class="tours__btn tours__btn-prev"> <img src="img/arrow-left.svg" alt="arrow-left"> </button>',
        nextArrow:
        '<button class="tours__btn tours__btn-next"> <img src="img/arrow-right.svg" alt="arrow-next"> </button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2
                },
                
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
   
    });

    // tab
    $('.tours__wrapper-link').on('click', function(e) {

        e.preventDefault();

        $('.tours__wrapper-link').removeClass('tours__wrapper-link__active');
        $('.tours__content').removeClass('tours__content-active');

        $(this).addClass('tours__wrapper-link__active');
        $($(this).attr('href')).addClass('tours__content-active');

        $('.tours__slider').slick('setPosition');
    });

    $('.header__menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $('.header__menu').toggleClass('header__menu-active');
    })

});