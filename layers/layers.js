ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21897").setExtent([713736.679886, 1402099.069975, 878600.714382, 1483248.978995]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_areas_priorizada_1 = new ol.format.GeoJSON();
var features_areas_priorizada_1 = format_areas_priorizada_1.readFeatures(json_areas_priorizada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21897'});
var jsonSource_areas_priorizada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_priorizada_1.addFeatures(features_areas_priorizada_1);
var lyr_areas_priorizada_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_priorizada_1, 
                style: style_areas_priorizada_1,
                popuplayertitle: 'areas_priorizada',
                interactive: true,
                title: '<img src="styles/legend/areas_priorizada_1.png" /> areas_priorizada'
            });
var format_monteria_2 = new ol.format.GeoJSON();
var features_monteria_2 = format_monteria_2.readFeatures(json_monteria_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21897'});
var jsonSource_monteria_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_monteria_2.addFeatures(features_monteria_2);
var lyr_monteria_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_monteria_2, 
                style: style_monteria_2,
                popuplayertitle: 'monteria',
                interactive: false,
                title: '<img src="styles/legend/monteria_2.png" /> monteria'
            });
var format_Runap_Monteria_3 = new ol.format.GeoJSON();
var features_Runap_Monteria_3 = format_Runap_Monteria_3.readFeatures(json_Runap_Monteria_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21897'});
var jsonSource_Runap_Monteria_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runap_Monteria_3.addFeatures(features_Runap_Monteria_3);
var lyr_Runap_Monteria_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runap_Monteria_3, 
                style: style_Runap_Monteria_3,
                popuplayertitle: 'Runap_Monteria',
                interactive: true,
                title: '<img src="styles/legend/Runap_Monteria_3.png" /> Runap_Monteria'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_areas_priorizada_1.setVisible(true);lyr_monteria_2.setVisible(true);lyr_Runap_Monteria_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_areas_priorizada_1,lyr_monteria_2,lyr_Runap_Monteria_3];
