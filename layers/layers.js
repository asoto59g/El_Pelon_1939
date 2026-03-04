var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Fondo_1 = new ol.layer.Tile({
            'title': 'Fondo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'fondo/{z}/{x}/{y}.png'
            })
        });

        var lyr_apartos_2 = new ol.layer.Tile({
            'title': 'apartos',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: ' "apartos/{z}/{x}/{y}.png"'
            })
        });
var format_Caminos_3 = new ol.format.GeoJSON();
var features_Caminos_3 = format_Caminos_3.readFeatures(json_Caminos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caminos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminos_3.addFeatures(features_Caminos_3);
var lyr_Caminos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caminos_3, 
                style: style_Caminos_3,
                popuplayertitle: 'Caminos',
                interactive: true,
                title: '<img src="styles/legend/Caminos_3.png" /> Caminos'
            });

        var lyr_rios_4 = new ol.layer.Tile({
            'title': 'rios',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'rios/{z}/{x}/{y}.png'
            })
        });

        var lyr_Colindantes_5 = new ol.layer.Tile({
            'title': 'Colindantes',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'Colindantes/{z}/{x}/{y}.png'
            })
        });
var group_Pelon1939 = new ol.layer.Group({
                                layers: [lyr_Fondo_1,lyr_apartos_2,lyr_Caminos_3,lyr_rios_4,lyr_Colindantes_5,],
                                fold: 'open',
                                title: 'Pelon 1939'});
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

lyr_googlesatellitehybrid_0.setVisible(true);lyr_Fondo_1.setVisible(true);lyr_apartos_2.setVisible(true);lyr_Caminos_3.setVisible(true);lyr_rios_4.setVisible(true);lyr_Colindantes_5.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,group_Pelon1939];
lyr_Caminos_3.set('fieldAliases', {'id': 'id', });
lyr_Caminos_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Caminos_3.set('fieldLabels', {'id': 'no label', });
lyr_Caminos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});