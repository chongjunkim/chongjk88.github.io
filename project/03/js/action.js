$(function(){
	nav();
	visual_banner();
	content1();
	back();
	email();
	sns();
	map();
	bottomNav();
});



function nav(){
	
	var animateLock = 0; 
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		
		if(top>70){
			if(animateLock == 0 ) {
				animateLock = 1;
				$("#nav").stop().animate({opacity : 0}, 200).animate({left : "-200px"}, 500);
				$("#nav").css("width" , "120px");
				$("#nav .img img").css("opacity" , "0").css("right" , "150px");
				$("#header h1 img").animate({top : "-120px"}, 300);
			}
			
		}else{
			if (animateLock == 1) {
				animateLock = 0;
				
				setTimeout(function(){$("#nav").stop().animate({opacity : 1}, 300);},100);
				$("#nav").stop().animate({left : "70px"}, 10);
				$("#header h1 img").animate({top : "30px"}, 300, "easeOutQuint");
			}
		}
	});
	
	
	
	$("#nav .img img").css("opacity" , "0").css("right" , "150px");
	$("#gnb .m ul li").click(function(){
		$("#nav").animate({"width" : "1000px"}, 400, "easeOutQuint");
		$("#nav .img img").css("right" , "50px");
		setTimeout(function(){$("#nav .img img").stop().animate({opacity : 1}, 300);},150);
	});
	
	$("#nav").mouseleave(function(){
	 	$("#nav").animate({"width" : "120px"}, 400, "easeOutQuint");
	 	$("#nav .img img").stop().animate({opacity : 0}, 100);
	 	$("#nav .img img").css("right" , "150px");
	 	
	});


//	$('.menu1').mouseover(function () {
//		$("#preview").attr("src", "images/menu1.png");
//	});
//	$('.menu2').mouseover(function () {
//		$("#preview").attr("src", "images/menu2.png");
//	});
//	$('.menu3').mouseover(function () {
//		$("#preview").attr("src", "images/menu3.png");
//	});
//	$('.menu4').mouseover(function () {
//		$("#preview").attr("src", "images/menu4.png");
//	});
//	$('.menu5').mouseover(function () {
//		$("#preview").attr("src", "images/menu5.png");
//	});
//	$('.menu6').mouseover(function () {
//		$("#preview").attr("src", "images/menu6.png");
//	});
//	
//	$('.story1').mouseover(function () {
//		$("#preview").attr("src", "images/story1.jpg");
//	});
//	$('.story2').mouseover(function () {
//		$("#preview").attr("src", "images/story2.jpg");
//	});
//	$('.story3').mouseover(function () {
//		$("#preview").attr("src", "images/story3.jpg");
//	});
//	
//	$('.career1').mouseover(function () {
//		$("#preview").attr("src", "images/career1.jpg");
//	});
//	$('.career2').mouseover(function () {
//		$("#preview").attr("src", "images/career2.jpg");
//	});
//	$('.career3').mouseover(function () {
//		$("#preview").attr("src", "images/career3.jpg");
//	});
//	
//	$('.service1').mouseover(function () {
//		$("#preview").attr("src", "images/service1.jpg");
//	});
//	$('.service2').mouseover(function () {
//		$("#preview").attr("src", "images/service2.jpg");
//	});
//	$('.service3').mouseover(function () {
//		$("#preview").attr("src", "images/service3.jpg");
//	});
//	
//	$('.location1').mouseover(function () {
//		$("#preview").attr("src", "images/location1.jpg");
//	});
//	$('.location2').mouseover(function () {
//		$("#preview").attr("src", "images/location2.jpg");
//	});



	$('#gnb .m ul').mouseleave(function () {
		$('#preview').attr("src" , "images/menumain.png");
	});

	
	
	
	
	
	$(".login").css("top" , "-350px");
	$(".login01 , .login02 , .login03 , .login04 , .login05 , .closelogin").css("opacity" , "0");
	$(".loginB").click(function(){
		$(".login").stop().animate({"top" : "30px"}, 600, "easeOutQuint");
		setTimeout(function(){$(".login01 , .login02 , .login03 , .login04 , .login05 , .closelogin").stop().animate({opacity : 1}, 400);},100);
	});
	$(".closelogin").click(function(){
		$(".login").stop().animate({"top" : "-350px"}, 500);
	 	$(".login01 , .login02 , .login03 , .login04 , .login05 , .closelogin").stop().animate({opacity : 0}, 100);
	});
	
	
	var cnt=0, delay=4000, timerID=0;
	timerID=setInterval(make, delay);
	
	$('.login , .loginB').hover(function(){
		clearInterval(timerID);
	});
	$(".loginB").mouseleave(function(){
		timerID=setInterval(make, delay);
	});
	
	function make(){
		$(".login").stop().animate({"top" : "-350px"}, 500);
	 	$(".login01 , .login02 , .login03 , .login04 , .login05 , .closelogin").stop().animate({opacity : 0}, 100);
	}
	
	$("#headerwrap").mouseleave(function(){
		$(".login").stop().animate({"top" : "-350px"}, 500);
	 	$(".login01 , .login02 , .login03 , .login04 , .login05 , .closelogin").stop().animate({opacity : 0}, 100);
	});
	
}


