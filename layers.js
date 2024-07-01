var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_KerawananBanjir_1 = new ol.format.GeoJSON();
var features_KerawananBanjir_1 = format_KerawananBanjir_1.readFeatures(json_KerawananBanjir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerawananBanjir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerawananBanjir_1.addFeatures(features_KerawananBanjir_1);
var lyr_KerawananBanjir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerawananBanjir_1, 
                style: style_KerawananBanjir_1,
                popuplayertitle: "Kerawanan Banjir",
                interactive: true,
    title: 'Kerawanan Banjir<br />\
    <img src="styles/legend/KerawananBanjir_1_0.png" /> Tingkat Kerawanan Sangat Rendah<br />\
    <img src="styles/legend/KerawananBanjir_1_1.png" /> Tingkat Kerawanan Rendah<br />\
    <img src="styles/legend/KerawananBanjir_1_2.png" /> Tingkat Kerawanan Sedang<br />\
    <img src="styles/legend/KerawananBanjir_1_3.png" /> Tingkat Kerawanan Tinggi<br />\
    <img src="styles/legend/KerawananBanjir_1_4.png" /> Tingkat Kerawanan Sangat Tinggi<br />\
    <img src="styles/legend/KerawananBanjir_1_5.png" /> Tidak ada data<br />'
        });
var format_BatasKecamatan_2 = new ol.format.GeoJSON();
var features_BatasKecamatan_2 = format_BatasKecamatan_2.readFeatures(json_BatasKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_2.addFeatures(features_BatasKecamatan_2);
var lyr_BatasKecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_2, 
                style: style_BatasKecamatan_2,
                popuplayertitle: "Batas Kecamatan",
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_2.png" /> Batas Kecamatan'
            });
var format_BatasKota_3 = new ol.format.GeoJSON();
var features_BatasKota_3 = format_BatasKota_3.readFeatures(json_BatasKota_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKota_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKota_3.addFeatures(features_BatasKota_3);
var lyr_BatasKota_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKota_3, 
                style: style_BatasKota_3,
                popuplayertitle: "Batas Kota",
                interactive: true,
                title: '<img src="styles/legend/BatasKota_3.png" /> Batas Kota'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_KerawananBanjir_1.setVisible(true);lyr_BatasKecamatan_2.setVisible(true);lyr_BatasKota_3.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_KerawananBanjir_1,lyr_BatasKecamatan_2,lyr_BatasKota_3];
lyr_KerawananBanjir_1.set('fieldAliases', {'fid': 'fid', 'Nama Kecamatan': 'Nama Kecamatan', 'Luas Kecamatan (ha)': 'Luas Kecamatan (ha)', 'Klasifikasi': 'Klasifikasi', });
lyr_BatasKecamatan_2.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_BatasKota_3.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_KerawananBanjir_1.set('fieldImages', {'fid': 'TextEdit', 'Nama Kecamatan': 'TextEdit', 'Luas Kecamatan (ha)': 'TextEdit', 'Klasifikasi': 'TextEdit', });
lyr_BatasKecamatan_2.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_BatasKota_3.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_KerawananBanjir_1.set('fieldLabels', {'fid': 'hidden field', 'Nama Kecamatan': 'inline label - always visible', 'Luas Kecamatan (ha)': 'inline label - always visible', 'Klasifikasi': 'inline label - always visible', });
lyr_BatasKecamatan_2.set('fieldLabels', {'WADMKC': 'hidden field', });
lyr_BatasKota_3.set('fieldLabels', {'WADMKC': 'hidden field', });
lyr_BatasKota_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});