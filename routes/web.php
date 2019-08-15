<?php

use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
//use Session;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get( '/{path?}', function(){

    return view( 'layouts/app' );
} )->where('path', '.*');


// Route::group(['middleware' => 'auth'], function(){

//     Route::get('/', function () { 
//          dd(123); });

// });
// Route::get('/', function()
// {
//     return view( 'layouts/app' );
// });