jQuery(document).ready(function($) {


    //testmonial slider
    $('.testmonial_slider').flexslider({
        animation: "fade",
        controlsContainer: " ",
        pauseOnHover: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        easing: "swing",
        direction: "horizontal",
        controlNav: true,
        directionNav: false,
        smoothHeight: true,
        startAt: 0,
        slideshow: true
    });

    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: false,
        slideshowSpeed: 2000
    });

});