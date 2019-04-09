<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\CentralizadoController;
use App\Peducativos;

class PlantelesController extends Controller
{

	public function consultar($cod_dea)
    {   
        $model = Peducativos::where('cod_dea', '=', $cod_dea)->firstOrFail(); //->get();
        return response()->json($model);
	}
	
	private static  $estado=array(	
		'distrito'	=>'01',
		'amazonas'	=>'02',
		'anzoategui'=>'03',
		'apure'		=>'04',
		'aragua'	=>'05',
		'barinas'	=>'06',
		'bolivar'	=>'07',
		'carabobo'	=>'08',
		'cojedes'	=>'09',
		'delta'		=>'10',
		'falcon'	=>'11',
		'guarico'	=>'12',
		'lara'		=>'13',
		'merida'	=>'14',
		'miranda'	=>'15',
		'monagas'	=>'16',
		'nvaesparta'=>'17',
		'portuguesa'=>'18',
		'sucre'		=>'19',
		'tachira'	=>'20',
		'trujillo'	=>'21',
		'yaracuy'	=>'22',
		'zulia'		=>'23',
		'vargas'	=>'24'
	);

	public static function getEstado($estado=null){


		if($estado!==null){
			if (array_key_exists($estado, self::$estado)){
				return self::$estado[$estado];			
			}else{
				return NULL;
			}	
		}else{
			return self::$estado;
		}
	}
    
    public function planteles_educativos($estado)
    {
        $nombre_estado=$estado;
        $estado = self::getEstado($estado);
        if ($estado==NULL){
            return json_encode($estado);
        }else{
            $jsonLimites = DB::connection('georeferenciacion')->select('
                
                SELECT row_to_json(fc) As datos
                FROM 
                    ( SELECT 
                        \'FeatureCollection\' As type
                        ,\''.$nombre_estado.'\' As name
                        , \'{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}}\'::json AS crs
                        ,array_to_json(array_agg(f)) As features
                            FROM 
                                (SELECT 
                                    \'Feature\' As type
                                    , row_to_json((SELECT l FROM (SELECT id, cod_cir, name, dependenci, cod_dea) As l )) As properties
                                    , ST_AsGeoJSON(geom)::json As geometry
                                FROM p_educativos where cod_estado = \''.$estado.'\'
                                ) As f
                    )As fc
            ');
            return $jsonLimites[0]->datos;
        }        
	}

}