function visual_banner(){
	$('.link a').click(function(){
		$('html, body').animate({
			scrollTop: $("#content1").offset().top
		}, 800, "easeInOutQuart");
		
		return false;
	});
}


function content1(){
	$(".bg, .cpop").hide();
	$(".cpop a , .bg").click(function(){
		$(".bg, .cpop").fadeOut(400);
		$("html").css({ overflow : '' });
		$("#content , #header , #visualwrap , #bottomM").css("overflow-y" , "hidden");
		$("#bottomM").stop().animate({opacity : 1}, 100);
		
		setTimeout(function(){$(".load").show();},200);
		$("#summer").attr("src","");
	});
	
	$("#content1 .cimg li:eq(0)").click(function(){
		$(".bg, .c1010").fadeIn(400);
		$("html").css( "overflow" , 'hidden' );
		$("#content , #header , #visualwrap , #bottomM").css("overflow-y" , "scroll");
		$("#bottomM").stop().animate({opacity : 0}, 100);
		$("html, body").animate({
			scrollTop: $("#content1").offset().top
		}, 800, "easeInOutQuart");
		
	return false;
	});
	$("#content1 .cimg li:eq(1)").click(function(){
		$(".bg, .c1020").fadeIn(400);
		$("html").css( "overflow" , 'hidden' );
		$("#content , #header , #visualwrap , #bottomM").css("overflow-y" , "scroll");
		$("#bottomM").stop().animate({opacity : 0}, 100);
		$("html, body").animate({
			scrollTop: $("#content1").offset().top
		}, 800, "easeInOutQuart");
		
	return false;
	});
	$("#content1 .cimg li:eq(2)").click(function(){
		$(".bg, .c1030").fadeIn(400);
		$("html").css( "overflow" , 'hidden' );
		$("#content , #header , #visualwrap , #bottomM").css("overflow-y" , "scroll");
		$("#bottomM").stop().animate({opacity : 0}, 100);
		$("html, body").animate({
			scrollTop: $("#content1").offset().top
		}, 800, "easeInOutQuart");
		
	return false;
	});
	$("#content1 .cimg li:eq(3)").click(function(){
		$(".bg, .c1040").fadeIn(400);
		$("html").css( "overflow" , 'hidden' );
		$("#content , #header , #visualwrap , #bottomM").css("overflow-y" , "scroll");
		$("#bottomM").stop().animate({opacity : 0}, 100);
		$("html, body").animate({
			scrollTop: $("#content1").offset().top
		}, 800, "easeInOutQuart");
		
	return false;
	});


	$("#content2 h2 a").click(function(){
		setTimeout(function(){$(".load").stop().animate({opacity : "hide"}, 500);},400);
		
		
		$(".bg, .c201").fadeIn(400);
		$("html").css( "overflow" , 'hidden' );
		$("#content , #header , #visualwrap , #bottomM").css("overflow-y" , "scroll");
		$("#bottomM").stop().animate({opacity : 0}, 100);
		$("html, body").animate({
			scrollTop: $("#content2").offset().top
		}, 800, "easeInOutQuart");
		
		
		setTimeout(function(){$("#summer").attr("src","https://www.youtube.com/embed/gIwfBUkYrG8");},500);
		
		
	return false;
	});
	
	
}



