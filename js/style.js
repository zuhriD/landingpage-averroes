$(window).on('scroll', function () {
    var scroll_top = $(window).scrollTop();
    if (scroll_top > 40) {
        $('.navbar').addClass('bg-white');
        $('.navbar').css('box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04)');
        $('#navbar-brand-title').addClass('text-dark');
    }
    if (scroll_top < 40) {
        $('.navbar').removeClass('bg-white');
        $('.navbar').addClass('bg-body-light');
        $('#navbar-brand-title').addClass('text-white');
        $('#navbar-brand-title').removeClass('text-dark');
    }
    else {
        $('.navbar').removeClass('bg-body-light');
        $('#navbar-brand-title').removeClass('text-white');
    }
})