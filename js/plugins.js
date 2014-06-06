/*  CONTACT FORM VALIDATE
==================================================== */
	$(window).load(function(){
		$("#contact").validate();
	});

/*  SMOOTH SCROLL
==================================================== */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1800);
            return false;
			}
		}
	});


/*  EASYPIECHART
==================================================== */
	// $(function() {
	// 	$('.chart').easyPieChart({
	// 		easing: ' easeOutSine',
	// 		onStep: function(from, to, percent) {
	// 			$(this.el).find('.percent').text(Math.round(percent));
	// 		}
	// 	});
	// });

/*  NAVIGATION
==================================================== */
	$(document).ready(function() {
		$('#nav').onePageNav({
			begin: function() {
				console.log('start')
			},
			end: function() {
				console.log('stop')
			}
		});
	});

