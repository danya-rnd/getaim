"use strict";

$(window).scroll(function() { 
	var headerHeight = $('.header__navbar').outerHeight();
	if ($(window).scrollTop() > 0) {
		$('.header__navbar').css({ 
			position: "fixed", 
			top: 0,
			'border-bottom': '2px solid #eee'
		}); 
		$('.header__banner').css('margin-top', headerHeight);
	} else {
		$('.header__navbar').css({ 
			position: "relative", 
		}); 
		$('.header__banner').css('margin-top', 0);
	}
});

$(".scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#bottom-form").offset().top
    }, 500);
});

$(".modal__overlay").click(function() {
	$('.modal').removeClass('active');
});

if ( $( window ).width() < 590) {
	for ( var i = 3; i < 9; i++ )  {
		$('.problem__icons-elem').eq(i).hide();
	}
	$('.problem__js').click( function(e) {
		$('.problem__icons-elem').show(200);
		$(this).css('display', 'none');
	});
}
$(document).ready(function() {
	var img = document.querySelector('.technologie__image');
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	}
});