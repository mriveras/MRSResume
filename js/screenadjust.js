$(document).ready(function() {
	var windowHeight = $(window).innerHeight();
		$('.home-background').css('min-height', windowHeight);
		$('.home').css('height',windowHeight);
		$('.about-me').css('height',windowHeight);
		$('#resume').css('height',windowHeight);
		$('#contact').css('height',windowHeight);

	var $win = $(window);
		$('.home-background .bulb-light').css('left',(($win.width())/2)-($('.home-background .bulb-light').width()/2));

	// var myworkSeparatorHeight = $('#my-work').css('height');
	// 	$('#my-work .separator').css('height',myworkSeparatorHeight);
});

function autoresize() {
	var windowHeight = $(window).innerHeight();
	
		$('.home').css('height',windowHeight);
		$('.home-background').css('min-height',windowHeight);
		$('.about-me').css('height',windowHeight);
		$('#resume').css('height',windowHeight);
		$('#contact').css('height',windowHeight);
		
	var $win = $(window);
		$('.home-background .bulb-light').css('left',(($win.width())/2)-($('.home-background .bulb-light').width()/2));

	// var myworkSeparatorHeight = $('#my-work').css('height');
	// 	$('#my-work .separator').css('height',myworkSeparatorHeight);
}