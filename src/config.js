import React from 'react'

export class Config extends React.Component{
    static ApiBaseURL = "http://localhost:8762"
    static ApiUrls = {
        AUTH: "/auth",
        REGISTER: "/user/UserController/register",
        CURRENT: "/user/UserController/current",
        ALLUSERS: "/user/UserController/all",
        ALLPOSTS: "/post/PostController/all",
        UPDATEUSERNAME: "/user/UserController/updateUsername",
        CREATEPOST: "/post/PostController/createpost",
        POSTBYAUTHOR: "/Post/PostController/postsbyauthor"

    }
}