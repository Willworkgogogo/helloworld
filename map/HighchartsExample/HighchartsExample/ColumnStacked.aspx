<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="ColumnStacked.aspx.cs" Inherits="HighchartsExample.ColumnStacked" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/highcharts.js"></script>
    <script type="text/javascript">
        $(function () {
            var colors = Highcharts.getOptions().colors
            var chart = $('#container').highcharts({
                chart: {
                    type: 'column'//图表类型
                },
                title: {
                    text: '<%=title %>'//标题
                },
                xAxis: {
                    categories: [<%=categories %>]//X轴分组Lable
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '<%=yTitle %>'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                legend: {//设置列数据图例样式
                    align: 'right',
                    x: -70,
                    verticalAlign: 'top',
                    y: 20,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                    borderColor: '#CCC',
                    borderWidth: 1,
                    shadow: false
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',//设置柱形堆叠
                        dataLabels: {//设置柱体值显示及字体颜色
                            enabled: true,
                            padding:-5,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                        }
                    }
                },
                tooltip: {//当用户将鼠标悬停于一点时，显示提示内容
                    formatter: function () {
                        return '<b>' + this.x + '</b><br>' + this.series.name + ': ' + this.y + '<br>' + 'Total: ' + this.point.stackTotal;
                    }
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
            });
        });
    </script>
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <div id="container" style="min-width:800px;height:400px"></div>
</asp:Content>
