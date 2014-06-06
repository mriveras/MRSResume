var filepath = 'resumes/';
var d = new Date();
var year = d.getFullYear(); 
var hasScroll = false;
var win = $(window);

$('#copyright .year').html('&#169 '+year);

function turnLightOff(){
	event.preventDefault();
	$('.turnlight img').attr('src','images/bulb_light_off.png');
	$('body').css('background','rgb(20,20,20)');
	$('#home').switchClass('home_on','home_off',400);
	$('#flying .flying').switchClass('flying_on','flying_off');
	$('#nav').switchClass('nav_on','nav_off',400);
	$('#about-me').switchClass('about-me_on','about-me_off',400);
	$('#resume').switchClass('resume_on','resume_off',400);
	$('#contact').switchClass('contact_on','contact_off',400);
	$('.contact_on figure img').attr('src','images/envelop_off.png');


	$('.turnlight').attr('turn','off');
}

function turnLightOn(){
	event.preventDefault();
	$('.turnlight img').attr('src','images/bulb_light_on.png');
	$('body').css('background','rgb(40,40,40)');
	$('#home').switchClass('home_off','home_on',400);
	$('#flying .flying').switchClass('flying_off','flying_on');
	$('#nav').switchClass('nav_off','nav_on',400);
	$('#about-me').switchClass('about-me_off','about-me_on',400);
	$('#resume').switchClass('resume_off','resume_on',400);
	$('#contact').switchClass('contact_off','contact_on',400);
	$('.contact_off figure img').attr('src','images/envelop_on.png');
	
	


	$('.turnlight').attr('turn','on');
}

function checkScroll_TitleName(scrollTopVal){
	if (scrollTopVal>65) {
		// console.log('1-1');
		if($('#home .titleName').hasClass('fadeInDown animated')){
			$('#home .titleName').removeClass('fadeInDown animated');
			$('#home .titleName').addClass('fadeOutUp animated');
			$('#flying').removeClass('fadeOutUp animated hideElement');
			$('#flying').addClass('fadeInDown animated');

			$('#home .titleName').removeClass('fadeInDown animated');
			$('#home .titleName').addClass('fadeOutUp animated');
			$('#flying').removeClass('fadeOutUp animated hideElement');
			$('#flying').addClass('fadeInDown animated');
		}else{
			setTimeout(function(){
				// console.log('entro 65-1');
				$('#flying').removeClass('hideElement');
				$('#flying').addClass('fadeInDown animated');
			},500);
		}
				
	}else{
		console.log('1-2');
		if($('#flying').hasClass('fadeInDown animated')){
			$('#home .titleName').removeClass('fadeOutUp animated');
			$('#home .titleName').addClass('fadeInDown animated');

			$('#flying').removeClass('fadeInDown animated hideElement');
			$('#flying').addClass('fadeOutUp animated');
		}else{
			if($('#home .titleName').hasClass('hideElement')){
				setTimeout(function(){
					// console.log('entro 65-2');
					$('#home .titleName').addClass('fadeInDown animated');
					$('#home .titleName').removeClass('hideElement');
				},500);
			}
		}
			
	}
}

function scrollCheck_Position(scrollTopVal){
	if (scrollTopVal>120) {
		// console.log('2-1');
		$('#home .position').removeClass('fadeInDown animated');
		$('#home .position').addClass('fadeOutUp animated');
		$('#flying .flying h3').removeClass('fadeOutUp animated hideElement');
		$('#flying .flying h3').addClass('fadeInDown animated');
	}else if (scrollTopVal>65) {
		// console.log('2-2');
		if($('#flying .flying h3').hasClass('fadeInDown animated')){
			$('#flying .flying h3').removeClass('fadeInDown animated');
			$('#flying .flying h3').addClass('fadeOutUp animated');
			$('#home .position').removeClass('fadeOutUp animated');
			$('#home .position').addClass('fadeInDown animated');
		}else{
			setTimeout(function(){
				// console.log('entro 120-1');
				$('#home .position').removeClass('hideElement');
				$('#home .position').addClass('fadeInDown animated');
			},750);
		}
	}else{
		// console.log('2-3');
		if($('#home .position').hasClass('fadeOutUp animated')){
			$('#home .position').removeClass('fadeOutUp animated');
			$('#home .position').addClass('fadeInDown animated');
		}else{
			setTimeout(function(){
				// console.log('entro 120-2');
				$('#home .position').addClass('fadeInDown animated');
				$('#home .position').removeClass('hideElement');
			},750);
		}
			
	}
}

