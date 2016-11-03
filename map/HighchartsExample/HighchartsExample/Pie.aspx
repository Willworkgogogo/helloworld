<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="Pie.aspx.cs" Inherits="HighchartsExample.Pie" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/highcharts.js"></script>
    <script type="text/javascript">
        $(function () {
            var colors = Highcharts.getOptions().colors
            $('#container').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false //是否启用阴影
                },
                title: {
                    text: '<%=title %>'
                },
                tooltip: {//鼠标移入时的提示内容
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true, //是否允许选中切点
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '<%=name %>',
                    data: [
                           <%=data %>
                        
//                        ['Firefox', 45.0],
//                        ['IE', 26.8],
//                        {
//                            name: 'Chrome',
//                            y: 12.8,
//                            sliced: true,
//                            selected: true
//                        },
//                        ['Safari', 8.5],
//                        ['Opera', 6.2],
//                        ['Others', 0.7]
                    ]
                }]
            });
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="container" style="min-width: 800px; height: 400px;">
    </div>
</asp:Content>
