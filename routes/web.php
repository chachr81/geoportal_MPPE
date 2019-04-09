<?php


Route::get('/', function () {
    return view('welcome');
});
Route::get('/mapa', function () {
    return view('mapa/index');
});
//limites
Route::get('layers/limites/lim_estadales', 'LimitesController@lim_estadales');
Route::get('layers/limites/lim_municipales', 'LimitesController@lim_municipales');
Route::get('layers/limites/lim_parroquiales', 'LimitesController@lim_parroquiales');
Route::get('layers/limites/lim_nauticos', 'LimitesController@lim_nauticos');
//Circuitos nacionales
Route::get('layers/circuitos/c_{estado}', 'CircuitosController@circuitos_educativos');
//planteles
Route::get('layers/planteles/{estado}', 'PlantelesController@planteles_educativos');
//Plantel info
Route::get('planteles/{cod_plantel}', 'PlantelesController@consultar');
