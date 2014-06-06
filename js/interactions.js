var filepath = 'resumes/',
	d = new Date(),
	year = d.getFullYear(), 
	hasScroll = false,
	win = $(window),
	win_width = win.width();
	allhtml = $('html, body'),
	copyright_year = $('#copyright .year'),
	turninlight_img = $('.turnlight img'),
	body = $('body'),
	home = $('#home'),
	fliying_flying = $('#flying .flying'),
	nav = $('#nav'),
	aboutme = $('#about-me'),
	resume = $('#resume'),
	contact = $('#contact'),
	contact_on_figure_img = $('.contact_on figure img'),
	contact_off_figure_img = $('.contact_off figure img'),
	turnlight = $('.turnlight'),
	home_titlename = $('#home .titleName'),
	flying = $('#flying'),
	home_position = $('#home .position'),
	flying_flying_h3 = $('#flying .flying h3'),
	homebackground = $('.home-background'),
	home_homebackground_figure = $('#home .home-background figure'),
	flying_flying_flyingbackground_figure = $('#flying .flying .flying-background figure'),
	flying_flying_flyingbackground = $('#flying .flying .flying-background'),
	browserview = $('#browser-view'),
	browserview_a = $('#browser-view a'),
	runquery = $('#run-query'),
	runquery_a = $('#run-query a'),
	linkedin = $('#linkedin'),
	twitter = $('#twitter'),
	googleplus = $('#googleplus'),
	facebook = $('#facebook'),
	html5 = $('#html5'),
	html5_a = $('#html5 a'),
	css3 = $('#css3'),
	css3_a = $('#css3 a'),
	tech_desc = $('#tech_desc'),
	social_desc = $('#social_desc');

function turnLightOff(event){
	event.preventDefault();
	turninlight_img.attr('src','images/bulb_light_off.png');
	body.css('background','rgb(20,20,20)');
	home.switchClass('home_on','home_off',400);
	fliying_flying.switchClass('flying_on','flying_off');
	nav.switchClass('nav_on','nav_off',400);
	aboutme.switchClass('about-me_on','about-me_off',400);
	resume.switchClass('resume_on','resume_off',400);
	contact.switchClass('contact_on','contact_off',400);
	contact_on_figure_img.attr('src','images/envelop_off.png');
	homebackground.css('background','url(images/overlay_off.png) repeat top left');

	turnlight.attr('turn','off');
}

function turnLightOn(event){
	event.preventDefault();
	
	turninlight_img.attr('src','images/bulb_light_on.png');
	body.css('background','rgb(40,40,40)');
	home.switchClass('home_off','home_on',400);
	fliying_flying.switchClass('flying_off','flying_on');
	nav.switchClass('nav_off','nav_on',400);
	aboutme.switchClass('about-me_off','about-me_on',400);
	resume.switchClass('resume_off','resume_on',400);
	contact.switchClass('contact_off','contact_on',400);
	contact_off_figure_img.attr('src','images/envelop_on.png');
	homebackground.css('background','url(images/overlay_on.png) repeat top left');

	turnlight.attr('turn','on');
}

function checkScroll_TitleName(scrollTopVal){
	if (scrollTopVal>home_titlename.offset().top) {
		// console.log('1-1');
		if(home_titlename.hasClass('fadeInDown animated')){
			// console.log('1-1-1');
			home_titlename.removeClass('fadeInDown animated');
			home_titlename.addClass('fadeOutUp animated');
			flying.removeClass('fadeOutUp animated hideElement');
			flying.addClass('fadeInDown animated');

			home_titlename.removeClass('fadeInDown animated');
			home_titlename.addClass('fadeOutUp animated');
			flying.removeClass('fadeOutUp animated hideElement');
			flying.addClass('fadeInDown animated');
		}else{
			// console.log('1-1-2');
			setTimeout(function(){
				flying.removeClass('hideElement');
				flying.addClass('fadeInDown animated');
			},500);
		}
				
	}else{
		console.log('1-2');
		if(flying.hasClass('fadeInDown animated')){
			// console.log('1-2-1');
			home_titlename.removeClass('fadeOutUp animated');
			home_titlename.addClass('fadeInDown animated');
			home_titlename.removeClass('hideElement');

			flying.removeClass('fadeInDown animated hideElement');
			flying.addClass('fadeOutUp animated');
		}else{
			// console.log('1-2-2');
			if(home_titlename.hasClass('hideElement')){
				// console.log('1-2-2-1');
				setTimeout(function(){
					home_titlename.addClass('fadeInDown animated');
					home_titlename.removeClass('hideElement');
				},500);
			}
		}
			
	}
}

