<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Limitesestadales;
use App\Entidad;
use Illuminate\Support\Facades\DB;


class LimitesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function lim_estadales()
    {
        $jsonLimites = DB::connection('georeferenciacion')->select('
            
            SELECT row_to_json(fc) As limites_estadales
            FROM 
                ( SELECT 
                    \'FeatureCollection\' As type
                    ,\'limites_estadales_0\' As name
                    , \'{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}}\'::json AS crs
                    ,array_to_json(array_agg(f)) As features
                        FROM 
                            (SELECT 
                                \'Feature\' As type
                                , row_to_json((SELECT l FROM (SELECT id, cod_edo, estados) As l )) As properties
                                , ST_AsGeoJSON(geom)::json As geometry
                            FROM limites_estadales 
                            ) As f
                )As fc
        
        ');
        return $jsonLimites[0]->limites_estadales;
        
    }

    public function lim_municipales()
    {
        $jsonLimites = DB::connection('georeferenciacion')->select('
            
            SELECT row_to_json(fc) As limites_municipales
            FROM 
                ( SELECT 
                    \'FeatureCollection\' As type
                    ,\'limites_municipales_1\' As name
                    , \'{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}}\'::json AS crs
                    ,array_to_json(array_agg(f)) As features
                        FROM 
                            (SELECT 
                                \'Feature\' As type
                                , row_to_json((SELECT l FROM (SELECT id, cod_edo, estado, cap_estado, cod_mun, municipio, cap_mun) As l )) As properties
                                , ST_AsGeoJSON(geom)::json As geometry
                            FROM limites_municipales
                            ) As f
                )As fc
        
        ');

        return $jsonLimites[0]->limites_municipales;

    }

    public function lim_parroquiales()
    {
        $jsonLimites = DB::connection('georeferenciacion')->select('
            
            SELECT row_to_json(fc) As limites_parroquiales
            FROM 
                ( SELECT 
                    \'FeatureCollection\' As type
                    ,\'limites_parroquiales_2\' As name
                    , \'{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}}\'::json AS crs
                    ,array_to_json(array_agg(f)) As features
                        FROM 
                            (SELECT 
                                \'Feature\' As type
                                , row_to_json((SELECT l FROM (SELECT id, cod_ine, cod_estado, estado, cap_estado, 
                                                                cod_munic, municipio, cap_munic, cod_parroq, parroquia, 
                                                                cap_parroq) As l )) As properties
                                , ST_AsGeoJSON(geom)::json As geometry
                            FROM limites_parroquiales
                            ) As f
                )As fc
        
        ');
        return $jsonLimites[0]->limites_parroquiales;

    }

    public function lim_nauticos()
    {
        $jsonLimites = DB::connection('georeferenciacion')->select('
            
            SELECT row_to_json(fc) As limites_nauticos
            FROM 
                ( SELECT 
                    \'FeatureCollection\' As type
                    ,\'limites_nauticos_27\' As name
                    , \'{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}}\'::json AS crs
                    ,array_to_json(array_agg(f)) As features
                        FROM 
                            (SELECT 
                                \'Feature\' As type
                                , row_to_json((SELECT l FROM (SELECT id, objectid_1, objectid, fips_cntry, gmi_cntry, 
                                                                cntry_name, sovereign, pop_cntry, sqkm_cntry, sqmi_cntry, 
                                                                curr_type, curr_code, landlocked, color_map, shape_leng, 
                                                                shape_le_1) As l )) As properties
                                , ST_AsGeoJSON(geom)::json As geometry
                            FROM limites_nauticos
                            ) As f
                )As fc
        
        ');
        return $jsonLimites[0]->limites_nauticos;

    }
}
