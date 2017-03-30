;(function($) {
	"use strict";


	$('.ba-slider').slick({

		arrows: false,
  		dots: true

	});

	var body = document.body,
	btn = body.querySelector('.ba-toggle'),
	openClose1 = body.querySelector('.ba-open-close-1'),
	openClose2 = body.querySelector('.ba-open-close-2');

	btn.onclick = function(){
		openClose1.classList.toggle('ba-menu-close');
		openClose2.classList.toggle('ba-menu-close');
	};



})(jQuery);