function scrollCheck_Position(scrollTopVal){
	if (scrollTopVal>home_position.offset().top) {
		// console.log('2-1');
		home_position.removeClass('fadeInDown animated');
		home_position.addClass('fadeOutUp animated');
		flying_flying_h3.removeClass('fadeOutUp animated hideElement');
		flying_flying_h3.addClass('fadeInDown animated');
	}else if (scrollTopVal>home_titlename.offset().top) {
		// console.log('2-2');
		if(flying_flying_h3.hasClass('fadeInDown animated')){
			console.log('2-2-1');
			flying_flying_h3.removeClass('fadeInDown animated');
			flying_flying_h3.addClass('fadeOutUp animated');
			home_position.removeClass('fadeOutUp animated');
			home_position.removeClass('hideElement');
			home_position.addClass('fadeInDown animated');
		}else{
			// console.log('2-2-2');
			setTimeout(function(){
				home_position.removeClass('hideElement');
				home_position.addClass('fadeInDown animated');
			},750);
		}
	}else{
		// console.log('2-3');
		if(home_position.hasClass('fadeOutUp animated')){
			console.log('2-3-1');
			home_position.removeClass('fadeOutUp animated');
			home_position.addClass('fadeInDown animated');
			home_position.removeClass('hideElement');
		}else{
			// console.log('2-3-2');
			setTimeout(function(){
				home_position.addClass('fadeInDown animated');
				home_position.removeClass('hideElement');
			},750);
		}
			
	}
}

function scrollCheck_Bulblight(scrollTopVal){
	console.log('scroll: ' + scrollTopVal);
	if (scrollTopVal>home_homebackground_figure.offset().top) {
		console.log('3-1');
		home_homebackground_figure.removeClass('fadeInDown animated');
		home_homebackground_figure.addClass('fadeOutUp animated');
		flying_flying_flyingbackground_figure.removeClass('fadeOutUp animated');
		flying_flying_flyingbackground.removeClass('hideElement');
		flying_flying_flyingbackground_figure.addClass('fadeInDown animated');
	}else{
		console.log('3-2');
		if(flying_flying_flyingbackground_figure.hasClass('fadeInDown animated')){
			console.log('3-2-1');
			flying_flying_flyingbackground_figure.removeClass('fadeInDown animated');
			flying_flying_flyingbackground_figure.addClass('fadeOutUp animated');
		}
		if(home_homebackground_figure.hasClass('fadeOutUp animated')){
			console.log('3-2-2');
			home_homebackground_figure.removeClass('fadeOutUp animated');
			home_homebackground_figure.addClass('fadeInDown animated');
		}else{
			console.log('3-2-3');
			setTimeout(function(){
				home_homebackground_figure.addClass('fadeInDown animated')
				home_homebackground_figure.removeClass('hideElement')
			},1000);
		}
			
	}
}

function autoresize() {
	var windowHeight = win.innerHeight();

		home.css('height',windowHeight);
		homebackground.css('min-height',windowHeight);
		aboutme.css('height',windowHeight);
		resume.css('height',windowHeight);
		contact.css('height',windowHeight);
}

function turnLight(event){
	if(turnlight.attr('turn')=="off"){
		turnLightOn(event);
	}else{
		turnLightOff(event);
	}
}

function openResumeWD() { 
 	// e.preventDefault();
 	browserview_a.attr('href',filepath + 'MRS_WDResume.pdf')
 	                    .attr('target','_blank');
}

function openResumeDBD() { 
 	// e.preventDefault();
 	runquery_a.attr('href',filepath + 'MRS_DBDResume.pdf')
 	                 .attr('target','_blank'); 
}

