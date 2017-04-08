$(document).ready(function() {
	$.backstretch(
		[
			"img/background1.jpg",
			"img/background2.jpg",
			"img/background3.jpg"
		], {
			fade: 1000
		}
	);

	$('.tooltip').tooltipster( {
		theme: 'tooltipster-punk',
		position: 'bottom'
	});

});
