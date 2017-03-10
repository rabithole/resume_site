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
 
    /*-------------------------------------------------------------------*/
    /*  6. Navbar dropdown opening on hover,
    /*  and opening on click for collapsed navbar.
    /*-------------------------------------------------------------------*/
    var toggleNavbarMethod = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        dropdown = $('.navbar .dropdown');
        
        if (ww >= 992){
            dropdown.on('mouseover', function(){
                if (!$(this).hasClass('open')){
                    $(this).addClass('open');
                }
            }).on('mouseout', function(){
                if ($(this).hasClass('open')){
                    $(this).removeClass('open');
                }
            });
        }
        else {
            dropdown.off('mouseover').off('mouseout');
        }
    };
    
    toggleNavbarMethod();
    
    // Call toggleNavbarMethod(); when window is resized.
    $(window).smartresize(function(){
        toggleNavbarMethod();
    });
    
    
    /*-------------------------------------------------------------------*/
    /*  7. Prevent bootstrap dropdown closing when clicked.
    /*-------------------------------------------------------------------*/
    $('.dropdown-menu').click(function(e){
        e.stopPropagation();
    });
	});
 
}());