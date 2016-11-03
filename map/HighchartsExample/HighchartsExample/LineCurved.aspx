<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeBehind="LineCurved.aspx.cs" Inherits="HighchartsExample.LineCurved" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/highcharts.js"></script>
    <script type="text/javascript">
        $(function () {
            var chart = $('#container').highcharts({
                chart: {
                    type: 'spline'//图表类型
                },
                title: {
                    text: '<%=title %>'//标题
                },
                subtitle: {
                    text: '<%=subtitle %>'//副标题
                },
                xAxis: {
                    categories: [<%=categories %>]//X轴分组Lable
                },
                yAxis: {
                    title: {
                        text: '<%=yTitle %>'//y轴标题
                    },
                    plotLines: [{//y轴标线属性
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {//当用户将鼠标悬停于一点时
                    valueSuffix: '°C'//在原来显示内容后追加此内容
                },
                plotOptions: {
                    spline: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                legend: {//设置图例的位置
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [<%=data %>],
                exporting: {
                    enabled: false//是否启用输出报表
                },
                credits: {//版权信息
                    enabled: true,
                    text: "上海世研恒辉",
                    href: "#"
                }
            })
        .highcharts(); // return chart
        });
    </script>
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <div id="container" style="min-width:800px;height:400px; "></div>    
</asp:Content>
