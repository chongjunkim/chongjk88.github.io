/*global $, jQuery, opn, cls, intro, proj, details, arrows*/

$(function () {
    'use strict';
	opn();
	cls();
	intro();
	proj();
	details();
	arrows();
});

function opn() {
    'use strict';
	$("#sites ul.steps, #stats, #carousel").hide();
	
	var width = $("body").width();
	
	$(".open").click(function () {
		$("#top").stop().animate({top: '0%'}, 1800, "easeOutBounce");
		$("#bottom").stop().animate({bottom: '0%'}, 1800, "easeOutBounce");
		setTimeout(function () {
			$("#sites ul.steps").stop().animate({opacity : "show"}, 1000, "easeOutQuint");
		}, 1800);
		if (width > 1000) {
			$(".summary").hide();
			
			setTimeout(function () {
				$("#stats, #carousel").stop().animate({opacity : "show"}, 800, "easeOutQuint");
				$('.circlestat').empty().circliful();
			}, 1800);
			setTimeout(function () {
				$(".summary").stop().animate({opacity : "show"}, 1500, "easeOutQuint");
			}, 3300);
		} else {
			$("#m_sites").hide();
			
			setTimeout(function () {
				$("#m_sites").stop().animate({opacity : "show"}, 1500, "easeOutQuint");
			}, 100);
		}
		
		return false;
	});
}

function cls() {
    'use strict';
	$(".close").click(function () {
		$("#top").stop().animate({top: "-50%"}, 2000, "easeOutQuint");
		$("#bottom").stop().animate({bottom: "-50%"}, 2000, "easeOutQuint");
		setTimeout(function () {
			$("#sites ul.steps").stop().animate({opacity : "hide"}, 2000, "easeOutQuint");
		}, 500);
		$("#stats, #carousel").stop().animate({opacity : "hide"}, 800, "easeOutQuint");
		$(".summary").stop().animate({opacity : "hide"}, 800, "easeOutQuint");
		
		return false;
	});
}

function intro() {
    'use strict';
	$(".bg, .cl").hide();
	$(".cl a , .bg").click(function () {
		$(".bg, .cl").animate({"opacity" : "hide"}, 400);
	});
	
	$("#intro ul.me li:eq(0)").click(function () {
		$(".bg, .cl").animate({"opacity" : "show"}, 400);
		
        return false;
	});
	
	$(".bg, .re").hide();
	$(".re a , .bg").click(function () {
		$(".bg, .re").animate({"opacity" : "hide"}, 400);
	});
	
	$("#intro ul.me li:eq(1)").click(function () {
		$(".bg, .re").animate({"opacity" : "show"}, 400);
	
        return false;
	});
	
}

