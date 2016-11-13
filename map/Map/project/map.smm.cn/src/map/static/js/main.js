(function(){
	//header_nav
	var map = {
		$map_subnav_title_li : $('.map_subnav_title>li'),
		$map_subnav_title_subnav_li : $('.map_subnav_title_subnav').find('li'),
		$listItem_info : $('.listItem_info'),
		$listItem_compare : $('.listItem_compare'),
		$listInfo_wrap : $('.listInfo_wrap'),
		$listCompare_wrap : $('.listCompare_wrap'),
		$smm_map_rightCompare : $('.smm_map_rightCompare')
	}
	map.$map_subnav_title_li.on({
		'mouseover': function(){
			// console.log($(this).innerWidth())
			$(this).children('ul').css({'display': 'block', 'width': $(this).innerWidth()-1+'px'});
		},
		'mouseout': function(){
			$(this).children('ul').css({'display': 'none'});
		}
	})
	// console.log(map.map_subnav_title_subnav_li)

	/*echats*/
	var smm_charts = echarts.init(document.getElementById('smm_map_echarts'))
	var option = {
		    title : {
		        text: 'SMM上海有色网——新能源',
		        subtext: 'SMM调研数据',
		        x:'center'
		    },
		   
		    tooltip : {
		        trigger: 'item'
		    },
		    // legend: {
		    //     orient: 'vertical',
		    //     x:'left',
		    //     data:['iphone3','iphone4','iphone5']
		    // },
		    dataRange: {
		        min: 0,
		        max: 1000,
		        x: 'left',
		        y: 'bottom',
		        text:['高','低'],           // 文本，默认为数值文本
		        calculable : true
		    },
		    toolbox: {
		        show: true,
		        orient : 'vertical',
		        x: 'right',
		        y: 'center',
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    roamController: {
		        show: true,
		        x: 'right',
		        mapTypeControl: {
		            'china': true
		        }
		    },
		    series : [
		        {
		            name: '铜',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            selectedMode : 'single',
		            itemStyle:{
		                normal:{label:{show:true}},
		                emphasis:{label:{show:true}}
		            },
		            data:
		            [
		                {name: '北京',value: Math.round(Math.random()*1000)},
		                {name: '天津',value: Math.round(Math.random()*1000)},
		                {name: '上海',value: Math.round(Math.random()*1000)},
		                {name: '重庆',value: Math.round(Math.random()*1000)},
		                {name: '河北',value: Math.round(Math.random()*1000)},
		                {name: '河南',value: Math.round(Math.random()*1000)},
		                {name: '云南',value: Math.round(Math.random()*1000)},
		                {name: '辽宁',value: Math.round(Math.random()*1000)},
		                {name: '黑龙江',value: Math.round(Math.random()*1000)},
		                {name: '湖南',value: Math.round(Math.random()*1000)},
		                {name: '安徽',value: Math.round(Math.random()*1000)},
		                {name: '山东',value: Math.round(Math.random()*1000)},
		                {name: '新疆',value: Math.round(Math.random()*1000)},
		                {name: '江苏',value: Math.round(Math.random()*1000)},
		                {name: '浙江',value: Math.round(Math.random()*1000)},
		                {name: '江西',value: Math.round(Math.random()*1000)},
		                {name: '湖北',value: Math.round(Math.random()*1000)},
		                {name: '广西',value: Math.round(Math.random()*1000)},
		                {name: '甘肃',value: Math.round(Math.random()*1000)},
		                {name: '山西',value: Math.round(Math.random()*1000)},
		                {name: '内蒙古',value: Math.round(Math.random()*1000)},
		                {name: '陕西',value: Math.round(Math.random()*1000)},
		                {name: '吉林',value: Math.round(Math.random()*1000)},
		                {name: '福建',value: Math.round(Math.random()*1000)},
		                {name: '贵州',value: Math.round(Math.random()*1000)},
		                {name: '广东',value: Math.round(Math.random()*1000)},
		                {name: '青海',value: Math.round(Math.random()*1000)},
		                {name: '西藏',value: Math.round(Math.random()*1000)},
		                {name: '四川',value: Math.round(Math.random()*1000)},
		                {name: '宁夏',value: Math.round(Math.random()*1000)},
		                {name: '海南',value: Math.round(Math.random()*1000)},
		                {name: '台湾',value: Math.round(Math.random()*1000)},
		                {name: '香港',value: Math.round(Math.random()*1000)},
		                {name: '澳门',value: Math.round(Math.random()*1000)}
		            ]
		        }
		    ]
		};//option
	smm_charts.setOption(option);

	/*列表*/
	map.$listItem_info.on('click', function(){
		map.$listInfo_wrap.css('display', 'block');
		map.$listCompare_wrap.css('display', 'none');
		$(this).addClass('listItem_selected');
		map.$listItem_compare.removeClass('listItem_selected');
	})
	map.$listItem_compare.on('click', function(){
		map.$listInfo_wrap.css('display', 'none');
		map.$listCompare_wrap.css('display', 'block');
		$(this).addClass('listItem_selected');
		map.$listItem_info.removeClass('listItem_selected');
	})

/*右侧对比栏列表*/
	//初始定位高度
	map.$smm_map_rightCompare.css({'top': $('.smm_map_listItem').offset().top+'px','display':'block'});
	$('.rightCompare_toggle').on('click', function(){
		map.$smm_map_rightCompare.fadeOut('fast');
	})

/*全局数组，存放企业名称*/
var map_company = [];
var map_compareImg = [
		'static/img/compare1.png',
		'static/img/compare2.png',
		'static/img/compare3.png',
		'static/img/compare4.png',
		'static/img/compare5.png'
	]
/*列表勾选*/
	$('.smm_map_content_listUl').on('click', function(event){
		// console.log(event.target)
		if($(event.target).is(':checked')){
			// console.log($(event.target).parent().next().html())
			// console.log($(event.target).parent().parent());
			var map01 = {};
			// $(event.target).attr('arrayAdd', 'true');//打个标签，代表该ul已被选中
			map01.name = $(event.target).parent().next().html();//企业名称
			map01.ul = $(event.target).parent().parent();//ul
			var arrayNum = map_company.push(map01);
			$(event.target).attr('arrayNum', arrayNum-1);
			// console.log(num);
			// console.log(map_company)
		}else{
			map_company.splice($(event.target).attr('arrayNum'), 1);//从数组中删除元素
			// console.log($(event.target).attr('arrayNum'))
		}
		console.log(map_company)
		refreshCompare();
	})

	// refreshCompare()刷新对比栏
	function refreshCompare(){
		if (map_company != []) {
			for (var i = 0; i < map_company.length; i++) {
				$('.smm_map_rightCompare_innerWrap').find('.rightCompare_listItems').eq(i).html('<div class="rightCompare_listItems_content">'+ map_company[i].name +'</div>'
										+'<div class="rightCompare_btnDelete"><button>删除</button></div>');
			};		
		}
		for (var i = map_company.length; i < 5; i++) {
			$('.smm_map_rightCompare_innerWrap').find('.rightCompare_listItems').eq(i).html('<img src="'+ map_compareImg[i] +'">');			
		}	
	}
})()
