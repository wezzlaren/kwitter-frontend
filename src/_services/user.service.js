import { Config } from '../config';
import { authHeader, handleResponse } from '../_helpers';

var auth = localStorage.getItem("token")
export const userService = {
    getAll,
    getCurrent
    
};

function getAll() {
    
    const requestOptions = { method: 'GET',
    headers:{
      Accept: 'application/json',
               'Content-Type': 'application/json',
               'Authorization': auth,
       }, };
    return fetch(`${Config.ApiBaseURL + Config.ApiUrls.ALLPOSTS}`, requestOptions)
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