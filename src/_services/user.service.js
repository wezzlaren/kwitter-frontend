import { Config } from '../config';
var auth = localStorage.getItem("token")
export const userService = {
    getCurrent,
    deleteUser,
    changePassword,
    updateUsername
};

function changePassword(oldPass, newPass){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': auth, },
    };
    return fetch(`http://localhost:8762/user/UserController/changePassword?oldPass=${oldPass}&newPass=${newPass}`, requestOptions)
}

function updateUsername(newUsername){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': auth, },
    };
    console.log(newUsername)
    return fetch(`http://localhost:8762/user/UserController/updateUsername?username=${newUsername}`, requestOptions)
}

function deleteUser() {
    const requestOptions = { method: 'DELETE',
    headers:{
      Accept: 'application/json',
               'Content-Type': 'application/json',
               'Authorization': auth,
       }, };    
    return fetch(`${Config.ApiBaseURL + Config.ApiUrls.DELETEUSER}`, requestOptions)
    .then(res => res.json())
            .then(res =>{
                console.log("User deleted")
                return Promise.resolve(res);
            })    
} 


function getCurrent() {
    const requestOptions = { method: 'GET',
    headers:{
      Accept: 'application/json',
               'Content-Type': 'application/json',
               'Authorization': auth,
       }, };    
    return fetch(`${Config.ApiBaseURL + Config.ApiUrls.CURRENT}`, requestOptions)
    .then(res => res.json())
            .then(res =>{
                return Promise.resolve(res);
            })    
} 