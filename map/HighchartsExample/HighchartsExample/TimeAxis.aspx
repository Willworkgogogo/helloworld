<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="TimeAxis.aspx.cs" Inherits="HighchartsExample.TimeAxis" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/highcharts.js"></script>
    <script type="text/javascript">
        $(function () {
            $('#container').highcharts({
                chart: {
                    zoomType: 'x', //用户可以通过拖拽鼠标缩放,值包括x、y或者xy
                    spacingRight: 20//图表距离右边缘的距离
                },
                title: {
                    text: '<%=title %>'
                },
                subtitle: {
                    text: '<%=subTitle %>'
                },
                xAxis: {
                    type: 'datetime',
                    maxZoom: 14 * 24 * 3600000, //最大可以放大到多大（此图中最大可以放大到14天*24小时*基数3600000）
                    title: {
                        text: '时间轴'
                    }
                },
                yAxis: {
                    title: {
                        text: '<%=yTitle %>'
                    }
                },
                tooltip: {//当用户将鼠标悬停于一点时
                    shared: true //整个图形区将捕获鼠标移动
                },
                legend: {//图例不显示
                    enabled: false
                },
                plotOptions: {//设置显示区域颜色深浅的变换，以及各个跨度的高低明显显示
                    area: {
                        fillColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        lineWidth: 1,
                        marker: {//禁用锚记点，以免时间轴密集显示太难看
                            enabled: false
                        },
                        shadow: false,//是否启用阴影图线
                        states: {
                            hover: {//鼠标移入时，折线的线宽
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'area', //包括area, areaspline, bar, column, line, pie, scatter 或者 spline
                    name: '<%=name %>',
                    pointInterval: 24 * 3600 * 1000,//每个坐标之间的间隔（此图中为1天*24小时*基数3600000）
                    pointStart: Date.UTC(2013, 0, 01,01),//开始年份（1月表示为0，以此类推）
                    data: [<%=data %>]
                }]
            });
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="container" style="min-width: 800px; height: 400px;"></div>
</asp:Content>
