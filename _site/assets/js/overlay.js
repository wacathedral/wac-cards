$( document ).ready(function(){
    $('#close').fadeOut(200);
    var open = false;
    $('.ov-button').on('click', function(){
        if (open == false) {
            $('.overlay, #close').fadeIn(200);
            $('nav a, #open').fadeOut(200);
            open = true; 
    } else {
        $('.overlay, #close').fadeOut(200);
        $('nav a, #open').fadeIn(200);
        open = false;
    }
}); 
$('.overlay').on('click', function(){
    $('.overlay, #close').fadeOut(200);
    $('nav a, #button').fadeIn(200);
    open = false; 
});
$('.wrap').on('click', function(){
    return false; 
});
})
