"use strict";

$(window).scroll(function() { 
	var headerHeight = $('.header__navbar').outerHeight();
	if ($(window).scrollTop() > 120) {
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

if ( $( window ).width() < 590) {
	for ( var i = 3; i < 9; i++ )  {
		$('.problem__icons-elem').eq(i).hide();
	}
	$('.problem__js').click( function(e) {
		$('.problem__icons-elem').show(200);
		$(this).css('display', 'none');
	});
}