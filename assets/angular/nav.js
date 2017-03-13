(function() {
	var indexPage = angular.module("indexPage", []);

	indexPage.controller('navControl', function($scope) {
    /*-------------------------------------------------------------------*/
    /*  5. Make navigation menu on your page always stay visible.
    /*  Requires jQuery Sticky plugin.
    /*-------------------------------------------------------------------*/
        var stickyMenu = function(){
            var ww = Math.max($(window).width(), window.innerWidth),
            nav = $('.navbar.navbar-fixed-top');

            if ($.fn.unstick){
                nav.unstick();
            }
            
            if ($.fn.sticky && ww >= 992){
                nav.sticky({topSpacing: 0});
            }
        };
        
        stickyMenu();
        
        // Call stickyMenu() when window is resized.
        $(window).smartresize(function(){
            stickyMenu();
        });

       
    });

    

    /*-------------------------------------------------------------------*/
    /*  4. Page scrolling feature, requires jQuery Easing plugin.
    /*-------------------------------------------------------------------*/
    indexPage.controller('scrollEase', function($scope) {
        
        var pageScroll = function(){
            $('.page-scroll > a').bind('click', function(e){
                e.preventDefault();
                
                var anchor = $(this),
                href = anchor.attr('href'),
                offset = $('body').attr('data-offset');
                
                $('html, body').stop().animate({
                    scrollTop: $(href).offset().top - (offset - 1)
                }, 1500, 'easeInOutExpo');
                
                /*
                 * Automatically retract the navigation after clicking 
                 * on one of the menu items.
                 */
                if(!$(this).parent().hasClass('dropdown')){
                    $('.berg-collapse').collapse('hide');
                }
            });
        }; 
    pageScroll(); 
});
}());