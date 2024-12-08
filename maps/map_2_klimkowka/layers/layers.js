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
var format_0920_klimkowka_lp_xyz_EPSG2180_2 = new ol.format.GeoJSON();
var features_0920_klimkowka_lp_xyz_EPSG2180_2 = format_0920_klimkowka_lp_xyz_EPSG2180_2.readFeatures(json_0920_klimkowka_lp_xyz_EPSG2180_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0920_klimkowka_lp_xyz_EPSG2180_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0920_klimkowka_lp_xyz_EPSG2180_2.addFeatures(features_0920_klimkowka_lp_xyz_EPSG2180_2);
var lyr_0920_klimkowka_lp_xyz_EPSG2180_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0920_klimkowka_lp_xyz_EPSG2180_2, 
                style: style_0920_klimkowka_lp_xyz_EPSG2180_2,
                popuplayertitle: "0920_klimkowka_l.p_xyz_EPSG2180",
                interactive: true,
                title: '<img src="styles/legend/0920_klimkowka_lp_xyz_EPSG2180_2.png" /> 0920_klimkowka_l.p_xyz_EPSG2180'
            });
var format_geopackage_3 = new ol.format.GeoJSON();
var features_geopackage_3 = format_geopackage_3.readFeatures(json_geopackage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geopackage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geopackage_3.addFeatures(features_geopackage_3);
var lyr_geopackage_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geopackage_3, 
                style: style_geopackage_3,
                popuplayertitle: "geopackage",
                interactive: true,
                title: '<img src="styles/legend/geopackage_3.png" /> geopackage'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GeoportalOrtofotomapaWMS_1.setVisible(true);lyr_0920_klimkowka_lp_xyz_EPSG2180_2.setVisible(false);lyr_geopackage_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GeoportalOrtofotomapaWMS_1,lyr_0920_klimkowka_lp_xyz_EPSG2180_2,lyr_geopackage_3];
lyr_0920_klimkowka_lp_xyz_EPSG2180_2.set('fieldAliases', {'L.p': 'L.p', 'X (Easting)': 'X (Easting)', 'Y (Northing)': 'Y (Northing)', 'Z': 'Z', });
lyr_geopackage_3.set('fieldAliases', {'fid': 'fid', 'photo_url': 'photo_url', });
lyr_0920_klimkowka_lp_xyz_EPSG2180_2.set('fieldImages', {'L.p': '', 'X (Easting)': '', 'Y (Northing)': '', 'Z': '', });
lyr_geopackage_3.set('fieldImages', {'fid': 'TextEdit', 'photo_url': 'ExternalResource', });
lyr_0920_klimkowka_lp_xyz_EPSG2180_2.set('fieldLabels', {'L.p': 'inline label - always visible', 'X (Easting)': 'inline label - always visible', 'Y (Northing)': 'inline label - always visible', 'Z': 'inline label - always visible', });
lyr_geopackage_3.set('fieldLabels', {'fid': 'inline label - always visible', 'photo_url': 'inline label - always visible', });
lyr_geopackage_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});