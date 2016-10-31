$(window).scrollTop(485);


// $(".left_column").load("../html/common/left.html", function(){
// 	/*footer轮播*/
// 	var silver_meeting_footer_rollingImg1 = $(".silver_meeting_footer_rollingImg1");
	
// 	function rollImg(){
// 		silver_meeting_footer_rollingImg1.animate({marginTop:"-149px"},2000,"linear",function(){
// 			silver_meeting_footer_rollingImg1.css({marginTop:"0px"});
// 			$(".silver_meeting_footer_rollingImg1 div:first").remove().clone(true).appendTo(".silver_meeting_footer_rollingImg1");
// 		});
// 	}
// 	setInterval(rollImg,2000);
// })


// 异步加载插入
 $.ajax({  
    type : "get",  //提交方式  
    url : "../html/common/left.json",//路径  
    success : function(res) {//返回数据根据结果进行相应的处理  
       	leftInit(res);
       	rollImg();
       	setInterval(rollImg,2000);
    }  
}); 
function leftInit(res) {
	var str = "";
	str = ""+"<p>"+res.title+"</p>"
			+"<div class='silver_meeting_footer_rollingImg'>"
			+"<div class='silver_meeting_footer_rollingImg1'>"
			+"<div><img src="+res.list[0].src+">"
			+"<p>"+res.list[0].theme+"</p></div>"
			+"<div><img src="+res.list[1].src+">"
			+"<p>"+res.list[1].theme+"</p></div>"
			+"<div><img src="+res.list[2].src+">"
			+"<p>"+res.list[2].theme+"</p></div>"
			+"<div><img src="+res.list[3].src+">"
			+"<p>"+res.list[3].theme+"</p></div>"
			+"<div><img src="+res.list[4].src+">"
			+"<p>"+res.list[4].theme+"</p></div>"
			+"<div><img src="+res.list[5].src+">"
			+"<p>"+res.list[5].theme+"</p></div>"
			+"<div><img src="+res.list[6].src+">"
			+"<p>"+res.list[6].theme+"</p></div>"
			+"</div>"
	$(".left_column").html(str);	
}
function rollImg(){
	var silver_meeting_footer_rollingImg1 = $(".silver_meeting_footer_rollingImg1");
	silver_meeting_footer_rollingImg1.animate({marginTop:"-149px"},2000,"linear",function(){
	silver_meeting_footer_rollingImg1.css({marginTop:"0px"});
	$(".silver_meeting_footer_rollingImg1 div:first").remove().clone(true).appendTo(".silver_meeting_footer_rollingImg1");
	});
}


// $(".right_column").load("../html/common/right.html")
(function(){
	$.ajax({  
    type : "get",  //提交方式  
    url : "../html/common/right.json",//路径  
    success : function(res) {//返回数据根据结果进行相应的处理
    	console.log("ok")
       	rightInit(res);
    }  
});
})()
 

function rightInit(res){
	var str = "";
	str = ""+"<p class='right_Companytheme'>"+res.zhuban.title+"</p>"
			+"<p class='right_Companyname'>"+res.zhuban.list[0]+"</p>"
			+"<p class='right_Companytheme'>"+res.chengban.title+"</p>"
			+"<p class='right_Companyname'>"+res.chengban.list[0]+"</p>"
			+"<p class='right_Companytheme'>"+res.xiezhu.title+"</p>"
			+"<p class='right_Companyname'>"+res.xiezhu.list[0]+"</p>"
			+"<p class='right_Companyname'>"+res.xiezhu.list[1]+"</p>"
			+"<p class='right_Companytheme'>"+res.zhichi.title+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[0]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[1]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[3]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[4]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[5]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[6]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[7]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[8]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[9]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[10]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[11]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[12]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[13]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[14]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[15]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[16]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[17]+"</p>"
			+"<p class='right_Companytheme'>"+res.zanzhu.title+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[0]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[1]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[3]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[4]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[5]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[6]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[7]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[8]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[9]+"</p>"
			+"<p class='right_Companyname'>"+res.zhichi.list[10]+"</p>"

	 $(".right_column").html(str);
}


















