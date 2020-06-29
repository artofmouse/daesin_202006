// 메뉴제어
// $('.sub_header_inner div').mouseenter(function(){
// 	$(this).addClass('active')
// })
// $('.sub_header_inner div').mouseleave(function(){
// 	$('.sub_header_inner div').removeClass('active')
// })
// 탭활성화제어
function tab_Ctrl(){
	var scrollValue = $(document).scrollTop();
	var topmn_area_h = $('.topmn_area').height();
	var top_area = $('.top_area').height();
	var tab_posi = topmn_area_h + top_area + 1
	// console.log(scrollValue);
	var div1_posi = $("#div1").offset().top;
	var div2_posi = $("#div2").offset().top -43;
	var div3_posi = $("#div3").offset().top -43;
	$('.tab_area ul li').removeClass('on')
	if(scrollValue <= div2_posi ){
		$('.tab_area ul li:eq(0)').addClass('on')
	} else if(scrollValue > div2_posi && scrollValue < div3_posi){
		$('.tab_area ul li:eq(1)').addClass('on')
	} else if(scrollValue >= div3_posi){
		$('.tab_area ul li:eq(2)').addClass('on')
	}
}
// 탭클릭시위치이동
function fnMove(seq){
	var offset = $("#div" + seq).offset();
	if (seq == '1'){
		$('html').animate({scrollTop : offset.top - 40}, 600);
	} else {
		$('html').animate({scrollTop : offset.top - 40}, 600);
	}
}
// 최상단으로이동
function goTop(){
	$('html').animate({scrollTop : 0}, 400);
}
// 탭영역제어
$('.tab_area ul li').mouseenter(function(){
	$(this).addClass('on')
})
$('.tab_area ul li').mouseleave(function(){
	$('.tab_area ul li').removeClass('on')
})
// 기본레이어팝업열기
function openPop(param){
	$('html,body').css({
		'overflow' : 'hidden'
	});
	$('#'+param).show();
}
// 기본레이어팝업닫기
function closePop(param){
	$('#'+param).hide();
	$('html,body').css({
		'overflow' : 'auto'
	});
}
// 긴팝업위치이동제어
function pop_posi_top(){
	$('.pop_perinfo_agree').css({
		top : 0
	});
	$('html').animate({scrollTop : 0}, 400);
}
function pop_posi_bottom(){
	var container_h = $('.container').height();
	var perinfo_agree_h = $('.pop_perinfo_agree').height();
	var real_posi = container_h - perinfo_agree_h;
	// console.log(container_h);
	// console.log(perinfo_agree_h);
	console.log(real_posi);
	$('.pop_perinfo_agree').css({
		top : real_posi
	})
	$('html').animate({scrollTop : real_posi}, 400);
}
// 최하단슬라이딩열기
function open_bottom_layer(){
	// $('.bottom_btn').hide();
	$('.bottom_btn').removeClass('active')
	setTimeout(function(){ 
		$('.pop_dimmed_white').show();
		$('.layer_box').addClass('active')
	}, 100);
	$('html,body').css({
		'overflow' : 'hidden'
	});
}
// 최하단슬라이딩닫기
function close_bottom_layer() {
	$('.pop_dimmed_white').hide();
	$('.layer_box').removeClass('active')
	$('html,body').css({
		'overflow' : 'auto'
	});
}
$(document).ready(function () { 
	// 무료상담신청 버튼롤링
	var rolling_area_h =  $(".rolling_area").height();
	var num = $(".rolling li").length;
	var max = rolling_area_h * num;
	var move = 0;
	var scrollValue = $(this).scrollTop();
	var topmn_area_h = $('.topmn_area').height();
	var top_area = $('.top_area').height();
	var tab_posi = topmn_area_h + top_area;
	// console.log(scrollValue);
	var div1_posi = $("#div1").offset().top;
	var div2_posi = $("#div2").offset().top -43;
	var div3_posi = $("#div3").offset().top -43;
	$('.tab_area ul li').removeClass('on')
	$('.tab_area ul li').removeClass('on')
	if(scrollValue <= div2_posi ){
		$('.tab_area ul li:eq(0)').addClass('on')
	} else if(scrollValue > div2_posi && scrollValue < div3_posi){
		$('.tab_area ul li:eq(1)').addClass('on')
	} else if(scrollValue >= div3_posi){
		$('.tab_area ul li:eq(2)').addClass('on')
	}
	$(".container .content .tab_area").css({
		top : top_area
	});
	if(scrollValue > tab_posi ){
		$(".tab_area").css({
			top : 0
		});
		$('.tab_area').addClass('fixed')
		$('.btn_top').fadeIn()
		$('.bottom_btn').addClass('active')
		// if (scrollValue > lastScrollTop){
		// 	// downscroll code
		// 	$('.bottom_btn').addClass('active')
		// } else {
		// 	// upscroll code
		// 	$('.bottom_btn').removeClass('active')
		// }
	} else{
		$(".tab_area").css({
			top : top_area
		});
		$('.tab_area').removeClass('fixed')
		$('.btn_top').hide()
		$('.bottom_btn').removeClass('active')
	}
	lastScrollTop = scrollValue;
	function noticeRolling(){
		// move += rolling_area_h;
		// $(".rolling").animate({"top":-move},400,function(){
		// 	if( move >= max ){
		// 		$(this).css("top",0);
		// 		move = 0;
		// 	};
		// });
		setTimeout(function(){ 
			$(".rolling li:nth-child(1)").animate({
				opacity : 0
			},500)
		}, 3000);
		setTimeout(function(){ 
			$(".rolling li:nth-child(2)").animate({
				opacity : 1
			},500)
		}, 3500);
		setTimeout(function(){ 
			$(".rolling li:nth-child(2)").animate({
				opacity : 0
			},500)
		}, 6500);
		setTimeout(function(){ 
			$(".rolling li:nth-child(1)").animate({
				opacity : 1
			},500)
		}, 7000);
	};
	noticeRolling();
	noticeRollingOff = setInterval(noticeRolling,7000);
	// $(".rolling").append($(".rolling li").first().clone());

	$(".rolling_stop").click(function(){
		clearInterval(noticeRollingOff);
	});
	$(".rolling_start").click(function(){
		noticeRollingOff = setInterval(noticeRolling,1000);
	});
	// tab_Ctrl()
});

