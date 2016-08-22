<?php

namespace App\Http\Controllers;

use App\Data;
use App\Http\Requests;
use Illuminate\Http\Request;

class DashboardsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $data = Data::where('user_id','=',\Auth::user()->id);
        if($data != NULL){
            $data = $data->first()['dashboards'];
        }
        
        return view('dashboards',compact('data'));
    }
}
