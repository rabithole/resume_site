$(function() {
    
    /*-------------------------------------------------------------------*/
    /*  A simple script that allows you to add a slideshow-capable
    /*  background image to any html page. Requires jQuery backstretch
    /*  plugin.
    /*-------------------------------------------------------------------*/
    var ww = Math.max($(window).width(), window.innerWidth);
    
    if (jQuery.browser.mobile === false || ww > 1023){
        $.backstretch([
            "assets/images/sunrise_205.jpg",
            "assets/images/last_light.jpg",
            "assets/images/camas_marina_night.jpg",
            "assets/images/beach_walk.jpg",
            "assets/images/rolling_fog.jpg"
        ], {duration: 2000, fade: 2000});
    }
});