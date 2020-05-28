import { Config } from '../config';
var auth = localStorage.getItem("token")
export const userService = {
    getAll,
    getCurrent,
    deleteUser
};

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

function getAll() {
    
    const requestOptions = { method: 'GET',
    headers:{
      Accept: 'application/json',
               'Content-Type': 'application/json',
               'Authorization': auth,
       }, };
    return fetch(`${Config.ApiBaseURL + Config.ApiUrls.ALLPOSTS}`, requestOptions)
    .then(res => res.json())
            .then(res =>{
                return Promise.resolve(res);
            }) 
    //todo set correct api call
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