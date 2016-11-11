
var myChart = echarts.init(document.getElementById('main'));
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
        // {
        //     name: 'iphone4',
        //     type: 'map',
        //     mapType: 'china',
        //     itemStyle:{
        //         normal:{label:{show:true}},
        //         emphasis:{label:{show:true}}
        //     },
        //     data:[
        //         {name: '北京',value: Math.round(Math.random()*1000)},
        //         {name: '天津',value: Math.round(Math.random()*1000)},
        //         {name: '上海',value: Math.round(Math.random()*1000)},
        //         {name: '重庆',value: Math.round(Math.random()*1000)},
        //         {name: '河北',value: Math.round(Math.random()*1000)},
        //         {name: '安徽',value: Math.round(Math.random()*1000)},
        //         {name: '新疆',value: Math.round(Math.random()*1000)},
        //         {name: '浙江',value: Math.round(Math.random()*1000)},
        //         {name: '江西',value: Math.round(Math.random()*1000)},
        //         {name: '山西',value: Math.round(Math.random()*1000)},
        //         {name: '内蒙古',value: Math.round(Math.random()*1000)},
        //         {name: '吉林',value: Math.round(Math.random()*1000)},
        //         {name: '福建',value: Math.round(Math.random()*1000)},
        //         {name: '广东',value: Math.round(Math.random()*1000)},
        //         {name: '西藏',value: Math.round(Math.random()*1000)},
        //         {name: '四川',value: Math.round(Math.random()*1000)},
        //         {name: '宁夏',value: Math.round(Math.random()*1000)},
        //         {name: '香港',value: Math.round(Math.random()*1000)},
        //         {name: '澳门',value: Math.round(Math.random()*1000)}
        //     ]
        // },
        // {
        //     name: 'iphone5',
        //     type: 'map',
        //     mapType: 'china',
        //     itemStyle:{
        //         normal:{label:{show:true}},
        //         emphasis:{label:{show:true}}
        //     },
        //     data:[
        //         {name: '北京',value: Math.round(Math.random()*1000)},
        //         {name: '天津',value: Math.round(Math.random()*1000)},
        //         {name: '上海',value: Math.round(Math.random()*1000)},
        //         {name: '广东',value: Math.round(Math.random()*1000)},
        //         {name: '台湾',value: Math.round(Math.random()*1000)},
        //         {name: '香港',value: Math.round(Math.random()*1000)},
        //         {name: '澳门',value: Math.round(Math.random()*1000)}
        //     ]
        // }
    ]
};//option
myChart.setOption(option);

$('.button_silver').on('click', function(){
	// alert(1)
	$.getJSON('data_silver.json', function(res){
		// console.log(data);
		// console.log(res.silver);
		option.series[0].name = '银';
		option.series[0].data = res.silver;
		myChart.setOption(option);
	})
})
$('.button_steel').on('click', function(){
	//alert(1)
	$.getJSON('data_silver.json', function(res){
		// console.log(data);
		option.series[0].name = '钢铁';
		option.series[0].data = res.steel;
		myChart.setOption(option);
	})
})//click
myChart.on('click', function(param){
	console.log(param)
	// var str = '当前选择：';
	// str += 'param.'
})//click	
