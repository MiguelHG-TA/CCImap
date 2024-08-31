var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_IDH2020_1 = new ol.format.GeoJSON();
var features_IDH2020_1 = format_IDH2020_1.readFeatures(json_IDH2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IDH2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IDH2020_1.addFeatures(features_IDH2020_1);
var lyr_IDH2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IDH2020_1, 
                style: style_IDH2020_1,
                popuplayertitle: "IDH 2020",
                interactive: true,
    title: 'IDH 2020<br />\
    <img src="styles/legend/IDH2020_1_0.png" /> <br />\
    <img src="styles/legend/IDH2020_1_1.png" /> BAJO<br />\
    <img src="styles/legend/IDH2020_1_2.png" /> MEDIO<br />\
    <img src="styles/legend/IDH2020_1_3.png" /> ALTO<br />\
    <img src="styles/legend/IDH2020_1_4.png" /> MUY ALTO<br />'
        });
var format_NMERODEDOCTORESPORCADA100000HAB_2 = new ol.format.GeoJSON();
var features_NMERODEDOCTORESPORCADA100000HAB_2 = format_NMERODEDOCTORESPORCADA100000HAB_2.readFeatures(json_NMERODEDOCTORESPORCADA100000HAB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMERODEDOCTORESPORCADA100000HAB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMERODEDOCTORESPORCADA100000HAB_2.addFeatures(features_NMERODEDOCTORESPORCADA100000HAB_2);
var lyr_NMERODEDOCTORESPORCADA100000HAB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMERODEDOCTORESPORCADA100000HAB_2, 
                style: style_NMERODEDOCTORESPORCADA100000HAB_2,
                popuplayertitle: "NÚMERO DE DOCTORES POR CADA 100000 HAB",
                interactive: true,
    title: 'NÚMERO DE DOCTORES POR CADA 100000 HAB<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_0.png" /> 0 - 5<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_2.png" /> 10 - 15<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_3.png" /> 15 - 20<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_4.png" /> 20 - 25<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_5.png" /> 25 - 30<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_6.png" /> 30 - 35<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_7.png" /> 35 - 40<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_8.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_9.png" /> 0.0 - 0.0<br />'
        });
var format_NMERODECAMPASPORCADA100000HAB_3 = new ol.format.GeoJSON();
var features_NMERODECAMPASPORCADA100000HAB_3 = format_NMERODECAMPASPORCADA100000HAB_3.readFeatures(json_NMERODECAMPASPORCADA100000HAB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMERODECAMPASPORCADA100000HAB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMERODECAMPASPORCADA100000HAB_3.addFeatures(features_NMERODECAMPASPORCADA100000HAB_3);
var lyr_NMERODECAMPASPORCADA100000HAB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMERODECAMPASPORCADA100000HAB_3, 
                style: style_NMERODECAMPASPORCADA100000HAB_3,
                popuplayertitle: "NÚMERO DE CAMPAS POR CADA 100000 HAB",
                interactive: true,
    title: 'NÚMERO DE CAMPAS POR CADA 100000 HAB<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_0.png" /> 0 - 5<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_1.png" /> 5 - 10<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_2.png" /> 10 - 15<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_3.png" /> 15 - 20<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_4.png" /> 20 - 25<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_5.png" /> 25 - 30<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_6.png" /> 30 - 35<br />\
    <img src="styles/legend/NMERODECAMPASPORCADA100000HAB_3_7.png" /> 0.0 - 0.0<br />'
        });
var format_ENFERMEDADESZOONOTICAS_4 = new ol.format.GeoJSON();
var features_ENFERMEDADESZOONOTICAS_4 = format_ENFERMEDADESZOONOTICAS_4.readFeatures(json_ENFERMEDADESZOONOTICAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENFERMEDADESZOONOTICAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENFERMEDADESZOONOTICAS_4.addFeatures(features_ENFERMEDADESZOONOTICAS_4);
var lyr_ENFERMEDADESZOONOTICAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENFERMEDADESZOONOTICAS_4, 
                style: style_ENFERMEDADESZOONOTICAS_4,
                popuplayertitle: "ENFERMEDADES ZOONOTICAS",
                interactive: true,
    title: 'ENFERMEDADES ZOONOTICAS<br />\
    <img src="styles/legend/ENFERMEDADESZOONOTICAS_4_0.png" /> 0 - 20<br />\
    <img src="styles/legend/ENFERMEDADESZOONOTICAS_4_1.png" /> 20 - 40<br />\
    <img src="styles/legend/ENFERMEDADESZOONOTICAS_4_2.png" /> 40 - 60<br />\
    <img src="styles/legend/ENFERMEDADESZOONOTICAS_4_3.png" /> 60 - 80<br />\
    <img src="styles/legend/ENFERMEDADESZOONOTICAS_4_4.png" /> 80 - 100<br />'
        });
var format_BIOSEGURIDAD_5 = new ol.format.GeoJSON();
var features_BIOSEGURIDAD_5 = format_BIOSEGURIDAD_5.readFeatures(json_BIOSEGURIDAD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BIOSEGURIDAD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIOSEGURIDAD_5.addFeatures(features_BIOSEGURIDAD_5);
var lyr_BIOSEGURIDAD_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIOSEGURIDAD_5, 
                style: style_BIOSEGURIDAD_5,
                popuplayertitle: "BIOSEGURIDAD",
                interactive: true,
    title: 'BIOSEGURIDAD<br />\
    <img src="styles/legend/BIOSEGURIDAD_5_0.png" /> 0 - 10<br />\
    <img src="styles/legend/BIOSEGURIDAD_5_1.png" /> 10 - 20<br />\
    <img src="styles/legend/BIOSEGURIDAD_5_2.png" /> 20 - 30<br />\
    <img src="styles/legend/BIOSEGURIDAD_5_3.png" /> 30 - 40<br />\
    <img src="styles/legend/BIOSEGURIDAD_5_4.png" /> 40 - 50<br />\
    <img src="styles/legend/BIOSEGURIDAD_5_5.png" /> 50 - 60<br />\
    <img src="styles/legend/BIOSEGURIDAD_5_6.png" /> 60 - 70<br />'
        });
