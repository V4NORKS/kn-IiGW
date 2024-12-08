var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_GeoportalOrtofotomapaWMS_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution?",
    attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Geoportal Ortofotomapa WMS",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GeoportalOrtofotomapaWMS_1, 0]);
var format_gnss_1_2 = new ol.format.GeoJSON();
var features_gnss_1_2 = format_gnss_1_2.readFeatures(json_gnss_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gnss_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gnss_1_2.addFeatures(features_gnss_1_2);
var lyr_gnss_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gnss_1_2, 
                style: style_gnss_1_2,
                popuplayertitle: "gnss_1",
                interactive: true,
    title: 'gnss_1<br />\
    <img src="styles/legend/gnss_1_2_0.png" /> 1<br />\
    <img src="styles/legend/gnss_1_2_1.png" /> 2<br />\
    <img src="styles/legend/gnss_1_2_2.png" /> 3<br />\
    <img src="styles/legend/gnss_1_2_3.png" /> 4<br />\
    <img src="styles/legend/gnss_1_2_4.png" /> 5<br />\
    <img src="styles/legend/gnss_1_2_5.png" /> 6<br />\
    <img src="styles/legend/gnss_1_2_6.png" /> 7<br />\
    <img src="styles/legend/gnss_1_2_7.png" /> 8<br />\
    <img src="styles/legend/gnss_1_2_8.png" /> 9<br />\
    <img src="styles/legend/gnss_1_2_9.png" /> 10<br />\
    <img src="styles/legend/gnss_1_2_10.png" /> 11<br />\
    <img src="styles/legend/gnss_1_2_11.png" /> 12<br />\
    <img src="styles/legend/gnss_1_2_12.png" /> 13<br />\
    <img src="styles/legend/gnss_1_2_13.png" /> 14<br />\
    <img src="styles/legend/gnss_1_2_14.png" /> 15<br />\
    <img src="styles/legend/gnss_1_2_15.png" /> 16<br />\
    <img src="styles/legend/gnss_1_2_16.png" /> 17<br />\
    <img src="styles/legend/gnss_1_2_17.png" /> 18<br />\
    <img src="styles/legend/gnss_1_2_18.png" /> 19<br />\
    <img src="styles/legend/gnss_1_2_19.png" /> 20<br />\
    <img src="styles/legend/gnss_1_2_20.png" /> 21<br />\
    <img src="styles/legend/gnss_1_2_21.png" /> 22<br />\
    <img src="styles/legend/gnss_1_2_22.png" /> 23<br />\
    <img src="styles/legend/gnss_1_2_23.png" /> 24<br />\
    <img src="styles/legend/gnss_1_2_24.png" /> 25<br />\
    <img src="styles/legend/gnss_1_2_25.png" /> 26<br />\
    <img src="styles/legend/gnss_1_2_26.png" /> 27<br />\
    <img src="styles/legend/gnss_1_2_27.png" /> 28<br />\
    <img src="styles/legend/gnss_1_2_28.png" /> 29<br />\
    <img src="styles/legend/gnss_1_2_29.png" /> 30<br />\
    <img src="styles/legend/gnss_1_2_30.png" /> 31<br />\
    <img src="styles/legend/gnss_1_2_31.png" /> 32<br />\
    <img src="styles/legend/gnss_1_2_32.png" /> 33<br />\
    <img src="styles/legend/gnss_1_2_33.png" /> 34<br />\
    <img src="styles/legend/gnss_1_2_34.png" /> 35<br />\
    <img src="styles/legend/gnss_1_2_35.png" /> 36<br />\
    <img src="styles/legend/gnss_1_2_36.png" /> 37<br />\
    <img src="styles/legend/gnss_1_2_37.png" /> 38<br />\
    <img src="styles/legend/gnss_1_2_38.png" /> 39<br />\
    <img src="styles/legend/gnss_1_2_39.png" /> 40<br />\
    <img src="styles/legend/gnss_1_2_40.png" /> 41<br />\
    <img src="styles/legend/gnss_1_2_41.png" /> 42<br />\
    <img src="styles/legend/gnss_1_2_42.png" /> <br />'
        });
