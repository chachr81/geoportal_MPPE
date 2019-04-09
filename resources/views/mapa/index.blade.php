<!DOCTYPE html lang="es">
<html>
<head>
    <title>Pruebas Geoportal</title>    
    <script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
    <link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <meta charset="utf-8">
    <!-- The line below is only needed for old environments like Internet Explorer and Android 4.x -->
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
	<!-- Estadistico  -->
	<script src="{{ asset('js/layers/estadistico/Canaimasentregadastyle.js') }}"></script>
	<script src="{{ asset('js/layers/estadistico/MatriculaCircuitos_style.js') }}"></script>
	<script src="{{ asset('js/layers/estadistico/PlantelesCircuito_style.js') }}"></script>
	<script src="{{ asset('js/layers/planteles_frontera/planteles_frontera_s.js') }}"></script>
</head>
<body>
	<!--Banner-->
	<header class="header_1">
		<div class="header_1-1">
			<div class="header_1-1-1">
				<img src="{{ asset('Img_/gobierno.png') }}" class="img_1">
			</div>
		</div>
		<div class="header_1-2">
			<div class="header_1-2-1">
				Sistema de Consulta Estadística y Cartográfica
			</div>
			<div class="header_1-2-1">
				Geoportal "Ramon Tovar"
			</div>
		</div>
		<div class="header_1-3">
			<div class="header_1-3-1" style="margin-right: -50px;">
				<img src="{{ asset('Img_/logo-b.png') }}" class="img_2">
			</div>
			<div class="header_1-3-1">
				<img src="{{ asset('Img_/mppe-blanco-sin-fondo.png') }}" class="img_2">
			</div>
		</div>
	</header>
	<!--Fin Banner-->

	<div id="mapa" class="mapa" style="height:100%">
		
	</div>
    <div id="popup" class="ol-popup">
		<a href="#" id="popup-closer" class="ol-popup-closer">X</a>
		<div id="popup-content"></div>
	</div>
	
	
	<div class="aside_0" id="aside0"></div>
<aside class="aside_1">
	<div class="aside_1-2" id="aside1">
		<div id="opciones" class="aside_1-2-1">
		</div>
	</div>
	<div class="aside_1-1">
		<button class="botton_1" id="btn_act">
			<img class="imagen_1" src="{{ asset('Img_/icon_1.png') }}">
		</button>
	</div>
</aside>

<script type="text/javascript" src="{{ asset('js/layers/layers.js') }}"></script>
  <script src="{{ asset('/js/main.js') }}"></script>
</body>
</html>
