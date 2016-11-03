<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeBehind="ColumnLineCurved.aspx.cs" Inherits="HighchartsExample.ColumnLineCurved" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/highcharts.js"></script>
    <script type="text/javascript">
        $(function () {
            var colors = Highcharts.getOptions().colors,
            categories = [<%=categories %>], //x轴分组Lable
            name = '人口流量' //数据列名

            var chart = $('#container').highcharts({
                chart: {
                    type: 'column'//图表类型
                },
                title: {
                    text: '<%=title %>'//标题
                },
                subtitle: {
                    text: '<%=subtitle %>'//副标题
                },
                xAxis: {
                    categories: categories//X轴分组Lable
                },
                yAxis: {
                    title: {
                        text: '<%=yTitle %>'//y轴标题
                    }
                },
                plotOptions: {
                    column: {
                        cursor: 'pointer', //鼠标移入时显示手形状
                        dataLabels: {
                            enabled: true,
                            color: colors[0],
                            padding : 0,
                            style: {
                                fontWeight: 'bold'
                            },
                            formatter: function () {
                                return this.y;
                            }
                        }
                    }
                },
                tooltip: {//当用户将鼠标悬停于一点时，显示提示内容
                    formatter: function () {
                        var point = this.point,
                        s = this.x + ':<b>' + this.y + '</b><br>';
                        return s;
                    }
                },
                series: [{
                    type: 'column',
                    name: name,
                    data: [<%=data %>]
                },
                {
                    type: 'spline',
                    name: name,
                    data: [<%=data %>]
                }],
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