var format_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6 = new ol.format.GeoJSON();
var features_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6 = format_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6.readFeatures(json_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6.addFeatures(features_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6);
var lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6, 
                style: style_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6,
                popuplayertitle: "CAPACIDAD DE LABORATORIOS NACIONALES PARA PRUEBAS DE PATÓGENOS PRIORITARIOS (AMR)",
                interactive: true,
    title: 'CAPACIDAD DE LABORATORIOS NACIONALES PARA PRUEBAS DE PATÓGENOS PRIORITARIOS (AMR)<br />\
    <img src="styles/legend/CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6_0.png" /> MALA<br />\
    <img src="styles/legend/CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6_1.png" /> MEDIA<br />\
    <img src="styles/legend/CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6_2.png" /> BUENA<br />'
        });
var format_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7 = new ol.format.GeoJSON();
var features_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7 = format_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7.readFeatures(json_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7.addFeatures(features_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7);
var lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7, 
                style: style_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7,
                popuplayertitle: "PRESCRIPCIÓN REQUERIDA PARA ANNTIMICROBIANOS",
                interactive: true,
    title: 'PRESCRIPCIÓN REQUERIDA PARA ANNTIMICROBIANOS<br />\
    <img src="styles/legend/PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7_0.png" /> NO<br />\
    <img src="styles/legend/PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7_1.png" /> SÍ<br />'
        });
var format_CONTROLANTIMICROBIANO_8 = new ol.format.GeoJSON();
var features_CONTROLANTIMICROBIANO_8 = format_CONTROLANTIMICROBIANO_8.readFeatures(json_CONTROLANTIMICROBIANO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTROLANTIMICROBIANO_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTROLANTIMICROBIANO_8.addFeatures(features_CONTROLANTIMICROBIANO_8);
var lyr_CONTROLANTIMICROBIANO_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTROLANTIMICROBIANO_8, 
                style: style_CONTROLANTIMICROBIANO_8,
                popuplayertitle: "CONTROL ANTIMICROBIANO",
                interactive: true,
    title: 'CONTROL ANTIMICROBIANO<br />\
    <img src="styles/legend/CONTROLANTIMICROBIANO_8_0.png" /> NO<br />\
    <img src="styles/legend/CONTROLANTIMICROBIANO_8_1.png" /> MEDIO<br />\
    <img src="styles/legend/CONTROLANTIMICROBIANO_8_2.png" /> SÍ<br />'
        });
var format_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9 = new ol.format.GeoJSON();
var features_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9 = format_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9.readFeatures(json_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9.addFeatures(features_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9);
var lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9, 
                style: style_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9,
                popuplayertitle: "PLAN NACIONAL DE DETECCIÓN DE PATÓGENOS PRIOROTARIOS (AMR)",
                interactive: true,
    title: 'PLAN NACIONAL DE DETECCIÓN DE PATÓGENOS PRIOROTARIOS (AMR)<br />\
    <img src="styles/legend/PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9_0.png" /> NO<br />\
    <img src="styles/legend/PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9_1.png" /> MEDIO<br />\
    <img src="styles/legend/PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9_2.png" /> SÍ<br />'
        });
var format_RESISTENCIAANTIMICROBIANAAMR_10 = new ol.format.GeoJSON();
var features_RESISTENCIAANTIMICROBIANAAMR_10 = format_RESISTENCIAANTIMICROBIANAAMR_10.readFeatures(json_RESISTENCIAANTIMICROBIANAAMR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESISTENCIAANTIMICROBIANAAMR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESISTENCIAANTIMICROBIANAAMR_10.addFeatures(features_RESISTENCIAANTIMICROBIANAAMR_10);
var lyr_RESISTENCIAANTIMICROBIANAAMR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESISTENCIAANTIMICROBIANAAMR_10, 
                style: style_RESISTENCIAANTIMICROBIANAAMR_10,
                popuplayertitle: "RESISTENCIA ANTIMICROBIANA (AMR)",
                interactive: true,
    title: 'RESISTENCIA ANTIMICROBIANA (AMR)<br />\
    <img src="styles/legend/RESISTENCIAANTIMICROBIANAAMR_10_0.png" /> 0 - 0<br />\
    <img src="styles/legend/RESISTENCIAANTIMICROBIANAAMR_10_1.png" /> 0 - 20<br />\
    <img src="styles/legend/RESISTENCIAANTIMICROBIANAAMR_10_2.png" /> 20 - 40<br />\
    <img src="styles/legend/RESISTENCIAANTIMICROBIANAAMR_10_3.png" /> 40 - 60<br />\
    <img src="styles/legend/RESISTENCIAANTIMICROBIANAAMR_10_4.png" /> 60 - 80<br />\
    <img src="styles/legend/RESISTENCIAANTIMICROBIANAAMR_10_5.png" /> 80 - 100<br />'
        });
var format_AMRDETECCINYREPORTE_11 = new ol.format.GeoJSON();
var features_AMRDETECCINYREPORTE_11 = format_AMRDETECCINYREPORTE_11.readFeatures(json_AMRDETECCINYREPORTE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMRDETECCINYREPORTE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMRDETECCINYREPORTE_11.addFeatures(features_AMRDETECCINYREPORTE_11);
var lyr_AMRDETECCINYREPORTE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMRDETECCINYREPORTE_11, 
                style: style_AMRDETECCINYREPORTE_11,
                popuplayertitle: "(AMR)  DETECCIÓN Y REPORTE",
                interactive: true,
    title: '(AMR)  DETECCIÓN Y REPORTE<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_11_0.png" /> 0 - 0<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_11_1.png" /> 0 - 10<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_11_2.png" /> 10 - 15<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_11_3.png" /> 15 - 33<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_11_4.png" /> 33 - 100<br />'
        });
var format_DENSIDADDEPOBLACINHABKM2_12 = new ol.format.GeoJSON();
var features_DENSIDADDEPOBLACINHABKM2_12 = format_DENSIDADDEPOBLACINHABKM2_12.readFeatures(json_DENSIDADDEPOBLACINHABKM2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DENSIDADDEPOBLACINHABKM2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DENSIDADDEPOBLACINHABKM2_12.addFeatures(features_DENSIDADDEPOBLACINHABKM2_12);
var lyr_DENSIDADDEPOBLACINHABKM2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DENSIDADDEPOBLACINHABKM2_12, 
                style: style_DENSIDADDEPOBLACINHABKM2_12,
                popuplayertitle: "DENSIDAD DE POBLACIÓN HAB/KM^2",
                interactive: true,
    title: 'DENSIDAD DE POBLACIÓN HAB/KM^2<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_12_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_12_1.png" /> 0 - 5<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_12_2.png" /> 5 - 18<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_12_3.png" /> 18 - 68<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_12_4.png" /> 68 - 410<br />'
        });
