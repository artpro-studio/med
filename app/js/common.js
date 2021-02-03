window.onload = function(){
    setTimeout(function(){
        let arrIframe = document.querySelectorAll('iframe');
        arrIframe.forEach(forIframe => {
            let frameSrc = forIframe.getAttribute('data-src');
            forIframe.setAttribute('src', frameSrc);
        });
    },4000);
}

const images = document.querySelectorAll('img')
const itemsBg = document.querySelectorAll('.imgLoad')

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

function handlerImg(dataImg, observer){
    dataImg.forEach(forImg => {
        if(forImg.intersectionRatio > 0){
            loadImages(forImg.target, false);
        }
    })
}
function handlerBG(dataImg, observer){
    dataImg.forEach(forImg => {
        if(forImg.intersectionRatio > 0){
            loadImages(forImg.target, true);
        }
    })
}

function loadImages(imgage, type ){
    if(type == false){
        imgage.src = imgage.getAttribute('data-src');
    }
    if(type == true){
        imgage.style.backgroundImage = `url(${imgage.getAttribute('data-bg')}`
    }
}

const observer = new IntersectionObserver(handlerImg, options)
const observerBG = new IntersectionObserver(handlerBG, options)

images.forEach(img => {
    observer.observe(img)
})
itemsBg.forEach(item => {
    observerBG.observe(item)
})

$(function () {
    $('.phone_mask').mask('+7 (999) 999 99-99');

    $('.js--burger').on('click', function () {
        $('.js--burger').toggleClass('active');
        $('.js--mobile_header').toggleClass('active');
    });
    $('.js--mobile-search').on('click', function (e) {
        e.preventDefault();
        $('.js--mobile-search-form').toggleClass('active');
    });
    $('.js--close_search').on('click', function (e) {
        e.preventDefault();
        $('.js--mobile-search-form').toggleClass('active');
    });

    $(document).on('scroll', function (e) {
        if ($(window).scrollTop() > 10) {
            $('.js--header').addClass('scroll');
        } else {
            $('.js--header').removeClass('scroll');
        }
    });
    $('.js--head__slider').slick({
        infinite: false,
        nextArrow: '.js--head-slider-next-arrow',
        prevArrow: '.js--head-slider-prev-arrow',
    });

    $('.about_pages__gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows:false,
        dots:true,
        infinite:false,
        responsive: [
            {
                breakpoint: 650,
                settings: 'unslick'
            }
        ]
    });

    $('.catalog_detail_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.catalog_detail_slider_nav',
        responsive: [
            {
                breakpoint: 650,
                settings:{
                    dots: true
                }
            }
        ]
    });
    $('.catalog_detail_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.catalog_detail_slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        nextArrow: '.detail_slider_nav.next',
        prevArrow: '.detail_slider_nav.prev',
    });
    $('.js--partners__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.js--partners__slider-prev-arrow',
        nextArrow: '.js--partners__slider-next-arrow',
        responsive: [
            {
                breakpoint: 991,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.catalog__item .sliders').each(function (i, node) {
        $(node).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            nextArrow: '<button class="catalog__item_nav next"><img src="img/arrow-circle.svg" data-src="img/arrow-circle.svg" alt=""></button>',
            prevArrow: '<button class="catalog__item_nav prev"><img src="img/arrow-circle.svg" data-src="img/arrow-circle.svg" alt=""></button>',
        });
    });

    //Открытие табов
    $('.tabs_top a').on('click', function (e){
        let tab = $(this).attr('data-tab');
        $('.tabs_top a').removeClass('active');
        $('.tab_section').removeClass('active');
        $(this).addClass('active');
        $('.tab_section.' + tab).addClass('active');

        $(".catalog__item .sliders").slick('unslick');
        $('.catalog__item .sliders').each(function (i, node) {
            $(node).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                nextArrow: '<button class="catalog__item_nav next"><img src="img/arrow-circle.svg" data-src="img/arrow-circle.svg" alt=""></button>',
                prevArrow: '<button class="catalog__item_nav prev"><img src="img/arrow-circle.svg" data-src="img/arrow-circle.svg" alt=""></button>',
            });
        });
    });
});
