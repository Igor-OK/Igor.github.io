$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
		$('.logo-bottom').addClass('span-nav-collapse');

	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
		$('.logo-bottom').removeClass('span-nav-collapse');
	}
});

$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
event.preventDefault();
$(this).ekkoLightbox();
});