var format_PUNTUACINGENERALDESALUDGHSI_13 = new ol.format.GeoJSON();
var features_PUNTUACINGENERALDESALUDGHSI_13 = format_PUNTUACINGENERALDESALUDGHSI_13.readFeatures(json_PUNTUACINGENERALDESALUDGHSI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTUACINGENERALDESALUDGHSI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTUACINGENERALDESALUDGHSI_13.addFeatures(features_PUNTUACINGENERALDESALUDGHSI_13);
var lyr_PUNTUACINGENERALDESALUDGHSI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTUACINGENERALDESALUDGHSI_13, 
                style: style_PUNTUACINGENERALDESALUDGHSI_13,
                popuplayertitle: "PUNTUACIÓN GENERAL DE SALUD GHSI",
                interactive: true,
    title: 'PUNTUACIÓN GENERAL DE SALUD GHSI<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_0.png" /> 0 - 10<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_1.png" /> 10 - 20<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_2.png" /> 20 - 30<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_3.png" /> 30 - 40<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_4.png" /> 40 - 50<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_5.png" /> 50 - 60<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_6.png" /> 60 - 70<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_7.png" /> 70 - 80<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_8.png" /> 80 - 90<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_13_9.png" /> 90 - 100<br />'
        });
var format_DERESISTENCIA_14 = new ol.format.GeoJSON();
var features_DERESISTENCIA_14 = format_DERESISTENCIA_14.readFeatures(json_DERESISTENCIA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERESISTENCIA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERESISTENCIA_14.addFeatures(features_DERESISTENCIA_14);
var lyr_DERESISTENCIA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERESISTENCIA_14, 
                style: style_DERESISTENCIA_14,
                popuplayertitle: "% DE RESISTENCIA",
                interactive: true,
    title: '% DE RESISTENCIA<br />\
    <img src="styles/legend/DERESISTENCIA_14_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/DERESISTENCIA_14_1.png" /> 0 - 10<br />\
    <img src="styles/legend/DERESISTENCIA_14_2.png" /> 10 - 20<br />\
    <img src="styles/legend/DERESISTENCIA_14_3.png" /> 20 - 30<br />\
    <img src="styles/legend/DERESISTENCIA_14_4.png" /> 30 - 40<br />\
    <img src="styles/legend/DERESISTENCIA_14_5.png" /> 40 - 50<br />\
    <img src="styles/legend/DERESISTENCIA_14_6.png" /> 50 - 60<br />\
    <img src="styles/legend/DERESISTENCIA_14_7.png" /> 60 - 70<br />\
    <img src="styles/legend/DERESISTENCIA_14_8.png" /> 70 - 80<br />\
    <img src="styles/legend/DERESISTENCIA_14_9.png" /> 80 - 90<br />\
    <img src="styles/legend/DERESISTENCIA_14_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_15 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_15 = format_CASOSREPORTADOS_15.readFeatures(json_CASOSREPORTADOS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_15.addFeatures(features_CASOSREPORTADOS_15);
var lyr_CASOSREPORTADOS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_15, 
                style: style_CASOSREPORTADOS_15,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_15_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_15_1.png" /> 0 - 377<br />\
    <img src="styles/legend/CASOSREPORTADOS_15_2.png" /> 377 - 1454<br />\
    <img src="styles/legend/CASOSREPORTADOS_15_3.png" /> 1454 - 2507<br />\
    <img src="styles/legend/CASOSREPORTADOS_15_4.png" /> 2507 - 9871<br />\
    <img src="styles/legend/CASOSREPORTADOS_15_5.png" /> 9871 - 19552<br />'
        });
var format_RESISTENCIA_16 = new ol.format.GeoJSON();
var features_RESISTENCIA_16 = format_RESISTENCIA_16.readFeatures(json_RESISTENCIA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESISTENCIA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESISTENCIA_16.addFeatures(features_RESISTENCIA_16);
var lyr_RESISTENCIA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESISTENCIA_16, 
                style: style_RESISTENCIA_16,
                popuplayertitle: "% RESISTENCIA ",
                interactive: true,
    title: '% RESISTENCIA <br />\
    <img src="styles/legend/RESISTENCIA_16_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/RESISTENCIA_16_1.png" /> 0 - 10<br />\
    <img src="styles/legend/RESISTENCIA_16_2.png" /> 10 - 20<br />\
    <img src="styles/legend/RESISTENCIA_16_3.png" /> 20 - 30<br />\
    <img src="styles/legend/RESISTENCIA_16_4.png" /> 30 - 40<br />\
    <img src="styles/legend/RESISTENCIA_16_5.png" /> 40 - 50<br />\
    <img src="styles/legend/RESISTENCIA_16_6.png" /> 50 - 60<br />\
    <img src="styles/legend/RESISTENCIA_16_7.png" /> 60 - 70<br />\
    <img src="styles/legend/RESISTENCIA_16_8.png" /> 70 - 80<br />\
    <img src="styles/legend/RESISTENCIA_16_9.png" /> 80 - 90<br />\
    <img src="styles/legend/RESISTENCIA_16_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_17 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_17 = format_CASOSREPORTADOS_17.readFeatures(json_CASOSREPORTADOS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_17.addFeatures(features_CASOSREPORTADOS_17);
var lyr_CASOSREPORTADOS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_17, 
                style: style_CASOSREPORTADOS_17,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_17_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_17_1.png" /> 0 - 300<br />\
    <img src="styles/legend/CASOSREPORTADOS_17_2.png" /> 300 - 600<br />\
    <img src="styles/legend/CASOSREPORTADOS_17_3.png" /> 600 - 900<br />\
    <img src="styles/legend/CASOSREPORTADOS_17_4.png" /> 900 - 1200<br />'
        });
