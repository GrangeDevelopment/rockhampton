var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Waterfrontandmarineindustry_2 = new ol.format.GeoJSON();
var features_Waterfrontandmarineindustry_2 = format_Waterfrontandmarineindustry_2.readFeatures(json_Waterfrontandmarineindustry_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterfrontandmarineindustry_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterfrontandmarineindustry_2.addFeatures(features_Waterfrontandmarineindustry_2);
var lyr_Waterfrontandmarineindustry_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterfrontandmarineindustry_2, 
                style: style_Waterfrontandmarineindustry_2,
                popuplayertitle: 'Waterfront and marine industry',
                interactive: false,
                title: '<img src="styles/legend/Waterfrontandmarineindustry_2.png" /> Waterfront and marine industry'
            });
var format_Sportandrecreation_3 = new ol.format.GeoJSON();
var features_Sportandrecreation_3 = format_Sportandrecreation_3.readFeatures(json_Sportandrecreation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportandrecreation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportandrecreation_3.addFeatures(features_Sportandrecreation_3);
var lyr_Sportandrecreation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportandrecreation_3, 
                style: style_Sportandrecreation_3,
                popuplayertitle: 'Sport and recreation',
                interactive: false,
                title: '<img src="styles/legend/Sportandrecreation_3.png" /> Sport and recreation'
            });
var format_Specialisedcentre_4 = new ol.format.GeoJSON();
var features_Specialisedcentre_4 = format_Specialisedcentre_4.readFeatures(json_Specialisedcentre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Specialisedcentre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Specialisedcentre_4.addFeatures(features_Specialisedcentre_4);
var lyr_Specialisedcentre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Specialisedcentre_4, 
                style: style_Specialisedcentre_4,
                popuplayertitle: 'Specialised centre',
                interactive: false,
                title: '<img src="styles/legend/Specialisedcentre_4.png" /> Specialised centre'
            });
var format_Specialpurpose_5 = new ol.format.GeoJSON();
var features_Specialpurpose_5 = format_Specialpurpose_5.readFeatures(json_Specialpurpose_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Specialpurpose_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Specialpurpose_5.addFeatures(features_Specialpurpose_5);
var lyr_Specialpurpose_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Specialpurpose_5, 
                style: style_Specialpurpose_5,
                popuplayertitle: 'Special purpose',
                interactive: false,
                title: '<img src="styles/legend/Specialpurpose_5.png" /> Special purpose'
            });
var format_Specialindustry_6 = new ol.format.GeoJSON();
var features_Specialindustry_6 = format_Specialindustry_6.readFeatures(json_Specialindustry_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Specialindustry_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Specialindustry_6.addFeatures(features_Specialindustry_6);
var lyr_Specialindustry_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Specialindustry_6, 
                style: style_Specialindustry_6,
                popuplayertitle: 'Special industry',
                interactive: false,
                title: '<img src="styles/legend/Specialindustry_6.png" /> Special industry'
            });
var format_Rural_7 = new ol.format.GeoJSON();
var features_Rural_7 = format_Rural_7.readFeatures(json_Rural_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_7.addFeatures(features_Rural_7);
var lyr_Rural_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_7, 
                style: style_Rural_7,
                popuplayertitle: 'Rural',
                interactive: false,
                title: '<img src="styles/legend/Rural_7.png" /> Rural'
            });
var format_Openspace_8 = new ol.format.GeoJSON();
var features_Openspace_8 = format_Openspace_8.readFeatures(json_Openspace_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Openspace_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Openspace_8.addFeatures(features_Openspace_8);
var lyr_Openspace_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Openspace_8, 
                style: style_Openspace_8,
                popuplayertitle: 'Open space',
                interactive: false,
                title: '<img src="styles/legend/Openspace_8.png" /> Open space'
            });
var format_Mediumimpactindustry_9 = new ol.format.GeoJSON();
var features_Mediumimpactindustry_9 = format_Mediumimpactindustry_9.readFeatures(json_Mediumimpactindustry_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mediumimpactindustry_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mediumimpactindustry_9.addFeatures(features_Mediumimpactindustry_9);
var lyr_Mediumimpactindustry_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mediumimpactindustry_9, 
                style: style_Mediumimpactindustry_9,
                popuplayertitle: 'Medium impact industry',
                interactive: false,
                title: '<img src="styles/legend/Mediumimpactindustry_9.png" /> Medium impact industry'
            });
var format_Lowimpactindustry_10 = new ol.format.GeoJSON();
var features_Lowimpactindustry_10 = format_Lowimpactindustry_10.readFeatures(json_Lowimpactindustry_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lowimpactindustry_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowimpactindustry_10.addFeatures(features_Lowimpactindustry_10);
var lyr_Lowimpactindustry_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lowimpactindustry_10, 
                style: style_Lowimpactindustry_10,
                popuplayertitle: 'Low impact industry',
                interactive: false,
                title: '<img src="styles/legend/Lowimpactindustry_10.png" /> Low impact industry'
            });
var format_Limiteddevelopmentconstrainedland_11 = new ol.format.GeoJSON();
var features_Limiteddevelopmentconstrainedland_11 = format_Limiteddevelopmentconstrainedland_11.readFeatures(json_Limiteddevelopmentconstrainedland_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limiteddevelopmentconstrainedland_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteddevelopmentconstrainedland_11.addFeatures(features_Limiteddevelopmentconstrainedland_11);
var lyr_Limiteddevelopmentconstrainedland_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limiteddevelopmentconstrainedland_11, 
                style: style_Limiteddevelopmentconstrainedland_11,
                popuplayertitle: 'Limited development (constrained land)',
                interactive: false,
                title: '<img src="styles/legend/Limiteddevelopmentconstrainedland_11.png" /> Limited development (constrained land)'
            });
var format_Highimpactindustry_12 = new ol.format.GeoJSON();
var features_Highimpactindustry_12 = format_Highimpactindustry_12.readFeatures(json_Highimpactindustry_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highimpactindustry_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highimpactindustry_12.addFeatures(features_Highimpactindustry_12);
var lyr_Highimpactindustry_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highimpactindustry_12, 
                style: style_Highimpactindustry_12,
                popuplayertitle: 'High impact industry',
                interactive: false,
                title: '<img src="styles/legend/Highimpactindustry_12.png" /> High impact industry'
            });
var format_Environmentalmanagementandconservation_13 = new ol.format.GeoJSON();
var features_Environmentalmanagementandconservation_13 = format_Environmentalmanagementandconservation_13.readFeatures(json_Environmentalmanagementandconservation_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Environmentalmanagementandconservation_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Environmentalmanagementandconservation_13.addFeatures(features_Environmentalmanagementandconservation_13);
var lyr_Environmentalmanagementandconservation_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Environmentalmanagementandconservation_13, 
                style: style_Environmentalmanagementandconservation_13,
                popuplayertitle: 'Environmental management and conservation',
                interactive: false,
                title: '<img src="styles/legend/Environmentalmanagementandconservation_13.png" /> Environmental management and conservation'
            });
var format_Communityfacilities_14 = new ol.format.GeoJSON();
var features_Communityfacilities_14 = format_Communityfacilities_14.readFeatures(json_Communityfacilities_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communityfacilities_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communityfacilities_14.addFeatures(features_Communityfacilities_14);
var lyr_Communityfacilities_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communityfacilities_14, 
                style: style_Communityfacilities_14,
                popuplayertitle: 'Community facilities',
                interactive: false,
                title: '<img src="styles/legend/Communityfacilities_14.png" /> Community facilities'
            });
var format_Township_15 = new ol.format.GeoJSON();
var features_Township_15 = format_Township_15.readFeatures(json_Township_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Township_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Township_15.addFeatures(features_Township_15);
var lyr_Township_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Township_15, 
                style: style_Township_15,
                popuplayertitle: 'Township',
                interactive: false,
                title: '<img src="styles/legend/Township_15.png" /> Township'
            });
var format_Majorcentre_16 = new ol.format.GeoJSON();
var features_Majorcentre_16 = format_Majorcentre_16.readFeatures(json_Majorcentre_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorcentre_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Majorcentre_16.addFeatures(features_Majorcentre_16);
var lyr_Majorcentre_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Majorcentre_16, 
                style: style_Majorcentre_16,
                popuplayertitle: 'Major centre',
                interactive: false,
                title: '<img src="styles/legend/Majorcentre_16.png" /> Major centre'
            });
var format_Principalcentre_17 = new ol.format.GeoJSON();
var features_Principalcentre_17 = format_Principalcentre_17.readFeatures(json_Principalcentre_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Principalcentre_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Principalcentre_17.addFeatures(features_Principalcentre_17);
var lyr_Principalcentre_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Principalcentre_17, 
                style: style_Principalcentre_17,
                popuplayertitle: 'Principal centre',
                interactive: false,
                title: '<img src="styles/legend/Principalcentre_17.png" /> Principal centre'
            });
var format_Ruralresidential_18 = new ol.format.GeoJSON();
var features_Ruralresidential_18 = format_Ruralresidential_18.readFeatures(json_Ruralresidential_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruralresidential_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruralresidential_18.addFeatures(features_Ruralresidential_18);
var lyr_Ruralresidential_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruralresidential_18, 
                style: style_Ruralresidential_18,
                popuplayertitle: 'Rural residential',
                interactive: false,
                title: '<img src="styles/legend/Ruralresidential_18.png" /> Rural residential'
            });
var format_Neighbourhoodcentre_19 = new ol.format.GeoJSON();
var features_Neighbourhoodcentre_19 = format_Neighbourhoodcentre_19.readFeatures(json_Neighbourhoodcentre_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighbourhoodcentre_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighbourhoodcentre_19.addFeatures(features_Neighbourhoodcentre_19);
var lyr_Neighbourhoodcentre_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighbourhoodcentre_19, 
                style: style_Neighbourhoodcentre_19,
                popuplayertitle: 'Neighbourhood centre',
                interactive: false,
                title: '<img src="styles/legend/Neighbourhoodcentre_19.png" /> Neighbourhood centre'
            });
var format_Highdensityresidential_20 = new ol.format.GeoJSON();
var features_Highdensityresidential_20 = format_Highdensityresidential_20.readFeatures(json_Highdensityresidential_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highdensityresidential_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highdensityresidential_20.addFeatures(features_Highdensityresidential_20);
var lyr_Highdensityresidential_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highdensityresidential_20, 
                style: style_Highdensityresidential_20,
                popuplayertitle: 'High density residential',
                interactive: false,
                title: '<img src="styles/legend/Highdensityresidential_20.png" /> High density residential'
            });
var format_Lowmediumdensityresidential_21 = new ol.format.GeoJSON();
var features_Lowmediumdensityresidential_21 = format_Lowmediumdensityresidential_21.readFeatures(json_Lowmediumdensityresidential_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lowmediumdensityresidential_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowmediumdensityresidential_21.addFeatures(features_Lowmediumdensityresidential_21);
var lyr_Lowmediumdensityresidential_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lowmediumdensityresidential_21, 
                style: style_Lowmediumdensityresidential_21,
                popuplayertitle: 'Low-medium density residential',
                interactive: false,
                title: '<img src="styles/legend/Lowmediumdensityresidential_21.png" /> Low-medium density residential'
            });
