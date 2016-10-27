
(function(){

	/*footer轮播*/
	var dom = {
		speed : 50,
		mapDom1 : $(".silver_meeting_footer_rollingImg1"),
		mapDom2 : $(".silver_meeting_footer_rollingImg2")
	}
	var mapDomheight = dom.mapDom1.height();
	dom.mapDom2.html(dom.mapDom1.html());
	dom.mapDom2.css('top', mapDomheight);
	console.log(mapDomheight)
	function scrollImg() {
		if(parseInt(dom.mapDom1.css("top"))<=-mapDomheight){
			dom.mapDom1.css('top', mapDomheight+"px");
		}else{
			dom.mapDom1.css('top', parseInt(dom.mapDom1.css("top"))-1+"px");
		}

		if(parseInt(dom.mapDom2.css("top"))<=-mapDomheight){
			dom.mapDom2.css('top', mapDomheight+"px");
		}else{
			dom.mapDom2.css('top', parseInt(dom.mapDom2.css("top"))-1+"px");
		}
	}
	var footerScroll = setInterval(scrollImg, 20)
})()