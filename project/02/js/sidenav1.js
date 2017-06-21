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
		if(top>950){
			$("#sidebar .sidenav .s ul").hide();
		}else{
			$("#sidebar .sidenav .s ul").eq(2).slideDown();
		}
	});
});