var format_RESISTENCIA_18 = new ol.format.GeoJSON();
var features_RESISTENCIA_18 = format_RESISTENCIA_18.readFeatures(json_RESISTENCIA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESISTENCIA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESISTENCIA_18.addFeatures(features_RESISTENCIA_18);
var lyr_RESISTENCIA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESISTENCIA_18, 
                style: style_RESISTENCIA_18,
                popuplayertitle: "% RESISTENCIA",
                interactive: true,
    title: '% RESISTENCIA<br />\
    <img src="styles/legend/RESISTENCIA_18_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/RESISTENCIA_18_1.png" /> 0 - 10<br />\
    <img src="styles/legend/RESISTENCIA_18_2.png" /> 10 - 20<br />\
    <img src="styles/legend/RESISTENCIA_18_3.png" /> 20 - 30<br />\
    <img src="styles/legend/RESISTENCIA_18_4.png" /> 30 - 40<br />\
    <img src="styles/legend/RESISTENCIA_18_5.png" /> 40 - 50<br />\
    <img src="styles/legend/RESISTENCIA_18_6.png" /> 50 - 60<br />\
    <img src="styles/legend/RESISTENCIA_18_7.png" /> 60 - 70<br />\
    <img src="styles/legend/RESISTENCIA_18_8.png" /> 70 - 80<br />\
    <img src="styles/legend/RESISTENCIA_18_9.png" /> 80 - 90<br />\
    <img src="styles/legend/RESISTENCIA_18_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_19 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_19 = format_CASOSREPORTADOS_19.readFeatures(json_CASOSREPORTADOS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_19.addFeatures(features_CASOSREPORTADOS_19);
var lyr_CASOSREPORTADOS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_19, 
                style: style_CASOSREPORTADOS_19,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_19_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_19_1.png" /> 0 - 1000<br />\
    <img src="styles/legend/CASOSREPORTADOS_19_2.png" /> 1000 - 2000<br />\
    <img src="styles/legend/CASOSREPORTADOS_19_3.png" /> 2000 - 3000<br />\
    <img src="styles/legend/CASOSREPORTADOS_19_4.png" /> 3000 - 4000<br />'
        });
var format_RESISTENCIA_20 = new ol.format.GeoJSON();
var features_RESISTENCIA_20 = format_RESISTENCIA_20.readFeatures(json_RESISTENCIA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESISTENCIA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESISTENCIA_20.addFeatures(features_RESISTENCIA_20);
var lyr_RESISTENCIA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESISTENCIA_20, 
                style: style_RESISTENCIA_20,
                popuplayertitle: "% RESISTENCIA",
                interactive: true,
    title: '% RESISTENCIA<br />\
    <img src="styles/legend/RESISTENCIA_20_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/RESISTENCIA_20_1.png" /> 0 - 10<br />\
    <img src="styles/legend/RESISTENCIA_20_2.png" /> 10 - 20<br />\
    <img src="styles/legend/RESISTENCIA_20_3.png" /> 20 - 30<br />\
    <img src="styles/legend/RESISTENCIA_20_4.png" /> 30 - 40<br />\
    <img src="styles/legend/RESISTENCIA_20_5.png" /> 40 - 50<br />\
    <img src="styles/legend/RESISTENCIA_20_6.png" /> 50 - 60<br />\
    <img src="styles/legend/RESISTENCIA_20_7.png" /> 60 - 70<br />\
    <img src="styles/legend/RESISTENCIA_20_8.png" /> 70 - 80<br />\
    <img src="styles/legend/RESISTENCIA_20_9.png" /> 80 - 90<br />\
    <img src="styles/legend/RESISTENCIA_20_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_21 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_21 = format_CASOSREPORTADOS_21.readFeatures(json_CASOSREPORTADOS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_21.addFeatures(features_CASOSREPORTADOS_21);
var lyr_CASOSREPORTADOS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_21, 
                style: style_CASOSREPORTADOS_21,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_21_0.png" /> 0 - 0<br />\
    <img src="styles/legend/CASOSREPORTADOS_21_1.png" /> 0 - 500<br />\
    <img src="styles/legend/CASOSREPORTADOS_21_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/CASOSREPORTADOS_21_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/CASOSREPORTADOS_21_4.png" /> 1500 - 2000<br />\
    <img src="styles/legend/CASOSREPORTADOS_21_5.png" /> 2000 - 2500<br />'
        });
var format_RESISTENCIA4_22 = new ol.format.GeoJSON();
var features_RESISTENCIA4_22 = format_RESISTENCIA4_22.readFeatures(json_RESISTENCIA4_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESISTENCIA4_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESISTENCIA4_22.addFeatures(features_RESISTENCIA4_22);
var lyr_RESISTENCIA4_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESISTENCIA4_22, 
                style: style_RESISTENCIA4_22,
                popuplayertitle: "RESISTENCIA4",
                interactive: true,
    title: 'RESISTENCIA4<br />\
    <img src="styles/legend/RESISTENCIA4_22_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/RESISTENCIA4_22_1.png" /> 0 - 10<br />\
    <img src="styles/legend/RESISTENCIA4_22_2.png" /> 10 - 20<br />\
    <img src="styles/legend/RESISTENCIA4_22_3.png" /> 20 - 30<br />\
    <img src="styles/legend/RESISTENCIA4_22_4.png" /> 30 - 40<br />\
    <img src="styles/legend/RESISTENCIA4_22_5.png" /> 40 - 50<br />\
    <img src="styles/legend/RESISTENCIA4_22_6.png" /> 50 - 60<br />\
    <img src="styles/legend/RESISTENCIA4_22_7.png" /> 60 - 70<br />\
    <img src="styles/legend/RESISTENCIA4_22_8.png" /> 70 - 80<br />\
    <img src="styles/legend/RESISTENCIA4_22_9.png" /> 80 - 90<br />\
    <img src="styles/legend/RESISTENCIA4_22_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_23 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_23 = format_CASOSREPORTADOS_23.readFeatures(json_CASOSREPORTADOS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_23.addFeatures(features_CASOSREPORTADOS_23);
var lyr_CASOSREPORTADOS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_23, 
                style: style_CASOSREPORTADOS_23,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_23_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_23_1.png" /> 0 - 373<br />\
    <img src="styles/legend/CASOSREPORTADOS_23_2.png" /> 373 - 2185<br />\
    <img src="styles/legend/CASOSREPORTADOS_23_3.png" /> 2185 - 3931<br />\
    <img src="styles/legend/CASOSREPORTADOS_23_4.png" /> 3931 - 20756<br />\
    <img src="styles/legend/CASOSREPORTADOS_23_5.png" /> 20756 - 92052<br />'
        });
