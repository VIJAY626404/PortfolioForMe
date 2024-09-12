$(docoment).ready(function(){
    $('#menu').clik(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggal');

    });
    $(window).on('scroll load',function(){
    $('#menu').toggleClass('fa-times');
        $('header').toggleClass('toggal');

});
$(window).on('scroll load',function(){
    $('#menu').removeclass('fa-times');
    $('#header').removeclass('toggle');
    if($(window).scrollTop()>0){
    $('.top').show();
    }
    else{
        $('.top').hide();

    }

})
// smooth scrolling
$('a[href*="#"]').on('click',function(e){
    e.prevendefault();
    $('html,body').animate({
        scrollTop :$($(this).attr('href')).offset.top(),
    },
    500,
    'linear'
    )

});


});