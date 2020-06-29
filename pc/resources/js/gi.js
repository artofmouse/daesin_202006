function tab_Ctrl(){
	var scrollValue = $(document).scrollTop();
	// console.log(scrollValue);
	// 모바일일경우에만 fixed
	// if(scrollValue > 620 ){
	// 	$('.tab_area').addClass('fixed')
	// } else{
	// 	$('.tab_area').removeClass('fixed')
	// }
	$('.tab_area ul li').removeClass('on')
	if(scrollValue < 1784){
		$('.tab_area ul li:eq(0)').addClass('on')
	} else if(scrollValue > 1783 && scrollValue < 3943){
		$('.tab_area ul li:eq(1)').addClass('on')
	} else {
		$('.tab_area ul li:eq(2)').addClass('on')
	}
}

$(window).scroll(function () { 
	tab_Ctrl()
});
$(document).ready(function () { 
	tab_Ctrl()
});