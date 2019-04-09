var data="";
var server= '/layers';
var server2= '';
var layer={};
var transparent= 'rgba(0,0,0,0)'
var Z_index={
	POINT:6,
	MULTIPOINT:5,
	POLYGON:4,
	MULTIPOLYGON:3,
	LINE:2,
	MULTILINE:1
}
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

var plantelStyle=()=>{
	return new ol.style.Style({
		image: new ol.style.Circle({ 
			radius: 5, 
			fill: new ol.style.Fill({
			color: setColor()}), 
			stroke: new ol.style.Stroke({ 
				color: 'black', 
				width: 1.25    
			})
		}) 
	});
}
var circuitoStyle=()=>{
	return new ol.style.Style({
		fill:new ol.style.Fill({
			color:setColorRgba(.25)
		}),
		stroke:new ol.style.Stroke({
			color:"black",
			width:1
		})
	})
}

var base=[
	{title:"Open Street map",name:"OSM",prefix:null},
	{title:"Bing maps",name:"bingMaps",prefix:null}
]
var plateles=[
	{title:"Planteles Amazonas",name:"amazonas",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Anzoátegui",name:"anzoategui",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Apure",name:"apure",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Aragua",name:"aragua",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Barinas",name:"barinas",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Bolívar",name:"bolivar",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Carabobo",name:"carabobo",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Cojedes",name:"cojedes",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Delta",name:"delta",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Distrito Capital",name:"distrito",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Falcón",name:"falcon",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Guárico",name:"guarico",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Lara",name:"lara",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Mérida",name:"merida",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Miranda",name:"miranda",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Monagas",name:"monagas",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Nueva Esparta",name:"nvaesparta",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Portuguesa",name:"portuguesa",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Sucre",name:"sucre",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Táchira",name:"tachira",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Trujillo",name:"trujillo",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Vargas",name:"vargas",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Yaracuy",name:"yaracuy",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()},
	{title:"Planteles Zulia",name:"zulia",prefix:"planteles",type:Z_index.POINT,style:plantelStyle()}
];
var circuitos=[
	{title:"Circuitos Amazonas",name:"c_amazonas",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Anzoátegui",name:"c_anzoategui",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Apure",name:"c_apure",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Aragua",name:"c_aragua",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Barinas",name:"c_barinas",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Bolívar",name:"c_bolivar",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Carabobo",name:"c_carabobo",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Cojedes",name:"c_cojedes",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Delta",name:"c_delta",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Distrito Capital",name:"c_distrito",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Falcón",name:"c_falcon",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Guárico",name:"c_guarico",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Lara",name:"c_lara",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Mérida",name:"c_merida",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Miranda",name:"c_miranda",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Monagas",name:"c_monagas",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Nueva Esparta",name:"c_nvaesparta",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Portuguesa",name:"c_portuguesa",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Sucre",name:"c_sucre",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Táchira",name:"c_tachira",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Trujillo",name:"c_trujillo",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Vargas",name:"c_vargas",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Yaracuy",name:"c_yaracuy",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()},
	{title:"Circuitos Zulia",name:"c_zulia",prefix:"circuitos",type:Z_index.MULTIPOLYGON,style:circuitoStyle()}
];

var limites=[
	{name:"lim_estadales", title:"Limites Estadales", prefix:"limites",type:Z_index.MULTIPOLYGON, style:new ol.style.Style({
		    fill:new ol.style.Fill({
		      color:transparent
		    }),
		    stroke:new ol.style.Stroke({
		      width:3,
		      color:'black'
		    })
		  })
		},
	{name:"lim_municipales", title:"Limites Municipales", prefix:"limites",type:Z_index.MULTIPOLYGON,style:(function() {
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
		 	})()},
	{name:"lim_parroquiales", title:"Limites Parroquiales", prefix:"limites",type:Z_index.MULTIPOLYGON,style:(function() {
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
  })()},
	{name:"lim_nauticos", title:"Limites Nauticos", prefix:"limites",type:Z_index.MULTIPOLYGON},
]

var estadistico=[
	{
		local:true,
		name:"canaimasEntregadas", 
		title:"Canaimas por circuito", 
		prefix:"estadistico",
		type:Z_index.MULTIPOLYGON,
		style:style_Canaimasentregadas,
		fileName:"Canaimasentregadas"
	},
	{
		local:true,
		name:"matriculasCirc", 
		title:"Matricula por circuito", 
		prefix:"estadistico",
		type:Z_index.MULTIPOLYGON,
		style:style_MatriculaCircuitos,
		fileName:"MatriculaCircuitos"
	},
	{local:true,name:"plantelesCirc", title:"Planteles por circuito", prefix:"estadistico",type:Z_index.MULTIPOLYGON,
	style:style_PlantCirc,fileName:"PlantelesCircuito"}
];


var plantelesFrontera=[
	{local:true,name:"planteles_frontera", title:"Planteles fronterizos", prefix:"planteles_frontera", style:pf_style,fileName:"planteles_frontera",type:Z_index.POINT}
]


