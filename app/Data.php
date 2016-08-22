<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
	protected $casts = [
		'field_name' => 'json',
	];

	protected $fillable = [
		'user_id' ,
		'dashboards',
	];
}
