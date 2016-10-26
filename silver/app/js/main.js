
// 百度地图API功能
var silver_meeting_map = new BMap.Map("silver_meeting_location_map");    // 创建Map实例
silver_meeting_map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
silver_meeting_map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
silver_meeting_map.setCurrentCity("珠海");          // 设置地图显示的城市 此项是必须设置的
silver_meeting_map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
silver_meeting_map.centerAndZoom("珠海",11);		 // 初始化地图,用城市名设置地图中心点
var silver_meeting_marker = new BMap.Marker(new BMap.Point(113.572599, 22.236369)); // 创建点
silver_meeting_map.addOverlay(silver_meeting_marker);    //增加点
var silver_meeting_label = new BMap.Label("珠海海湾大酒店",{offset:new BMap.Size(20,-10)});
silver_meeting_marker.setLabel(silver_meeting_label);


(function(){
	/*企业详情*/
	var enterpriseDevelop = {
		img : $(".silver_meeting_fuxiang_develop_img"),
		wrap: $(".silver_meeting_fuxiang_develop")
	}
	enterpriseDevelop.wrap.width($(window).width());
	enterpriseDevelop.wrap.height($(window).height());



	/*footer轮播*/
	var dom = {
		speed : 50,
		mapDom1 : $(".silver_meeting_footer_rollingImg1"),
		mapDom2 : $(".silver_meeting_footer_rollingImg2")
	}
	var mapDomheight = dom.mapDom1.height();
	dom.mapDom2.html(dom.mapDom1.html());
	dom.mapDom2.css('top', mapDomheight);
	
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
	var footerScroll = setInterval(scrollImg, 30)
})() 


