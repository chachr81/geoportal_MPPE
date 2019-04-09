<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peducativos extends Model
{
    protected $connection = 'georeferenciacion';
    protected $table = 'public.p_educativos';
    public $timestamps = false;

    /*public function getPlantel(){
        return true; //DB::connection('georeferenciacion')->select('');
    }*/
}
