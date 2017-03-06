$('.menu-toggle').click(function() {
    $(".nav-bar").toggleClass("nav-bar--open", 500);
    $(this).toggleClass('ham-open');
})