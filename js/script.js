$(document).ready(function(){
        
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop(); 
        
        if(scrollPos >= 220){
            $('.main-header-class').addClass('fixed');
        } else if(scrollPos <= 50) {
            $('.main-header-class').removeClass('fixed');
        }
    });  
});