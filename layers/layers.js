var data="";
var jsonData="";
var server= 'http://geoportal.test/layers';
var server2= 'http://geoportal.test/';
var layer={};
var transparent= 'rgba(0,0,0,0)'
var setColor=()=>{
	return '#'+(Math.floor(Math.random() * (256 - 20)) + 20).toString(16)+
	(Math.floor(Math.random() * (256 - 20)) + 20).toString(16)+
	(Math.floor(Math.random() * (256 - 20)) + 20).toString(16)
}


var setColorRgba=(trans)=>{
	return "rgba("+(Math.floor(Math.random() * (256 - 20)) + 20)+","+
	 (Math.floor(Math.random() * (256 - 20)) + 20)+","+
	 (Math.floor(Math.random() * (256 - 20)) + 20)+","+trans+")";
}


function loadLayer(url) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	   jsonData=this.responseText;
	  }
	};
	xhr.open("GET", server+url, false);
	xhr.send();
}
  
var loadDoc=(dato)=>{
	layer[dato]=new ol.layer.Vector({
		source: new ol.source.Vector({
			features: (new ol.format.GeoJSON()).readFeatures(jsonData)
		}),
		style: new ol.style.Style({
			   image: new ol.style.Circle({ 
				   radius: 5, 
				   fill: new ol.style.Fill({
				   color: setColor()}), 
				   stroke: new ol.style.Stroke({ 
					   color: 'black', 
					   width: 1.25    
				   })
			   }) 
		}),
		visible:false
	});
}


var loadLayerMultipolygon=dato=>{
	layer[dato.name]=new ol.layer.Vector({
		source: new ol.source.Vector({
			features: (new ol.format.GeoJSON()).readFeatures(jsonData)
		}),
		style: new ol.style.Style({
			fill:new ol.style.Fill({
				color:setColorRgba(.25)
			}),
			stroke:new ol.style.Stroke({
				color:"black",
				width:1
			})
		}),
		visible:false
	});
}
var plateles=[
	{title:"Planteles Amazonas",name:"amazonas",prefix:"planteles"},
	{title:"Planteles Anzoátegui",name:"anzoategui",prefix:"planteles"},
	{title:"Planteles Apure",name:"apure",prefix:"planteles"},
	{title:"Planteles Aragua",name:"aragua",prefix:"planteles"},
	{title:"Planteles Barinas",name:"barinas",prefix:"planteles"},
	{title:"Planteles Bolívar",name:"bolivar",prefix:"planteles"},
	{title:"Planteles Carabobo",name:"carabobo",prefix:"planteles"},
	{title:"Planteles Cojedes",name:"cojedes",prefix:"planteles"},
	{title:"Planteles Delta",name:"delta",prefix:"planteles"},
	{title:"Planteles Distrito Capital",name:"distrito",prefix:"planteles"},
	{title:"Planteles Falcón",name:"falcon",prefix:"planteles"},
	{title:"Planteles Guárico",name:"guarico",prefix:"planteles"},
	{title:"Planteles Lara",name:"lara",prefix:"planteles"},
	{title:"Planteles Mérida",name:"merida",prefix:"planteles"},
	{title:"Planteles Miranda",name:"miranda",prefix:"planteles"},
	{title:"Planteles Monagas",name:"monagas",prefix:"planteles"},
	{title:"Planteles Nueva Esparta",name:"nvaesparta",prefix:"planteles"},
	{title:"Planteles Portuguesa",name:"portuguesa",prefix:"planteles"},
	{title:"Planteles Sucre",name:"sucre",prefix:"planteles"},
	{title:"Planteles Táchira",name:"tachira",prefix:"planteles"},
	{title:"Planteles Trujillo",name:"trujillo",prefix:"planteles"},
	{title:"Planteles Vargas",name:"vargas",prefix:"planteles"},
	{title:"Planteles Yaracuy",name:"yaracuy",prefix:"planteles"},
	{title:"Planteles Zulia",name:"zulia",prefix:"planteles"}
];
var circuitos=[
	{title:"Circuitos Aragua",name:'c_aragua',prefix:'circuitos'},
	{title:"Circuitos Carabobo",name:'c_carabobo',prefix:'circuitos'},
	{title:"Circuitos Distrito Capital",name:'c_distrito_capital',prefix:'circuitos'},
	{title:"Circuitos Miranda",name:'c_miranda',prefix:'circuitos'},
	{title:"Circuitos Vargas",name:'c_vargas',prefix:'circuitos'}
];


var limites=[
	{name:"lim_estadales", title:"Limites Estadales", prefix:null},
	{name:"lim_municipales", title:"Limites Municipales", prefix:null},
	{name:"lim_parroquiales", title:"Limites Parroquiales", prefix:null},
	{name:"lim_nauticos", title:"Limites Nauticos", prefix:null},
]

var estadistico=[
	{name:"canaimasEntregadas", title:"Canaimas por circuito", prefix:null},
	{name:"matriculasCirc", title:"Matricula por circuito", prefix:null},
	{name:"plantelesCirc", title:"Planteles por circuito", prefix:null}
];

/* Cargar datos al cliente */

plateles.map(dato=>{
	loadLayer('/'+dato.prefix+"/"+dato.name)
	loadDoc(dato.name);
})
circuitos.map(dato=>{
	loadLayer('/'+dato.prefix+"/"+dato.name)
	loadLayerMultipolygon(dato)
})


// Estadisticos
layer["canaimasEntregadas"] = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(canaimasentregadas),
	}),
	style:style_Canaimasentregadas,
	visible:false
});