function proj() {
    'use strict';
	$("#sites dl dd").css("width", "0").first().css("width", "60%");
	$("#sites dl dt:eq(0) a , #sites ul.steps li:eq(0)").addClass("on");
	
	$("#sites dl dt a").click(function () {
		$(this).addClass("on").parent().next().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dt a").not(this).removeClass("on").parent().next().animate({width: 0, opacity : "hide"}, 1000);
		
		return false;
	});
	
	$("#p1").show();
	$("#p2").hide();
	$("#p3").hide();
	
	$("#sites p.p1_title").show();
	$("#sites p.p2_title").hide();
	$("#sites p.p3_title").hide();
	
	$("#arrow_proj1").show();
	$("#arrow_proj2").hide();
	$("#arrow_proj3").hide();
	
	$("#sites dl dt a:eq(0)").click(function () {
		$("#p1").stop().animate({opacity : "show"}, 500);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites p.p1_title").css("opacity", "show");
		$("#sites p.p2_title").css("opacity", "hide");
		$("#sites p.p3_title").css("opacity", "hide");
		
		$("#arrow_proj1").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "75%");
		$("#sites a.p3_button").css("left", "80%");
		
		return false;
	});
	$("#sites dl dt a:eq(1)").click(function () {

		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "show"}, 500);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites p.p1_title").css("opacity", "hide");
		$("#sites p.p2_title").css("opacity", "show");
		$("#sites p.p3_title").css("opacity", "hide");
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "80%");
		
		return false;
	});
	$("#sites dl dt a:eq(2)").click(function () {

		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "show"}, 500);
		
		$("#sites p.p1_title").css("opacity", "hide");
		$("#sites p.p2_title").css("opacity", "hide");
		$("#sites p.p3_title").css("opacity", "show");
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "show"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "20%");
		
		return false;
	});
	$("#sites dl dt a:eq(3)").click(function () {
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		return false;
	});
	
	$("#sites a.p1_button").click(function () {
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt a:eq(0)").addClass("on");
		
		$("#p1").stop().animate({opacity : "show"}, 500);
		$(".project_img").stop().animate({height : "2300px"}, 200);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		setTimeout(function () {$("#sites p.p1_title").stop().animate({opacity : "show"}, 500, "easeOutQuint"); }, 500);
		$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
		$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		
		$("#arrow_proj1").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "75%");
		$("#sites a.p3_button").css("left", "80%");
		
		$("#sites dl dd.box1").stop().animate({width: "60%", opacity: "show"}, 1000);
		$("#sites dl dd.box2").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps1").addClass("on");
		
		$("#sites_details").animate({scrollTop : 0}, 500);
		
		return false;
	});
	$("#sites a.p2_button").click(function () {
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt a:eq(1)").addClass("on");
		
		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "show"}, 500);
		$(".project_img").stop().animate({height : "3700px"}, 200);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
		setTimeout(function () {$("#sites p.p2_title").stop().animate({opacity : "show"}, 500, "easeOutQuint"); }, 500);
		$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "80%");

		$("#sites dl dd.box2").stop().animate({width: "60%", opacity: "show"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps2").addClass("on");
		
		$("#sites_details").animate({scrollTop : 0}, 500);
		
		return false;
	});
	$("#sites a.p3_button").click(function () {
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt a:eq(2)").addClass("on");
		
		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "show"}, 500);
		$(".project_img").stop().animate({height : "1450px"}, 200);
		
		$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
		$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
		setTimeout(function () {$("#sites p.p3_title").stop().animate({opacity : "show"}, 500, "easeOutQuint"); }, 500);
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "show"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "20%");
		
		$("#sites dl dd.box3").stop().animate({width: "60%", opacity: "show"}, 1000);
		$("#sites dl dd.box2").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps3").addClass("on");
		
		$("#sites_details").animate({scrollTop : 0}, 500);
		
		return false;
	});

	$("#sites ul.steps li.steps1").click(function () {
		$(this).addClass("on");
		
		$("#p1").stop().animate({opacity : "show"}, 500);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		$("#arrow_proj1").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "75%");
		$("#sites a.p3_button").css("left", "80%");
		
		$("#sites dl dd.box1").stop().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box2").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").not(this).removeClass("on");
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt:eq(0) a").addClass("on");

		return false;
	});
	$("#sites ul.steps li.steps2").click(function () {
		$(this).addClass("on");
		
		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "show"}, 500);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "80%");
		
		$("#sites dl dd.box2").stop().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").not(this).removeClass("on");
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt:eq(1) a").addClass("on");

		return false;
	});
	$("#sites ul.steps li.steps3").click(function () {
		$(this).addClass("on");
		
		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "show"}, 500);
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "show"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "20%");
		
		$("#sites dl dd.box3").stop().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box2").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").not(this).removeClass("on");
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt:eq(2) a").addClass("on");

		return false;
	});
	$("#sites ul.steps li.steps4").click(function () {
		$(this).addClass("on");
		
		$("#sites dl dd.box4").addClass("on").animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box2").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites ul.steps li").not(this).removeClass("on");
		$("#sites dl dt a").removeClass("on");

		return false;
	});

	$("#sites dl dt:eq(0) a").click(function () {
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps1").addClass("on");
		
		return false;
	});
	$("#sites dl dt:eq(1) a").click(function () {
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps2").addClass("on");
		
		return false;
	});
	$("#sites dl dt:eq(2) a").click(function () {
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps3").addClass("on");
		
		return false;
	});
	$("#sites dl dt:eq(3) a").click(function () {
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps4").addClass("on");
		
		return false;
	});
}