var format_Lowdensityresidential_22 = new ol.format.GeoJSON();
var features_Lowdensityresidential_22 = format_Lowdensityresidential_22.readFeatures(json_Lowdensityresidential_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lowdensityresidential_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowdensityresidential_22.addFeatures(features_Lowdensityresidential_22);
var lyr_Lowdensityresidential_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lowdensityresidential_22, 
                style: style_Lowdensityresidential_22,
                popuplayertitle: 'Low density residential',
                interactive: false,
                title: '<img src="styles/legend/Lowdensityresidential_22.png" /> Low density residential'
            });
var format_Localcentre_23 = new ol.format.GeoJSON();
var features_Localcentre_23 = format_Localcentre_23.readFeatures(json_Localcentre_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localcentre_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localcentre_23.addFeatures(features_Localcentre_23);
var lyr_Localcentre_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localcentre_23, 
                style: style_Localcentre_23,
                popuplayertitle: 'Local centre',
                interactive: false,
                title: '<img src="styles/legend/Localcentre_23.png" /> Local centre'
            });
var format_Emergingcommunities_24 = new ol.format.GeoJSON();
var features_Emergingcommunities_24 = format_Emergingcommunities_24.readFeatures(json_Emergingcommunities_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emergingcommunities_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emergingcommunities_24.addFeatures(features_Emergingcommunities_24);
var lyr_Emergingcommunities_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emergingcommunities_24, 
                style: style_Emergingcommunities_24,
                popuplayertitle: 'Emerging communities',
                interactive: false,
                title: '<img src="styles/legend/Emergingcommunities_24.png" /> Emerging communities'
            });
var format_Districtcentre_25 = new ol.format.GeoJSON();
var features_Districtcentre_25 = format_Districtcentre_25.readFeatures(json_Districtcentre_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtcentre_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtcentre_25.addFeatures(features_Districtcentre_25);
var lyr_Districtcentre_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtcentre_25, 
                style: style_Districtcentre_25,
                popuplayertitle: 'District centre',
                interactive: false,
                title: '<img src="styles/legend/Districtcentre_25.png" /> District centre'
            });
var format_PAMPrecinctBoundaries_26 = new ol.format.GeoJSON();
var features_PAMPrecinctBoundaries_26 = format_PAMPrecinctBoundaries_26.readFeatures(json_PAMPrecinctBoundaries_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAMPrecinctBoundaries_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAMPrecinctBoundaries_26.addFeatures(features_PAMPrecinctBoundaries_26);
var lyr_PAMPrecinctBoundaries_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAMPrecinctBoundaries_26, 
                style: style_PAMPrecinctBoundaries_26,
                popuplayertitle: 'PAM Precinct Boundaries',
                interactive: false,
                title: '<img src="styles/legend/PAMPrecinctBoundaries_26.png" /> PAM Precinct Boundaries'
            });
var format_SDAStanwelltoGladstoneInfrastructureCorridor_27 = new ol.format.GeoJSON();
var features_SDAStanwelltoGladstoneInfrastructureCorridor_27 = format_SDAStanwelltoGladstoneInfrastructureCorridor_27.readFeatures(json_SDAStanwelltoGladstoneInfrastructureCorridor_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDAStanwelltoGladstoneInfrastructureCorridor_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDAStanwelltoGladstoneInfrastructureCorridor_27.addFeatures(features_SDAStanwelltoGladstoneInfrastructureCorridor_27);
var lyr_SDAStanwelltoGladstoneInfrastructureCorridor_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDAStanwelltoGladstoneInfrastructureCorridor_27, 
                style: style_SDAStanwelltoGladstoneInfrastructureCorridor_27,
                popuplayertitle: 'SDA Stanwell to Gladstone Infrastructure Corridor',
                interactive: false,
                title: '<img src="styles/legend/SDAStanwelltoGladstoneInfrastructureCorridor_27.png" /> SDA Stanwell to Gladstone Infrastructure Corridor'
            });
var format_RRCRoadHeirarchy_28 = new ol.format.GeoJSON();
var features_RRCRoadHeirarchy_28 = format_RRCRoadHeirarchy_28.readFeatures(json_RRCRoadHeirarchy_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RRCRoadHeirarchy_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RRCRoadHeirarchy_28.addFeatures(features_RRCRoadHeirarchy_28);
var lyr_RRCRoadHeirarchy_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RRCRoadHeirarchy_28, 
                style: style_RRCRoadHeirarchy_28,
                popuplayertitle: 'RRC Road Heirarchy',
                interactive: false,
                title: '<img src="styles/legend/RRCRoadHeirarchy_28.png" /> RRC Road Heirarchy'
            });
var format_FitzroyRiverDFE_29 = new ol.format.GeoJSON();
var features_FitzroyRiverDFE_29 = format_FitzroyRiverDFE_29.readFeatures(json_FitzroyRiverDFE_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FitzroyRiverDFE_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FitzroyRiverDFE_29.addFeatures(features_FitzroyRiverDFE_29);
var lyr_FitzroyRiverDFE_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FitzroyRiverDFE_29, 
                style: style_FitzroyRiverDFE_29,
                popuplayertitle: 'Fitzroy River DFE',
                interactive: false,
                title: '<img src="styles/legend/FitzroyRiverDFE_29.png" /> Fitzroy River DFE'
            });
var format_KeyResourceAreasTransportRoute_30 = new ol.format.GeoJSON();
var features_KeyResourceAreasTransportRoute_30 = format_KeyResourceAreasTransportRoute_30.readFeatures(json_KeyResourceAreasTransportRoute_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeyResourceAreasTransportRoute_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyResourceAreasTransportRoute_30.addFeatures(features_KeyResourceAreasTransportRoute_30);
var lyr_KeyResourceAreasTransportRoute_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyResourceAreasTransportRoute_30, 
                style: style_KeyResourceAreasTransportRoute_30,
                popuplayertitle: 'Key Resource Areas Transport Route',
                interactive: false,
                title: '<img src="styles/legend/KeyResourceAreasTransportRoute_30.png" /> Key Resource Areas Transport Route'
            });
var format_ElectricityDistributionNetwork66kV_31 = new ol.format.GeoJSON();
var features_ElectricityDistributionNetwork66kV_31 = format_ElectricityDistributionNetwork66kV_31.readFeatures(json_ElectricityDistributionNetwork66kV_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricityDistributionNetwork66kV_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricityDistributionNetwork66kV_31.addFeatures(features_ElectricityDistributionNetwork66kV_31);
var lyr_ElectricityDistributionNetwork66kV_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectricityDistributionNetwork66kV_31, 
                style: style_ElectricityDistributionNetwork66kV_31,
                popuplayertitle: 'Electricity Distribution Network66kV',
                interactive: false,
                title: '<img src="styles/legend/ElectricityDistributionNetwork66kV_31.png" /> Electricity Distribution Network66kV'
            });
var format_StanwellPipeline_32 = new ol.format.GeoJSON();
var features_StanwellPipeline_32 = format_StanwellPipeline_32.readFeatures(json_StanwellPipeline_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StanwellPipeline_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StanwellPipeline_32.addFeatures(features_StanwellPipeline_32);
var lyr_StanwellPipeline_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StanwellPipeline_32, 
                style: style_StanwellPipeline_32,
                popuplayertitle: 'Stanwell Pipeline',
                interactive: false,
                title: '<img src="styles/legend/StanwellPipeline_32.png" /> Stanwell Pipeline'
            });
var format_ElectricityTransmissionNetworkAbove132kV_33 = new ol.format.GeoJSON();
var features_ElectricityTransmissionNetworkAbove132kV_33 = format_ElectricityTransmissionNetworkAbove132kV_33.readFeatures(json_ElectricityTransmissionNetworkAbove132kV_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricityTransmissionNetworkAbove132kV_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricityTransmissionNetworkAbove132kV_33.addFeatures(features_ElectricityTransmissionNetworkAbove132kV_33);
var lyr_ElectricityTransmissionNetworkAbove132kV_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectricityTransmissionNetworkAbove132kV_33, 
                style: style_ElectricityTransmissionNetworkAbove132kV_33,
                popuplayertitle: 'Electricity Transmission Network Above 132kV',
                interactive: false,
                title: '<img src="styles/legend/ElectricityTransmissionNetworkAbove132kV_33.png" /> Electricity Transmission Network Above 132kV'
            });
var format_GasPipelineCorridors_34 = new ol.format.GeoJSON();
var features_GasPipelineCorridors_34 = format_GasPipelineCorridors_34.readFeatures(json_GasPipelineCorridors_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasPipelineCorridors_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasPipelineCorridors_34.addFeatures(features_GasPipelineCorridors_34);
var lyr_GasPipelineCorridors_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasPipelineCorridors_34, 
                style: style_GasPipelineCorridors_34,
                popuplayertitle: 'Gas Pipeline Corridors',
                interactive: false,
                title: '<img src="styles/legend/GasPipelineCorridors_34.png" /> Gas Pipeline Corridors'
            });
var format_RailNetwork_35 = new ol.format.GeoJSON();
var features_RailNetwork_35 = format_RailNetwork_35.readFeatures(json_RailNetwork_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailNetwork_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailNetwork_35.addFeatures(features_RailNetwork_35);
var lyr_RailNetwork_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RailNetwork_35, 
                style: style_RailNetwork_35,
                popuplayertitle: 'Rail Network',
                interactive: false,
                title: '<img src="styles/legend/RailNetwork_35.png" /> Rail Network'
            });
var format_BicycleNetwork_36 = new ol.format.GeoJSON();
var features_BicycleNetwork_36 = format_BicycleNetwork_36.readFeatures(json_BicycleNetwork_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BicycleNetwork_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BicycleNetwork_36.addFeatures(features_BicycleNetwork_36);
var lyr_BicycleNetwork_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BicycleNetwork_36, 
                style: style_BicycleNetwork_36,
                popuplayertitle: 'Bicycle Network',
                interactive: false,
                title: '<img src="styles/legend/BicycleNetwork_36.png" /> Bicycle Network'
            });
var format_AirportAviationFacilityLocation_37 = new ol.format.GeoJSON();
var features_AirportAviationFacilityLocation_37 = format_AirportAviationFacilityLocation_37.readFeatures(json_AirportAviationFacilityLocation_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportAviationFacilityLocation_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportAviationFacilityLocation_37.addFeatures(features_AirportAviationFacilityLocation_37);
var lyr_AirportAviationFacilityLocation_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportAviationFacilityLocation_37, 
                style: style_AirportAviationFacilityLocation_37,
                popuplayertitle: 'Airport Aviation Facility Location',
                interactive: false,
                title: '<img src="styles/legend/AirportAviationFacilityLocation_37.png" /> Airport Aviation Facility Location'
            });
