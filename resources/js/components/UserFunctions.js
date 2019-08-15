import axios from 'axios';

export const getUserHobbies = () => {
    return axios
        .get('api/getUserHobbies', {
            headers: {
                Authorization: `Bearer ${localStorage.usertoken}`
            }
        })
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const showPotentialFriends = () => {
    return axios
        .get('api/showPotentialFriends', {
            headers: {
                Authorization: `Bearer ${localStorage.usertoken}`
            }
        })
        .then(response => {
            //return user friends without 
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const showBirthdays = () => {
    return axios
        .get('api/showBirthdays', {
            headers: {
                Authorization: `Bearer ${localStorage.usertoken}`
            }
        })
        .then(response => {
            //return user friends without 
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const logOut = () => {
    return axios
        .get('api/logOut', {
            headers: {
                Authorization: `Bearer ${localStorage.usertoken}`
            }
        })
        .then(response => {
            //return user friends without 
            // return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const addFriend = (friendId) => {
    //  console.log(friendId)

    return axios.put('api/addFriend', "\"" + friendId + "\"", {
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.usertoken}`
        }
    })
}


export const register = newUser => {
    return axios
        .post('api/register', newUser, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
}


export const login = user => {
    return axios
        .post(
            'api/login', {
                name: user.name,
                password: user.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () => {
    return axios
        .get('api/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.usertoken}`
            }
        })
        .then(response => {
            //return user friends without 

            const userFriends = JSON.parse(response.data.user.site_users);
            const currUser = response.data.user;

            //return users friends
            let userFriendIdArray = currUser.related_friends;
            if (!!userFriendIdArray && userFriendIdArray.length > 0) {
                userFriendIdArray = currUser.related_friends.split(',').map(function (item) {
                    return parseInt(item, 10);
                });
            }


            for (var i = 0; i < userFriends.length; i++) {
                var currFriend = userFriends[i];
                if (!!userFriendIdArray && userFriendIdArray.length > 0) {
                    if (userFriendIdArray.indexOf(parseInt(currFriend.id)) > -1) {
                        currFriend.isFriend = true;
                    }
                }

            }
            response.data.user.site_users = userFriends;
            // console.log(response.data)
            //  console.log(currUser)
            //  console.log(response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

