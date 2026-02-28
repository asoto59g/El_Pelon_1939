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
var group_MapaCatastral = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mapa Catastral'});
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

lyr_googlesatellitehybrid_0.setVisible(true);lyr_pelon1939_1.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_pelon1939_1];