layer["OSM"]=new ol.layer.Tile({source: new ol.source.OSM()})
layer["bingMaps"]=new ol.layer.Tile({
	visible: false,
	preload: Infinity,
	source: new ol.source.BingMaps({
		key: 'AhjsZ4B6im92TqW96szKEdqNfMMmohTCq-4hnMV7U-20UKYYnk8jA_PyCwI8ZheE',
		imagerySet: 'AerialWithLabels',
		maxZoom: 19
	})
})




var layerList=[];
//AIzaSyBMTUpsFCbZeIBh9MSmKl1dm1VK8eTcnQs
//mapa base
base.forEach(dato=>{
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
		new ol.control.ScaleLine({ units: 'degrees'})
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
var fe={};
mapa.on('click', function(evt) {
	content.innerHTML="";
	var pixel = mapa.getEventPixel(evt.originalEvent);
	var coordinate = evt.coordinate;
	mapa.forEachFeatureAtPixel(pixel, function(feature, layer) {
		if(layer.getVisible()){

			if(feature.get("cod_dea")!= undefined){
				getInfo(feature.get("cod_dea"))
				content.innerHTML +='<strong>Codigo Plantel:</strong> '+feature.get("cod_dea")+'<br>';
			}
			if(feature.get("total_matr")!= undefined){
				content.innerHTML +='<strong>Total matricula: </strong> '+feature.get("total_matr")+'<br>';
			}
			
			if(feature.get("director_n")!=undefined){
				var nombre=feature.get("director_n");
				if(feature.get("director_a")!=undefined){
					nombre+=" "+feature.get("director_a");
				}
				content.innerHTML +='<strong>Nombre director: </strong> '+nombre+'<br>';
				
			}else {
				if(feature.N.cod_cir !== undefined){
					content.innerHTML +='<strong>Codigo de Circuito Educativo(Circuito): </strong>'+feature.get("cod_cir")+'<br>';
				}
				if(feature.get("trujillo_total_matr")!= undefined){
					content.innerHTML +='<strong>Total matricula: </strong> '+feature.get("trujillo_total_matr")+'<br>';
				}
			}
		}
	});
	if(content.innerHTML!=""){
		overlay.setPosition(coordinate)
	}
});

// Acoordeon
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
var entidad=(geoJson,obj)=>{
	layer[obj.name]=new ol.layer.Vector({
		source: new ol.source.Vector({
			features: (new ol.format.GeoJSON()).readFeatures(geoJson)
		}),
		style: obj.style,
		//maxResolution: 0.008,
		visible:true,
		zIndex:obj.type
	});
	mapa.addLayer(layer[obj.name])
}

var cargarCapa=(element)=>{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	   	entidad(this.responseText,element);
	  }
	};
	var url="";
	if(element.local===true){
		url='js/layers/'+element.prefix+"/"+element.fileName+".json";
	}else{
		url=server+"/"+element.prefix+"/"+element.name;
	}
	xhr.open("GET", url);
	xhr.send();
}

// botones del slider
var entes =limites.concat(plateles,circuitos,estadistico,plantelesFrontera);
entes.forEach((dato)=>{
	data+='<div class="option_1"><div class="option_1-3"><div class="punto"></div></div><div class="option_1-1">'+dato.title+'</div><div class="option_1-2">'+
	'<label><input type="checkbox" id="'+dato.name+'" name="" class="inp_no_view"><div class="inp_view"><div class="inp_view1"></div>'+
	'</div></label></div></div>';
})
document.getElementById('opciones').innerHTML=data;

entes.map((dato)=>{
	window[dato.name+'_check']= document.getElementById(dato.name);
	window[dato.name+'_check'].addEventListener("change",(e)=>{
		if(layer[dato.name]!=undefined){
			layer[dato.name].setVisible(window[dato.name+'_check'].checked)
		}else{
			cargarCapa(dato)
		}
		
	})
})

function getInfo(cod_dea){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState===4){
			escuela= JSON.parse(this.responseText)
			content.innerHTML +='<strong>Codigo de Circuito Educativo(plantel): </strong> '+escuela.cod_cir+'<br>';
			content.innerHTML +='<strong>Nombre del Plantel: </strong> '+escuela.name+'<br>';
			if(escuela.dependenci!=null){
				content.innerHTML +='<strong>Dependencia: </strong> '+escuela.dependenci+'<br>';
			}else{
				content.innerHTML +='<strong>Dependencia: </strong> Sin informacion<br>';	
			}
		}
	}
	xhr.open('GET',server2+'/planteles/'+cod_dea);
	xhr.send();
}
//change view
var btnBase=document.createElement("button");
document.body.appendChild(btnBase);
btnBase.innerText="Satelite";
btnBase.classList="btnBase";
btnBase.addEventListener("click",e=>{
	if(!layer.bingMaps.getVisible()){
		layer.OSM.setVisible(false);
		layer.bingMaps.setVisible(true);
		btnBase.innerText="Mapa"
	}else{
		layer.OSM.setVisible(true);
		layer.bingMaps.setVisible(false);
		btnBase.innerText="Satelite"
	}
})
