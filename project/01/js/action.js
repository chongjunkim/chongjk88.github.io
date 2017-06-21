/*global $, jQuery, navBar, navBarRotate, heroHover, init, videoMute, visualBanner, backToTop*/

$(function () {
    'use strict';
    navBar();
    navBarRotate();
    heroHover();
    init();
	videoMute();
    visualBanner();
    backToTop();
});

function preload(arrayOfImages) {
    'use strict';
    $(arrayOfImages).each(function () {
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    'img/heroBG_hover.jpg',
    'img/character1-2.png',
    'img/character2-2.png',
    'img/character3-2.png',
    'img/character4-2.png'
]);


function navBar() {
    'use strict';
    
    $('#subNav ul li').hide();
    $('#navBar').addClass('open');
    
    $('#navBar').click(function () {
        if ($('#navBar').hasClass('open')) {
            $('#subNav ul li').stop().fadeIn(400);
            $('#navBar').removeClass('open');
        } else {
            $('#navBar').addClass('open');
            $('#subNav ul li').stop().fadeOut(400);
        }
    });
    
    
    $('#nav').mouseleave(function () {
        setTimeout(function () {
            $('#subNav ul li').each(function (index) {
                $(this).fadeOut(300);
            });
        }, 400);
        $('#navBar').addClass('open');
    });
    
    $('#hero, #visualwrap, #container, #footer').click(function () {
        setTimeout(function () {
            $('#subNav ul li').each(function (index) {
                $(this).fadeOut(300);
            });
        }, 400);
        $('#navBar').addClass('open');
    });
}

function navBarRotate() {
    'use strict';
    

}

function heroHover() {
    'use strict';
    $('#heroTxtWrap a').mouseover(function () {
        $('#hero').css({
            'background-image': 'url(img/heroBG_hover.jpg)'
        });
    });
    $('#heroTxtWrap a').mouseleave(function () {
        $('#hero').css({
            'background-image': 'url(img/heroBG.jpg)'
        });
    });
}


function init() {
    'use strict';
	$('.loading').hide();
	
	$('.visualvid').on('loadstart', function (event) {
		$('.loading').fadeIn();
	});
	$('.visualvid').on('canplay', function (event) {
		$('.loading').fadeOut();
	});
}

function videoMute() {
    'use strict';
	$('video').prop('muted', true);
	$('.mute').text('sound off').append('<img width="15" src="img/sound_mute.png">');
	
	$('.mute').click(function () {
	    if ($('video').prop('muted')) {
			$('video').prop('muted', false);
	        $('.mute').text('sound on').append('<img width="15" style="padding-top: 2px; margin-left: 5.8px; " src="img/sound_high.png">');
	    } else {
            $('video').prop('muted', true);
            $('.mute').text('sound off').append('<img width="15" src="img/sound_mute.png">');
	    }
	});
}

function visualBanner() {
    'use strict';
	$('#heroTxtWrap a').click(function () {
		$('html, body').animate({
			scrollTop: $('#visualwrap').offset().top
		}, 1500, 'easeInOutQuart');
		
		return false;
	});
}

function backToTop() {
    'use strict';
    
	var top = 0,
        animateLock = 0;
    
	$('.back a').click(function () {

		$('html,body').animate({
            scrollTop : top
		}, 2000, 'easeInOutQuart');
		
		return false;
	});

	$('.back').animate({opacity : 0}, 0);
    
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		
        
        
		if (top > 70) {
			if (animateLock === 0) {
				animateLock = 1;
				$('.back').animate({opacity : 1}, 1000, 'easeInOutQuart');
				$('#nav').css('width', '120px');
				$('#nav .img img').css('opacity', '0').css('right', '150px');
				$('#header h1 img').animate({top : '-120px'}, 300);
			}
			
		} else {
			if (animateLock === 1) {
				animateLock = 0;
				
				$('.back').animate({opacity : 0}, 500, 'easeInOutQuart');
			}
		}
	});
    
}