var format_DERESISTENCIA_24 = new ol.format.GeoJSON();
var features_DERESISTENCIA_24 = format_DERESISTENCIA_24.readFeatures(json_DERESISTENCIA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERESISTENCIA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERESISTENCIA_24.addFeatures(features_DERESISTENCIA_24);
var lyr_DERESISTENCIA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERESISTENCIA_24, 
                style: style_DERESISTENCIA_24,
                popuplayertitle: "% DE RESISTENCIA",
                interactive: true,
    title: '% DE RESISTENCIA<br />\
    <img src="styles/legend/DERESISTENCIA_24_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/DERESISTENCIA_24_1.png" /> 0 - 10<br />\
    <img src="styles/legend/DERESISTENCIA_24_2.png" /> 10 - 20<br />\
    <img src="styles/legend/DERESISTENCIA_24_3.png" /> 20 - 30<br />\
    <img src="styles/legend/DERESISTENCIA_24_4.png" /> 30 - 40<br />\
    <img src="styles/legend/DERESISTENCIA_24_5.png" /> 40 - 50<br />\
    <img src="styles/legend/DERESISTENCIA_24_6.png" /> 50 - 60<br />\
    <img src="styles/legend/DERESISTENCIA_24_7.png" /> 60 - 70<br />\
    <img src="styles/legend/DERESISTENCIA_24_8.png" /> 70 - 80<br />\
    <img src="styles/legend/DERESISTENCIA_24_9.png" /> 80 - 90<br />\
    <img src="styles/legend/DERESISTENCIA_24_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_25 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_25 = format_CASOSREPORTADOS_25.readFeatures(json_CASOSREPORTADOS_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_25.addFeatures(features_CASOSREPORTADOS_25);
var lyr_CASOSREPORTADOS_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_25, 
                style: style_CASOSREPORTADOS_25,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_25_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_25_1.png" /> 0 - 500<br />\
    <img src="styles/legend/CASOSREPORTADOS_25_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/CASOSREPORTADOS_25_3.png" /> 1000 - 1500<br />'
        });
var format_DERESITENCIA_26 = new ol.format.GeoJSON();
var features_DERESITENCIA_26 = format_DERESITENCIA_26.readFeatures(json_DERESITENCIA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERESITENCIA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERESITENCIA_26.addFeatures(features_DERESITENCIA_26);
var lyr_DERESITENCIA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERESITENCIA_26, 
                style: style_DERESITENCIA_26,
                popuplayertitle: "% DE RESITENCIA",
                interactive: true,
    title: '% DE RESITENCIA<br />\
    <img src="styles/legend/DERESITENCIA_26_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/DERESITENCIA_26_1.png" /> 0 - 10<br />\
    <img src="styles/legend/DERESITENCIA_26_2.png" /> 10 - 20<br />\
    <img src="styles/legend/DERESITENCIA_26_3.png" /> 20 - 30<br />\
    <img src="styles/legend/DERESITENCIA_26_4.png" /> 30 - 40<br />\
    <img src="styles/legend/DERESITENCIA_26_5.png" /> 40 - 50<br />\
    <img src="styles/legend/DERESITENCIA_26_6.png" /> 50 - 60<br />\
    <img src="styles/legend/DERESITENCIA_26_7.png" /> 60 - 70<br />\
    <img src="styles/legend/DERESITENCIA_26_8.png" /> 70 - 80<br />\
    <img src="styles/legend/DERESITENCIA_26_9.png" /> 80 - 90<br />\
    <img src="styles/legend/DERESITENCIA_26_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_27 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_27 = format_CASOSREPORTADOS_27.readFeatures(json_CASOSREPORTADOS_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_27.addFeatures(features_CASOSREPORTADOS_27);
var lyr_CASOSREPORTADOS_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_27, 
                style: style_CASOSREPORTADOS_27,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_27_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_27_1.png" /> 0 - 1008<br />\
    <img src="styles/legend/CASOSREPORTADOS_27_2.png" /> 1008 - 3462<br />\
    <img src="styles/legend/CASOSREPORTADOS_27_3.png" /> 3462 - 15532<br />\
    <img src="styles/legend/CASOSREPORTADOS_27_4.png" /> 15532 - 33951<br />\
    <img src="styles/legend/CASOSREPORTADOS_27_5.png" /> 33951 - 149696<br />'
        });
var format_DERESISTENCIA_28 = new ol.format.GeoJSON();
var features_DERESISTENCIA_28 = format_DERESISTENCIA_28.readFeatures(json_DERESISTENCIA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERESISTENCIA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERESISTENCIA_28.addFeatures(features_DERESISTENCIA_28);
var lyr_DERESISTENCIA_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERESISTENCIA_28, 
                style: style_DERESISTENCIA_28,
                popuplayertitle: "% DE RESISTENCIA",
                interactive: true,
    title: '% DE RESISTENCIA<br />\
    <img src="styles/legend/DERESISTENCIA_28_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/DERESISTENCIA_28_1.png" /> 0 - 10<br />\
    <img src="styles/legend/DERESISTENCIA_28_2.png" /> 10 - 20<br />\
    <img src="styles/legend/DERESISTENCIA_28_3.png" /> 20 - 30<br />\
    <img src="styles/legend/DERESISTENCIA_28_4.png" /> 30 - 40<br />\
    <img src="styles/legend/DERESISTENCIA_28_5.png" /> 40 - 50<br />\
    <img src="styles/legend/DERESISTENCIA_28_6.png" /> 50 - 60<br />\
    <img src="styles/legend/DERESISTENCIA_28_7.png" /> 60 - 70<br />\
    <img src="styles/legend/DERESISTENCIA_28_8.png" /> 70 - 80<br />\
    <img src="styles/legend/DERESISTENCIA_28_9.png" /> 80 - 90<br />\
    <img src="styles/legend/DERESISTENCIA_28_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_29 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_29 = format_CASOSREPORTADOS_29.readFeatures(json_CASOSREPORTADOS_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_29.addFeatures(features_CASOSREPORTADOS_29);
var lyr_CASOSREPORTADOS_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_29, 
                style: style_CASOSREPORTADOS_29,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_29_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_29_1.png" /> 0 - 1152<br />\
    <img src="styles/legend/CASOSREPORTADOS_29_2.png" /> 1152 - 3478<br />\
    <img src="styles/legend/CASOSREPORTADOS_29_3.png" /> 3478 - 7558<br />\
    <img src="styles/legend/CASOSREPORTADOS_29_4.png" /> 7558 - 36264<br />\
    <img src="styles/legend/CASOSREPORTADOS_29_5.png" /> 36264 - 283383<br />'
        });