var format_RRCErgonPowerSubstations_38 = new ol.format.GeoJSON();
var features_RRCErgonPowerSubstations_38 = format_RRCErgonPowerSubstations_38.readFeatures(json_RRCErgonPowerSubstations_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RRCErgonPowerSubstations_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RRCErgonPowerSubstations_38.addFeatures(features_RRCErgonPowerSubstations_38);
var lyr_RRCErgonPowerSubstations_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RRCErgonPowerSubstations_38, 
                style: style_RRCErgonPowerSubstations_38,
                popuplayertitle: 'RRC Ergon Power Substations',
                interactive: false,
                title: '<img src="styles/legend/RRCErgonPowerSubstations_38.png" /> RRC Ergon Power Substations'
            });
var format_AirportAviationFacilityLocation_39 = new ol.format.GeoJSON();
var features_AirportAviationFacilityLocation_39 = format_AirportAviationFacilityLocation_39.readFeatures(json_AirportAviationFacilityLocation_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportAviationFacilityLocation_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportAviationFacilityLocation_39.addFeatures(features_AirportAviationFacilityLocation_39);
var lyr_AirportAviationFacilityLocation_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportAviationFacilityLocation_39, 
                style: style_AirportAviationFacilityLocation_39,
                popuplayertitle: 'Airport Aviation Facility Location',
                interactive: false,
                title: '<img src="styles/legend/AirportAviationFacilityLocation_39.png" /> Airport Aviation Facility Location'
            });
var format_SewerandWaterSupplyPlanningArea_40 = new ol.format.GeoJSON();
var features_SewerandWaterSupplyPlanningArea_40 = format_SewerandWaterSupplyPlanningArea_40.readFeatures(json_SewerandWaterSupplyPlanningArea_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerandWaterSupplyPlanningArea_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SewerandWaterSupplyPlanningArea_40.addFeatures(features_SewerandWaterSupplyPlanningArea_40);
var lyr_SewerandWaterSupplyPlanningArea_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SewerandWaterSupplyPlanningArea_40, 
                style: style_SewerandWaterSupplyPlanningArea_40,
                popuplayertitle: 'Sewer and Water Supply Planning Area',
                interactive: false,
                title: '<img src="styles/legend/SewerandWaterSupplyPlanningArea_40.png" /> Sewer and Water Supply Planning Area'
            });
var format_WaterCatchments_41 = new ol.format.GeoJSON();
var features_WaterCatchments_41 = format_WaterCatchments_41.readFeatures(json_WaterCatchments_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterCatchments_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterCatchments_41.addFeatures(features_WaterCatchments_41);
var lyr_WaterCatchments_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterCatchments_41, 
                style: style_WaterCatchments_41,
                popuplayertitle: 'Water Catchments',
                interactive: false,
                title: '<img src="styles/legend/WaterCatchments_41.png" /> Water Catchments'
            });
var format_LocalCatchmentFlood_42 = new ol.format.GeoJSON();
var features_LocalCatchmentFlood_42 = format_LocalCatchmentFlood_42.readFeatures(json_LocalCatchmentFlood_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalCatchmentFlood_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalCatchmentFlood_42.addFeatures(features_LocalCatchmentFlood_42);
var lyr_LocalCatchmentFlood_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalCatchmentFlood_42, 
                style: style_LocalCatchmentFlood_42,
                popuplayertitle: 'Local Catchment Flood',
                interactive: false,
                title: '<img src="styles/legend/LocalCatchmentFlood_42.png" /> Local Catchment Flood'
            });
var format_IndustryLandfillSewerandWater_43 = new ol.format.GeoJSON();
var features_IndustryLandfillSewerandWater_43 = format_IndustryLandfillSewerandWater_43.readFeatures(json_IndustryLandfillSewerandWater_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustryLandfillSewerandWater_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustryLandfillSewerandWater_43.addFeatures(features_IndustryLandfillSewerandWater_43);
var lyr_IndustryLandfillSewerandWater_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndustryLandfillSewerandWater_43, 
                style: style_IndustryLandfillSewerandWater_43,
                popuplayertitle: 'Industry Landfill Sewer and Water',
                interactive: false,
                title: '<img src="styles/legend/IndustryLandfillSewerandWater_43.png" /> Industry Landfill Sewer and Water'
            });
var format_Character_44 = new ol.format.GeoJSON();
var features_Character_44 = format_Character_44.readFeatures(json_Character_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Character_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Character_44.addFeatures(features_Character_44);
var lyr_Character_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Character_44, 
                style: style_Character_44,
                popuplayertitle: 'Character',
                interactive: false,
                title: '<img src="styles/legend/Character_44.png" /> Character'
            });
var format_PublicSafetyArea_45 = new ol.format.GeoJSON();
var features_PublicSafetyArea_45 = format_PublicSafetyArea_45.readFeatures(json_PublicSafetyArea_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicSafetyArea_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicSafetyArea_45.addFeatures(features_PublicSafetyArea_45);
var lyr_PublicSafetyArea_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicSafetyArea_45, 
                style: style_PublicSafetyArea_45,
                popuplayertitle: 'Public Safety Area',
                interactive: false,
                title: '<img src="styles/legend/PublicSafetyArea_45.png" /> Public Safety Area'
            });
var format_AirportFacilityZone_46 = new ol.format.GeoJSON();
var features_AirportFacilityZone_46 = format_AirportFacilityZone_46.readFeatures(json_AirportFacilityZone_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportFacilityZone_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportFacilityZone_46.addFeatures(features_AirportFacilityZone_46);
var lyr_AirportFacilityZone_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportFacilityZone_46, 
                style: style_AirportFacilityZone_46,
                popuplayertitle: 'Airport Facility Zone',
                interactive: false,
                title: '<img src="styles/legend/AirportFacilityZone_46.png" /> Airport Facility Zone'
            });
var format_AirportWildlifeHazard_47 = new ol.format.GeoJSON();
var features_AirportWildlifeHazard_47 = format_AirportWildlifeHazard_47.readFeatures(json_AirportWildlifeHazard_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportWildlifeHazard_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportWildlifeHazard_47.addFeatures(features_AirportWildlifeHazard_47);
var lyr_AirportWildlifeHazard_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportWildlifeHazard_47, 
                style: style_AirportWildlifeHazard_47,
                popuplayertitle: 'Airport Wildlife Hazard',
                interactive: false,
                title: '<img src="styles/legend/AirportWildlifeHazard_47.png" /> Airport Wildlife Hazard'
            });
var format_ANEFcontours_48 = new ol.format.GeoJSON();
var features_ANEFcontours_48 = format_ANEFcontours_48.readFeatures(json_ANEFcontours_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANEFcontours_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEFcontours_48.addFeatures(features_ANEFcontours_48);
var lyr_ANEFcontours_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEFcontours_48, 
                style: style_ANEFcontours_48,
                popuplayertitle: 'ANEF contours',
                interactive: false,
                title: '<img src="styles/legend/ANEFcontours_48.png" /> ANEF contours'
            });
var format_LightArea_49 = new ol.format.GeoJSON();
var features_LightArea_49 = format_LightArea_49.readFeatures(json_LightArea_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LightArea_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LightArea_49.addFeatures(features_LightArea_49);
var lyr_LightArea_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LightArea_49, 
                style: style_LightArea_49,
                popuplayertitle: 'Light Area',
                interactive: false,
                title: '<img src="styles/legend/LightArea_49.png" /> Light Area'
            });
var format_ObstacleLimitationSurface_50 = new ol.format.GeoJSON();
var features_ObstacleLimitationSurface_50 = format_ObstacleLimitationSurface_50.readFeatures(json_ObstacleLimitationSurface_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObstacleLimitationSurface_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObstacleLimitationSurface_50.addFeatures(features_ObstacleLimitationSurface_50);
var lyr_ObstacleLimitationSurface_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObstacleLimitationSurface_50, 
                style: style_ObstacleLimitationSurface_50,
                popuplayertitle: 'Obstacle Limitation Surface',
                interactive: false,
                title: '<img src="styles/legend/ObstacleLimitationSurface_50.png" /> Obstacle Limitation Surface'
            });
var format_RoadsNoiseCorridor_51 = new ol.format.GeoJSON();
var features_RoadsNoiseCorridor_51 = format_RoadsNoiseCorridor_51.readFeatures(json_RoadsNoiseCorridor_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsNoiseCorridor_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsNoiseCorridor_51.addFeatures(features_RoadsNoiseCorridor_51);
var lyr_RoadsNoiseCorridor_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsNoiseCorridor_51, 
                style: style_RoadsNoiseCorridor_51,
                popuplayertitle: 'Roads Noise Corridor',
                interactive: false,
                title: '<img src="styles/legend/RoadsNoiseCorridor_51.png" /> Roads Noise Corridor'
            });
var format_RailwayNoiseCorridor_52 = new ol.format.GeoJSON();
var features_RailwayNoiseCorridor_52 = format_RailwayNoiseCorridor_52.readFeatures(json_RailwayNoiseCorridor_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayNoiseCorridor_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayNoiseCorridor_52.addFeatures(features_RailwayNoiseCorridor_52);
var lyr_RailwayNoiseCorridor_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RailwayNoiseCorridor_52, 
                style: style_RailwayNoiseCorridor_52,
                popuplayertitle: 'Railway Noise Corridor',
                interactive: false,
                title: '<img src="styles/legend/RailwayNoiseCorridor_52.png" /> Railway Noise Corridor'
            });
var format_BushfireHazardClassification_53 = new ol.format.GeoJSON();
var features_BushfireHazardClassification_53 = format_BushfireHazardClassification_53.readFeatures(json_BushfireHazardClassification_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BushfireHazardClassification_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushfireHazardClassification_53.addFeatures(features_BushfireHazardClassification_53);
var lyr_BushfireHazardClassification_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushfireHazardClassification_53, 
                style: style_BushfireHazardClassification_53,
                popuplayertitle: 'Bushfire Hazard Classification',
                interactive: false,
                title: '<img src="styles/legend/BushfireHazardClassification_53.png" /> Bushfire Hazard Classification'
            });
var format_BushfireHazardBuffer_54 = new ol.format.GeoJSON();
var features_BushfireHazardBuffer_54 = format_BushfireHazardBuffer_54.readFeatures(json_BushfireHazardBuffer_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BushfireHazardBuffer_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushfireHazardBuffer_54.addFeatures(features_BushfireHazardBuffer_54);
var lyr_BushfireHazardBuffer_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushfireHazardBuffer_54, 
                style: style_BushfireHazardBuffer_54,
                popuplayertitle: 'Bushfire Hazard Buffer',
                interactive: false,
                title: '<img src="styles/legend/BushfireHazardBuffer_54.png" /> Bushfire Hazard Buffer'
            });
var format_AgriculturalLandClassification_55 = new ol.format.GeoJSON();
var features_AgriculturalLandClassification_55 = format_AgriculturalLandClassification_55.readFeatures(json_AgriculturalLandClassification_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriculturalLandClassification_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriculturalLandClassification_55.addFeatures(features_AgriculturalLandClassification_55);
var lyr_AgriculturalLandClassification_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgriculturalLandClassification_55, 
                style: style_AgriculturalLandClassification_55,
                popuplayertitle: 'Agricultural Land Classification',
                interactive: false,
                title: '<img src="styles/legend/AgriculturalLandClassification_55.png" /> Agricultural Land Classification'
            });
