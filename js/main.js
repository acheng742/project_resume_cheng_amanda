$(document).ready(function() {
	$.backstretch(// this plugin adds background images and inifinitely rotates as slideshow
		[
			"img/background1.jpg",
			"img/background2.jpg",
			"img/background3.jpg"
		], {
			fade: 1000
		}
	);

	$('.tooltip').tooltipster( {// this plugin adds a tooltip when hovering over the image
		theme: 'tooltipster-punk',
		position: 'bottom'
	});

});
