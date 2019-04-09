var pf_style= function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("total_matr");

    if (value <= 50) {
        style = [new ol.style.Style({
			   image: new ol.style.Circle({ 
				   radius: 5, 
				   fill: new ol.style.Fill({
				   color: 'rgb(200,200,255)'}), 
				   stroke: new ol.style.Stroke({ 
					   color: 'black', 
					   width: 1.25    
				   })
			   }) 
		})]
    } else if (value <= 100) {
        style = [ new ol.style.Style({
			   image: new ol.style.Circle({ 
				   radius: 7, 
				   fill: new ol.style.Fill({
				   color: 'rgb(200,200,255)'}), 
				   stroke: new ol.style.Stroke({ 
					   color: 'black', 
					   width: 1.25    
				   })
			   }) 
		})]
    } else if (value <= 500) {
        style = [ new ol.style.Style({
			   image: new ol.style.Circle({ 
				   radius: 10, 
				   fill: new ol.style.Fill({
				   color: 'rgb(200,200,255)'}), 
				   stroke: new ol.style.Stroke({ 
					   color: 'black', 
					   width: 1.25    
				   })
			   }) 
		})]
    } else {
        style = [ new ol.style.Style({
			   image: new ol.style.Circle({ 
				   radius: 12, 
				   fill: new ol.style.Fill({
				   color: 'rgb(200,200,255)'}), 
				   stroke: new ol.style.Stroke({ 
					   color: 'black', 
					   width: 1.25    
				   })
			   }) 
		})]
    };

    return style;
};