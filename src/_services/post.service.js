import { Config } from '../config';
var auth = localStorage.getItem("token")
export const postService = {
    getAll,
    createPost
};

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
}


function createPost(username, title, content){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': auth, },
        body: JSON.stringify({ username, title, content })
    };
    return fetch(`${Config.ApiBaseURL + Config.ApiUrls.CREATEPOST}`, requestOptions)
}