lyr_areas_priorizada_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CUGEOL1_': 'CUGEOL1_', 'CUGEOL1_ID': 'CUGEOL1_ID', 'U5_': 'U5_', 'U5_ID': 'U5_ID', 'CORDOBA1_': 'CORDOBA1_', 'CORDOBA1_I': 'CORDOBA1_I', 'AREA_1': 'AREA_1', 'PERIMETE_1': 'PERIMETE_1', 'CORDOBA11': 'CORDOBA11', 'CORDOBA1_1': 'CORDOBA1_1', 'AREA_12': 'AREA_12', 'PERIMETE_2': 'PERIMETE_2', 'UCG_P_': 'UCG_P_', 'UCG_P_ID': 'UCG_P_ID', 'COD': 'COD', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', 'AREA_12_13': 'AREA_12_13', 'PERIMETE_3': 'PERIMETE_3', 'CORDOBA1_2': 'CORDOBA1_2', 'CORDOBA1_3': 'CORDOBA1_3', 'AREA_12_14': 'AREA_12_14', 'PERIMETE_4': 'PERIMETE_4', 'UCG_P1': 'UCG_P1', 'UCG_P_ID_1': 'UCG_P_ID_1', 'COD_1': 'COD_1', 'SHAPE_LE_2': 'SHAPE_LE_2', 'SHAPE_LE_3': 'SHAPE_LE_3', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_12_15': 'AREA_12_15', 'PERIMETE_5': 'PERIMETE_5', 'COMPILA_': 'COMPILA_', 'COMPILA_ID': 'COMPILA_ID', 'COD_12': 'COD_12', 'UNIDGEOLOG': 'UNIDGEOLOG', 'COD_UHG': 'COD_UHG', 'UNIDHIDROG': 'UNIDHIDROG', 'ETIQUETA': 'ETIQUETA', 'ZONAS_REC': 'ZONAS_REC', });
lyr_monteria_2.set('fieldAliases', {'DPTO': 'DPTO', 'DPTOC_MPIO': 'DPTOC_MPIO', 'MPIO': 'MPIO', 'NOM_DPTO': 'NOM_DPTO', 'NOM_MPIO': 'NOM_MPIO', 'AREA': 'AREA', 'PER_MPIO': 'PER_MPIO', 'AREA_MPIO': 'AREA_MPIO', });
lyr_Runap_Monteria_3.set('fieldAliases', {'objectid': 'objectid', 'ap_id': 'ap_id', 'condicion': 'condicion', 'ap_nombre': 'ap_nombre', 'ap_categor': 'ap_categor', 'ap_shape_i': 'ap_shape_i', 'fecha_insc': 'fecha_insc', 'fecha_regi': 'fecha_regi', 'organizaci': 'organizaci', 'nit': 'nit', 'area_ha_to': 'area_ha_to', 'area_ha_ma': 'area_ha_ma', 'area_ha_te': 'area_ha_te', 'centroide_': 'centroide_', 'centroid_1': 'centroid_1', 'area_ha__1': 'area_ha__1', 'area_ha__2': 'area_ha__2', 'area_ha__3': 'area_ha__3', 'territoria': 'territoria', 'sirap': 'sirap', 'url': 'url', 'wkid': 'wkid', 'territor_1': 'territor_1', });
lyr_areas_priorizada_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CUGEOL1_': 'Range', 'CUGEOL1_ID': 'Range', 'U5_': 'Range', 'U5_ID': 'Range', 'CORDOBA1_': 'Range', 'CORDOBA1_I': 'Range', 'AREA_1': 'TextEdit', 'PERIMETE_1': 'TextEdit', 'CORDOBA11': 'Range', 'CORDOBA1_1': 'Range', 'AREA_12': 'TextEdit', 'PERIMETE_2': 'TextEdit', 'UCG_P_': 'Range', 'UCG_P_ID': 'Range', 'COD': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'AREA_12_13': 'TextEdit', 'PERIMETE_3': 'TextEdit', 'CORDOBA1_2': 'Range', 'CORDOBA1_3': 'Range', 'AREA_12_14': 'TextEdit', 'PERIMETE_4': 'TextEdit', 'UCG_P1': 'Range', 'UCG_P_ID_1': 'Range', 'COD_1': 'TextEdit', 'SHAPE_LE_2': 'TextEdit', 'SHAPE_LE_3': 'TextEdit', 'SHAPE_AR_1': 'TextEdit', 'AREA_12_15': 'TextEdit', 'PERIMETE_5': 'TextEdit', 'COMPILA_': 'Range', 'COMPILA_ID': 'Range', 'COD_12': 'TextEdit', 'UNIDGEOLOG': 'TextEdit', 'COD_UHG': 'Range', 'UNIDHIDROG': 'TextEdit', 'ETIQUETA': 'TextEdit', 'ZONAS_REC': 'TextEdit', });
lyr_monteria_2.set('fieldImages', {'DPTO': 'TextEdit', 'DPTOC_MPIO': 'TextEdit', 'MPIO': 'TextEdit', 'NOM_DPTO': 'TextEdit', 'NOM_MPIO': 'TextEdit', 'AREA': 'TextEdit', 'PER_MPIO': 'TextEdit', 'AREA_MPIO': 'TextEdit', });
lyr_Runap_Monteria_3.set('fieldImages', {'objectid': 'TextEdit', 'ap_id': 'TextEdit', 'condicion': 'TextEdit', 'ap_nombre': 'TextEdit', 'ap_categor': 'TextEdit', 'ap_shape_i': 'TextEdit', 'fecha_insc': 'TextEdit', 'fecha_regi': 'TextEdit', 'organizaci': 'TextEdit', 'nit': 'TextEdit', 'area_ha_to': 'TextEdit', 'area_ha_ma': 'TextEdit', 'area_ha_te': 'TextEdit', 'centroide_': 'TextEdit', 'centroid_1': 'TextEdit', 'area_ha__1': 'TextEdit', 'area_ha__2': 'TextEdit', 'area_ha__3': 'TextEdit', 'territoria': 'TextEdit', 'sirap': 'TextEdit', 'url': 'TextEdit', 'wkid': 'TextEdit', 'territor_1': 'TextEdit', });
lyr_areas_priorizada_1.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'CUGEOL1_': 'hidden field', 'CUGEOL1_ID': 'hidden field', 'U5_': 'hidden field', 'U5_ID': 'hidden field', 'CORDOBA1_': 'hidden field', 'CORDOBA1_I': 'hidden field', 'AREA_1': 'hidden field', 'PERIMETE_1': 'hidden field', 'CORDOBA11': 'hidden field', 'CORDOBA1_1': 'hidden field', 'AREA_12': 'hidden field', 'PERIMETE_2': 'hidden field', 'UCG_P_': 'hidden field', 'UCG_P_ID': 'hidden field', 'COD': 'hidden field', 'SHAPE_LENG': 'hidden field', 'SHAPE_LE_1': 'hidden field', 'SHAPE_AREA': 'hidden field', 'AREA_12_13': 'hidden field', 'PERIMETE_3': 'hidden field', 'CORDOBA1_2': 'hidden field', 'CORDOBA1_3': 'hidden field', 'AREA_12_14': 'hidden field', 'PERIMETE_4': 'hidden field', 'UCG_P1': 'hidden field', 'UCG_P_ID_1': 'hidden field', 'COD_1': 'hidden field', 'SHAPE_LE_2': 'hidden field', 'SHAPE_LE_3': 'hidden field', 'SHAPE_AR_1': 'hidden field', 'AREA_12_15': 'hidden field', 'PERIMETE_5': 'hidden field', 'COMPILA_': 'hidden field', 'COMPILA_ID': 'hidden field', 'COD_12': 'hidden field', 'UNIDGEOLOG': 'inline label - always visible', 'COD_UHG': 'hidden field', 'UNIDHIDROG': 'inline label - always visible', 'ETIQUETA': 'hidden field', 'ZONAS_REC': 'inline label - always visible', });
lyr_monteria_2.set('fieldLabels', {'DPTO': 'hidden field', 'DPTOC_MPIO': 'hidden field', 'MPIO': 'hidden field', 'NOM_DPTO': 'hidden field', 'NOM_MPIO': 'hidden field', 'AREA': 'hidden field', 'PER_MPIO': 'hidden field', 'AREA_MPIO': 'hidden field', });
lyr_Runap_Monteria_3.set('fieldLabels', {'objectid': 'hidden field', 'ap_id': 'hidden field', 'condicion': 'hidden field', 'ap_nombre': 'inline label - always visible', 'ap_categor': 'inline label - always visible', 'ap_shape_i': 'hidden field', 'fecha_insc': 'hidden field', 'fecha_regi': 'hidden field', 'organizaci': 'inline label - always visible', 'nit': 'hidden field', 'area_ha_to': 'hidden field', 'area_ha_ma': 'hidden field', 'area_ha_te': 'hidden field', 'centroide_': 'hidden field', 'centroid_1': 'hidden field', 'area_ha__1': 'hidden field', 'area_ha__2': 'hidden field', 'area_ha__3': 'hidden field', 'territoria': 'hidden field', 'sirap': 'hidden field', 'url': 'hidden field', 'wkid': 'hidden field', 'territor_1': 'hidden field', });
lyr_Runap_Monteria_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});