var format_MSES_56 = new ol.format.GeoJSON();
var features_MSES_56 = format_MSES_56.readFeatures(json_MSES_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSES_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSES_56.addFeatures(features_MSES_56);
var lyr_MSES_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSES_56, 
                style: style_MSES_56,
                popuplayertitle: 'MSES',
                interactive: false,
                title: '<img src="styles/legend/MSES_56.png" /> MSES'
            });
var format_MLESGeneral_57 = new ol.format.GeoJSON();
var features_MLESGeneral_57 = format_MLESGeneral_57.readFeatures(json_MLESGeneral_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MLESGeneral_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MLESGeneral_57.addFeatures(features_MLESGeneral_57);
var lyr_MLESGeneral_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MLESGeneral_57, 
                style: style_MLESGeneral_57,
                popuplayertitle: 'MLES General',
                interactive: false,
                title: '<img src="styles/legend/MLESGeneral_57.png" /> MLES General'
            });
var format_FloodplainInvestigationArea_58 = new ol.format.GeoJSON();
var features_FloodplainInvestigationArea_58 = format_FloodplainInvestigationArea_58.readFeatures(json_FloodplainInvestigationArea_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloodplainInvestigationArea_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodplainInvestigationArea_58.addFeatures(features_FloodplainInvestigationArea_58);
var lyr_FloodplainInvestigationArea_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodplainInvestigationArea_58, 
                style: style_FloodplainInvestigationArea_58,
                popuplayertitle: 'Floodplain Investigation Area',
                interactive: false,
                title: '<img src="styles/legend/FloodplainInvestigationArea_58.png" /> Floodplain Investigation Area'
            });
var format_AcidSulphateSoils_59 = new ol.format.GeoJSON();
var features_AcidSulphateSoils_59 = format_AcidSulphateSoils_59.readFeatures(json_AcidSulphateSoils_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcidSulphateSoils_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcidSulphateSoils_59.addFeatures(features_AcidSulphateSoils_59);
var lyr_AcidSulphateSoils_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcidSulphateSoils_59, 
                style: style_AcidSulphateSoils_59,
                popuplayertitle: 'Acid Sulphate Soils',
                interactive: false,
                title: '<img src="styles/legend/AcidSulphateSoils_59.png" /> Acid Sulphate Soils'
            });
var format_MiningLeases_60 = new ol.format.GeoJSON();
var features_MiningLeases_60 = format_MiningLeases_60.readFeatures(json_MiningLeases_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiningLeases_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningLeases_60.addFeatures(features_MiningLeases_60);
var lyr_MiningLeases_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningLeases_60, 
                style: style_MiningLeases_60,
                popuplayertitle: 'Mining Leases',
                interactive: false,
                title: '<img src="styles/legend/MiningLeases_60.png" /> Mining Leases'
            });
var format_Runways_61 = new ol.format.GeoJSON();
var features_Runways_61 = format_Runways_61.readFeatures(json_Runways_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runways_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runways_61.addFeatures(features_Runways_61);
var lyr_Runways_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runways_61, 
                style: style_Runways_61,
                popuplayertitle: 'Runways',
                interactive: false,
                title: '<img src="styles/legend/Runways_61.png" /> Runways'
            });
var format_HeritagePlace_62 = new ol.format.GeoJSON();
var features_HeritagePlace_62 = format_HeritagePlace_62.readFeatures(json_HeritagePlace_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritagePlace_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritagePlace_62.addFeatures(features_HeritagePlace_62);
var lyr_HeritagePlace_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritagePlace_62, 
                style: style_HeritagePlace_62,
                popuplayertitle: 'Heritage Place',
                interactive: false,
                title: '<img src="styles/legend/HeritagePlace_62.png" /> Heritage Place'
            });
var format_KeyResourceAreasExtractionProcessing_63 = new ol.format.GeoJSON();
var features_KeyResourceAreasExtractionProcessing_63 = format_KeyResourceAreasExtractionProcessing_63.readFeatures(json_KeyResourceAreasExtractionProcessing_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeyResourceAreasExtractionProcessing_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyResourceAreasExtractionProcessing_63.addFeatures(features_KeyResourceAreasExtractionProcessing_63);
var lyr_KeyResourceAreasExtractionProcessing_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyResourceAreasExtractionProcessing_63, 
                style: style_KeyResourceAreasExtractionProcessing_63,
                popuplayertitle: 'Key Resource Areas Extraction Processing',
                interactive: false,
                title: '<img src="styles/legend/KeyResourceAreasExtractionProcessing_63.png" /> Key Resource Areas Extraction Processing'
            });
var format_CoastalProtection_64 = new ol.format.GeoJSON();
var features_CoastalProtection_64 = format_CoastalProtection_64.readFeatures(json_CoastalProtection_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastalProtection_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalProtection_64.addFeatures(features_CoastalProtection_64);
var lyr_CoastalProtection_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalProtection_64, 
                style: style_CoastalProtection_64,
                popuplayertitle: 'Coastal Protection',
                interactive: false,
                title: '<img src="styles/legend/CoastalProtection_64.png" /> Coastal Protection'
            });
var format_FloodHazardClassification_65 = new ol.format.GeoJSON();
var features_FloodHazardClassification_65 = format_FloodHazardClassification_65.readFeatures(json_FloodHazardClassification_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloodHazardClassification_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodHazardClassification_65.addFeatures(features_FloodHazardClassification_65);
var lyr_FloodHazardClassification_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodHazardClassification_65, 
                style: style_FloodHazardClassification_65,
                popuplayertitle: 'Flood Hazard Classification',
                interactive: false,
                title: '<img src="styles/legend/FloodHazardClassification_65.png" /> Flood Hazard Classification'
            });
var format_NorthRockhamptonFloodManagementArea_66 = new ol.format.GeoJSON();
var features_NorthRockhamptonFloodManagementArea_66 = format_NorthRockhamptonFloodManagementArea_66.readFeatures(json_NorthRockhamptonFloodManagementArea_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthRockhamptonFloodManagementArea_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthRockhamptonFloodManagementArea_66.addFeatures(features_NorthRockhamptonFloodManagementArea_66);
var lyr_NorthRockhamptonFloodManagementArea_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthRockhamptonFloodManagementArea_66, 
                style: style_NorthRockhamptonFloodManagementArea_66,
                popuplayertitle: 'North Rockhampton Flood Management Area',
                interactive: false,
                title: '<img src="styles/legend/NorthRockhamptonFloodManagementArea_66.png" /> North Rockhampton Flood Management Area'
            });
var format_WBWaterwaysBuffered_67 = new ol.format.GeoJSON();
var features_WBWaterwaysBuffered_67 = format_WBWaterwaysBuffered_67.readFeatures(json_WBWaterwaysBuffered_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBWaterwaysBuffered_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysBuffered_67.addFeatures(features_WBWaterwaysBuffered_67);
var lyr_WBWaterwaysBuffered_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysBuffered_67, 
                style: style_WBWaterwaysBuffered_67,
                popuplayertitle: 'WB - Waterways Buffered',
                interactive: false,
                title: '<img src="styles/legend/WBWaterwaysBuffered_67.png" /> WB - Waterways Buffered'
            });
var format_MSESWetlands_68 = new ol.format.GeoJSON();
var features_MSESWetlands_68 = format_MSESWetlands_68.readFeatures(json_MSESWetlands_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSESWetlands_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSESWetlands_68.addFeatures(features_MSESWetlands_68);
var lyr_MSESWetlands_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSESWetlands_68, 
                style: style_MSESWetlands_68,
                popuplayertitle: 'MSES Wetlands',
                interactive: false,
                title: '<img src="styles/legend/MSESWetlands_68.png" /> MSES Wetlands'
            });
var format_MSESWaterways_69 = new ol.format.GeoJSON();
var features_MSESWaterways_69 = format_MSESWaterways_69.readFeatures(json_MSESWaterways_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSESWaterways_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSESWaterways_69.addFeatures(features_MSESWaterways_69);
var lyr_MSESWaterways_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSESWaterways_69, 
                style: style_MSESWaterways_69,
                popuplayertitle: 'MSES Waterways',
                interactive: false,
                title: '<img src="styles/legend/MSESWaterways_69.png" /> MSES Waterways'
            });
var format_MSESWildlifeHabitat_70 = new ol.format.GeoJSON();
var features_MSESWildlifeHabitat_70 = format_MSESWildlifeHabitat_70.readFeatures(json_MSESWildlifeHabitat_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSESWildlifeHabitat_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSESWildlifeHabitat_70.addFeatures(features_MSESWildlifeHabitat_70);
var lyr_MSESWildlifeHabitat_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSESWildlifeHabitat_70, 
                style: style_MSESWildlifeHabitat_70,
                popuplayertitle: 'MSES Wildlife Habitat',
                interactive: false,
                title: '<img src="styles/legend/MSESWildlifeHabitat_70.png" /> MSES Wildlife Habitat'
            });
var format_BiodiversityCorridors_71 = new ol.format.GeoJSON();
var features_BiodiversityCorridors_71 = format_BiodiversityCorridors_71.readFeatures(json_BiodiversityCorridors_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiodiversityCorridors_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiodiversityCorridors_71.addFeatures(features_BiodiversityCorridors_71);
var lyr_BiodiversityCorridors_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiodiversityCorridors_71, 
                style: style_BiodiversityCorridors_71,
                popuplayertitle: 'Biodiversity Corridors',
                interactive: false,
                title: '<img src="styles/legend/BiodiversityCorridors_71.png" /> Biodiversity Corridors'
            });
var format_MLESHigh_72 = new ol.format.GeoJSON();
var features_MLESHigh_72 = format_MLESHigh_72.readFeatures(json_MLESHigh_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MLESHigh_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MLESHigh_72.addFeatures(features_MLESHigh_72);
var lyr_MLESHigh_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MLESHigh_72, 
                style: style_MLESHigh_72,
                popuplayertitle: 'MLES High',
                interactive: false,
                title: '<img src="styles/legend/MLESHigh_72.png" /> MLES High'
            });
var format_Easements_73 = new ol.format.GeoJSON();
var features_Easements_73 = format_Easements_73.readFeatures(json_Easements_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Easements_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Easements_73.addFeatures(features_Easements_73);
var lyr_Easements_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Easements_73, 
                style: style_Easements_73,
                popuplayertitle: 'Easements',
                interactive: false,
                title: '<img src="styles/legend/Easements_73.png" /> Easements'
            });
var format_SFM2SettlePatternParkhurst_74 = new ol.format.GeoJSON();
var features_SFM2SettlePatternParkhurst_74 = format_SFM2SettlePatternParkhurst_74.readFeatures(json_SFM2SettlePatternParkhurst_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SFM2SettlePatternParkhurst_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SFM2SettlePatternParkhurst_74.addFeatures(features_SFM2SettlePatternParkhurst_74);
var lyr_SFM2SettlePatternParkhurst_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SFM2SettlePatternParkhurst_74, 
                style: style_SFM2SettlePatternParkhurst_74,
                popuplayertitle: 'SFM 2 - Settle Pattern - Parkhurst',
                interactive: false,
                title: '<img src="styles/legend/SFM2SettlePatternParkhurst_74.png" /> SFM 2 - Settle Pattern - Parkhurst'
            });
