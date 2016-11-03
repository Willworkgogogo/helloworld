<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="TimeAxis1.aspx.cs" Inherits="HighchartsExample.TimeAxis1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/highcharts.js"></script>
    <script type="text/javascript">
        $(function () {           
           $("#container").highcharts({
                chart: {
                    zoomType: 'x',
                    type: 'area',
                    spacingRight: 20
                },
                title: {
                    text: 'aaa'
                },
                xAxis: {
                    type: 'datetime',
                    tickInterval:  7*24*60*60 * 1000, 
                    maxZoom: 14*24*60*60* 1000,
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    title: {
                        text: '千瓦时 '
                    },
                    plotLines: [{
                        value: '',
                        color: '#FF0066',
                        dashStyle: 'soild',
                        width: 2,
                        label: {
                            text: ''
                        }
                    }]
                },
                tooltip: {                    
                    formatter: function () {
                        return '' + this.series.name + ' ' + +new Date(this.x).getUTCFullYear() + '年' + (new Date(this.x).getUTCMonth()+1) + '月' 
                            + new Date(this.x).getUTCDate() + '日' + new Date(this.x).getUTCHours() + '时' + new Date(this.x).getUTCMinutes() + '分'
                            + ': ' + this.y + '(千瓦时)';
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                },
                series: [
                    { name: '峰时', color: '#CAE1FF', data: [
                        [Date.UTC(2013, 0, 01, 01,15), 200],
                        [Date.UTC(2013, 0, 05, 02,20), 300],
                        [Date.UTC(2013, 0, 11, 03,40), 400],
                        [Date.UTC(2013, 0, 19, 04, 51), 500],
                        [Date.UTC(2013, 0, 20, 23, 59), 800],
                        [Date.UTC(2013, 0, 21, 12, 59), 600]
                    ]},
                    { name: '啊啊', color: '#ff0000', data:
                        [[Date.UTC(2013, 01, 01, 02), 400],
                        [Date.UTC(2013, 01, 7, 04), 400],
                        [Date.UTC(2013, 01, 9, 05), 400],
                        [Date.UTC(2013, 01, 15, 03), 400]
                    ]},
                    { name: '宝宝', color: '#EEEE00', data: [[Date.UTC(2013, 01, 01, 03), 600]] }
                ]
           });
       });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="container" style="min-width: 800px; height: 400px;"></div>
</asp:Content>
