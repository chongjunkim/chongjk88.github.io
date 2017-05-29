$(function(){
	$("#sidebar .sidenav .s ul").hide();
	$("#sidebar .sidenav li:eq(2) a").addClass("sideon");
	$("#sidebar .sidenav .s ul").eq(2).show();
	
	$("#sidebar .sidenav>.s>a").click(function(){
		$("#sidebar .sidenav .s a").removeClass("sideon");
		
		$("#sidebar .sidenav .s:eq(0) ul").stop().slideUp();
		$("#sidebar .sidenav .s:eq(1) ul").stop().slideUp();
		$("#sidebar .sidenav .s:eq(3) ul").stop().slideUp();
		$("#sidebar .sidenav .s:eq(4) ul").stop().slideUp();
		
		$(this).addClass("sideon").next().slideDown();
	});
	
	var delay=2000, timerID=0;
	timerID=setInterval(make, delay);
	
	$("#sidebar .sidenav > .s").mouseover(function(){
		clearInterval(timerID);
	});
	$("#sidebar .sidenav > .s").mouseleave(function(){
		timerID=setInterval(make, delay);
	});
	
	function make(){
		$("#sidebar .sidenav .s:eq(0) ul").stop().slideUp();
		$("#sidebar .sidenav .s:eq(1) ul").stop().slideUp();
		$("#sidebar .sidenav .s:eq(3) ul").stop().slideUp();
		$("#sidebar .sidenav .s:eq(4) ul").stop().slideUp();
	}
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>110){
			$('#submenu').addClass('subon');
		}else{
			$('#submenu').removeClass('subon');
		}
		if(top>4050){
			$("#sidebar .sidenav .s ul").hide();
		}else{
			$("#sidebar .sidenav .s ul").eq(2).slideDown();
		}
	});
	
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		
		$(".submain").css("top", -top*0);
		$("#pageimg").css("top", -top*0.5);
	});
	
	$(".submain .next").on("click", function(){
		var target = $(this).attr("href");
		var pos = $(target).position().top+140;
		$("html, body").animate({scrollTop : pos}, 1500);
		return false;
	});
	
	var cnt = 0;
	var top = 0;
	
	$('.top').click(function(){
		top = $('#subcontainer').position().top;
		
		$('html,body').animate({
			scrollTop:top
		}, 1000);
		return false; 
	});
});