var lyr_ParkhurstGrowthArea_75 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Parkhurst Growth Area',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ParkhurstGrowthArea_75.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16750049.992134, -2672768.836943, 16758196.410134, -2665676.774574]
                            })
                        });
var format_Unzoned_76 = new ol.format.GeoJSON();
var features_Unzoned_76 = format_Unzoned_76.readFeatures(json_Unzoned_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unzoned_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unzoned_76.addFeatures(features_Unzoned_76);
var lyr_Unzoned_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unzoned_76, 
                style: style_Unzoned_76,
                popuplayertitle: 'Unzoned',
                interactive: true,
                title: '<img src="styles/legend/Unzoned_76.png" /> Unzoned'
            });
var format_Rezone_77 = new ol.format.GeoJSON();
var features_Rezone_77 = format_Rezone_77.readFeatures(json_Rezone_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rezone_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rezone_77.addFeatures(features_Rezone_77);
var lyr_Rezone_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rezone_77, 
                style: style_Rezone_77,
                popuplayertitle: 'Rezone',
                interactive: false,
                title: '<img src="styles/legend/Rezone_77.png" /> Rezone'
            });
var format_Zone_78 = new ol.format.GeoJSON();
var features_Zone_78 = format_Zone_78.readFeatures(json_Zone_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_78.addFeatures(features_Zone_78);
var lyr_Zone_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_78, 
                style: style_Zone_78,
                popuplayertitle: 'Zone',
                interactive: true,
                title: '<img src="styles/legend/Zone_78.png" /> Zone'
            });
var format_Suburb_79 = new ol.format.GeoJSON();
var features_Suburb_79 = format_Suburb_79.readFeatures(json_Suburb_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_79.addFeatures(features_Suburb_79);
var lyr_Suburb_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_79, 
                style: style_Suburb_79,
                popuplayertitle: 'Suburb',
                interactive: false,
                title: '<img src="styles/legend/Suburb_79.png" /> Suburb'
            });
var format_LGA_80 = new ol.format.GeoJSON();
var features_LGA_80 = format_LGA_80.readFeatures(json_LGA_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_80.addFeatures(features_LGA_80);
var lyr_LGA_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_80, 
                style: style_LGA_80,
                popuplayertitle: 'LGA',
                interactive: false,
                title: '<img src="styles/legend/LGA_80.png" /> LGA'
            });
var format_Estate_81 = new ol.format.GeoJSON();
var features_Estate_81 = format_Estate_81.readFeatures(json_Estate_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estate_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estate_81.addFeatures(features_Estate_81);
var lyr_Estate_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estate_81, 
                style: style_Estate_81,
                popuplayertitle: 'Estate',
                interactive: true,
                title: '<img src="styles/legend/Estate_81.png" /> Estate'
            });
var format_EstateLabel_82 = new ol.format.GeoJSON();
var features_EstateLabel_82 = format_EstateLabel_82.readFeatures(json_EstateLabel_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstateLabel_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstateLabel_82.addFeatures(features_EstateLabel_82);
var lyr_EstateLabel_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstateLabel_82, 
                style: style_EstateLabel_82,
                popuplayertitle: 'Estate Label',
                interactive: false,
                title: '<img src="styles/legend/EstateLabel_82.png" /> Estate Label'
            });
var format_ParcelAttributesLabel_83 = new ol.format.GeoJSON();
var features_ParcelAttributesLabel_83 = format_ParcelAttributesLabel_83.readFeatures(json_ParcelAttributesLabel_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributesLabel_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributesLabel_83.addFeatures(features_ParcelAttributesLabel_83);
var lyr_ParcelAttributesLabel_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributesLabel_83, 
                style: style_ParcelAttributesLabel_83,
                popuplayertitle: 'Parcel Attributes Label',
                interactive: false,
                title: '<img src="styles/legend/ParcelAttributesLabel_83.png" /> Parcel Attributes Label'
            });
var group_LabelSwitch = new ol.layer.Group({
                                layers: [lyr_EstateLabel_82,lyr_ParcelAttributesLabel_83,],
                                fold: "open",
                                title: 'Label Switch'});
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_79,lyr_LGA_80,lyr_Estate_81,],
                                fold: "open",
                                title: 'Administrative'});
var group_ParcelBoundaries = new ol.layer.Group({
                                layers: [lyr_Unzoned_76,lyr_Rezone_77,lyr_Zone_78,],
                                fold: "open",
                                title: 'Parcel Boundaries'});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_ParkhurstGrowthArea_75,],
                                fold: "open",
                                title: 'PSP'});
var group_GrowthAreaBoundaries = new ol.layer.Group({
                                layers: [lyr_SFM2SettlePatternParkhurst_74,],
                                fold: "open",
                                title: 'Growth Area Boundaries'});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_Runways_61,lyr_HeritagePlace_62,lyr_KeyResourceAreasExtractionProcessing_63,lyr_CoastalProtection_64,lyr_FloodHazardClassification_65,lyr_NorthRockhamptonFloodManagementArea_66,lyr_WBWaterwaysBuffered_67,lyr_MSESWetlands_68,lyr_MSESWaterways_69,lyr_MSESWildlifeHabitat_70,lyr_BiodiversityCorridors_71,lyr_MLESHigh_72,lyr_Easements_73,],
                                fold: "open",
                                title: 'NDH Deducted Overlays'});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_LocalCatchmentFlood_42,lyr_IndustryLandfillSewerandWater_43,lyr_Character_44,lyr_PublicSafetyArea_45,lyr_AirportFacilityZone_46,lyr_AirportWildlifeHazard_47,lyr_ANEFcontours_48,lyr_LightArea_49,lyr_ObstacleLimitationSurface_50,lyr_RoadsNoiseCorridor_51,lyr_RailwayNoiseCorridor_52,lyr_BushfireHazardClassification_53,lyr_BushfireHazardBuffer_54,lyr_AgriculturalLandClassification_55,lyr_MSES_56,lyr_MLESGeneral_57,lyr_FloodplainInvestigationArea_58,lyr_AcidSulphateSoils_59,lyr_MiningLeases_60,],
                                fold: "open",
                                title: 'Note to Due Diligence'});
var group_OtherLayers = new ol.layer.Group({
                                layers: [lyr_PAMPrecinctBoundaries_26,lyr_SDAStanwelltoGladstoneInfrastructureCorridor_27,lyr_RRCRoadHeirarchy_28,lyr_FitzroyRiverDFE_29,lyr_KeyResourceAreasTransportRoute_30,lyr_ElectricityDistributionNetwork66kV_31,lyr_StanwellPipeline_32,lyr_ElectricityTransmissionNetworkAbove132kV_33,lyr_GasPipelineCorridors_34,lyr_RailNetwork_35,lyr_BicycleNetwork_36,lyr_AirportAviationFacilityLocation_37,lyr_RRCErgonPowerSubstations_38,lyr_AirportAviationFacilityLocation_39,lyr_SewerandWaterSupplyPlanningArea_40,lyr_WaterCatchments_41,],
                                fold: "open",
                                title: 'Other Layers'});
var group_Zoned = new ol.layer.Group({
                                layers: [lyr_Township_15,lyr_Majorcentre_16,lyr_Principalcentre_17,lyr_Ruralresidential_18,lyr_Neighbourhoodcentre_19,lyr_Highdensityresidential_20,lyr_Lowmediumdensityresidential_21,lyr_Lowdensityresidential_22,lyr_Localcentre_23,lyr_Emergingcommunities_24,lyr_Districtcentre_25,],
                                fold: "open",
                                title: 'Zoned'});
