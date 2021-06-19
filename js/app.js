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
});    