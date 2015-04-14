$( document ).ready(function(){
    $('.btn-close').fadeOut(200);
    var open = false;
    $('.btn-open').on('click', function(){
        if (open == false) {
            $('.overlay, .btn-close').fadeIn(200);
            $('nav a, .btn-open').fadeOut(200);
            open = true; 
    } else {
        $('.overlay, .btn-close').fadeOut(200);
        $('nav a, .btn-close').fadeIn(200);
        open = false;
    }
    }); 
    
    
    $('.overlay, .btn-close').on('click', function(){
        $('.overlay, .btn-close').fadeOut(200);
        $('nav a, .btn-open').fadeIn(200);
        open = false; 
    });
    
    

    
    
});