var lastScrollTop = 0;
$(window).scroll(function () { 
	var scrollValue = $(this).scrollTop();
	var topmn_area_h = $('.topmn_area').height();
	var top_area = $('.top_area').height();
	var tab_posi = topmn_area_h + top_area + 1
	// console.log(scrollValue);
	var div1_posi = $("#div1").offset().top;
	var div2_posi = $("#div2").offset().top -43;
	var div3_posi = $("#div3").offset().top -43;
	
	$('.tab_area ul li').removeClass('on')
	if(scrollValue <= div2_posi ){
		$('.tab_area ul li:eq(0)').addClass('on')
	} else if(scrollValue > div2_posi && scrollValue < div3_posi){
		$('.tab_area ul li:eq(1)').addClass('on')
	} else if(scrollValue >= div3_posi){
		$('.tab_area ul li:eq(2)').addClass('on')
	}
	// 모바일일경우에만 fixed`
	
	if(scrollValue > tab_posi ){
		$(".tab_area").css({
			top : 0
		});
		$('.tab_area').addClass('fixed')
		$('.btn_top').fadeIn()
		$('.bottom_btn').addClass('active')
		// if (scrollValue > lastScrollTop){
		// 	// downscroll code
		// 	$('.bottom_btn').addClass('active')
		// } else {
		// 	// upscroll code
		// 	$('.bottom_btn').removeClass('active')
		// }
	} else{
		$(".tab_area").css({
			top : top_area
		});
		$('.tab_area').removeClass('fixed')
		$('.btn_top').hide()
		$('.bottom_btn').removeClass('active')
	}
	lastScrollTop = scrollValue;
	// tab_Ctrl();
});
// 개인정보수집동의버튼제어
$('.pop_perinfo_agree .pop_content .box_btn_area .box_btn_right').click(function(){
	$(this).toggleClass('active');
})
function agree_all_Chk(){
	$('.pop_perinfo_agree .pop_content .box_btn_area .box_btn_right').addClass('active');
	// $('.pop_perinfo_agree .pop_content .box_btn_area .box_btn_right').toggleClass('active');
}