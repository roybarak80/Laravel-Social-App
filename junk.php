// public function objectToArray($data)
        // {
        //     if (is_object($data)) {
        //         $data = get_object_vars($data);
        //     }
    
        //     if (is_array($data)) {
        //         return array_map(array($this, 'objectToArray'), $data);
        //     }
    
        //     return $data;
        // }
  
    // function jsonResponse($data)
    // {

    //    $user =  $data;
    //    $userData = json_decode( $data, true); 
    
    //    $members = User::getCurrentAllMembrers( $userData);
    //    $user['members'] = $members;
    //    return response()->json(compact('user'));
      
    // }