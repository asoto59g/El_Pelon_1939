var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_pelon1939_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'pelon1939<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/pelon1939_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9518130.977848, 1163131.014895, -9500978.644076, 1184883.606755]
        })
    });
var format_Apartos_2 = new ol.format.GeoJSON();
var features_Apartos_2 = format_Apartos_2.readFeatures(json_Apartos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apartos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apartos_2.addFeatures(features_Apartos_2);
var lyr_Apartos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apartos_2, 
                style: style_Apartos_2,
                popuplayertitle: 'Apartos',
                interactive: true,
    title: 'Apartos<br />\
    <img src="styles/legend/Apartos_2_0.png" /> Baldioceda<br />\
    <img src="styles/legend/Apartos_2_1.png" /> Bosque<br />\
    <img src="styles/legend/Apartos_2_2.png" /> Chicharron<br />\
    <img src="styles/legend/Apartos_2_3.png" /> Desembocadura<br />\
    <img src="styles/legend/Apartos_2_4.png" /> Intermitente<br />\
    <img src="styles/legend/Apartos_2_5.png" /> La Isla<br />\
    <img src="styles/legend/Apartos_2_6.png" /> Panzada<br />\
    <img src="styles/legend/Apartos_2_7.png" /> Pastizales<br />\
    <img src="styles/legend/Apartos_2_8.png" /> Pochotada<br />\
    <img src="styles/legend/Apartos_2_9.png" /> Potrero<br />\
    <img src="styles/legend/Apartos_2_10.png" /> Secundario<br />\
    <img src="styles/legend/Apartos_2_11.png" /> Solar<br />\
    <img src="styles/legend/Apartos_2_12.png" /> Zapal<br />' });
var format_Rios_3 = new ol.format.GeoJSON();
var features_Rios_3 = format_Rios_3.readFeatures(json_Rios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_3.addFeatures(features_Rios_3);
var lyr_Rios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_3, 
                style: style_Rios_3,
                popuplayertitle: 'Rios',
                interactive: true,
                title: '<img src="styles/legend/Rios_3.png" /> Rios'
            });
var format_Caminos_4 = new ol.format.GeoJSON();
var features_Caminos_4 = format_Caminos_4.readFeatures(json_Caminos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caminos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminos_4.addFeatures(features_Caminos_4);
var lyr_Caminos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caminos_4, 
                style: style_Caminos_4,
                popuplayertitle: 'Caminos',
                interactive: true,
                title: '<img src="styles/legend/Caminos_4.png" /> Caminos'
            });
var group_Pelonvect = new ol.layer.Group({
                                layers: [lyr_Apartos_2,lyr_Rios_3,lyr_Caminos_4,],
                                fold: 'open',
                                title: 'Pelon vect'});
var group_Cartografia5k = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cartografia 5k'});
var group_Cartografia25k = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cartografia 25k'});
var group_Mosaicosdehojas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mosaicos de hojas'});
var group_Ortofotos = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ortofotos'});
var group_MapaCatastral = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Mapa Catastral'});

lyr_googlesatellitehybrid_0.setVisible(true);lyr_pelon1939_1.setVisible(true);lyr_Apartos_2.setVisible(true);lyr_Rios_3.setVisible(true);lyr_Caminos_4.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_pelon1939_1,group_Pelonvect];
lyr_Apartos_2.set('fieldAliases', {'id': 'id', 'Descripcio': 'Descripcio', 'Hacienda': 'Hacienda', 'AreaHa': 'AreaHa', });
lyr_Rios_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Caminos_4.set('fieldAliases', {'id': 'id', });
lyr_Apartos_2.set('fieldImages', {'id': 'TextEdit', 'Descripcio': 'TextEdit', 'Hacienda': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_Rios_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Caminos_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Apartos_2.set('fieldLabels', {'id': 'no label', 'Descripcio': 'no label', 'Hacienda': 'no label', 'AreaHa': 'no label', });
lyr_Rios_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Caminos_4.set('fieldLabels', {'id': 'no label', });
lyr_Caminos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});