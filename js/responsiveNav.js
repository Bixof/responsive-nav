$(document).ready(function(){
    $('#navigation-button').on('click', function(){
        $('#nav-menu ul').css('display', 'block');
        $('#navigation-button').css('display', 'none');
        $('#cross').css('display', 'block');
    });
    
    $('#cross').click(function(){
        $('#nav-menu ul').css('display', 'none');  
        $('#navigation-button').css('display', 'block');
        $(this).css('display', 'none');
    });
    
    
    if($(window).width() > 992){
        $('#nav-menu ul').css('display', 'flex'); 
        $('#navigation-button').css('display', 'none');
    };
});