function openLinkedin() { 
 	// e.preventDefault();
 	linkedin.attr('href','https://www.linkedin.com/in/mriveras')
 	              .attr('target','_blank'); 
}

 function openTwitter() { 
 	// e.preventDefault();
 	twitter.attr('href','https://twitter.com/mriverasenior')
 	             .attr('target','_blank'); 
}

function openGooglePlus() { 
 	// e.preventDefault();
 	googleplus.attr('href','https://plus.google.com/+MauricioRiveraSenior/posts')
 	                .attr('target','_blank'); 
}

function openFacebook() { 
 	// e.preventDefault();
 	facebook.attr('href','https://www.facebook.com/mriverasenior')
 	              .attr('target','_blank'); 
}

function openHTML5() { 
 	// e.preventDefault();
 	html5_a.attr('href','http://www.w3.org/TR/html5/')
                 .attr('target','_blank'); 
}

function openCSS3() { 
 	// e.preventDefault();
 	css3_a.attr('href','http://www.w3.org/Style/CSS/Overview.en.html')
                .attr('target','_blank'); 
}

function descTechIn(data) {
	// debugger;
	tech_desc.html(data); 
}

function descSocialIn(data) {
	// debugger;
	social_desc.html(data); 
}

function descOut(data) {
	data.html("");
}

function moveScroll(target) {
	allhtml.animate({
		scrollTop: body.offset().top
	}, 1300);
	return false;
}

$(document).ready(function(){
	var actScrollTopVal = win.scrollTop(),
		windowHeight = win.innerHeight(),
		initarget = $('#home');
	
	homebackground.css('min-height', windowHeight);
	home.css('height',windowHeight);
	aboutme.css('height',windowHeight);
	resume.css('height',windowHeight);
	contact.css('height',windowHeight);

	copyright_year.html('&#169 '+year);

	$(function() {
		$('.chart').easyPieChart({
			easing: 'easeOutQuart',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			},
			barColor: 'rgb(255,203,0)',
			trackColor: 'rgb(192,192,192)',
			scaleColor: false,
			lineWidth: '8',
			size: '100',
			animate: 3000
		});
	});

	linkedin.hover(function(){
		descSocialIn("LinkedIn");
	},function(){
		descOut(social_desc);
	});

	twitter.hover(function(){
		descSocialIn("Twitter")
	},function(){
		descOut(social_desc);
	});

	googleplus.hover(function(){
		descSocialIn("Google+");
	},function(){
		descOut(social_desc);
	});

	facebook.hover(function(){
		descSocialIn("facebook");
	},function(){
		descOut(social_desc);
	});

	css3.hover(function(){
		descTechIn("CSS3");
	},function(){
		descOut(tech_desc);
	});

	html5.hover(function(){
		descTechIn("HTML5");
	},function(){
		descOut(tech_desc);
	});

	win.scroll(function() {
	    hasScroll = true; 
	});
 
	setInterval(function() {
	    if ( hasScroll ) {
	        hasScroll = false;
	        var actScrollTopVal = win.scrollTop();
	        actScrollTopVal = actScrollTopVal - flying.height();
			console.log('actScrollTopVal: ' + actScrollTopVal);
			checkScroll_TitleName(actScrollTopVal);
			scrollCheck_Position(actScrollTopVal);
			scrollCheck_Bulblight(actScrollTopVal);
	    }
	}, 300);

	checkScroll_TitleName(actScrollTopVal);
	scrollCheck_Position(actScrollTopVal);
	scrollCheck_Bulblight(actScrollTopVal);

	//sending the lookup top the initarget, default #home.
	//begins
		// initarget = initarget.length ? initarget : $('[name=home]');
		// if (initarget.length) {
		// 	moveScroll(initarget);
		// }
	//end

	turnlight.click(function(event){
		turnLight(event);
		event.preventDefault();
	});
	browserview.click(openResumeWD);
	runquery.click(openResumeDBD);
	linkedin.click(openLinkedin);
	twitter.click(openTwitter);
	googleplus.click(openGooglePlus);
	facebook.click(openFacebook);
	html5.click(openHTML5);
	css3.click(openCSS3);
});