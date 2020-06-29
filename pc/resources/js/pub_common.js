// function goTop() {
// 	$('html').animate({ scrollTop: 0 }, 400);
// }
// function openPop(param) {
// 	$('#' + param).show();
// }
// function closePop(param) {
// 	$('#' + param).hide();
// }
// 키비주얼롤링모션

// 아침세팅
function kv_motion_am(){
	setTimeout(() => {
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 1
		},4000);
	}, 4000);
	setTimeout(() => {
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 1
		},4000);
	}, 11000);
	setTimeout(() => {
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 1
		},4000);
	}, 18000);
}
// 황혼세팅
function kv_motion_dusk(){
	setTimeout(() => {
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 1
		},4000);
	}, 4000);
	setTimeout(() => {
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 1
		},4000);
	}, 11000);
	setTimeout(() => {
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 1
		},4000);
	}, 18000);
}
// 저녁세팅
function kv_motion_pm(){
	setTimeout(() => {
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 1
		},4000);
	}, 4000);
	setTimeout(() => {
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 1
		},4000);
	}, 11000);
	setTimeout(() => {
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 1
		},4000);
	}, 18000);
}
$(document).ready(function () {
	var scrollValue = $(this).scrollTop();
	var kv_area = $('.kv_area').height();
	// console.log(scrollValue);
	if(scrollValue > kv_area ){
		$(".sticky_btn").addClass('active');
	} else{
		$(".sticky_btn").removeClass('active');
	}
	$('#bx-pager li a').removeClass('active')
	// $('.slider_kv').bxSlider({
	// 	mode: 'fade',// 가로 방향 수평 슬라이드
	// 	speed: 3000,        // 이동 속도를 설정
	// 	pager: false,      // 현재 위치 페이징 표시 여부 설정
	// 	moveSlides: 1,     // 슬라이드 이동시 개수
	// 	pager:true,
	// 	auto: true,
	// 	pagerCustom: '#bx-pager',
	// 	infiniteLoop : true,
	// 	touchEnabled: false,
	// 	pause: 4000,
	// 	// autoDelay: 1000,
	// 	startSlide: 0,
	// });

	var today = new Date();
	// var hours = 17;
	var hours = today.getHours();
	
	console.log(hours);
	if(hours >= 6 && hours < 16){
		$('.kv_area .slider_kv .kv01').css({
			opacity : 0
		});
		$('.kv_area .slider_kv .kv02').css({
			opacity : 1
		});
		$('.kv_area .slider_kv .kv03').css({
			opacity : 0
		});
		setTimeout(() => {
			kv_motion_am()
		}, 6000);
		kv_motion_am_Rolling = setInterval(kv_motion_am,21000);
	} else if(hours >= 16 && hours < 19){
		$('.kv_area .slider_kv .kv01').css({
			opacity : 0
		});
		$('.kv_area .slider_kv .kv02').css({
			opacity : 0
		});
		$('.kv_area .slider_kv .kv03').css({
			opacity : 1
		});
		setTimeout(() => {
			kv_motion_dusk()
		}, 6000);
		kv_motion_dusk_Rolling = setInterval(kv_motion_dusk,21000);
	} else if(hours >= 19 || hours < 6){
		$('.kv_area .slider_kv .kv01').css({
			opacity : 1
		});
		$('.kv_area .slider_kv .kv02').css({
			opacity : 0
		});
		$('.kv_area .slider_kv .kv03').css({
			opacity : 0
		});
		setTimeout(() => {
			kv_motion_pm()
		}, 6000);
		kv_motion_pm_Rolling = setInterval(kv_motion_pm,21000);
	}
	// clearInterval(kv_motion);
});
$(window).scroll(function () { 
	var scrollValue = $(this).scrollTop();
	var kv_area = $('.kv_area').height();
	// console.log(scrollValue);
	if(scrollValue > kv_area ){
		$(".sticky_btn").addClass('active');
	} else{
		$(".sticky_btn").removeClass('active');
	}
	lastScrollTop = scrollValue;
});
$('.slider').bxSlider({
	mode: 'fade',// 가로 방향 수평 슬라이드
	speed: 500,        // 이동 속도를 설정
	// moveSlides: 1,     // 슬라이드 이동시 개수
	pager:true,
	pagerCustom: '#bx-pager',
	touchEnabled: false,
	onSliderLoad: function() { 
		$('#bx-pager >  li > a').removeClass('active')
	},
});