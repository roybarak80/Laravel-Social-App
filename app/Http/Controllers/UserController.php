<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTExecption;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
use Session;

class UserController extends Controller
{

    

    public function logOut(Request $request)
    {
        Auth::logout();
        Session::flush();
    }
   
    public function register(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = User::create([
            'name' => $request->json()->get('name'),
            'password' => Hash::make($request->json()->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user', 'token'), 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                $loginsCount = 0; //init counter
               
                if (Session::has('userLoginsCount')) {
                    //get session value
                    $loginsCount = Session::get('userLoginsCount');
                   
                    //check login attempts count
                    if ($loginsCount == 5) {
                        $current_timestamp = now()->timestamp;
                        Log::info($current_timestamp.' User exceeded allowed login attempts : '.$request->ip());
                        Session::put('userLoginsCount', 0);
                        Session::save();
                       
                        return;
                    } else {
                        //increment it
                        $loginsCount++;
                        // set the new value
                        Session::put('userLoginsCount', $loginsCount);
                        Session::save();
                    }
                } else {
                    $request->session()->put('userLoginsCount', $loginsCount);
                }
                
                //Store session
                Session::save();
                
                return response()->json(['error' => 'invalid credentials'], 400);
            }
        } catch (JWTExecption $e) {
            return response()->json(['error' => 'could not create token'], 500);
        }
     
        Session::save();
        
        return response()->json(compact('token'));
    }



}
