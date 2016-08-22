<?php

namespace App\Http\Controllers;

use App\Data;
use App\Http\Requests;
use Illuminate\Http\Request;

class DataController extends Controller
{
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct ()
	{

	}

	public function saveData (Request $request)
	{
		if ( \Auth::check() ) {
			if ( Data::where('user_id' , '=' , \Auth::user()->id)->exists() ) {
				// file_put_contents(__DIR__.'/../../../storage/navid.txt', $request->all()['data']);
				Data::where('user_id' , '=' , \Auth::user()->id)->update(
					[
						'dashboards' => $request->all()['data'] ,
					]
				);
			} else {
				Data::create([
					'user_id'    => \Auth::user()->id ,
					'dashboards' => $request->all()['data'] ,
				]);
			}

		}

	}

	public function index ()
	{
		return view('home');
	}
}
