import { BehaviorSubject } from 'rxjs';
import { Config } from '../config';
import { handleResponse } from '../_helpers';

// const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));


export const authenticationService = {
    login,
    logout,
    register,
    currentUser : new BehaviorSubject(false)

    // currentUser: currentUserSubject.asObservable(),
    // get currentUserValue () { return currentUserSubject.value }
};

function register(username, password, email, firstName, lastName){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email, firstName, lastName })
    };
    return fetch(`${Config.ApiBaseURL}/user/UserController/register`, requestOptions)
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${Config.ApiBaseURL}/auth`, requestOptions)
        .then(response => {

            var token = response.headers.get("Authorization")
            if (token){
                localStorage.setItem("token", token)
                authenticationService.currentUser.next(true)
            }

            // // store user details and jwt token in local storage to keep user logged
            // localStorage.setItem('currentUser', JSON.stringify(user));
            // currentUserSubject.next(user);

            // return user;

            // console.log(response.headers)
            // debugger
        });
}

function logout() {
    //localStorage.removeItem('token');
    authenticationService.currentUser.next(false);
}