function scrollCheck_Bulblight(scrollTopVal){
	if (scrollTopVal>325) {
		// console.log('3-1');
		$('#home .home-background figure').removeClass('bounceIn animated');
		$('#home .home-background figure').addClass('bounceOut animated');
		$('#flying .flying .flying-background figure').removeClass('bounceOut animated');
		$('#flying .flying .flying-background').removeClass('hideElement');
		$('#flying .flying .flying-background figure').addClass('bounceIn animated');
	}else{
		// console.log('3-2');
		if($('#flying .flying .flying-background figure').hasClass('bounceIn animated')){
			$('#flying .flying .flying-background figure').removeClass('bounceIn animated');
			$('#flying .flying .flying-background figure').addClass('bounceOut animated');
		}
		if($('#home .home-background figure').hasClass('bounceOut animated')){
			$('#home .home-background figure').removeClass('bounceOut animated');
			$('#home .home-background figure').addClass('bounceIn animated');
		}else{
			setTimeout(function(){
				// console.log('entro 325-1');
				$('#home .home-background figure').addClass('bounceIn animated')
				$('#home .home-background figure').removeClass('hideElement')
			},1000);
		}
			
	}
}

function turnLight(){
	if($('.turnlight').attr('turn')=="off"){
		turnLightOn();
	}else{
		turnLightOff();
	}
}

function openResumeWD() { 
 	// e.preventDefault();
 	$('#browser-view a').attr('href',filepath + 'MRS_WDResume.pdf')
 	                    .attr('target','_blank');
}

function openResumeDBD() { 
 	// e.preventDefault();
 	$('#run-query a').attr('href',filepath + 'MRS_DBDResume.pdf')
 	                 .attr('target','_blank'); 
}

function openLinkedin() { 
 	// e.preventDefault();
 	$('#linkedin').attr('href','https://www.linkedin.com/in/mriveras')
 	              .attr('target','_blank'); 
}

 function openTwitter() { 
 	// e.preventDefault();
 	$('#twitter').attr('href','https://twitter.com/mriverasenior')
 	             .attr('target','_blank'); 
}

function openGooglePlus() { 
 	// e.preventDefault();
 	$('#googleplus').attr('href','https://plus.google.com/+MauricioRiveraSenior/posts')
 	                .attr('target','_blank'); 
}

function openFacebook() { 
 	// e.preventDefault();
 	$('#facebook').attr('href','https://www.facebook.com/mriverasenior')
 	              .attr('target','_blank'); 
}

function openHTML5() { 
 	// e.preventDefault();
 	$('#html5 a').attr('href','http://www.w3.org/TR/html5/')
                 .attr('target','_blank'); 
}

function openCSS3() { 
 	// e.preventDefault();
 	$('#css3 a').attr('href','http://www.w3.org/Style/CSS/Overview.en.html')
                .attr('target','_blank'); 
}

function descTechIn(data) {
	// debugger;
	$("#tech_desc").html(data); 
}

function descSocialIn(data) {
	// debugger;
	$("#social_desc").html(data); 
}

function descOut(data) {
	data.html("");
}

$(document).ready(function(){
	var actScrollTopVal = $(win).scrollTop();
	checkScroll_TitleName(actScrollTopVal);
	scrollCheck_Position(actScrollTopVal);
	scrollCheck_Bulblight(actScrollTopVal);

	$('#linkedin').hover(function(){
		descSocialIn("LinkedIn");
	},function(){
		descOut($("#social_desc"));
	});

	$('#twitter').hover(function(){
		descSocialIn("Twitter")
	},function(){
		descOut($("#social_desc"));
	});

	$('#googleplus').hover(function(){
		descSocialIn("Google+");
	},function(){
		descOut($("#social_desc"));
	});

	$('#facebook').hover(function(){
		descSocialIn("facebook");
	},function(){
		descOut($("#social_desc"));
	});

	$("#css3").hover(function(){
		descTechIn("CSS3");
	},function(){
		descOut($("#tech_desc"));
	});

	$("#html5").hover(function(){
		descTechIn("HTML5");
	},function(){
		descOut($("#tech_desc"));
	});

	// console.log(win.scrollTop());

	win.scroll(function() {
	    hasScroll = true; 
	});
 
	setInterval(function() {
	    if ( hasScroll ) {
	        hasScroll = false;
	        var actScrollTopVal = $(win).scrollTop();
			console.log('0-0');
			checkScroll_TitleName(actScrollTopVal);
			scrollCheck_Position(actScrollTopVal);
			scrollCheck_Bulblight(actScrollTopVal);
	    }
	}, 300);
	
	$('.turnlight').click(turnLight);
	$('#browser-view').click(openResumeWD);
	$('#run-query').click(openResumeDBD);
	$('#linkedin').click(openLinkedin);
	$('#twitter').click(openTwitter);
	$('#googleplus').click(openGooglePlus);
	$('#facebook').click(openFacebook);
	$('#html5').click(openHTML5);
	$('#css3').click(openCSS3);
});