function details() {
    'use strict';
	$("#sites_details").hide();
	$("#sites a.back").hide();
	$("#sites a.button").hide();
	$("#sites p.title").hide();
	
	$("#sites dl dd ul li a.go_details").click(function () {
		$("#bottom").animate({height: "100%", "padding-bottom" : "280px"}, 1000, "easeInQuart");
		$("#sites_details").animate({"opacity" : "show"}, 400);
		
		setTimeout(function () {$("#sites a.back").animate({"opacity" : "show"}, 500); }, 2000);
		
		$("#sites a.button").show();
		$("#sites dl dt:eq(0)").animate({"padding-top" : "93px"}, 1000);
		$("#sites dl dt:eq(1)").animate({"padding-top" : "93px"}, 1000);
		$("#sites dl dt:eq(2)").animate({"padding-top" : "93px"}, 1000);
		$("#sites dl dt:eq(3)").animate({"opacity" : "hide"}, 1000);
		$("#sites dl dd").animate({"top" : "-100px"}, 1000);
		
		$(".next_proj").stop().animate({top : "510px"}, 1000, "easeInQuart");
		$(".prev_proj").stop().animate({top : "510px"}, 1000, "easeInQuart");
		
		return false;
	});
	
	$("#sites dl dd.box1 ul li a.go_details").click(function () {
		setTimeout(function () {$("#sites .p1_title").animate({"opacity" : "show"}, 500); }, 1000);
		$(".project_img").stop().animate({height : "2300px"}, 200);
		
		return false;
	});
	$("#sites dl dd.box2 ul li a.go_details").click(function () {
		setTimeout(function () {$("#sites .p2_title").animate({"opacity" : "show"}, 500); }, 1000);
		$(".project_img").stop().animate({height : "3700px"}, 200);
		
		return false;
	});
	$("#sites dl dd.box3 ul li a.go_details").click(function () {
		setTimeout(function () {$("#sites .p3_title").animate({"opacity" : "show"}, 500); }, 1000);
		$(".project_img").stop().animate({height : "1450px"}, 200);
		
		return false;
	});
	
	$("#sites a.back").click(function () {
		$("#bottom").animate({height: "51%", "padding-bottom" : 0}, 1000);
		$("#sites_details").animate({"opacity" : "hide"}, 400);
		$("#sites a.back").animate({"opacity" : "hide"}, 400);
		$("#sites p.title").animate({"opacity" : "hide"}, 400);
		$("#sites a.button").hide();
		$("#sites dl dt:eq(0)").animate({"padding-top" : 0}, 1000);
		$("#sites dl dt:eq(1)").animate({"padding-top" : 0}, 1000);
		$("#sites dl dt:eq(2)").animate({"padding-top" : 0}, 1000);
		$("#sites dl dt:eq(3)").animate({"opacity" : "show"}, 1000);
		$("#sites dl dd").animate({"top" : 0}, 1000);
		
		$(".next_proj").stop().animate({top : "160px"}, 1000);
		$(".prev_proj").stop().animate({top : "160px"}, 1000);
		
		return false;
	});
}

