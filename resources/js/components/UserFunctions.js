import axios from 'axios';


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
            console.log(response);
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            //    let message = err.response.data.error;
            console.log(err);

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

                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {

                console.log('Error', error.message);
            }
            console.log(error.config);
        });
}



export const getProfile = () => {
    return axios
        .get('api/profile', {
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

// export const addFriend = (friendId) => {
//     //  console.log(friendId)

//     return axios.put('api/addFriend', "\"" + friendId + "\"", {
//         headers: {
//             "Accept": "application/json",
//             "Content-type": "application/json",
//             Authorization: `Bearer ${localStorage.usertoken}`
//         }
//     })
// }

export const addNewFriend = (friendId) => {
    //  console.log(friendId)

    return axios.put('api/addNewFriend', "\"" + friendId + "\"", {
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.usertoken}`
        }
    })
}




