$(function(){
	$(".category li").mouseover(function(){
		$(".subMenu").stop().animate({
			height : 210
		});
	});
	$("#mmm").mouseleave(function(){
		$(".subMenu").stop().animate({
			height : 0
		});
		$(".category li").removeClass("on");
	});
	
	$(".category li:eq(0) , .subCategory1").mouseover(function(){
		$(".category li").removeClass("on");
		$(".category li:eq(0)").addClass("on");
	});
	$(".category li:eq(1) , .subCategory2").mouseover(function(){
		$(".category li").removeClass("on");
		$(".category li:eq(1)").addClass("on");
	});
	$(".category li:eq(2) , .subCategory3").mouseover(function(){
		$(".category li").removeClass("on");
		$(".category li:eq(2)").addClass("on");
	});
	$(".category li:eq(3) , .subCategory4").mouseover(function(){
		$(".category li").removeClass("on");
		$(".category li:eq(3)").addClass("on");
	});
	$(".category li , .subCategoryList").mouseleave(function(){
		$(".category li").removeClass("on");
	});
	
	
	
	$(".mainPic").mouseover(function(){
		$(this).stop().animate({
			opacity : 0.90
		}, 200);
	});
	$(".mainPic").mouseleave(function(){
		$(this).stop().animate({
			opacity : 1
		}, 200);
	});
	$(".mainInfo").mouseover(function(){
		$(this).prev().stop().animate({
			opacity : 0.85
		}, 200);
	});
	$(".mainInfo").mouseleave(function(){
		$(this).prev().stop().animate({
			opacity : 1
		}, 200);
	});
	
});