function arrows() {
    'use strict';
	$("#arrow_proj2 .prev_proj img").click(function () {
		$("#p1").stop().animate({opacity : "show"}, 500);
		$(".project_img").stop().animate({height : "2300px"}, 200);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		var bottom = $("#bottom").height(),
            percent = $("#bottom").parent().height() * 0.60;
		
		if (bottom > percent) {
			setTimeout(function () {$("#sites p.p1_title").stop().animate({opacity : "show"}, 500, "easeOutQuint"); }, 500);
			$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		} else {
			$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		}
		
		$("#arrow_proj1").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "75%");
		$("#sites a.p3_button").css("left", "80%");
		
		$("#sites dl dd.box1").stop().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box2").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps1").addClass("on");
		
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt:eq(0) a").addClass("on");
		
		$("#sites_details").animate({scrollTop : 0}, 500);

		return false;
	});
	$("#arrow_proj1 .next_proj img").click(function () {
		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "show"}, 500);
		$(".project_img").stop().animate({height : "3700px"}, 200);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		var bottom = $("#bottom").height(),
            percent = $("#bottom").parent().height() * 0.60;
		
		if (bottom > percent) {
			$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
			setTimeout(function () {$("#sites p.p2_title").stop().animate({opacity : "show"}, 500, "easeOutQuint"); }, 500);
			$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		} else {
			$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		}
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "80%");
		
		$("#sites dl dd.box2").stop().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps2").addClass("on");
		
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt:eq(1) a").addClass("on");
		
		$("#sites_details").animate({scrollTop : 0}, 500);

		return false;
	});
	$("#arrow_proj2 .next_proj img").click(function () {
		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "hide"}, 500);
		$("#p3").stop().animate({opacity : "show"}, 500);
		$(".project_img").stop().animate({height : "1450px"}, 200);
		
		var bottom = $("#bottom").height(),
            percent = $("#bottom").parent().height() * 0.60;
		
		if (bottom > percent) {
			$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
			setTimeout(function () {$("#sites p.p3_title").stop().animate({opacity : "show"}, 500, "easeOutQuint"); }, 500);
		} else {
			$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		}
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "show"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "20%");
		
		$("#sites dl dd.box3").stop().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box2").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps3").addClass("on");
		
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt:eq(2) a").addClass("on");
		
		$("#sites_details").animate({scrollTop : 0}, 500);

		return false;
	});
	$("#arrow_proj3 .prev_proj img").click(function () {
		$("#p1").stop().animate({opacity : "hide"}, 500);
		$("#p2").stop().animate({opacity : "show"}, 500);
		$(".project_img").stop().animate({height : "3700px"}, 200);
		$("#p3").stop().animate({opacity : "hide"}, 500);
		
		var bottom = $("#bottom").height(),
            percent = $("#bottom").parent().height() * 0.60;
		
		if (bottom > percent) {
			$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
			setTimeout(function () {$("#sites p.p2_title").stop().animate({opacity : "show"}, 500, "easeOutQuint"); }, 500);
			$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		} else {
			$("#sites p.p1_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p2_title").stop().animate({opacity : "hide"}, 100);
			$("#sites p.p3_title").stop().animate({opacity : "hide"}, 100);
		}
		
		$("#arrow_proj1").stop().animate({opacity : "hide"}, 500);
		$("#arrow_proj2").stop().animate({opacity : "show"}, 500);
		$("#arrow_proj3").stop().animate({opacity : "hide"}, 500);
		
		$("#sites a.p1_button").css("left", "10%");
		$("#sites a.p2_button").css("left", "15%");
		$("#sites a.p3_button").css("left", "80%");
		
		$("#sites dl dd.box2").stop().animate({width: "60%", opacity : "show"}, 1000);
		$("#sites dl dd.box1").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box3").stop().animate({width: 0, opacity : "hide"}, 1000);
		$("#sites dl dd.box4").stop().animate({width: 0, opacity : "hide"}, 1000);
		
		$("#sites ul.steps li").removeClass("on");
		$("#sites ul.steps li.steps2").addClass("on");
		
		$("#sites dl dt a").removeClass("on");
		$("#sites dl dt:eq(1) a").addClass("on");
		
		$("#sites_details").animate({scrollTop : 0}, 500);

		return false;
	});
}