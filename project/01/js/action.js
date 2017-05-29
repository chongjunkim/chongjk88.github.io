$(function(){
	init();
	gnb();
	video_mute();
	visual_banner();
	visual_banner0();
	sns();
	tabmenu();
	choose();
	subbottom();
	subpage(); 
});


function init(){
	$(".loading").hide();
	
	$('.visualvid').on('loadstart', function (event) {
		$(".loading").fadeIn();
	});
	$('.visualvid').on('canplay', function (event) {
		$(".loading").fadeOut();
	});
}


function gnb(){
	$("#nav").hide();
	$("#header").css("top", "-260px");
	var animateLock = 0; 
	
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		
		
		if(top>90){
			if(animateLock == 0 ) {
				animateLock = 1;
				$('#header').stop().animate({top : "-365px"}, 300);
				$("#visualwrap").css("padding-top" , "130px");
				$("#menu ul").stop().animate({bottom : "0"}, 100);
				$("#menu ul").mouseover(function(){
				 	$("#header").stop().animate({top : "-105px"}, 500);
				 	$("#menu ul").stop().animate({bottom : "260px"}, 500);
				 	$("#nav").stop().fadeTo("slow", 1);
				});
				 
				 $("#header").mouseleave(function(){
				 	$("#header").stop().animate({top : "-365px"}, 500);
				 	$("#menu ul").stop().animate({bottom : "0"}, 500);
				 	$("#nav").stop().fadeTo("fast", 0);
				});
			}
			
		}else{
			if (animateLock == 1) {
				animateLock = 0;
				$('#header').stop().animate({top : "-260px"}, 10);
				$("#visualwrap").css("padding-top" , "140px");
				$("#menu h1").stop().animate({bottom : "0"}, 100);
				$("#menu ul").stop().animate({bottom : "0"}, 100);
				$("#nav").stop().fadeTo("fast", 0);
				$("#menu ul").mouseover(function(){
				 	$("#header").stop().animate({top : "0"}, 500);
				 	$("#menu h1").stop().animate({bottom : "260px"}, 500);
				 	$("#menu ul").stop().animate({bottom : "260px"}, 500);
				 	$("#nav").stop().fadeTo("slow", 1);
				
				});
				 
				 $("#header").mouseleave(function(){
				 	$("#header").stop().animate({top : "-260px"}, 500);
				 	$("#menu h1").stop().animate({bottom : "0"}, 500);
				 	$("#menu ul").stop().animate({bottom : "0"}, 500);
				 	$("#nav").stop().fadeTo("fast", 0);
				
				});	
			}
			
		}
	});
	
	$("#menu ul").mouseover(function(){
	 	$("#header").stop().animate({top : "0"}, 500);
	 	$("#menu h1").stop().animate({bottom : "260px"}, 500);
	 	$("#menu ul").stop().animate({bottom : "260px"}, 500);
	 	$("#nav").stop().fadeTo("slow", 1);
	
	});
	 
	 $("#header").mouseleave(function(){
	 	$("#header").stop().animate({top : "-260px"}, 500);
	 	$("#menu h1").stop().animate({bottom : "0"}, 500);
	 	$("#menu ul").stop().animate({bottom : "0"}, 500);
	 	$("#nav").stop().fadeTo("fast", 0);
	
	});	
	
	
}


function video_mute(){
	$("video").prop('muted', true);
	$('.mute').text('sound off').append('<img width="15" src="images/visual/sound_mute.png">');
	
	$(".mute").click( function (){
	    if( $("video").prop('muted') ){
			$("video").prop('muted', false);
	        $('.mute').text('sound on').append('<img width="15" style="padding-top: 2px; margin-left: 5.8px; " src="images/visual/sound_high.png">');
	    }else{
	    $("video").prop('muted', true);
	    $('.mute').text('sound off').append('<img width="15" src="images/visual/sound_mute.png">');
	    }
	});
}


function visual_banner(){
$(".conBox div").hide().eq(0).show(); // $(".box2,box3,box4").hide()

var num = 0;

$(".quickmenu li").click(function(){
	num = $(this).index();
	$(".conBox div").hide().eq(num).show();
	$(".quickmenu li").removeClass("visualon");
	$(this).addClass("visualon");
});
}


function visual_banner0(){
	$(".conBox div").hide().eq(0).show();
	
	var timerID = 0 , delay = 3000 , cnt = 0;
	timerID  = setInterval( make, delay );
	
	function make(){
		cnt++;
		
		make2();
	}
	
	function make2(){
		if( cnt == 4 ){
			cnt = 0;
		}
		$(".conBox div").hide().eq(cnt).show();
		$('.quickmenu li').removeClass("visualon");
		$('.quickmenu li').eq(cnt).addClass("visualon");
	}
	
	$('.quickmenu li').click(function(){
		cnt=$(this).index();
		
		make2();
		
		clearInterval(timerID);
	});
	
	$('.quickmenu li').hover(function(){
		clearInterval(timerID);
	},function(){
		timerID=setInterval(make, delay);
	});
}


function sns(){

	$(".blogContent ul").css("overflow","hidden");
	$(".blogUp").click(function(){
		$(".blogContent ul li").animate({top: -350}, 500, "easeOutExpo");
	});
	$(".blogDown").click(function(){
		$(".blogContent ul li").animate({top: 0}, 500, "easeOutExpo");
	});
	
	$(".facebookContent ul").css("overflow","hidden");
	$(".facebookUp").click(function(){
		$(".facebookContent ul li").animate({top: -350}, 500, "easeOutExpo");
	});
	$(".facebookDown").click(function(){
		$(".facebookContent ul li").animate({top: 0}, 500, "easeOutExpo");
	});
	
	$(".twitterContent ul").css("overflow","hidden");
	$(".twitterUp").click(function(){
		$(".twitterContent ul li").animate({top: -350}, 500, "easeOutExpo");
	});
	$(".twitterDown").click(function(){
		$(".twitterContent ul li").animate({top: 0}, 500, "easeOutExpo");
	});
	
	$(".youtubeContent ul").css("overflow","hidden");
	$(".youtubeUp").click(function(){
		$(".youtubeContent ul li").animate({top: -350}, 500, "easeOutExpo");
	});
	$(".youtubeDown").click(function(){
		$(".youtubeContent ul li").animate({top: 0}, 500, "easeOutExpo");
	});
	
}


function tabmenu(){
	var cnt=0;
	$('.tabmenu ul li').click(function(){
		cnt=$(this).index();
		
		$('.tabmenu ul li').removeClass('on');
		$(this).addClass('on');
		
		$('.tabmenu div').hide();
		$('.tabmenu div').eq(cnt).show();
	});
}


function choose(){
	var $container = $('.subBox').isotope({
		itemSelector: '.car',
		layoutMode: 'fitRows'
	});
	
	$('#choose li').on('click', function(){
		var filterValue = $(this).attr('data-filter');
		$container.isotope({filter : filterValue});
		
		num = $(this).index();
		$("#choose li").removeClass("chooseon");
		$(this).addClass("chooseon");
	});
}

function subbottom(){
	var aa = "";
	$(".prev").click(function(){
		aa = $("#content .subbottom li").last();
		$(".subbottom").prepend(aa);
	});
	$(".next").click(function(){
		aa = $("#content .subbottom li").first();
		$(".subbottom").append(aa);
	});
}


function subpage(){
	
}
