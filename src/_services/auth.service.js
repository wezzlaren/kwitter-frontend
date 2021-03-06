import { BehaviorSubject } from 'rxjs';
import { Config } from '../config';

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
    return fetch(`${Config.ApiBaseURL + Config.ApiUrls.REGISTER}`, requestOptions)
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${Config.ApiBaseURL + Config.ApiUrls.AUTH}`, requestOptions)
        .then(response => {

            var token = response.headers.get("Authorization")
            if (token){
                localStorage.setItem("token", token)
                authenticationService.currentUser.next(true)
            }
        });
}

function logout() {
    //localStorage.removeItem('token');
    authenticationService.currentUser.next(false);
}
