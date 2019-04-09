var size = 0;
var placement = 'point';

var style_Canaimasentregadas = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("trujillo_total_cana");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';

    if (value > 0.000000 && value <= 0.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,0,0,1.0)', 
            lineDash: null, lineCap: 'butt', 
            lineJoin: 'miter', width: 0
        }), 
        fill: new ol.style.Fill({
            color: 'rgba(247,251,255,1.0)'
        })
    })]
    } else if (value > 0.000000 && value <= 89.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', 
        lineDash: null, 
        lineCap: 'butt', 
        lineJoin: 'miter', 
        width: 0}),
        fill: new ol.style.Fill({color: 'rgba(176,210,232,1.0)'})
    })]
    } else if (value > 89.000000 && value <= 433.000000) {
            style = [ new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1.0)', 
                    lineDash: null, lineCap: 'butt', 
                    lineJoin: 'miter', width: 0}), 
                fill: new ol.style.Fill({
                    color: 'rgba(62,142,196,1.0)'
                })
    })]
                    } else if (value > 433.000000 && value <= 2504.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]
                    };

    return style;
};
