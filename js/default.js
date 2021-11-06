window.onload = function() {
    $("body").removeClass("preload");
}
$(window).scroll(function() {
    if($(window).scrollTop() > $(window).height()/2) {
        $(".btn-up").addClass("m-fadeIn"); 
    }
    else {
        $(".btn-up").removeClass("m-fadeIn");
    }
});
$(".btn-up").click(function(){
    $(window).scrollTop(0);
});

$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(300);
    // if($(window).width() <= 974)
    //     $(this).parent().css({paddingBottom: 20})
});

// ADD SLIDEUP ANIMATION TO DROPDOWN-MENU 
$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(300);
    // if($(window).width() <= 974)
    //     $(this).parent().css({paddingBottom: 0})
});