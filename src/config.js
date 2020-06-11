import React from 'react'

export class Config extends React.Component{
    //static ApiBaseURL = "http://localhost:8762"
    static ApiBaseURL = "http://35.246.84.96"
    static ApiUrls = {
        AUTH: "/auth",
        REGISTER: "/user/UserController/register",
        DELETEUSER: "/user/UserController/deleteUser",
        CURRENT: "/user/UserController/current",
        ALLUSERS: "/user/UserController/all",
        ALLPOSTS: "/post/PostController/all",
        UPDATEUSERNAME: "/user/UserController/updateUsername",
        CREATEPOST: "/post/PostController/createpost",
        POSTBYAUTHOR: "/post/PostController/postsbyauthor",
        CHANGEPASSWORD: "/user/UserController/changepassword",
        DELETEASADMIN: "/UserController/delete?username="
    }
}