require.config({
	baseUrl: 'js/lib',
	paths: {
		echarts: '../'
	},
	package
})

require(
	[
		'echarts/echarts',
		'echarts/chart/bar',
		'echarts/chart/line',
		'echarts/chart/map'
	],function(echarts){
		var myChart = echarts.init(document.getElementById('main'));
		// 过渡---------------------  
            // myChart.showLoading({  
            //     text: '正在努力的读取数据中...',    //loading话术  
            // });  
  
            var option = {  
			    legend: {                               // 图例配置  
			        orient:'horizontal',                    //布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'  
			        x:'center',                             //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）  
			        y:'top',                                //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）  
			        backgroundColor:'rgba(0,0,0,0)',        //图例背景颜色，默认透明  
			        borderColor:  '#ccc',                   //图例边框颜色  
			        selectedMode:true,                      //图例不能点了（false）  
			        padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5  
			        itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔  
			        data: []  
			    },  
			    toolbox: {                                 //小工具  
			        show : true,  
			        feature : {  
			            mark : true,  
			            dataZoom : true,  
			            dataView : true,  
			            magicType:['line', 'bar'],  
			            restore : true,  
			            saveAsImage : true  
			        }  
			    },  
			      dataZoom : {                             //缩略图  
			        show : true,  
			        realtime : true,  
			        start : 20,  
			        end : 80  
			    },  
			    tooltip: {                                  // 气泡提示配置  
			        trigger: 'axis',                        // 触发类型，默认数据触发，可选为：'axis'  
			    },  
			  
			    xAxis: [                                    // 直角坐标系中横轴数组  
			    	{  
			            type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明  
			            boundaryGap: false,                 //数据从坐标轴顶开始  
			            data: []  
			        }  
			    ],  
			    yAxis: [                                    // 直角坐标系中纵轴数组  
			    {  
			            type: 'value',                       // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明                  
			            boundaryGap: [0.1, 0.1],            // 坐标轴两端空白策略，数组内数值代表百分比  
			            splitNumber: 4                      // 数值轴用，分割段数，默认为5  
			        }  
			        ],  
			        series: [  
			          
			        ]  
			    };    
			    var jsonranklist={"data":{"1":12,"2":56,"3":20,"4":6},"indata":{"1":3,"2":16,"3":28,"4":56}};//可从后台传入  
			    var xname=[];  
			  
			    for(var key in jsonranklist){  
			        var databand=[];  
			        if(key=="data"){  
			            for(var datakey in jsonranklist[key]){  
			                databand.push(jsonranklist[key][datakey]);  
			                xname.push(datakey);  
			            }  
			        }  
			        if(key=="indata"){  
			            for(var datakey in jsonranklist[key]){  
			                databand.push(jsonranklist[key][datakey]);  
			            }  
			  
			        }  
			  
				    option.legend.data.push(key);//追加数据  
				    seriesx={name:key,type:'line',data:databand,itemStyle: {normal: {areaStyle: {}}},stack:'a'};//参数分别表示：数据名称，图表类型，数据，样式：在此是填充，数据叠加（堆积图：相同stack名字的加在一起）  
				    option.series.push(seriesx);		  
				} 

				option.xAxis[0].data=xname;  
				myChart.setOption(option);
			} 

)