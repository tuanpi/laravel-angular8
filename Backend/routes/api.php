<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware' => 'cors', 'prefix' => '/v1'], function () {
//     //Route::post('/login', 'UserController@authenticate');
//     //Route::post('/register', 'UserController@register');
//     Route::get('/index', 'InfoController@index');
// });

Route::group(['prefix' => '/v1'], function () {
	Route::put('/info/{id}', 'InfoController@update');
    Route::get('/info', 'InfoController@index');
});

