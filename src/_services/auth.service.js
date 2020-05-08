import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../_helpers';
import { Config } from '../config';

// const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));


export const authenticationService = {
    login,
    logout,
    currentUser : new BehaviorSubject(false)
    // currentUser: currentUserSubject.asObservable(),
    // get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${Config.ApiBaseURL}/auth`, requestOptions)
        // .then(handleResponse)
        .then(response => {

            var token = response.headers.get("Authorization")
            if (token){
                localStorage.setItem("token", token)
                this.currentUser.next(true)
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
    localStorage.removeItem('currentUser');
    authenticationService.currentUser.next(false);
}