function back(){
	$('#bottomM').hide();
	$(window).scroll( function(){
		var top  = $(window).scrollTop();
		if( top > 100 ){
		$("#bottomM").animate({opacity:"show"}, 200);
		} else {
		$("#bottomM").animate({opacity:"hide"}, 200);
		}

        
        if(  top > 600){
        	  $('#bottomM .shortcut li a').removeClass('on');  	
        	  $('#bottomM .shortcut li:eq(0) a').addClass('on');
        }
        if(  top > 1200 ){
        	  $('#bottomM .shortcut li a').removeClass('on');
        	  $('#bottomM .shortcut li:eq(1) a').addClass('on');
        }
        if(  top > 1900 ){
        	  $('#bottomM .shortcut li a').removeClass('on');
        	  $('#bottomM .shortcut li:eq(2) a').addClass('on');
        }
        if(  top > 2600 ){
        	  $('#bottomM .shortcut li a').removeClass('on');
        	  $('#bottomM .shortcut li:eq(3) a').addClass('on');
        }
        if(  top > 3300 ){
        	  $('#bottomM .shortcut li a').removeClass('on');
        	  $('#bottomM .shortcut li:eq(4) a').addClass('on');
        }
		if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
        	$('#footerwrap').stop().animate({opacity:1}, 100);
        	$('#hider').stop().animate({opacity:1}, 100);
        	$('#footerwrap').css("z-index" , "100");
        	$('#hider').css("z-index" , "1003");
        } else {
        	$('#footerwrap').stop().animate({opacity:0}, 100);
			$('#hider').stop().animate({opacity:0}, 100);
        	$('#footerwrap').css("z-index" , "50");
			$('#hider').css("z-index" , "50");
		}
		
	});
	
}


function email(){
	$(".imin").click(function(){
		alert("Thank you for joining McClub!!");
	});
}


function sns(){
	$(".cover").click(function(){
		$(this).animate({opacity:"hide"}, 200);
	});
}


function map(){
	$(window).on("scroll", function(){
		var top = $(window).scrollTop();
		var ty = top * -0.2 -360;
		$(".c5").css("backgroundPosition", "0"+ty+"px");
	});
	
	$(".findnow").click(function(){
		alert("We couldn't find any stores near you.. :(");
	});
}


function bottomNav(){
	
	var cnt = 0;
	var top = 0;
	
	
	$('.shortcut li:eq(0) a').click(function(){
		$('html, body').animate({
			scrollTop: $("#content1").offset().top
		}, 800, "easeInOutQuart");
		
		return false;
	});
	$('.shortcut li:eq(1) a').click(function(){
		$('html, body').animate({
			scrollTop: $("#content2").offset().top
		}, 800, "easeInOutQuart");
		
		return false;
	});
	$('.shortcut li:eq(2) a').click(function(){
		$('html, body').animate({
			scrollTop: $("#content3").offset().top
		}, 800, "easeInOutQuart");
		
		return false;
	});
	$('.shortcut li:eq(3) a').click(function(){
		$('html, body').animate({
			scrollTop: $("#content4").offset().top
		}, 800, "easeInOutQuart");
		
		return false;
	});
	$('.shortcut li:eq(4) a').click(function(){
		$('html, body').animate({
			scrollTop: $("#content5").offset().top
		}, 800, "easeInOutQuart");
		
		return false;
	});
	
	$('.back a').click(function(){

		$('html,body').animate({
		scrollTop:top
		},2000, "easeInOutQuart");
		
		return false;
	});
	
}
