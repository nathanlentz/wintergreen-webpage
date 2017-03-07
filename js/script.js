// Document Ready
$(function(){
    $('.slide-tab-lead').hover(function(){
        $(this).stop(true, false).animate({ left: 0 }, 400);
        $('.slide-tab-back').stop(true,false).animate({ left: 0 }, 400);

    }, function(){
        $(this).stop(true, false).animate({ left: -120 }, 400);
        $('.slide-tab-back').stop(true,false).animate({ left: -190 }, 400);
    });
});


$('.menu-toggle').click(function() {
    $(".nav-bar").toggleClass("nav-bar--open", 500);
    $(this).toggleClass('ham-open');
})