var format_DERESITENCIA_30 = new ol.format.GeoJSON();
var features_DERESITENCIA_30 = format_DERESITENCIA_30.readFeatures(json_DERESITENCIA_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERESITENCIA_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERESITENCIA_30.addFeatures(features_DERESITENCIA_30);
var lyr_DERESITENCIA_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERESITENCIA_30, 
                style: style_DERESITENCIA_30,
                popuplayertitle: "% DE RESITENCIA",
                interactive: true,
    title: '% DE RESITENCIA<br />\
    <img src="styles/legend/DERESITENCIA_30_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/DERESITENCIA_30_1.png" /> 0 - 10<br />\
    <img src="styles/legend/DERESITENCIA_30_2.png" /> 10 - 20<br />\
    <img src="styles/legend/DERESITENCIA_30_3.png" /> 20 - 30<br />\
    <img src="styles/legend/DERESITENCIA_30_4.png" /> 30 - 40<br />\
    <img src="styles/legend/DERESITENCIA_30_5.png" /> 40 - 50<br />\
    <img src="styles/legend/DERESITENCIA_30_6.png" /> 50 - 60<br />\
    <img src="styles/legend/DERESITENCIA_30_7.png" /> 60 - 70<br />\
    <img src="styles/legend/DERESITENCIA_30_8.png" /> 70 - 80<br />\
    <img src="styles/legend/DERESITENCIA_30_9.png" /> 80 - 90<br />\
    <img src="styles/legend/DERESITENCIA_30_10.png" /> 90 - 100<br />'
        });
var format_CASOSREPORTADOS_31 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_31 = format_CASOSREPORTADOS_31.readFeatures(json_CASOSREPORTADOS_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_31.addFeatures(features_CASOSREPORTADOS_31);
var lyr_CASOSREPORTADOS_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_31, 
                style: style_CASOSREPORTADOS_31,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_31_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/CASOSREPORTADOS_31_1.png" /> 0 - 0<br />\
    <img src="styles/legend/CASOSREPORTADOS_31_2.png" /> 0 - 972<br />\
    <img src="styles/legend/CASOSREPORTADOS_31_3.png" /> 972 - 2230<br />\
    <img src="styles/legend/CASOSREPORTADOS_31_4.png" /> 2230 - 9242<br />\
    <img src="styles/legend/CASOSREPORTADOS_31_5.png" /> 9242 - 10435<br />'
        });
var group_Acinetobacterbaumannii = new ol.layer.Group({
                                layers: [lyr_DERESITENCIA_30,lyr_CASOSREPORTADOS_31,],
                                fold: "open",
                                title: "Acinetobacter baumannii"});
var group_Escherichiacoli = new ol.layer.Group({
                                layers: [lyr_DERESISTENCIA_28,lyr_CASOSREPORTADOS_29,],
                                fold: "open",
                                title: "Escherichia coli"});
var group_Klebsiellapneumoniae = new ol.layer.Group({
                                layers: [lyr_DERESITENCIA_26,lyr_CASOSREPORTADOS_27,],
                                fold: "open",
                                title: "Klebsiella pneumoniae"});
var group_Neisseriagonorrhoeae = new ol.layer.Group({
                                layers: [lyr_DERESISTENCIA_24,lyr_CASOSREPORTADOS_25,],
                                fold: "open",
                                title: "Neisseria gonorrhoeae"});
var group_Pseudomonasaeruginosa = new ol.layer.Group({
                                layers: [lyr_RESISTENCIA4_22,lyr_CASOSREPORTADOS_23,],
                                fold: "open",
                                title: "Pseudomonas aeruginosa"});
var group_Salmonellaspp = new ol.layer.Group({
                                layers: [lyr_RESISTENCIA_20,lyr_CASOSREPORTADOS_21,],
                                fold: "open",
                                title: "Salmonella spp"});
var group_Shigellaflexneri = new ol.layer.Group({
                                layers: [lyr_RESISTENCIA_18,lyr_CASOSREPORTADOS_19,],
                                fold: "open",
                                title: "Shigella flexneri"});
var group_Shigellasonnei = new ol.layer.Group({
                                layers: [lyr_RESISTENCIA_16,lyr_CASOSREPORTADOS_17,],
                                fold: "open",
                                title: "Shigella sonnei"});
var group_Staphylococcusaureus = new ol.layer.Group({
                                layers: [lyr_DERESISTENCIA_14,lyr_CASOSREPORTADOS_15,],
                                fold: "open",
                                title: "Staphylococcus aureus"});
var group_INDICADORES = new ol.layer.Group({
                                layers: [lyr_IDH2020_1,lyr_NMERODEDOCTORESPORCADA100000HAB_2,lyr_NMERODECAMPASPORCADA100000HAB_3,lyr_ENFERMEDADESZOONOTICAS_4,lyr_BIOSEGURIDAD_5,lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6,lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7,lyr_CONTROLANTIMICROBIANO_8,lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9,lyr_RESISTENCIAANTIMICROBIANAAMR_10,lyr_AMRDETECCINYREPORTE_11,lyr_DENSIDADDEPOBLACINHABKM2_12,lyr_PUNTUACINGENERALDESALUDGHSI_13,],
                                fold: "open",
                                title: "INDICADORES "});

