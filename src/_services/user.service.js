import { Config } from '../config';
import { authHeader, handleResponse } from '../_helpers';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${Config.ApiBaseURL}/post/PostController/all`, requestOptions).then(handleResponse);
    //todo set correct api call
}