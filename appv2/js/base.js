
(function(){
	/*index*/
	var aLi = $(".index_innerwrapper li");
	var num = 1;
	function fade(){
		num++;
		if(num==2){num=0};
		aLi.eq(num).css('display', 'none').siblings().fadeIn('slow');
	}
	setInterval(fade, 4000);

	// 左侧轮播
	var silver_meeting_footer_rollingImg1 = $(".silver_meeting_footer_rollingImg1");
	
	function rollImg(){
		silver_meeting_footer_rollingImg1.animate({marginTop:"-149px"},2000,"linear",function(){
			silver_meeting_footer_rollingImg1.css({marginTop:"0px"});
			$(".silver_meeting_footer_rollingImg1 div:first").remove().clone(true).appendTo(".silver_meeting_footer_rollingImg1");
		});
	}
	setInterval(rollImg,2000);
})()