layer["matriculasCirc"] = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(MatriculaCircuitos),
	}),
	style:style_MatriculaCircuitos,
	visible:false
});

layer["plantelesCirc"] = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(PlantelesCircuito),
	}),
	style:style_PlantCirc,
	visible:false
});

// limites
loadLayer('/limites/lim_nauticos')
layer["lim_nauticos"] = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(jsonData)
	}),
	visible:false
});

loadLayer('/limites/lim_parroquiales');
layer["lim_parroquiales"] = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(jsonData),
	}),
	style:(function() {
   		var stroke = new ol.style.Stroke({
     		color: 'grey',
     		width: 2,
     		lineDash:[5, 5],
     		lineDashOffset: 6
   			});
   		var fill= new ol.style.Fill({
   			color:transparent
   		})
   		return function(feature, resolution) {
     		return [new ol.style.Style({
       			stroke: stroke,
       			fill:fill
     			})];
   		};
 	})(),
	 visible:false
});




loadLayer('/limites/lim_municipales');
layer["lim_municipales"] = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(jsonData)
	}),
	style:(function() {
   		var stroke = new ol.style.Stroke({
     		color: '#444',
     		width: 3
   			});
   		var fill= new ol.style.Fill({
   			color:transparent
   		})
   		return function(feature, resolution) {
     		return [new ol.style.Style({
       			stroke: stroke,
       			fill:fill
     			})];
   		};
 	})(),
	 visible:false
});


loadLayer('/limites/lim_estadales')
layer["lim_estadales"]=new ol.layer.Vector({
	source: new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(jsonData)
	}),
  style:new ol.style.Style({
    fill:new ol.style.Fill({
      color:transparent
    }),
    stroke:new ol.style.Stroke({
      width:3,
      color:'black'
    })
  }),
  visible:false
});



var layerList=[];


//mapa base
layerList.push(new ol.layer.Tile({source: new ol.source.OSM()}));

//limites
limites.map(dato=>{
	layerList.push(layer[dato.name])
})
//circuitos
circuitos.map(dato=>{
	layerList.push(layer[dato.name])
})
//estadistico
estadistico.map(dato=>{
	layerList.push(layer[dato.name])
})
//planteles
plateles.map(dato=>{
	layerList.push(layer[dato.name])
})




// popup
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay({
element: container,
autoPan: true,
autoPanAnimation: {
	duration: 250
	}
});


closer.onclick = function() {
	overlay.setPosition(undefined);
	closer.blur();
	return false;
};

//popup
var attribution = new ol.control.Attribution({
	collapsible: false
});

var mapa= new ol.Map({
	layers:layerList, 
	controls: ol.control.defaults({attribution: false}).extend([
		attribution,
		new ol.control.ScaleLine({ units: 'degrees'}),
		]), 
	target:'mapa',
	overlays: [overlay],
	view: new ol.View({
		projection: 'EPSG:4326',
		center: [-66.607, 8.814],
		zoom: 6, 
		minZoom: 4,
		maxZoom: 20,
	})
});

mapa.addControl(new ol.control.FullScreen());
mapa.addControl(new ol.control.OverviewMap());
mapa.addControl(new ol.control.ZoomSlider());

function checkSize() {
	var small = mapa.getSize()[0] < 600;
	attribution.setCollapsible(small);
	attribution.setCollapsed(small);
}
	
window.addEventListener('resize', checkSize);
checkSize();

mapa.on('click', function(evt) {
	content.innerHTML="";
	var coordinate = evt.coordinate;
	var pixel = mapa.getEventPixel(evt.originalEvent);
	var coord = evt.coordinate;
	var clusteredFeatures;
	mapa.forEachFeatureAtPixel(pixel, function(feature, layer) {
		if(feature.N.cod_dea!== undefined){
			getInfo(feature.N.cod_dea)
			content.innerHTML +='<strong>Codigo Plantel:</strong> '+feature.N.cod_dea+'<br>';
			content.innerHTML +='<strong>Codigo de Circuito Educativo: </strong> '+escuela.cod_cir+'<br>';
			content.innerHTML +='<strong>Nombre del Plantel: </strong> '+escuela.name+'<br>';
			if(escuela.dependenci!==null){
				content.innerHTML +='<strong>Dependencia: </strong> '+escuela.dependenci+'<br>';
			}else{
				content.innerHTML +='<strong>Dependencia: </strong> Sin informacion<br>';	
			}
		}else {
			if(feature.N.cod_cir !== undefined){
				content.innerHTML +='<strong>Codigo de Circuito Educativo: </strong>'+feature.N.cod_cir;
				
			}
		}
	});
		overlay.setPosition(coordinate);
});

// Acoordeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}



// botones del 
var entes =limites.concat(plateles,circuitos,estadistico);

entes.map((dato)=>{
	data+='<div class="option_1"><div class="option_1-3"><div class="punto"></div></div><div class="option_1-1">'+dato.title+'</div><div class="option_1-2">'+
	'<label><input type="checkbox" id="'+dato.name+'" name="" class="inp_no_view"><div class="inp_view"><div class="inp_view1"></div>'+
	'</div></label></div></div>';
})
document.getElementById('opciones').innerHTML=data;


entes.map((dato)=>{
	window[dato.name+'_check']= document.getElementById(dato.name);
	window[dato.name+'_check'].addEventListener("change",(e)=>{
	layer[dato.name].setVisible(window[dato.name+'_check'].checked)
	})
})

function getInfo(cod_dea){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState===4){
			escuela= JSON.parse(this.responseText)
		}
	}
	xhr.open('GET',server2+'/planteles/'+cod_dea,false);
	xhr.send();
}