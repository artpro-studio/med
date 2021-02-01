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
    $('.js--burger').on('click', function () {
        $('.js--burger').toggleClass('active');
        $('.js--mobile_header').toggleClass('active');
    });
    $('.js--mobile-search').on('click', function (e) {
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
        prevArrow: false,
        nextArrow: '.js--head-slider-next-arrow',
    });
});
