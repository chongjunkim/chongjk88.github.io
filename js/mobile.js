/*global $, jQuery, project*/

$(function () {
    'use strict';
	project();
});



function project() {
    'use strict';
	$(".m_site2").hide();
	$(".m_site3").hide();
	$(".m_steps1").addClass("on");
	
	$(".m_site1").on("swipeleft", function () {
		$(".m_site1").fadeOut();
		setTimeout(function () {
			$(".m_site2").fadeIn(1000);
		}, 100);
		
		$(".m_steps0").removeClass("on");
		$(".m_steps2").addClass("on");
	});
	$(".m_site2").on("swipeleft", function () {
		$(".m_site2").fadeOut();
		setTimeout(function () {
			$(".m_site3").fadeIn(1000);
		}, 100);
		
		$(".m_steps0").removeClass("on");
		$(".m_steps3").addClass("on");
	});
	$(".m_site2").on("swiperight", function () {
		$(".m_site2").fadeOut();
		setTimeout(function () {
			$(".m_site1").fadeIn(1000);
		}, 100);
		
		$(".m_steps0").removeClass("on");
		$(".m_steps1").addClass("on");
	});
	$(".m_site3").on("swiperight", function () {
		$(".m_site3").fadeOut();
		setTimeout(function () {
			$(".m_site2").fadeIn(1000);
		}, 100);
		
		$(".m_steps0").removeClass("on");
		$(".m_steps2").addClass("on");
	});
	
	$(".m_steps1").click(function () {
		$(".m_site2").fadeOut();
		$(".m_site3").fadeOut();
		setTimeout(function () {
			$(".m_site1").fadeIn(1000);
		}, 100);
		
		$(".m_steps0").removeClass("on");
		$(".m_steps1").addClass("on");
	});
	$(".m_steps2").click(function () {
		$(".m_site1").fadeOut();
		$(".m_site3").fadeOut();
		setTimeout(function () {
			$(".m_site2").fadeIn(1000);
		}, 100);
		
		$(".m_steps0").removeClass("on");
		$(".m_steps2").addClass("on");
	});
	$(".m_steps3").click(function () {
		$(".m_site2").fadeOut();
		$(".m_site1").fadeOut();
		setTimeout(function () {
			$(".m_site3").fadeIn(1000);
		}, 100);
		
		$(".m_steps0").removeClass("on");
		$(".m_steps3").addClass("on");
	});
}