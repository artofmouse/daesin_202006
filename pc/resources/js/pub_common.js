// function goTop() {
// 	$('html').animate({ scrollTop: 0 }, 400);
// }

// 키비주얼롤링모션
// 아침세팅
function kv_motion_am(){
	setTimeout(function(){ 
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 1
		},4000);
	}, 4000);
	setTimeout(function(){ 
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 1
		},4000);
	}, 11000);
	setTimeout(function(){ 
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
	setTimeout(function(){ 
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 1
		},4000);
	}, 4000);
	setTimeout(function(){ 
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 1
		},4000);
	}, 11000);
	setTimeout(function(){ 
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
	setTimeout(function(){ 
		$('.kv_area .slider_kv .kv01').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 1
		},4000);
	}, 4000);
	setTimeout(function(){ 
		$('.kv_area .slider_kv .kv02').animate({
			opacity : 0
		},3000);
		$('.kv_area .slider_kv .kv03').animate({
			opacity : 1
		},4000);
	}, 11000);
	setTimeout(function(){ 
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
	var today = new Date();
	var hours = today.getHours();
	// console.log(hours);
	// console.log(scrollValue);

	// 하단 스티키 제어
	if(scrollValue > kv_area ){
		$(".sticky_btn").addClass('active');
	} else{
		$(".sticky_btn").removeClass('active');
	}
	// 시간대별 키비주얼 제어
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
		setTimeout(function(){ 
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
		setTimeout(function(){ 
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
		setTimeout(function(){ 
			kv_motion_pm()
		}, 6000);
		kv_motion_pm_Rolling = setInterval(kv_motion_pm,21000);
	}
	// clearInterval(kv_motion);
	// 안내서 슬라이드 구현
	var mySwiper = new Swiper('.swiper-container', {
		effect: 'fade', // 페이드 효과 사용
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
			renderBullet: function (index, className) {
				if (index == 0) {
					return '<span class="' + className + '"></span>';
				} else {
					// return '<span class="' + className + '"><img src="../resources/images/sec2_thum' + (index) + '.png" alt="크레온"></span>';
					return '<span class="' + className + '"></span>';
				}
			},
		},
		simulateTouch: false,
	})
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
});