$(function() {

	/* Fixed Header 
	-------------------------------------*/

	var header = $("header"), 
		introH = $("#intro").innerHeight(), 
		scrollOffset = $(window);

	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if ( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	/* Smoth Scroll 
	-------------------------------------*/

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");
		
		$("html, body").animate({
			scrollTop: blockOffset
		}, 700);
	});


	/* Menu Nav Toogle 
	-------------------------------------*/


	$("#nav_toogle").on("click", function(event){
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


	/* Collapse 
	-------------------------------------*/


	$("[data-collapse]").on("click", function(event) {
		var $this = $(this),
			blockId = $this.data('collapse');

		/* $this.toggleClass("active"); */

		$(blockId).slideToggle();
	});


	/* Slider 
	-------------------------------------*/


	$("[data-slider]").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});