lyr_ESRIGraydark_0.setVisible(true);lyr_IDH2020_1.setVisible(true);lyr_NMERODEDOCTORESPORCADA100000HAB_2.setVisible(true);lyr_NMERODECAMPASPORCADA100000HAB_3.setVisible(true);lyr_ENFERMEDADESZOONOTICAS_4.setVisible(true);lyr_BIOSEGURIDAD_5.setVisible(true);lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6.setVisible(true);lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7.setVisible(true);lyr_CONTROLANTIMICROBIANO_8.setVisible(true);lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9.setVisible(true);lyr_RESISTENCIAANTIMICROBIANAAMR_10.setVisible(true);lyr_AMRDETECCINYREPORTE_11.setVisible(true);lyr_DENSIDADDEPOBLACINHABKM2_12.setVisible(true);lyr_PUNTUACINGENERALDESALUDGHSI_13.setVisible(true);lyr_DERESISTENCIA_14.setVisible(true);lyr_CASOSREPORTADOS_15.setVisible(true);lyr_RESISTENCIA_16.setVisible(true);lyr_CASOSREPORTADOS_17.setVisible(true);lyr_RESISTENCIA_18.setVisible(true);lyr_CASOSREPORTADOS_19.setVisible(true);lyr_RESISTENCIA_20.setVisible(true);lyr_CASOSREPORTADOS_21.setVisible(true);lyr_RESISTENCIA4_22.setVisible(true);lyr_CASOSREPORTADOS_23.setVisible(true);lyr_DERESISTENCIA_24.setVisible(true);lyr_CASOSREPORTADOS_25.setVisible(true);lyr_DERESITENCIA_26.setVisible(true);lyr_CASOSREPORTADOS_27.setVisible(true);lyr_DERESISTENCIA_28.setVisible(true);lyr_CASOSREPORTADOS_29.setVisible(true);lyr_DERESITENCIA_30.setVisible(true);lyr_CASOSREPORTADOS_31.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,group_INDICADORES,group_Staphylococcusaureus,group_Shigellasonnei,group_Shigellaflexneri,group_Salmonellaspp,group_Pseudomonasaeruginosa,group_Neisseriagonorrhoeae,group_Klebsiellapneumoniae,group_Escherichiacoli,group_Acinetobacterbaumannii];
lyr_IDH2020_1.set('fieldAliases', {'iso3': 'iso3', 'name': 'name', 'continent': 'continent', 'region': 'region', 'IDH_LA_IDH': 'IDH_LA_IDH', 'IDH_LA_NIV': 'IDH_LA_NIV', });
lyr_NMERODEDOCTORESPORCADA100000HAB_2.set('fieldAliases', {'indicado12': 'indicado12', });
lyr_NMERODECAMPASPORCADA100000HAB_3.set('fieldAliases', {'indicado13': 'indicado13', });
lyr_ENFERMEDADESZOONOTICAS_4.set('fieldAliases', {'indicado_8': 'indicado_8', });
lyr_BIOSEGURIDAD_5.set('fieldAliases', {'indicado_9': 'indicado_9', });
lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6.set('fieldAliases', {'indicado_5': 'indicado_5', });
lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7.set('fieldAliases', {'indicado_7': 'indicado_7', });
lyr_CONTROLANTIMICROBIANO_8.set('fieldAliases', {'indicado_6': 'indicado_6', });
lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9.set('fieldAliases', {'indicado_4': 'indicado_4', });
lyr_RESISTENCIAANTIMICROBIANAAMR_10.set('fieldAliases', {'indicado_2': 'indicado_2', });
lyr_AMRDETECCINYREPORTE_11.set('fieldAliases', {'indicado_3': 'indicado_3', });
lyr_DENSIDADDEPOBLACINHABKM2_12.set('fieldAliases', {'indicadore': 'indicadore', });
lyr_PUNTUACINGENERALDESALUDGHSI_13.set('fieldAliases', {'indicado_1': 'indicado_1', });
lyr_DERESISTENCIA_14.set('fieldAliases', {'LA2020_%_6': 'LA2020_%_6', });
lyr_CASOSREPORTADOS_15.set('fieldAliases', {'LA2020_Sta': 'LA2020_Sta', });
lyr_RESISTENCIA_16.set('fieldAliases', {'LA2020_%_5': 'LA2020_%_5', });
lyr_CASOSREPORTADOS_17.set('fieldAliases', {'LA2020_S_1': 'LA2020_S_1', });
lyr_RESISTENCIA_18.set('fieldAliases', {'LA2020_%_4': 'LA2020_%_4', });
lyr_CASOSREPORTADOS_19.set('fieldAliases', {'LA2020_Shi': 'LA2020_Shi', });
lyr_RESISTENCIA_20.set('fieldAliases', {'LA2020_Res': 'LA2020_Res', });
lyr_CASOSREPORTADOS_21.set('fieldAliases', {'LA2020_Sal': 'LA2020_Sal', });
lyr_RESISTENCIA4_22.set('fieldAliases', {'LA2020_%_3': 'LA2020_%_3', });
lyr_CASOSREPORTADOS_23.set('fieldAliases', {'LA2020_Pse': 'LA2020_Pse', });
lyr_DERESISTENCIA_24.set('fieldAliases', {'LA2020_%Re': 'LA2020_%Re', });
lyr_CASOSREPORTADOS_25.set('fieldAliases', {'LA2020_Nei': 'LA2020_Nei', });
lyr_DERESITENCIA_26.set('fieldAliases', {'LA2020_%_2': 'LA2020_%_2', });
lyr_CASOSREPORTADOS_27.set('fieldAliases', {'LA2020_Kle': 'LA2020_Kle', });
lyr_DERESISTENCIA_28.set('fieldAliases', {'LA2020_%_1': 'LA2020_%_1', });
lyr_CASOSREPORTADOS_29.set('fieldAliases', {'LA2020_Esc': 'LA2020_Esc', });
lyr_DERESITENCIA_30.set('fieldAliases', {'LA2020_% Resistencia': 'LA2020_% Resistencia', });
lyr_CASOSREPORTADOS_31.set('fieldAliases', {'LA2020_Aci': 'LA2020_Aci', });
lyr_IDH2020_1.set('fieldImages', {'iso3': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'IDH_LA_IDH': 'TextEdit', 'IDH_LA_NIV': 'TextEdit', });
lyr_NMERODEDOCTORESPORCADA100000HAB_2.set('fieldImages', {'indicado12': 'TextEdit', });
lyr_NMERODECAMPASPORCADA100000HAB_3.set('fieldImages', {'indicado13': 'TextEdit', });
lyr_ENFERMEDADESZOONOTICAS_4.set('fieldImages', {'indicado_8': 'TextEdit', });
lyr_BIOSEGURIDAD_5.set('fieldImages', {'indicado_9': 'TextEdit', });
lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6.set('fieldImages', {'indicado_5': 'TextEdit', });
lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7.set('fieldImages', {'indicado_7': 'TextEdit', });
lyr_CONTROLANTIMICROBIANO_8.set('fieldImages', {'indicado_6': 'TextEdit', });
lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9.set('fieldImages', {'indicado_4': 'TextEdit', });
lyr_RESISTENCIAANTIMICROBIANAAMR_10.set('fieldImages', {'indicado_2': 'TextEdit', });
lyr_AMRDETECCINYREPORTE_11.set('fieldImages', {'indicado_3': 'TextEdit', });
lyr_DENSIDADDEPOBLACINHABKM2_12.set('fieldImages', {'indicadore': 'TextEdit', });
lyr_PUNTUACINGENERALDESALUDGHSI_13.set('fieldImages', {'indicado_1': 'TextEdit', });
lyr_DERESISTENCIA_14.set('fieldImages', {'LA2020_%_6': 'TextEdit', });
lyr_CASOSREPORTADOS_15.set('fieldImages', {'LA2020_Sta': 'TextEdit', });
lyr_RESISTENCIA_16.set('fieldImages', {'LA2020_%_5': 'TextEdit', });
lyr_CASOSREPORTADOS_17.set('fieldImages', {'LA2020_S_1': 'TextEdit', });
lyr_RESISTENCIA_18.set('fieldImages', {'LA2020_%_4': 'TextEdit', });
lyr_CASOSREPORTADOS_19.set('fieldImages', {'LA2020_Shi': 'TextEdit', });
lyr_RESISTENCIA_20.set('fieldImages', {'LA2020_Res': 'TextEdit', });
lyr_CASOSREPORTADOS_21.set('fieldImages', {'LA2020_Sal': 'TextEdit', });
lyr_RESISTENCIA4_22.set('fieldImages', {'LA2020_%_3': 'TextEdit', });
lyr_CASOSREPORTADOS_23.set('fieldImages', {'LA2020_Pse': 'TextEdit', });
lyr_DERESISTENCIA_24.set('fieldImages', {'LA2020_%Re': 'TextEdit', });
lyr_CASOSREPORTADOS_25.set('fieldImages', {'LA2020_Nei': 'TextEdit', });
lyr_DERESITENCIA_26.set('fieldImages', {'LA2020_%_2': 'TextEdit', });
lyr_CASOSREPORTADOS_27.set('fieldImages', {'LA2020_Kle': 'TextEdit', });
lyr_DERESISTENCIA_28.set('fieldImages', {'LA2020_%_1': 'TextEdit', });
lyr_CASOSREPORTADOS_29.set('fieldImages', {'LA2020_Esc': 'TextEdit', });
lyr_DERESITENCIA_30.set('fieldImages', {'LA2020_% Resistencia': 'TextEdit', });
lyr_CASOSREPORTADOS_31.set('fieldImages', {'LA2020_Aci': 'TextEdit', });
lyr_IDH2020_1.set('fieldLabels', {'iso3': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'IDH_LA_IDH': 'no label', 'IDH_LA_NIV': 'no label', });
lyr_NMERODEDOCTORESPORCADA100000HAB_2.set('fieldLabels', {'indicado12': 'no label', });
lyr_NMERODECAMPASPORCADA100000HAB_3.set('fieldLabels', {'indicado13': 'no label', });
lyr_ENFERMEDADESZOONOTICAS_4.set('fieldLabels', {'indicado_8': 'no label', });
lyr_BIOSEGURIDAD_5.set('fieldLabels', {'indicado_9': 'no label', });
lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_6.set('fieldLabels', {'indicado_5': 'no label', });
lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_7.set('fieldLabels', {'indicado_7': 'no label', });
lyr_CONTROLANTIMICROBIANO_8.set('fieldLabels', {'indicado_6': 'no label', });
lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_9.set('fieldLabels', {'indicado_4': 'no label', });
lyr_RESISTENCIAANTIMICROBIANAAMR_10.set('fieldLabels', {'indicado_2': 'no label', });
lyr_AMRDETECCINYREPORTE_11.set('fieldLabels', {'indicado_3': 'no label', });
lyr_DENSIDADDEPOBLACINHABKM2_12.set('fieldLabels', {'indicadore': 'no label', });
lyr_PUNTUACINGENERALDESALUDGHSI_13.set('fieldLabels', {'indicado_1': 'no label', });
lyr_DERESISTENCIA_14.set('fieldLabels', {'LA2020_%_6': 'no label', });
lyr_CASOSREPORTADOS_15.set('fieldLabels', {'LA2020_Sta': 'no label', });
lyr_RESISTENCIA_16.set('fieldLabels', {'LA2020_%_5': 'no label', });
lyr_CASOSREPORTADOS_17.set('fieldLabels', {'LA2020_S_1': 'no label', });
lyr_RESISTENCIA_18.set('fieldLabels', {'LA2020_%_4': 'no label', });
lyr_CASOSREPORTADOS_19.set('fieldLabels', {'LA2020_Shi': 'no label', });
lyr_RESISTENCIA_20.set('fieldLabels', {'LA2020_Res': 'no label', });
lyr_CASOSREPORTADOS_21.set('fieldLabels', {'LA2020_Sal': 'no label', });
lyr_RESISTENCIA4_22.set('fieldLabels', {'LA2020_%_3': 'no label', });
lyr_CASOSREPORTADOS_23.set('fieldLabels', {'LA2020_Pse': 'no label', });
lyr_DERESISTENCIA_24.set('fieldLabels', {'LA2020_%Re': 'no label', });
lyr_CASOSREPORTADOS_25.set('fieldLabels', {'LA2020_Nei': 'no label', });
lyr_DERESITENCIA_26.set('fieldLabels', {'LA2020_%_2': 'no label', });
lyr_CASOSREPORTADOS_27.set('fieldLabels', {'LA2020_Kle': 'no label', });
lyr_DERESISTENCIA_28.set('fieldLabels', {'LA2020_%_1': 'no label', });
lyr_CASOSREPORTADOS_29.set('fieldLabels', {'LA2020_Esc': 'no label', });
lyr_DERESITENCIA_30.set('fieldLabels', {'LA2020_% Resistencia': 'no label', });
lyr_CASOSREPORTADOS_31.set('fieldLabels', {'LA2020_Aci': 'no label', });
lyr_CASOSREPORTADOS_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});