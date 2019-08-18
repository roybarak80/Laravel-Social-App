<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function addNewFriend(Request $request)
    {
        $newFriendId = $request->all()[0];
        $userId = $request->user()->id;
        User::addFriend($userId, $newFriendId);
      
    }

    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                
                return redirect('/login')->with('status', 'user not found!');
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token Invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTExecption $e) {
            return response()->json(['token absent'], $e->getStatusCode());
        }
        
        $loggedUserData = self::setLoggedUserData($user);
        return response()->json(compact('loggedUserData'));
    }

    public function setLoggedUserData($loggedUser)
    {
        $userId = Auth::id();

        $site_all_users = User::getAllUsersWithFriendsIndication($userId);

        $userHobbies = User::getUserHobbies($userId);
       
        $potentialFriends = User::getPotentialFriends($userId);
       
        $friendsBirthDays = User::getFriendsBirthDaysDates($userId);

        $usersFriends = User::getAllUserFriends($userId);
        
        $upComingBirthDays = User::getUpComingBirthDays();
        
        $loggedUser['userHobbies'] = json_encode($userHobbies);
        $loggedUser['potentialFriends'] = json_encode($potentialFriends);
        $loggedUser['friendsBirthDays'] = json_encode($friendsBirthDays);
        $loggedUser['site_all_users'] = json_encode($site_all_users);
        $loggedUser['usersFriends'] = json_encode($usersFriends);
        $loggedUser['upComingBirthDays'] = json_encode($upComingBirthDays);
        
        return $loggedUser;
    }

    
}
