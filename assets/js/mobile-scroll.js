$( document ).ready(function(){

var tempScrollLeft = 0;
var currentScrollLeft = 0;
var scrollWidth = $(window).width();
var newWidth = 0;


function scrollIt() {

$(window).off('scroll', scrollIt);

    currentScrollLeft = $(window).scrollLeft();


    if (tempScrollLeft < currentScrollLeft) {
       newWidth = newWidth + scrollWidth;
       $('.container').animate({scrollLeft: newWidth}, 500, function(){
             var setScroll = setTimeout(function(){
                console.log('Animation Complete');
                tempScrollLeft = $(window).scrollLeft();
                $(window).on('scroll', scrollIt);
            }, 10);
        }); 

    } else if (tempScrollLeft > currentScrollLeft){
       newWidth = newWidth - scrollWidth;
       $('.container').animate({scrollLeft: newWidth}, 500, function(){
             var setScroll = setTimeout(function(){
                console.log('Animation Complete');
                tempScrollLeft = $(window).scrollLeft();
                $(window).on('scroll', scrollIt);
            }, 10);
        }); 
    }


}

$(window).on('scroll', scrollIt);
});

