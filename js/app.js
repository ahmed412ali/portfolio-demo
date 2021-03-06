$(document).ready(function () {
    let $btn = $('.projects .button-group button');
    $btn.click(function (e) {
        $('.projects .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .grid').isotope({
            filter: selector
        });
        return false;
    })
    $('body').scrollspy({target: ".navbar"})
    let nav_offset_top = $('.main').height() + 20;
    function navbarFixed() {
        if ($('.main').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.navbar').addClass('fixed-top');
                } else {
                    $('.navbar').removeClass('fixed-top');
                }
            })
        }
    }
    navbarFixed();
});    