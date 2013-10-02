$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallax();
	});
});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#liquid_layer2').css('top',(0 + (scrollPosition * 1.8))+'px' );
	$('#bottle_layer3').css('top'+'px' );
	$('#copy_layer4').css('top',(0 - (scrollPosition * 2))+'px' );
	
}       