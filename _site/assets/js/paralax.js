$(document).ready(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
//testimonials
        if(wScroll > $('.testimonials').offset().top - ($(window).height()/1)){
        
            $('.wrap').each(function(i){
                setTimeout(function(){
                    $('.wrap').eq(i).addClass('is-showing');
                }, 500 * (i+1));
            });
        }
//form
        if(wScroll > $('.contact-form').offset().top - ($(window).height()/1)){
        
            $('.contact-form').each(function(i){
                setTimeout(function(){
                    $('.contact-form').eq(i).addClass('slide-in');
                }, 150 * (i+1));
            });
        }
        
    });
});
