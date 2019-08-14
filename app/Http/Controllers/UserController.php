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


    //
    public function showPotentialFriends(Request $request){

       
        $loggedUserId = Session::get("userID");
      
        $potentialFriends = User::getPotentialFriends( $loggedUserId);

         return response()->json(compact('potentialFriends'));
       
    }

    public function showBirthdays(Request $request){
        $loggedUserId = Session::get("userID");
      
       $friendsBirthDays = User::getFriendsBirthDaysDates( $loggedUserId);

return response()->json(compact('friendsBirthDays'));
       
    }

    public function logOut(Request $request){
        Auth::logout();
        Session::flush();
       // return Redirect::to('/');
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

                if ($request->session()->has('userLoginsCount')) {
                    //get session value
                    $loginsCount = $request->session()->get('userLoginsCount');
                    
                    //check login attempts count
                    if ($loginsCount == 5) {
                        $current_timestamp = now()->timestamp;
                        Log::info($current_timestamp.' User exceeded alowed login attempts : '.$request->ip());
                        $request->session()->put('userLoginsCount', 0);
                        return;
                    } else {
                        //increment it
                        $loginsCount++;
                        // set the new value
                        $request->session()->put('userLoginsCount', $loginsCount);
                    }
                } else {
                    $request->session()->put('userLoginsCount', $loginsCount);
                }
                //Store session
               
                
                return response()->json(['error' => 'invalid credentials'], 400);
                
            }
        } catch (JWTExecption $e) {
            return response()->json(['error' => 'could not create token'], 500);
        }
     
       $userLogged = Auth::user();
       $request->session()->put('userID', $userLogged['id']);
       
       Session::save();
        return response()->json(compact('token'));
        
    }

    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['error' => 'user not found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token Invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTExecption $e) {
            return response()->json(['token absent'], $e->getStatusCode());
        }
      //  $user = Auth::user();

     $members = User::getCurrentAllMembrers( $user);
     $user['site_users'] = json_encode($members);
  
     return response()->json(compact('user'));
       
    }
    public function addFriend(Request $request){
       
        $newFriendId = $request->all()[0];

         $addres = User::addNewFriendToMember($newFriendId);
         if($addres == true){
            $request->session()->flash('status', 'Friend add successfuly!');
           // dd(Session::all());
         }
     }
}
