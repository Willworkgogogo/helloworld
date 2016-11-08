require(['echarts', 'map'], function(echarts){
	require(['china'], function(){
		var chart = echarts.init(document.getElementById('myMap'));

		require(['app/config'],function(){

		})
	})
})