var format_gnss_2_3 = new ol.format.GeoJSON();
var features_gnss_2_3 = format_gnss_2_3.readFeatures(json_gnss_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gnss_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gnss_2_3.addFeatures(features_gnss_2_3);
var lyr_gnss_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gnss_2_3, 
                style: style_gnss_2_3,
                popuplayertitle: "gnss_2",
                interactive: true,
    title: 'gnss_2<br />\
    <img src="styles/legend/gnss_2_3_0.png" /> 1<br />\
    <img src="styles/legend/gnss_2_3_1.png" /> 2<br />\
    <img src="styles/legend/gnss_2_3_2.png" /> 3<br />\
    <img src="styles/legend/gnss_2_3_3.png" /> 4<br />\
    <img src="styles/legend/gnss_2_3_4.png" /> 5<br />\
    <img src="styles/legend/gnss_2_3_5.png" /> 6<br />\
    <img src="styles/legend/gnss_2_3_6.png" /> 7<br />\
    <img src="styles/legend/gnss_2_3_7.png" /> 8<br />\
    <img src="styles/legend/gnss_2_3_8.png" /> 9<br />\
    <img src="styles/legend/gnss_2_3_9.png" /> 10<br />\
    <img src="styles/legend/gnss_2_3_10.png" /> 11<br />\
    <img src="styles/legend/gnss_2_3_11.png" /> 12<br />\
    <img src="styles/legend/gnss_2_3_12.png" /> 13<br />\
    <img src="styles/legend/gnss_2_3_13.png" /> 14<br />\
    <img src="styles/legend/gnss_2_3_14.png" /> 15<br />\
    <img src="styles/legend/gnss_2_3_15.png" /> 16<br />\
    <img src="styles/legend/gnss_2_3_16.png" /> 17<br />\
    <img src="styles/legend/gnss_2_3_17.png" /> 18<br />\
    <img src="styles/legend/gnss_2_3_18.png" /> 19<br />\
    <img src="styles/legend/gnss_2_3_19.png" /> 20<br />\
    <img src="styles/legend/gnss_2_3_20.png" /> 21<br />\
    <img src="styles/legend/gnss_2_3_21.png" /> 22<br />\
    <img src="styles/legend/gnss_2_3_22.png" /> 23<br />\
    <img src="styles/legend/gnss_2_3_23.png" /> 24<br />\
    <img src="styles/legend/gnss_2_3_24.png" /> 25<br />\
    <img src="styles/legend/gnss_2_3_25.png" /> 26<br />\
    <img src="styles/legend/gnss_2_3_26.png" /> 27<br />\
    <img src="styles/legend/gnss_2_3_27.png" /> 28<br />\
    <img src="styles/legend/gnss_2_3_28.png" /> 29<br />\
    <img src="styles/legend/gnss_2_3_29.png" /> 30<br />\
    <img src="styles/legend/gnss_2_3_30.png" /> 31<br />\
    <img src="styles/legend/gnss_2_3_31.png" /> 32<br />\
    <img src="styles/legend/gnss_2_3_32.png" /> 33<br />\
    <img src="styles/legend/gnss_2_3_33.png" /> 34<br />\
    <img src="styles/legend/gnss_2_3_34.png" /> 35<br />\
    <img src="styles/legend/gnss_2_3_35.png" /> 36<br />\
    <img src="styles/legend/gnss_2_3_36.png" /> 37<br />\
    <img src="styles/legend/gnss_2_3_37.png" /> 38<br />\
    <img src="styles/legend/gnss_2_3_38.png" /> 39<br />\
    <img src="styles/legend/gnss_2_3_39.png" /> 40<br />\
    <img src="styles/legend/gnss_2_3_40.png" /> 41<br />\
    <img src="styles/legend/gnss_2_3_41.png" /> 42<br />\
    <img src="styles/legend/gnss_2_3_42.png" /> 43<br />\
    <img src="styles/legend/gnss_2_3_43.png" /> 44<br />\
    <img src="styles/legend/gnss_2_3_44.png" /> 45<br />\
    <img src="styles/legend/gnss_2_3_45.png" /> 46<br />\
    <img src="styles/legend/gnss_2_3_46.png" /> 47<br />\
    <img src="styles/legend/gnss_2_3_47.png" /> 48<br />\
    <img src="styles/legend/gnss_2_3_48.png" /> 49<br />\
    <img src="styles/legend/gnss_2_3_49.png" /> 50<br />\
    <img src="styles/legend/gnss_2_3_50.png" /> 51<br />\
    <img src="styles/legend/gnss_2_3_51.png" /> 52<br />\
    <img src="styles/legend/gnss_2_3_52.png" /> 53<br />\
    <img src="styles/legend/gnss_2_3_53.png" /> 54<br />\
    <img src="styles/legend/gnss_2_3_54.png" /> 55<br />\
    <img src="styles/legend/gnss_2_3_55.png" /> 56<br />\
    <img src="styles/legend/gnss_2_3_56.png" /> 57<br />\
    <img src="styles/legend/gnss_2_3_57.png" /> 58<br />\
    <img src="styles/legend/gnss_2_3_58.png" /> 59<br />\
    <img src="styles/legend/gnss_2_3_59.png" /> 60<br />\
    <img src="styles/legend/gnss_2_3_60.png" /> 61<br />\
    <img src="styles/legend/gnss_2_3_61.png" /> 62<br />\
    <img src="styles/legend/gnss_2_3_62.png" /> 63<br />\
    <img src="styles/legend/gnss_2_3_63.png" /> 64<br />\
    <img src="styles/legend/gnss_2_3_64.png" /> 65<br />\
    <img src="styles/legend/gnss_2_3_65.png" /> 66<br />\
    <img src="styles/legend/gnss_2_3_66.png" /> 67<br />\
    <img src="styles/legend/gnss_2_3_67.png" /> 68<br />\
    <img src="styles/legend/gnss_2_3_68.png" /> 69<br />\
    <img src="styles/legend/gnss_2_3_69.png" /> 70<br />\
    <img src="styles/legend/gnss_2_3_70.png" /> 71<br />\
    <img src="styles/legend/gnss_2_3_71.png" /> 72<br />\
    <img src="styles/legend/gnss_2_3_72.png" /> 73<br />\
    <img src="styles/legend/gnss_2_3_73.png" /> 74<br />\
    <img src="styles/legend/gnss_2_3_74.png" /> 75<br />\
    <img src="styles/legend/gnss_2_3_75.png" /> 76<br />\
    <img src="styles/legend/gnss_2_3_76.png" /> 77<br />\
    <img src="styles/legend/gnss_2_3_77.png" /> 78<br />\
    <img src="styles/legend/gnss_2_3_78.png" /> 79<br />\
    <img src="styles/legend/gnss_2_3_79.png" /> 80<br />\
    <img src="styles/legend/gnss_2_3_80.png" /> 81<br />\
    <img src="styles/legend/gnss_2_3_81.png" /> 82<br />\
    <img src="styles/legend/gnss_2_3_82.png" /> 83<br />\
    <img src="styles/legend/gnss_2_3_83.png" /> 84<br />\
    <img src="styles/legend/gnss_2_3_84.png" /> 85<br />\
    <img src="styles/legend/gnss_2_3_85.png" /> 86<br />\
    <img src="styles/legend/gnss_2_3_86.png" /> 87<br />\
    <img src="styles/legend/gnss_2_3_87.png" /> 88<br />\
    <img src="styles/legend/gnss_2_3_88.png" /> 89<br />\
    <img src="styles/legend/gnss_2_3_89.png" /> 90<br />\
    <img src="styles/legend/gnss_2_3_90.png" /> 91<br />\
    <img src="styles/legend/gnss_2_3_91.png" /> 92<br />\
    <img src="styles/legend/gnss_2_3_92.png" /> 93<br />\
    <img src="styles/legend/gnss_2_3_93.png" /> 94<br />\
    <img src="styles/legend/gnss_2_3_94.png" /> 95<br />\
    <img src="styles/legend/gnss_2_3_95.png" /> 96<br />\
    <img src="styles/legend/gnss_2_3_96.png" /> 97<br />\
    <img src="styles/legend/gnss_2_3_97.png" /> 98<br />\
    <img src="styles/legend/gnss_2_3_98.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GeoportalOrtofotomapaWMS_1.setVisible(true);lyr_gnss_1_2.setVisible(true);lyr_gnss_2_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GeoportalOrtofotomapaWMS_1,lyr_gnss_1_2,lyr_gnss_2_3];
lyr_gnss_1_2.set('fieldAliases', {'Lp': 'Lp', 'x': 'x', 'y': 'y', 'h': 'h', 'Kod': 'Kod', });
lyr_gnss_2_3.set('fieldAliases', {'Lp': 'Lp', 'x': 'x', 'y': 'y', 'h': 'h', 'Kod': 'Kod', });
lyr_gnss_1_2.set('fieldImages', {'Lp': '', 'x': '', 'y': '', 'h': '', 'Kod': '', });
lyr_gnss_2_3.set('fieldImages', {'Lp': '', 'x': '', 'y': '', 'h': '', 'Kod': '', });
lyr_gnss_1_2.set('fieldLabels', {'Lp': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'h': 'inline label - always visible', 'Kod': 'inline label - always visible', });
lyr_gnss_2_3.set('fieldLabels', {'Lp': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'h': 'inline label - always visible', 'Kod': 'inline label - always visible', });
lyr_gnss_2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});