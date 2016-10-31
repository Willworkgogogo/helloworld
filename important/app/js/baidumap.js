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