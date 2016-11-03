<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeBehind="ColumnMore.aspx.cs" Inherits="HighchartsExample.ColumnMore" %>

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
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                tooltip: {//当用户将鼠标悬停于一点时，显示提示内容
                    headerFormat: '<span style="font-size: 10px;">{point.key}</span>',
                    pointFormat: '<table><tbody><tr><td style="padding: 0px;color:{series.color};">{series.name}: </td><td style="padding: 0px;"><b>{point.y}</b></td></tr></tbody></table>',
                    shared: true,
                    useHTML: true

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
