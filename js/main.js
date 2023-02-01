jQuery(function ($) {

    'use strict';
	
	// ----------------------------------------------
    // Table of index
    // ----------------------------------------------

    /*-----------------------------------------------
    # Mobile Toggle Control
    # Menu add class
    # Menu Scrolling
	# Slider images Source
    # Parallax Scrolling
    # Magnific Popup
    -------------------------------------------------*/
	
	/*==============================================================*/
	//Mobile Toggle Control
	/*==============================================================*/
	 $(function(){ 
		 var navMain = $("#main-menu");
		 navMain.on("click", "a", null, function () {
			 navMain.collapse('hide');
		 });
	 });
		
	// ----------------------------------------------
    // Menu Scrolling
    // ----------------------------------------------
	$('#navigation .navbar-nav').onePageNav({
		currentClass: 'active',
		filter: ':not(.exclude)',
	});
	
	// ----------------------------------------------
    // Slider images Source
    // ----------------------------------------------
	(function () {
		$('#slider-section').vegas({
			slides: [
				{ src: 'dist/images/slider/slider1.jpg' },
				{ src: 'dist/images/slider/slider2.jpg' },
				{ src: 'dist/images/slider/slider3.jpg' },
                                { src: 'dist/images/slider/slider4.jpg' },
                                { src: 'dist/images/slider/slider5.jpg' },
			]
		});
	}());
	
	// ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------
	
	(function () {
		function parallaxInit() {				
			$("#donations").parallax("50%", 0.3);
			$("#word-for-humanity").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());
	
		
	// ----------------------------------------------
    // Magnific Popup
    // ----------------------------------------------
	
	(function () {
		$('#photo-gallery .image-link').magnificPopup({
			gallery: {
			  enabled: true
			},
			type: 'image' 
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());
	
	
	
});

