$(function(){
	cart();
	login();
	gnb();
	visual_banner();
	content_top();
	content_mid();
});


function cart(){
	$("#members_cart").css({opacity : 0});
	$(".closecart").css({opacity : 0});
	$(".topmenu dd:eq(0)").click(function(){
		$("#members_cart").css({opacity : 1});
		
		setTimeout(function(){
			$("#members_cart").css({"z-index" : 150});
		}, 300);
		
		$(".cart").stop().animate({right : "-370px"}, 200);
		
		$(".closecart").animate({opacity : 1}, 500);
	});
	
	
	$(".closecart").click(function(){
		setTimeout(function(){
			$("#members_cart").css({opacity : 0});
		}, 500);
		
		$("#members_cart").css({"z-index" : 40});
		
		$(".wishlist").stop().animate({top : "-200px"}, 100);
		$(".mycart").stop().animate({top : "-200px"}, 100);
		$(".cart").stop().animate({right : "-600px"}, 200);
		
		$(".closecart").animate({opacity : 0}, 500);
	});

	var cnt=0, delay=5000, delay2=1000, timerID=0;
	timerID=setInterval(make, delay);
	timerID2=setInterval(make2, delay2);
	
	$('.cart').hover(function(){
		clearInterval(timerID);
	},function(){
		timerID=setInterval(make, delay);
	});
	
	function make(){
		$(".closecart").trigger("click");
	}
	
	
	$('.cart').hover(function(){
		clearInterval(timerID2);
	});
	$(".cart").mouseleave(function(){
		timerID2=setInterval(make2, delay2);
	});
	
	function make2(){
		$(".wishlist").stop().animate({top : "-200px"}, 100);
		$(".mycart").stop().animate({top : "-200px"}, 100);
		$(".cart1").css({backgroundColor : "#fff"});
		$(".cart2").css({backgroundColor : "#fff"});
	}
	
	
	
	
	$(".cart1").click(function(){
		$(".mycart").stop().animate({top : "60px"}, 300);
		$(".cart1").css({backgroundColor : "#eee"});
		$(".cart2").css({backgroundColor : "#fff"});
		$(".wishlist").stop().animate({top : "-200px"}, 100);
	});
	$(".cart2").click(function(){
		$(".wishlist").stop().animate({top : "60px"}, 300);
		$(".cart2").css({backgroundColor : "#eee"});
		$(".cart1").css({backgroundColor : "#fff"});
		$(".mycart").stop().animate({top : "-200px"}, 100);
	});
}


function login(){
	$(".login").hide();
	$("#close").hide();
	$(".topmenu dd:eq(1)").click(function(){
		
		$(".login , #close").stop().animate({opacity : "show"}, 100);
		
		$(".topmenu dd:eq(1)").stop().animate({backgroundColor : "#00a600"}, 100);
		$(".topmenu dd:eq(1) a").stop().animate({color : "#fff"}, 100);
	});
	$("#close").click(function(){
		
		$(".login").stop().animate({opacity : "hide"}, 100);
		$("#close").stop().animate({opacity : "hide"}, 100);
		
		$(".topmenu dd:eq(1)").stop().animate({backgroundColor : "fff"}, 100);
		$(".topmenu dd:eq(1) a").stop().animate({color : "#333"}, 100);
	});
	
	
	$(".login06 img").hide();
	$(".login05").mouseover(function(){
		$(".login01").stop().animate({opacity : 0}, 300);
		$(".login02").stop().animate({opacity : 0}, 300);
		$(".login03").stop().animate({opacity : 0}, 300);
		$(".login04").stop().animate({opacity : 0}, 300);
		
		$(".login06 img").animate({opacity : "show"}, 100);
		
		$(".login05 a").stop().animate({height : "100px"}, 10);
		$(".login").stop().animate({backgroundColor : "#ffbe00" , height : "320px"}, 200);
		$(".topmenu dd:eq(1)").stop().animate({backgroundColor : "#ffbe00"}, 200);
	});
	$(".login05").mouseleave(function(){
		$(".login01").stop().animate({opacity : 1}, 300);
		$(".login02").stop().animate({opacity : 1}, 300);
		$(".login03").stop().animate({opacity : 1}, 300);
		$(".login04").stop().animate({opacity : 1}, 300);
		
		$(".login06 img").animate({opacity : "hide"}, 100);
		
		$(".login05 a").stop().animate({height : "45px"}, 10);
		$(".login").stop().animate({backgroundColor : "#00a600" , height : "260px"}, 200);
		$(".topmenu dd:eq(1)").stop().animate({backgroundColor : "#00a600"}, 200);
	});
	
	
}

function gnb(){
	$("#nav").hover(function(){
	 	$("#headerwrap").stop().animate({
	 		height :  300
	 	}, 400);
	 });
	 
	 $("#nav").mouseleave(function(){
	 	$("#headerwrap").stop().animate({
	 		height :  110
	 	}, 300);
	 });
}

function visual_banner(){
	$('.imgView').css('overflow','hidden');
	$('.imgView ul').height(2200);
	
	var cnt=0, delay=4000, timerID=0;
	var arrY=[0, 440, 880, 1320, 1760];
	timerID=setInterval(make, delay);
	
	$('.imgList li').click(function(){
		cnt=$(this).index();
		
		make2();
		
		clearInterval(timerID);
		timerID=setInterval(make, delay);
	});
	
	$('.imgView').hover(function(){
		clearInterval(timerID);
	},function(){
		timerID=setInterval(make, delay);
	});
	
	function make(){
		cnt++;
		if(cnt>4){
			$('.imgView ul').css('bottom', '0');
			cnt=1;
		}
		make2();
	}
	
	function make2(){
		$('.imgView ul').stop().animate({bottom:arrY[cnt]}, 500);
		
		$('.imgList li').removeClass('on');
		$('.imgList li').eq(cnt).addClass('on');
		
		if(cnt==4){
			$('.imgList li').removeClass('on');
			$('.imgList li').eq(0).addClass('on');
		}
	}
}


function content_top(){
	$(".more").hide();
	$(".more_m1").click(function(){
		$(".more1").animate({"opacity" : "show"}, 300);
	});
	$(".more_m2").click(function(){
		$(".more2").animate({"opacity" : "show"}, 300);
	});
	$(".more_m3").click(function(){
		$(".more3").animate({"opacity" : "show"}, 300);
	});
	$(".more_m4").click(function(){
		$(".more4").animate({"opacity" : "show"}, 300);
	});
	
	$("#content .content_top dl").mouseleave(function(){
		setTimeout(function(){
			$(".more").animate({"opacity" : "hide"}, 300);
		}, 200);
		
		
	});
}


function content_mid(){
	$("#slidearrow ul li.prev").hide();
	$("#slidearrow ul li.next").click(function(){
		$("#slide ul li").animate({right : 720}, 200);
		$("#slidearrow ul li.prev").animate({"opacity" : "show"}, 300);
		$("#slidearrow ul li.next").animate({"opacity" : "hide"}, 300);
	});
	$("#slidearrow ul li.prev").click(function(){
		$("#slide ul li").animate({right : 0}, 200);
		$("#slidearrow ul li.next").animate({"opacity" : "show"}, 300);
		$("#slidearrow ul li.prev").animate({"opacity" : "hide"}, 300);
	});
}





