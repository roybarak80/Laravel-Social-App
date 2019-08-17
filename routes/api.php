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
Auth::routes();

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('logOut', 'UserController@logOut');

Route::get('profile', 'UserProfileController@getAuthenticatedUser');

Route::match(['put'], '/{id}','UserController@addNewFriend');

Route::middleware('auth:api')->get('/{path?}', function (Request $request) {
    return $request->user();
});
