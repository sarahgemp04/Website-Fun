
/**
    AUTHOR: Sarah Gemperle
    DATE-LAST-EDITED: Aug 17, 2016
    
    JavaScript functions for my resume website. Includes header function,
    sizing function, smooth scrolling function, and a responsive show dropdown 
    menu function.
**/


/*Function for sticky navigation. Keep fixed after scroll past first page.*/

$(function () {
    var navHeight = $('.nav').outerHeight();
    var bottomHome = $(window).innerHeight();
    var i = 0; //to keep index of when to realign other pages.
     $(window).scroll(function() {
         if($(window).scrollTop() > bottomHome) {
             $('.nav').css('position', 'fixed');
             $('.nav').css('top', '0px');
             $('#topAbout').css('height', navHeight);
             i = 1;
         } else {
             $('.nav').css('position', 'relative');
             if(i != 0 ) {
                 $('#topAbout').css('height', '0' );
             }
             i = 0;
         }
     });

});

/*Function to set the height of the home page so that it covers entire 
  viewport.*/

$(document).ready(function() {
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('#home').css('height', windowHeight);
    };
    setHeight();

    
    $(window).resize(function() {
        setHeight();
    });

});

/*Function to give links a smooth scroll effect.*/

$(function() {
        $('.tab a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            }, 800,'jswing');
            
            event.preventDefault();
            });
        $('#topAbout').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            }, 800,'jswing');
            
            event.preventDefault();
            });
});

/*Same smooth scroll effect for the links that arise during responsive, 
mobile layout. Dropdown menu links*/

$(function() {
        $('#dropTabs a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            }, 800,'jswing');
            
            event.preventDefault();
            });
        $('.arrwContainer a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            }, 800,'jswing');
            
            event.preventDefault();
            });
});

/*Function to open dropdown menu (mobile view) when 3 bar icon is clicked.*/

$(function() {
        var i = 1;
    $('#aDrop').bind('click',function(event) {
        //If dropdown menu is closed set display to block on click, else
        //set display to hidden on click
        if(i == 1) {
            $('.dropContainer').css('display','block');
            i = 0;
        } else {
            $('.dropContainer').css('display','none');
            i = 1;
        }
    });
});

/*Function to hide the dropdown menu once a link of choice has been clicked.*/
$(function() {
    $('#dropTabs a').bind('click',function(event) {
        $('.dropContainer').css('display','none');
    });
});