var group_Unzoned = new ol.layer.Group({
                                layers: [lyr_Waterfrontandmarineindustry_2,lyr_Sportandrecreation_3,lyr_Specialisedcentre_4,lyr_Specialpurpose_5,lyr_Specialindustry_6,lyr_Rural_7,lyr_Openspace_8,lyr_Mediumimpactindustry_9,lyr_Lowimpactindustry_10,lyr_Limiteddevelopmentconstrainedland_11,lyr_Highimpactindustry_12,lyr_Environmentalmanagementandconservation_13,lyr_Communityfacilities_14,],
                                fold: "open",
                                title: 'Unzoned'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatellite_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatellite_1.setVisible(true);lyr_Waterfrontandmarineindustry_2.setVisible(false);lyr_Sportandrecreation_3.setVisible(false);lyr_Specialisedcentre_4.setVisible(false);lyr_Specialpurpose_5.setVisible(false);lyr_Specialindustry_6.setVisible(false);lyr_Rural_7.setVisible(false);lyr_Openspace_8.setVisible(false);lyr_Mediumimpactindustry_9.setVisible(false);lyr_Lowimpactindustry_10.setVisible(false);lyr_Limiteddevelopmentconstrainedland_11.setVisible(false);lyr_Highimpactindustry_12.setVisible(false);lyr_Environmentalmanagementandconservation_13.setVisible(false);lyr_Communityfacilities_14.setVisible(false);lyr_Township_15.setVisible(false);lyr_Majorcentre_16.setVisible(false);lyr_Principalcentre_17.setVisible(false);lyr_Ruralresidential_18.setVisible(false);lyr_Neighbourhoodcentre_19.setVisible(false);lyr_Highdensityresidential_20.setVisible(false);lyr_Lowmediumdensityresidential_21.setVisible(false);lyr_Lowdensityresidential_22.setVisible(false);lyr_Localcentre_23.setVisible(false);lyr_Emergingcommunities_24.setVisible(false);lyr_Districtcentre_25.setVisible(false);lyr_PAMPrecinctBoundaries_26.setVisible(false);lyr_SDAStanwelltoGladstoneInfrastructureCorridor_27.setVisible(false);lyr_RRCRoadHeirarchy_28.setVisible(false);lyr_FitzroyRiverDFE_29.setVisible(false);lyr_KeyResourceAreasTransportRoute_30.setVisible(false);lyr_ElectricityDistributionNetwork66kV_31.setVisible(false);lyr_StanwellPipeline_32.setVisible(false);lyr_ElectricityTransmissionNetworkAbove132kV_33.setVisible(false);lyr_GasPipelineCorridors_34.setVisible(false);lyr_RailNetwork_35.setVisible(false);lyr_BicycleNetwork_36.setVisible(false);lyr_AirportAviationFacilityLocation_37.setVisible(false);lyr_RRCErgonPowerSubstations_38.setVisible(false);lyr_AirportAviationFacilityLocation_39.setVisible(false);lyr_SewerandWaterSupplyPlanningArea_40.setVisible(false);lyr_WaterCatchments_41.setVisible(false);lyr_LocalCatchmentFlood_42.setVisible(false);lyr_IndustryLandfillSewerandWater_43.setVisible(false);lyr_Character_44.setVisible(false);lyr_PublicSafetyArea_45.setVisible(false);lyr_AirportFacilityZone_46.setVisible(false);lyr_AirportWildlifeHazard_47.setVisible(false);lyr_ANEFcontours_48.setVisible(false);lyr_LightArea_49.setVisible(false);lyr_ObstacleLimitationSurface_50.setVisible(false);lyr_RoadsNoiseCorridor_51.setVisible(false);lyr_RailwayNoiseCorridor_52.setVisible(false);lyr_BushfireHazardClassification_53.setVisible(false);lyr_BushfireHazardBuffer_54.setVisible(false);lyr_AgriculturalLandClassification_55.setVisible(false);lyr_MSES_56.setVisible(false);lyr_MLESGeneral_57.setVisible(false);lyr_FloodplainInvestigationArea_58.setVisible(false);lyr_AcidSulphateSoils_59.setVisible(false);lyr_MiningLeases_60.setVisible(false);lyr_Runways_61.setVisible(false);lyr_HeritagePlace_62.setVisible(false);lyr_KeyResourceAreasExtractionProcessing_63.setVisible(false);lyr_CoastalProtection_64.setVisible(false);lyr_FloodHazardClassification_65.setVisible(false);lyr_NorthRockhamptonFloodManagementArea_66.setVisible(false);lyr_WBWaterwaysBuffered_67.setVisible(false);lyr_MSESWetlands_68.setVisible(false);lyr_MSESWaterways_69.setVisible(false);lyr_MSESWildlifeHabitat_70.setVisible(false);lyr_BiodiversityCorridors_71.setVisible(false);lyr_MLESHigh_72.setVisible(false);lyr_Easements_73.setVisible(false);lyr_SFM2SettlePatternParkhurst_74.setVisible(false);lyr_ParkhurstGrowthArea_75.setVisible(true);lyr_Unzoned_76.setVisible(true);lyr_Rezone_77.setVisible(true);lyr_Zone_78.setVisible(true);lyr_Suburb_79.setVisible(true);lyr_LGA_80.setVisible(true);lyr_Estate_81.setVisible(false);lyr_EstateLabel_82.setVisible(false);lyr_ParcelAttributesLabel_83.setVisible(true);
var layersList = [group_BaseLayer,group_Unzoned,group_Zoned,group_OtherLayers,group_NotetoDueDiligence,group_NDHDeductedOverlays,group_GrowthAreaBoundaries,group_PSP,group_ParcelBoundaries,group_Administrative,group_LabelSwitch];
lyr_Waterfrontandmarineindustry_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Sportandrecreation_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Specialisedcentre_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Specialpurpose_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Specialindustry_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Rural_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Openspace_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Mediumimpactindustry_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Lowimpactindustry_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Limiteddevelopmentconstrainedland_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Highimpactindustry_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Environmentalmanagementandconservation_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Communityfacilities_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Township_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Majorcentre_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Principalcentre_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Ruralresidential_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Neighbourhoodcentre_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Highdensityresidential_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Lowmediumdensityresidential_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Lowdensityresidential_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Localcentre_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Emergingcommunities_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Districtcentre_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GISREF': 'GISREF', 'Former_SplitZone': 'Former_SplitZone', 'Former_PS_Zone': 'Former_PS_Zone', 'Former_PS_Precinct': 'Former_PS_Precinct', 'Split_Zone': 'Split_Zone', 'Zone': 'Zone', 'Former_Zone_prefix': 'Former_Zone_prefix', 'Zone_prefix': 'Zone_prefix', 'Zone_Lable': 'Zone_Lable', 'Former_PS_Zone_Lable': 'Former_PS_Zone_Lable', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PAMPrecinctBoundaries_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Precinct': 'Precinct', 'Precinct_V2': 'Precinct_V2', 'Sub_Precinct': 'Sub_Precinct', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SDAStanwelltoGladstoneInfrastructureCorridor_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SDA_NAME': 'SDA_NAME', 'SDAAREAHA': 'SDAAREAHA', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RRCRoadHeirarchy_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SEGPAR': 'SEGPAR', 'LOT': 'LOT', 'PLAN_': 'PLAN_', 'LOT_IND': 'LOT_IND', 'LOT_AREA': 'LOT_AREA', 'EXCL_AREA': 'EXCL_AREA', 'SURV_IND': 'SURV_IND', 'TENURE': 'TENURE', 'FEAT_NAME': 'FEAT_NAME', 'LOCALITY': 'LOCALITY', 'PRC': 'PRC', 'LAC': 'LAC', 'UPDATE_TYP': 'UPDATE_TYP', 'PARCEL_TYP': 'PARCEL_TYP', 'COVER_TYP': 'COVER_TYP', 'LOCAL_CODE': 'LOCAL_CODE', 'ACC_CODE': 'ACC_CODE', 'MAX_ERR': 'MAX_ERR', 'PARCEL_CNT': 'PARCEL_CNT', 'RoadClass': 'RoadClass', 'RCC_RClass': 'RCC_RClass', 'Notes': 'Notes', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_FitzroyRiverDFE_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Overlay': 'Overlay', 'Decription': 'Descrption', 'Shape_Length': 'Shape_Length', });
lyr_KeyResourceAreasTransportRoute_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KRA_NO': 'KRA_NO', 'KRA_NAME': 'KRA_NAME', 'SHAPE_Leng': 'SHAPE_Leng', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', });
lyr_ElectricityDistributionNetwork66kV_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', });
lyr_StanwellPipeline_32.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', });
lyr_ElectricityTransmissionNetworkAbove132kV_33.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', });
lyr_GasPipelineCorridors_34.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', });
lyr_RailNetwork_35.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FEATURETYPE': 'FEATURETYPE', 'ROUTENAME': 'ROUTENAME', 'SECTIONNAME': 'SECTIONNAME', 'GAUGE': 'GAUGE', 'OWNER': 'OWNER', 'STATUS': 'STATUS', 'TRACKS': 'TRACKS', 'FEATURERELIABILITY': 'FEATURERELIABILITY', 'FEATURESOURCE': 'FEATURESOURCE', 'ATTRIBUTERELIABILITY': 'ATTRIBUTERELIABILITY', 'ATTRIBUTESOURCE': 'ATTRIBUTESOURCE', 'PLANIMETRICACCURACY': 'PLANIMETRICACCURACY', 'METADATACOMMENT': 'METADATACOMMENT', 'REVISED': 'REVISED', 'STKEHDRID': 'STKEHDRID', 'STKEHDRNAME': 'STKEHDRNAME', 'UPPERSCALE': 'UPPERSCALE', 'USCERTAINTY': 'USCERTAINTY', 'TEXTNOTE': 'TEXTNOTE', 'DIMENSION': 'DIMENSION', 'EDITCODE': 'EDITCODE', 'SYMBOL100K': 'SYMBOL100K', 'SYMBOL250K': 'SYMBOL250K', 'SYMBOLWAC1MIL': 'SYMBOLWAC1MIL', 'SYMBOL2_5MIL': 'SYMBOL2_5MIL', 'SYMBOL5MIL': 'SYMBOL5MIL', 'SYMBOL10MIL': 'SYMBOL10MIL', 'ELECTRIFIED': 'ELECTRIFIED', 'TYPE': 'TYPE', 'WEBSERVZOOM': 'WEBSERVZOOM', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'SHAPE_Length': 'SHAPE_Length', });
lyr_BicycleNetwork_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', });
lyr_AirportAviationFacilityLocation_37.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'UserText_3': 'UserText_3', 'UserText_4': 'UserText_4', });
lyr_RRCErgonPowerSubstations_38.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ANNOTATION': 'ANNOTATION', 'LOCATION_T': 'LOCATION_T', 'OPERATIONA': 'OPERATIONA', 'CONSTRUCTI': 'CONSTRUCTI', 'LEGACY_ID': 'LEGACY_ID', 'LOCATION_P': 'LOCATION_P', 'GPS_PDA_LO': 'GPS_PDA_LO', 'GPS_SURVEY': 'GPS_SURVEY', 'DATE_INSTA': 'DATE_INSTA', 'ECORP_ASSE': 'ECORP_ASSE', 'SERVICE_ST': 'SERVICE_ST', 'ANNOTATI00': 'ANNOTATI00', 'REPORTING_': 'REPORTING_', 'VERIFIED': 'VERIFIED', 'CARTOGRAPH': 'CARTOGRAPH', 'SITE_TYPE': 'SITE_TYPE', 'SPECIAL_CO': 'SPECIAL_CO', 'ACCESS_DET': 'ACCESS_DET', 'OPERATIO00': 'OPERATIO00', 'OPERATIO01': 'OPERATIO01', 'ID': 'ID', 'REMARKS': 'REMARKS', 'REMOVED_LO': 'REMOVED_LO', 'OWNER': 'OWNER', 'CONSTRUC00': 'CONSTRUC00', 'ZONE_SUBST': 'ZONE_SUBST', 'LOCATION_S': 'LOCATION_S', 'ANNOTATI01': 'ANNOTATI01', 'DESCRIPTIO': 'DESCRIPTIO', 'LGA': 'LGA', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', });
lyr_AirportAviationFacilityLocation_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'UserText_3': 'UserText_3', 'UserText_4': 'UserText_4', });
lyr_SewerandWaterSupplyPlanningArea_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_WaterCatchments_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LocalCatchmentFlood_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_IndustryLandfillSewerandWater_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Character_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PublicSafetyArea_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AirportFacilityZone_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AirportWildlifeHazard_47.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ANEFcontours_48.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LightArea_49.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ObstacleLimitationSurface_50.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RoadsNoiseCorridor_51.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RailwayNoiseCorridor_52.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BushfireHazardClassification_53.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'PotentialBushfireIntensity': 'PotentialBushfireIntensity', 'RuleID': 'RuleID', 'CLASS': 'CLASS', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BushfireHazardBuffer_54.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AgriculturalLandClassification_55.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'Description', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MSES_56.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MLESGeneral_57.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FloodplainInvestigationArea_58.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AcidSulphateSoils_59.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'CATEGORY': 'Description', 'PUBLISH_DATE': 'Gazette_Date', 'GAZETTE_DATE': 'GAZETTE_DATE', 'SUB_TYPE': 'SUB_TYPE', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MiningLeases_60.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Runways_61.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HeritagePlace_62.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KeyResourceAreasExtractionProcessing_63.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CoastalProtection_64.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FloodHazardClassification_65.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_NorthRockhamptonFloodManagementArea_66.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_WBWaterwaysBuffered_67.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_MSESWetlands_68.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MSESWaterways_69.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MSESWildlifeHabitat_70.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BiodiversityCorridors_71.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MLESHigh_72.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SCHEME': 'SCHEME', 'VERSION': 'VERSION', 'DATASET': 'DATASET', 'LAYER': 'Layer_Name', 'SUB_TYPE': 'SUB_TYPE', 'DESCRIPTION': 'DESCRIPTION', 'PUBLISH_DATE': 'PUBLISH_DATE', 'GAZETTE_DATE': 'GAZETTE_DATE', 'UserText_1': 'UserText_1', 'UserText_2': 'UserText_2', 'User_Text_3': 'User_Text_3', 'User_Text_4': 'User_Text_4', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Easements_73.set('fieldAliases', {'fid': 'fid', 'lot': 'lot', 'plan': 'plan', 'lotplan': 'Lot/plan', 'tenure': 'tenure', 'lot_area': 'Lot area (m²)', 'excl_area': 'Excluded area (m²)', 'lot_volume': 'Lot volume', 'feat_name': 'Name', 'alias_name': 'Alias', 'acc_code': 'Accuracy', 'surv_ind': 'Surveyed', 'cover_typ': 'Coverage type', 'parcel_typ': 'Parcel type', 'locality': 'locality', 'shire_name': 'Local authority', 'smis_map': 'SmartMap link', 'objectid': 'Object ID', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_SFM2SettlePatternParkhurst_74.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Unzoned_76.set('fieldAliases', {'fid': 'fid', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned/Unzoned': 'Zoned/Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (350m2)': 'Lot Yield @ 20dw/HA (350m2)', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', });
lyr_Rezone_77.set('fieldAliases', {'id': 'id', });
lyr_Zone_78.set('fieldAliases', {'fid': 'fid', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'VALUE @ 467m2': 'VALUE @ 467m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Developer': 'Developer', 'Lead Link': 'Lead Link', });
lyr_Suburb_79.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LGA_80.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_Estate_81.set('fieldAliases', {'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', 'No of Lots': 'No of Lots', });
lyr_EstateLabel_82.set('fieldAliases', {'fid': 'fid', 'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', 'No of Lots': 'No of Lots', });
lyr_ParcelAttributesLabel_83.set('fieldAliases', {'fid': 'fid', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15Dw/Ha': 'Lot Yield @ 15Dw/Ha', 'VALUE @ 467m2': 'VALUE @ 467m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Developer': 'Developer', 'Lead Link': 'Lead Link', });
lyr_Waterfrontandmarineindustry_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sportandrecreation_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Specialisedcentre_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Specialpurpose_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Specialindustry_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rural_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Openspace_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mediumimpactindustry_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Lowimpactindustry_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limiteddevelopmentconstrainedland_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Highimpactindustry_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Environmentalmanagementandconservation_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Communityfacilities_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Township_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Majorcentre_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Principalcentre_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ruralresidential_18.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Neighbourhoodcentre_19.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Highdensityresidential_20.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Lowmediumdensityresidential_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Lowdensityresidential_22.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Localcentre_23.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Emergingcommunities_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Districtcentre_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GISREF': 'TextEdit', 'Former_SplitZone': 'TextEdit', 'Former_PS_Zone': 'TextEdit', 'Former_PS_Precinct': 'TextEdit', 'Split_Zone': 'TextEdit', 'Zone': 'TextEdit', 'Former_Zone_prefix': 'TextEdit', 'Zone_prefix': 'TextEdit', 'Zone_Lable': 'TextEdit', 'Former_PS_Zone_Lable': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PAMPrecinctBoundaries_26.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Precinct': 'TextEdit', 'Precinct_V2': 'TextEdit', 'Sub_Precinct': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SDAStanwelltoGladstoneInfrastructureCorridor_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SDA_NAME': 'TextEdit', 'SDAAREAHA': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RRCRoadHeirarchy_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SEGPAR': 'Range', 'LOT': 'TextEdit', 'PLAN_': 'TextEdit', 'LOT_IND': 'Range', 'LOT_AREA': 'TextEdit', 'EXCL_AREA': 'TextEdit', 'SURV_IND': 'TextEdit', 'TENURE': 'TextEdit', 'FEAT_NAME': 'TextEdit', 'LOCALITY': 'TextEdit', 'PRC': 'Range', 'LAC': 'Range', 'UPDATE_TYP': 'TextEdit', 'PARCEL_TYP': 'TextEdit', 'COVER_TYP': 'TextEdit', 'LOCAL_CODE': 'Range', 'ACC_CODE': 'TextEdit', 'MAX_ERR': 'TextEdit', 'PARCEL_CNT': 'Range', 'RoadClass': 'TextEdit', 'RCC_RClass': 'TextEdit', 'Notes': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_FitzroyRiverDFE_29.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Overlay': 'TextEdit', 'Decription': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_KeyResourceAreasTransportRoute_30.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'KRA_NO': 'Range', 'KRA_NAME': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_ElectricityDistributionNetwork66kV_31.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_StanwellPipeline_32.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_ElectricityTransmissionNetworkAbove132kV_33.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_GasPipelineCorridors_34.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_RailNetwork_35.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'FEATURETYPE': 'TextEdit', 'ROUTENAME': 'TextEdit', 'SECTIONNAME': 'TextEdit', 'GAUGE': 'ValueMap', 'OWNER': 'TextEdit', 'STATUS': 'ValueMap', 'TRACKS': 'ValueMap', 'FEATURERELIABILITY': 'DateTime', 'FEATURESOURCE': 'TextEdit', 'ATTRIBUTERELIABILITY': 'DateTime', 'ATTRIBUTESOURCE': 'TextEdit', 'PLANIMETRICACCURACY': 'Range', 'METADATACOMMENT': 'TextEdit', 'REVISED': 'DateTime', 'STKEHDRID': 'TextEdit', 'STKEHDRNAME': 'TextEdit', 'UPPERSCALE': 'ValueMap', 'USCERTAINTY': 'ValueMap', 'TEXTNOTE': 'TextEdit', 'DIMENSION': 'TextEdit', 'EDITCODE': 'Range', 'SYMBOL100K': 'ValueMap', 'SYMBOL250K': 'ValueMap', 'SYMBOLWAC1MIL': 'ValueMap', 'SYMBOL2_5MIL': 'ValueMap', 'SYMBOL5MIL': 'ValueMap', 'SYMBOL10MIL': 'ValueMap', 'ELECTRIFIED': 'TextEdit', 'TYPE': 'Range', 'WEBSERVZOOM': 'Range', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_BicycleNetwork_36.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_AirportAviationFacilityLocation_37.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'UserText_3': 'TextEdit', 'UserText_4': 'TextEdit', });
lyr_RRCErgonPowerSubstations_38.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'ANNOTATION': 'TextEdit', 'LOCATION_T': 'TextEdit', 'OPERATIONA': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'LEGACY_ID': 'TextEdit', 'LOCATION_P': 'TextEdit', 'GPS_PDA_LO': 'TextEdit', 'GPS_SURVEY': 'TextEdit', 'DATE_INSTA': 'TextEdit', 'ECORP_ASSE': 'TextEdit', 'SERVICE_ST': 'TextEdit', 'ANNOTATI00': 'TextEdit', 'REPORTING_': 'TextEdit', 'VERIFIED': 'TextEdit', 'CARTOGRAPH': 'TextEdit', 'SITE_TYPE': 'TextEdit', 'SPECIAL_CO': 'TextEdit', 'ACCESS_DET': 'TextEdit', 'OPERATIO00': 'TextEdit', 'OPERATIO01': 'TextEdit', 'ID': 'TextEdit', 'REMARKS': 'TextEdit', 'REMOVED_LO': 'TextEdit', 'OWNER': 'TextEdit', 'CONSTRUC00': 'TextEdit', 'ZONE_SUBST': 'TextEdit', 'LOCATION_S': 'TextEdit', 'ANNOTATI01': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LGA': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', });
lyr_AirportAviationFacilityLocation_39.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'UserText_3': 'TextEdit', 'UserText_4': 'TextEdit', });
lyr_SewerandWaterSupplyPlanningArea_40.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WaterCatchments_41.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LocalCatchmentFlood_42.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IndustryLandfillSewerandWater_43.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Character_44.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PublicSafetyArea_45.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AirportFacilityZone_46.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AirportWildlifeHazard_47.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ANEFcontours_48.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LightArea_49.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ObstacleLimitationSurface_50.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RoadsNoiseCorridor_51.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RailwayNoiseCorridor_52.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BushfireHazardClassification_53.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'Range', 'PotentialBushfireIntensity': 'Range', 'RuleID': 'Range', 'CLASS': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BushfireHazardBuffer_54.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AgriculturalLandClassification_55.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'PUBLISH_DATE': 'TextEdit', 'GAZETTE_DATE': 'DateTime', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MSES_56.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MLESGeneral_57.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FloodplainInvestigationArea_58.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AcidSulphateSoils_59.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'CATEGORY': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'SUB_TYPE': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MiningLeases_60.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Runways_61.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HeritagePlace_62.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KeyResourceAreasExtractionProcessing_63.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CoastalProtection_64.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FloodHazardClassification_65.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NorthRockhamptonFloodManagementArea_66.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WBWaterwaysBuffered_67.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_MSESWetlands_68.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MSESWaterways_69.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MSESWildlifeHabitat_70.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BiodiversityCorridors_71.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MLESHigh_72.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SCHEME': 'TextEdit', 'VERSION': 'TextEdit', 'DATASET': 'TextEdit', 'LAYER': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'PUBLISH_DATE': 'DateTime', 'GAZETTE_DATE': 'DateTime', 'UserText_1': 'TextEdit', 'UserText_2': 'TextEdit', 'User_Text_3': 'TextEdit', 'User_Text_4': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Easements_73.set('fieldImages', {'fid': 'TextEdit', 'lot': 'TextEdit', 'plan': 'TextEdit', 'lotplan': 'TextEdit', 'tenure': 'TextEdit', 'lot_area': 'TextEdit', 'excl_area': 'TextEdit', 'lot_volume': 'TextEdit', 'feat_name': 'TextEdit', 'alias_name': 'TextEdit', 'acc_code': 'TextEdit', 'surv_ind': 'TextEdit', 'cover_typ': 'TextEdit', 'parcel_typ': 'TextEdit', 'locality': 'TextEdit', 'shire_name': 'TextEdit', 'smis_map': 'TextEdit', 'objectid': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_SFM2SettlePatternParkhurst_74.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Unzoned_76.set('fieldImages', {'fid': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned/Unzoned': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strat Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 20dw/HA (350m2)': 'TextEdit', 'VALUE @ 350m2': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', });
lyr_Rezone_77.set('fieldImages', {'id': 'TextEdit', });
lyr_Zone_78.set('fieldImages', {'fid': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'VALUE @ 467m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%DM)': '', 'Development Contributions per Lot': '', 'Last Sold Price': '', 'Last Sold Date': '', 'OWNERSHIP': '', 'Estate Status': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Developer': '', 'Lead Link': '', });
lyr_Suburb_79.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LGA_80.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_Estate_81.set('fieldImages', {'Estate': '', 'Status': '', 'Developer': '', 'No of Lots': '', });
lyr_EstateLabel_82.set('fieldImages', {'fid': 'TextEdit', 'Estate': 'TextEdit', 'Status': 'TextEdit', 'Developer': 'TextEdit', 'No of Lots': 'TextEdit', });
lyr_ParcelAttributesLabel_83.set('fieldImages', {'fid': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15Dw/Ha': '', 'VALUE @ 467m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%DM)': '', 'Development Contributions per Lot': '', 'Last Sold Price': '', 'Last Sold Date': '', 'OWNERSHIP': '', 'Estate Status': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Developer': '', 'Lead Link': '', });
lyr_Waterfrontandmarineindustry_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Sportandrecreation_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Specialisedcentre_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Specialpurpose_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Specialindustry_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Rural_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Openspace_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Mediumimpactindustry_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Lowimpactindustry_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Limiteddevelopmentconstrainedland_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Highimpactindustry_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Environmentalmanagementandconservation_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Communityfacilities_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Township_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Majorcentre_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Principalcentre_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Ruralresidential_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Neighbourhoodcentre_19.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Highdensityresidential_20.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Lowmediumdensityresidential_21.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Lowdensityresidential_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Localcentre_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Emergingcommunities_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Districtcentre_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GISREF': 'hidden field', 'Former_SplitZone': 'hidden field', 'Former_PS_Zone': 'hidden field', 'Former_PS_Precinct': 'hidden field', 'Split_Zone': 'hidden field', 'Zone': 'hidden field', 'Former_Zone_prefix': 'hidden field', 'Zone_prefix': 'hidden field', 'Zone_Lable': 'hidden field', 'Former_PS_Zone_Lable': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PAMPrecinctBoundaries_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Precinct': 'hidden field', 'Precinct_V2': 'hidden field', 'Sub_Precinct': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SDAStanwelltoGladstoneInfrastructureCorridor_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SDA_NAME': 'hidden field', 'SDAAREAHA': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_RRCRoadHeirarchy_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SEGPAR': 'hidden field', 'LOT': 'hidden field', 'PLAN_': 'hidden field', 'LOT_IND': 'hidden field', 'LOT_AREA': 'hidden field', 'EXCL_AREA': 'hidden field', 'SURV_IND': 'hidden field', 'TENURE': 'hidden field', 'FEAT_NAME': 'hidden field', 'LOCALITY': 'hidden field', 'PRC': 'hidden field', 'LAC': 'hidden field', 'UPDATE_TYP': 'hidden field', 'PARCEL_TYP': 'hidden field', 'COVER_TYP': 'hidden field', 'LOCAL_CODE': 'hidden field', 'ACC_CODE': 'hidden field', 'MAX_ERR': 'hidden field', 'PARCEL_CNT': 'hidden field', 'RoadClass': 'hidden field', 'RCC_RClass': 'hidden field', 'Notes': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_FitzroyRiverDFE_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Overlay': 'hidden field', 'Decription': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_KeyResourceAreasTransportRoute_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KRA_NO': 'hidden field', 'KRA_NAME': 'hidden field', 'SHAPE_Leng': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_ElectricityDistributionNetwork66kV_31.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_StanwellPipeline_32.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_ElectricityTransmissionNetworkAbove132kV_33.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_GasPipelineCorridors_34.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_RailNetwork_35.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FEATURETYPE': 'hidden field', 'ROUTENAME': 'hidden field', 'SECTIONNAME': 'hidden field', 'GAUGE': 'hidden field', 'OWNER': 'hidden field', 'STATUS': 'hidden field', 'TRACKS': 'hidden field', 'FEATURERELIABILITY': 'hidden field', 'FEATURESOURCE': 'hidden field', 'ATTRIBUTERELIABILITY': 'hidden field', 'ATTRIBUTESOURCE': 'hidden field', 'PLANIMETRICACCURACY': 'hidden field', 'METADATACOMMENT': 'hidden field', 'REVISED': 'hidden field', 'STKEHDRID': 'hidden field', 'STKEHDRNAME': 'hidden field', 'UPPERSCALE': 'hidden field', 'USCERTAINTY': 'hidden field', 'TEXTNOTE': 'hidden field', 'DIMENSION': 'hidden field', 'EDITCODE': 'hidden field', 'SYMBOL100K': 'hidden field', 'SYMBOL250K': 'hidden field', 'SYMBOLWAC1MIL': 'hidden field', 'SYMBOL2_5MIL': 'hidden field', 'SYMBOL5MIL': 'hidden field', 'SYMBOL10MIL': 'hidden field', 'ELECTRIFIED': 'hidden field', 'TYPE': 'hidden field', 'WEBSERVZOOM': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_BicycleNetwork_36.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_AirportAviationFacilityLocation_37.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'UserText_3': 'hidden field', 'UserText_4': 'hidden field', });
lyr_RRCErgonPowerSubstations_38.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ANNOTATION': 'hidden field', 'LOCATION_T': 'hidden field', 'OPERATIONA': 'hidden field', 'CONSTRUCTI': 'hidden field', 'LEGACY_ID': 'hidden field', 'LOCATION_P': 'hidden field', 'GPS_PDA_LO': 'hidden field', 'GPS_SURVEY': 'hidden field', 'DATE_INSTA': 'hidden field', 'ECORP_ASSE': 'hidden field', 'SERVICE_ST': 'hidden field', 'ANNOTATI00': 'hidden field', 'REPORTING_': 'hidden field', 'VERIFIED': 'hidden field', 'CARTOGRAPH': 'hidden field', 'SITE_TYPE': 'hidden field', 'SPECIAL_CO': 'hidden field', 'ACCESS_DET': 'hidden field', 'OPERATIO00': 'hidden field', 'OPERATIO01': 'hidden field', 'ID': 'hidden field', 'REMARKS': 'hidden field', 'REMOVED_LO': 'hidden field', 'OWNER': 'hidden field', 'CONSTRUC00': 'hidden field', 'ZONE_SUBST': 'hidden field', 'LOCATION_S': 'hidden field', 'ANNOTATI01': 'hidden field', 'DESCRIPTIO': 'hidden field', 'LGA': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', });
lyr_AirportAviationFacilityLocation_39.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'UserText_3': 'hidden field', 'UserText_4': 'hidden field', });
lyr_SewerandWaterSupplyPlanningArea_40.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_WaterCatchments_41.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LocalCatchmentFlood_42.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_IndustryLandfillSewerandWater_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Character_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_PublicSafetyArea_45.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_AirportFacilityZone_46.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_AirportWildlifeHazard_47.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ANEFcontours_48.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LightArea_49.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ObstacleLimitationSurface_50.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RoadsNoiseCorridor_51.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_RailwayNoiseCorridor_52.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_BushfireHazardClassification_53.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Id': 'hidden field', 'PotentialBushfireIntensity': 'hidden field', 'RuleID': 'hidden field', 'CLASS': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BushfireHazardBuffer_54.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_AgriculturalLandClassification_55.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MSES_56.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MLESGeneral_57.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FloodplainInvestigationArea_58.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_AcidSulphateSoils_59.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'CATEGORY': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'SUB_TYPE': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_MiningLeases_60.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Runways_61.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HeritagePlace_62.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_KeyResourceAreasExtractionProcessing_63.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_CoastalProtection_64.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FloodHazardClassification_65.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_NorthRockhamptonFloodManagementArea_66.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_WBWaterwaysBuffered_67.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_MSESWetlands_68.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MSESWaterways_69.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MSESWildlifeHabitat_70.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BiodiversityCorridors_71.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MLESHigh_72.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SCHEME': 'hidden field', 'VERSION': 'hidden field', 'DATASET': 'hidden field', 'LAYER': 'hidden field', 'SUB_TYPE': 'hidden field', 'DESCRIPTION': 'hidden field', 'PUBLISH_DATE': 'hidden field', 'GAZETTE_DATE': 'hidden field', 'UserText_1': 'hidden field', 'UserText_2': 'hidden field', 'User_Text_3': 'hidden field', 'User_Text_4': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Easements_73.set('fieldLabels', {'fid': 'hidden field', 'lot': 'hidden field', 'plan': 'hidden field', 'lotplan': 'hidden field', 'tenure': 'hidden field', 'lot_area': 'hidden field', 'excl_area': 'hidden field', 'lot_volume': 'hidden field', 'feat_name': 'hidden field', 'alias_name': 'hidden field', 'acc_code': 'hidden field', 'surv_ind': 'hidden field', 'cover_typ': 'hidden field', 'parcel_typ': 'hidden field', 'locality': 'hidden field', 'shire_name': 'hidden field', 'smis_map': 'hidden field', 'objectid': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_SFM2SettlePatternParkhurst_74.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_Unzoned_76.set('fieldLabels', {'fid': 'hidden field', 'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'hidden field', 'local_auth': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - visible with data', 'Zoned/Unzoned': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Strategy': 'hidden field', 'Strat Link': 'hidden field', 'Overlays': 'hidden field', 'Gross HA': 'inline label - visible with data', 'NDH': 'hidden field', 'Lot Yield @ 20dw/HA (350m2)': 'hidden field', 'VALUE @ 350m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Address': 'hidden field', 'Vendor Mobile': 'hidden field', 'Vendor Email': 'hidden field', 'Lead Link': 'hidden field', });
lyr_Rezone_77.set('fieldLabels', {'id': 'hidden field', });
lyr_Zone_78.set('fieldLabels', {'fid': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - visible with data', 'Zoned / Rezone': 'inline label - visible with data', 'Current Zone': 'inline label - visible with data', 'Strategy': 'inline label - visible with data', 'Strategy Link': 'inline label - visible with data', 'Overlays': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Lot Yield @ 15Dw/Ha': 'inline label - visible with data', 'VALUE @ 467m2': 'header label - always visible', 'Market Value (20%DM)': 'inline label - visible with data', 'Current RLP': 'inline label - visible with data', 'Current OPC': 'inline label - visible with data', 'Market Value (30%DM)': 'inline label - visible with data', 'Market Value (25%DM)': 'inline label - visible with data', 'Market Value (15%DM)': 'inline label - visible with data', 'Market Value (12%DM)': 'inline label - visible with data', 'Market Value (10%DM)': 'inline label - visible with data', 'Development Contributions per Lot': 'inline label - visible with data', 'Last Sold Price': 'inline label - visible with data', 'Last Sold Date': 'inline label - visible with data', 'OWNERSHIP': 'header label - always visible', 'Estate Status': 'inline label - visible with data', 'Vendor Company': 'inline label - visible with data', 'Vendor Names': 'inline label - visible with data', 'Vendor Mobiles': 'inline label - visible with data', 'Vendor Emails': 'inline label - visible with data', 'Vendor Addresses': 'inline label - visible with data', 'Major Landowner': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_Suburb_79.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_LGA_80.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_Estate_81.set('fieldLabels', {'Estate': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'No of Lots': 'inline label - visible with data', });
lyr_EstateLabel_82.set('fieldLabels', {'fid': 'hidden field', 'Estate': 'hidden field', 'Status': 'hidden field', 'Developer': 'hidden field', 'No of Lots': 'hidden field', });
lyr_ParcelAttributesLabel_83.set('fieldLabels', {'fid': 'hidden field', 'PARCEL': 'hidden field', 'Address': 'hidden field', 'Zoned / Rezone': 'hidden field', 'Current Zone': 'hidden field', 'Strategy': 'hidden field', 'Strategy Link': 'hidden field', 'Overlays': 'hidden field', 'Gross HA': 'hidden field', 'NDH': 'hidden field', 'Lot Yield @ 15Dw/Ha': 'hidden field', 'VALUE @ 467m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'Development Contributions per Lot': 'hidden field', 'Last Sold Price': 'hidden field', 'Last Sold Date': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Mobiles': 'hidden field', 'Vendor Emails': 'hidden field', 'Vendor Addresses': 'hidden field', 'Major Landowner': 'hidden field', 'Developer': 'hidden field', 'Lead Link': 'hidden field', });
lyr_ParcelAttributesLabel_83.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});