<?php
namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Facades\Auth;
use DB;
use Session;

class User extends Authenticatable implements JWTSubject
{
    public static function getPotentialFriends($userId){

        $query = "SELECT id,name, user_birthday FROM `users`";
        $query .="WHERE (DATE_FORMAT(user_birthday, '%m-%d')";
        $query .="BETWEEN DATE_FORMAT((DATE_SUB(current_date, INTERVAL 5 DAY)),'%m-%d') ";
        $query .="AND  DATE_FORMAT(NOW(), '%m-%d'))";
        $query .="OR (DATE_FORMAT(user_birthday, '%m-%d')";
        $query .="BETWEEN DATE_FORMAT(current_date, '%m-%d')";
        $query .="AND DATE_FORMAT((DATE_ADD(current_date, INTERVAL 5 DAY)),'%m-%d'))";

        $res = DB::select($query);
        
        return $res;
    }

    public static function getFriendsBirthDaysDates($userId)
    {
        $id = ['id'=>$userId];
        $loggedUserData = self::getLoggedUserData();
        $allMembers = self::getCurrentAllMembrers($id);
        $loggedUserFriendsArray =  explode(",", $loggedUserData[0]->related_friends);

        $dicUserFriends = [];
        foreach ($loggedUserFriendsArray as $key=> $userFriendId) {
            foreach ($allMembers as $key=> $siteMember) {
                if ($userFriendId == $siteMember->id) {
                    $dicUserFriends[$siteMember->id] =$siteMember->id;
                    $memberFriendsIdArr = explode(",", $siteMember->related_friends);
                    foreach ($memberFriendsIdArr as $memberId) {
                       if($memberId !=''){
                           if(gettype($memberId) !== 'string'){
                            $dicUserFriends[$memberId] =(string)$memberId;
                        }
                       }
                    }
                }
            }
        }
       // dd($dicUserFriends );
        $dicUserFriendsIdArray =  array_values($dicUserFriends);
        $query ="SELECT id,name, user_birthday FROM `users` where DATE_FORMAT(user_birthday, '%m-%d') >=";
        $query .=" DATE_FORMAT(NOW(), '%m-%d') and DATE_FORMAT(user_birthday, '%m-%d')<=";
        $query .="DATE_FORMAT((NOW() + INTERVAL +30 DAY), '%m-%d') and id in (" . implode(',', $dicUserFriendsIdArray) . ") ";
        $query .="order by DATE_FORMAT(user_birthday, '%m-%d') ASC";
        //$res = DB::select("select id,name,user_birthday from users where id in(" . implode(',', $dicUserFriendsIdArray) . ")");
        //to do - convert all ids to string, remove emprty ids.
       // print_r($query);
        $res = DB::select($query);
       // dd($res);
        return $res;
      // return $res = DB::select("select id,name,user_birthday from users where id in(" . implode(',', $dicUserFriendsIdArray) . ")");
       
    }
    public static function getCurrentAllMembrers($userId)
    {
        $members = DB::select('select id,name,related_friends from users where id != :userId', ['userId' => $userId['id']]);
       
        return $members;
    }

    public static function getLoggedUserData()
    {
        $loggedUserId = Session::get("userID");
        $loggedUserData = DB::select('select id,name,related_friends from users where id = :loggedUserId', ['loggedUserId' => $loggedUserId]);
        return $loggedUserData;
    }

    public static function addNewFriendToMember($newFriendId)
    {
        //to do - refactor
        $loggedUserId = Session::get("userID");
        $loggedUserData = DB::select('select id,name,related_friends from users where id = :loggedUserId', ['loggedUserId' => $loggedUserId]);
        $loggedUserFriendsIdsArr = [];
        $newFriendStr ='';

        if (count($loggedUserData) !== 0) {
            $loggedUserFriendsIds = $loggedUserData [0]->related_friends;
            $loggedUserFriendsIdsArr = explode(",", $loggedUserFriendsIds);
            if (count($loggedUserFriendsIdsArr) < 5) {
                echo 'count less '.count($loggedUserFriendsIdsArr);
                $loggedUserFriendsIdsArr[]=$newFriendId;
                $newFriendStr = implode(",", $loggedUserFriendsIdsArr);
            } else {
                array_shift($loggedUserFriendsIdsArr);
                $loggedUserFriendsIdsArr[]=$newFriendId;
                $newFriendStr = implode(",", $loggedUserFriendsIdsArr);
            }
        } else {
            $newFriendStr = $newFriendId;
        }
 
        $query = DB::update('update users set related_friends = ? where id = ?', [$newFriendStr , $loggedUserId]);
        if ($query ==true) {
            return true;
        }
    }

    private function handleAddingFriends($prmUserData, $prmUserId)
    {
        $outStr = '';
        
        return $outStr;
    }
    use Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'password',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}
