$(document).ready(function() {
  var scrollWidth = $(window).width();

$('#card-container').on( 'scroll' function(){
//add if statement
    if($(this).scrollLeft()>= 10){
    //add width scroll function
        $('#card-container').animate({scrollLeft:"+="+scrollWidth}, 'slow');
        return false;
      }
    });
});


