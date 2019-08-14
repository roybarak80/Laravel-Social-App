<?php

use Illuminate\Http\Request;

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

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('logOut', 'UserController@logOut');
Route::get('profile', 'UserController@getAuthenticatedUser');
Route::get('showBirthdays', 'UserController@showBirthdays');
Route::get('showPotentialFriends', 'UserController@showPotentialFriends');

Route::match(['put'], '/{id}','UserController@addFriend');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    
    return $request->user();
});

// Route::get('register', 'UserController@index');
// Route::get('login', 'UserController@index');
// Route::get('profile', 'UserController@index');