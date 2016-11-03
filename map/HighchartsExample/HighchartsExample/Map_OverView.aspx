<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeBehind="Map_OverView.aspx.cs" Inherits="HighchartsExample.Map_OverView" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="map/css/jquery-ui.css" rel="stylesheet"/>
    <link href="map/css/font-awesome.css" rel="stylesheet"/>
    <link href="map/css/map.css" rel="stylesheet"/>

    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="map/js/highmaps.js"></script>
    <script type="text/javascript">
        $(function () {
            // When the map is loaded or ready from cache...
            function mapReady() {
                var mapGeoJSON = Highcharts.maps['countries/cn/cn-all'];
                var data = [];

                // Generate non-random data for the map
                $.each(mapGeoJSON.features, function (index, feature) {
                    data.push({
                        key: feature.properties['hc-key'],
                        value: index
                    });
                });

                // Instantiate chart
                $("#container").highcharts('Map', {
                    title: {
                        text: "中国地图"
                    },

                    mapNavigation: {
                        enabled: true
                    },

                    colorAxis: {
                        min: 0,
                        stops: [
                                [0, '#EFEFFF'],
                                [0.5, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()]
                            ]
                    },

                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'bottom'
                    },

                    series: [{
                        data: data,
                        mapData: mapGeoJSON,
                        joinBy: ['hc-key', 'key'],
                        name: '人口量',
                        states: {
                            hover: {
                                color: Highcharts.getOptions().colors[2]
                            }
                        },
                        dataLabels: {
                            enabled: true,//设置省份名称是否显示
                            formatter: function () {
                                return this.point.name;
                            }
                        }
//                        ,point: {
//                            events: {
//                                click: function () {
//                                    var key = this.key;
//                                    $('#mapDropdown option').each(function () {
//                                        if (this.value === 'countries/' + key.substr(0, 2) + '/' + key + '-all.js') {
//                                            $('#mapDropdown').val(this.value).change();
//                                        }
//                                    });
//                                }
//                            }
//                        }
                    }, {
                        type: 'mapline',
                        name: "Separators",
                        data: Highcharts.geojson(mapGeoJSON, 'mapline'),
                        nullColor: 'gray',
                        showInLegend: false,
                        enableMouseTracking: false
                    }]
                });
            }

            $.getScript('map/js/cn-all.js', mapReady);
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="demo-wrapper">
    <div id="mapBox">
        <div id="container"></div> 
    </div>
</div>
</asp:Content>