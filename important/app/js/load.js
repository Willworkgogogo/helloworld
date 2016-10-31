$(window).scrollTop(485);


$(".left_column").load("../html/common/left.html", function(){
	/*footer轮播*/
	var silver_meeting_footer_rollingImg1 = $(".silver_meeting_footer_rollingImg1");
	
	function rollImg(){
		silver_meeting_footer_rollingImg1.animate({marginTop:"-149px"},2000,"linear",function(){
			silver_meeting_footer_rollingImg1.css({marginTop:"0px"});
			$(".silver_meeting_footer_rollingImg1 div:first").remove().clone(true).appendTo(".silver_meeting_footer_rollingImg1");
		});
	}
	setInterval(rollImg,2000);
})


$(".right_column").load("../html/common/right.html")

