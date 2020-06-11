(this.webpackJsonpkwitterfrontend=this.webpackJsonpkwitterfrontend||[]).push([[0],{81:function(e,t,a){e.exports=a(93)},86:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(74),l=a.n(s),o=(a(86),a(3)),c=a(6),m=a(5),i=a(4),u=a(36),h=a(13);var d=a(17),p=Object(d.a)(),b=a(108),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return a}(r.a.Component);f.ApiBaseURL="http://35.246.84.96",f.ApiUrls={AUTH:"/auth",REGISTER:"/user/UserController/register",DELETEUSER:"/user/UserController/deleteUser",CURRENT:"/user/UserController/current",ALLUSERS:"/user/UserController/all",ALLPOSTS:"/post/PostController/all",UPDATEUSERNAME:"/user/UserController/updateUsername",CREATEPOST:"/post/PostController/createpost",POSTBYAUTHOR:"/post/PostController/postsbyauthor",CHANGEPASSWORD:"/user/UserController/changepassword",DELETEASADMIN:"/UserController/delete?username="};var v={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("".concat(f.ApiBaseURL+f.ApiUrls.AUTH),a).then((function(e){var t=e.headers.get("Authorization");t&&(localStorage.setItem("token",t),v.currentUser.next(!0))}))},logout:function(){v.currentUser.next(!1)},register:function(e,t,a,n,r){var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t,email:a,firstName:n,lastName:r})};return fetch("".concat(f.ApiBaseURL+f.ApiUrls.REGISTER),s)},currentUser:new b.a(!1)};var E=localStorage.getItem("token"),g={getCurrent:function(){var e={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:E}};return fetch("".concat(f.ApiBaseURL+f.ApiUrls.CURRENT),e).then((function(e){return e.json()})).then((function(e){return Promise.resolve(e)}))},deleteUser:function(){var e={method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:E}};return fetch("".concat(f.ApiBaseURL+f.ApiUrls.DELETEUSER),e).then((function(e){return e.json()})).then((function(e){return console.log("User deleted"),Promise.resolve(e)}))},changePassword:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json",Authorization:E}};return fetch("".concat(f.ApiBaseURL,"/user/UserController/changePassword?oldPass=").concat(e,"&newPass=").concat(t),a)},updateUsername:function(e){var t={method:"PUT",headers:{"Content-Type":"application/json",Authorization:E}};return console.log(e),fetch("".concat(f.ApiBaseURL,"/user/UserController/updateUsername?username=").concat(e),t)},getAll:function(){var e={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:E}};return fetch("".concat(f.ApiBaseURL+f.ApiUrls.ALLUSERS),e).then((function(e){return e.json()})).then((function(e){return Promise.resolve(e)}))},deleteAsAdmin:function(e){var t={method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:E}};return fetch("".concat(f.ApiBaseURL,"/user/UserController/delete?username=").concat(e),t).then((function(e){return e.json()})).then((function(e){return console.log("User deleted by admins"),Promise.resolve(e)}))}};var N=localStorage.getItem("token"),C={getAll:function(){var e={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:N}};return fetch("".concat(f.ApiBaseURL+f.ApiUrls.ALLPOSTS),e).then((function(e){return e.json()})).then((function(e){return Promise.resolve(e)}))},createPost:function(e,t,a){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:N},body:JSON.stringify({username:e,title:t,content:a})};return fetch("".concat(f.ApiBaseURL+f.ApiUrls.CREATEPOST),n)}};var y=a(79),w=function(e){var t=e.component,a=Object(y.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentUser:v.currentUser,post:[],user:{username:""}},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this;g.getCurrent().then((function(t){e.setState({user:t})}))}},{key:"componentDidMount",value:function(){var e=this;C.getAll().then((function(t){e.setState({post:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello, ",this.state.user.username,"!"),r.a.createElement("h1",null,"Welcome to Kwitter"),r.a.createElement("br",null),r.a.createElement("h2",null,r.a.createElement("b",null,"Overview Feed")),r.a.createElement("ul",null,this.state.post.length>0?this.state.post.map((function(e){var t=e.id,a=e.author,n=e.title,s=e.content,l=e.dateCreated;return r.a.createElement("li",{key:t},r.a.createElement("b",null,"Posted by:")," ",a,r.a.createElement("br",null),r.a.createElement("b",null,"Title:")," ",n,r.a.createElement("br",null),"Posted on: ",l,r.a.createElement("br",null),"Content: ",s)})):r.a.createElement("li",null,r.a.createElement("p",null,"No posts found by other kwitter users yet! Go create a post!"))))}}]),a}(r.a.Component),O=a(41),S=a(66),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),v.currentUserValue&&n.props.history.push("/"),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login to Kwitter"),r.a.createElement(O.d,{initialValues:{username:"",password:""},validationSchema:S.a().shape({username:S.b().required("Username is required"),password:S.b().required("Password is required")}),onSubmit:function(t,a){var n=t.username,r=t.password,s=a.setStatus,l=a.setSubmitting;s(),v.login(n,r).then((function(t){var a=(e.props.location.state||{from:{pathname:"/"}}).from;e.props.history.push(a)}),(function(e){l(!1),s(e)}))},render:function(e){var t=e.errors,a=e.status,n=e.touched,s=e.isSubmitting;return r.a.createElement(O.c,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(O.b,{name:"username",type:"text",className:"form-control"+(t.username&&n.username?" is-invalid":"")}),r.a.createElement(O.a,{name:"username",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(O.b,{name:"password",type:"password",className:"form-control"+(t.password&&n.password?" is-invalid":"")}),r.a.createElement(O.a,{name:"password",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:s},"Login")),r.a.createElement("div",null,"Register ",r.a.createElement("a",{href:"/register"},"here")),a&&r.a.createElement("div",{className:"alert alert-danger"},a))}}))}}]),a}(r.a.Component),U=a(9),P=a(107),A=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:{username:"",email:"",firstName:"",lastName:"",authorities:[{authority:"",name:""}]},authority:""},n.handleClick=n.handleClick.bind(Object(U.a)(n)),n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this;g.getCurrent().then((function(t){e.setState({user:t})}))}},{key:"componentDidMount",value:function(){}},{key:"handleClick",value:function(){g.deleteUser(),localStorage.removeItem("token"),this.props.history.push("/login")}},{key:"render",value:function(){var e=this,t=this.state.user.authorities.map((function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,e.authority)))}));return r.a.createElement("div",null,r.a.createElement("h1",{className:"Name"},"Profile page"),r.a.createElement("p",{className:"Name"},r.a.createElement("b",null,"Username:")," ",this.state.user.username,"  ",r.a.createElement("a",{href:"/changeusername"},r.a.createElement(P.a,null))," "),r.a.createElement("p",{className:"Email"},r.a.createElement("b",null,"E-mail:")," ",this.state.user.email),r.a.createElement("p",{className:"Firstname"},r.a.createElement("b",null,"First name:")," ",this.state.user.firstName),r.a.createElement("p",{className:"Lastname"},r.a.createElement("b",null,"Last name:")," ",this.state.user.lastName),r.a.createElement("p",{className:"Role"},r.a.createElement("b",null,"Permissions:")," "),r.a.createElement("div",null,t),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"/changepassword"},"Change password"))),r.a.createElement("div",{className:"Delete"},r.a.createElement("button",{onClick:function(){e.handleClick(e.state.user.username)},className:"btn btn-danger"},"Delete account")))}}]),a}(r.a.Component),T=(a(92),a(21)),R=a(15),L=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:{username:"",password:"",confirm_password:"",email:"",firstName:"",lastName:""},submitted:!1},n.handleChange=n.handleChange.bind(Object(U.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(U.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(R.a)(Object(R.a)({},r),{},Object(T.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user;t.password!==t.confirm_password?alert("Passwords don't match"):t.username&&t.password&&t.email&&t.firstName&&t.lastName&&(v.register(t.username,t.password,t.email,t.firstName,t.lastName),this.props.history.push("/login"))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.submitted;return r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Register"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(a&&!t.username?" has-error":"")},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:t.username,onChange:this.handleChange}),a&&!t.username&&r.a.createElement("div",{className:"help-block"},"Username is required")),r.a.createElement("div",{className:"form-group"+(a&&!t.password?" has-error":"")},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:t.password,onChange:this.handleChange}),a&&!t.password&&r.a.createElement("div",{className:"help-block"},"Password is required")),r.a.createElement("div",{className:"form-group"+(a&&!t.confirm_password?" has-error":"")},r.a.createElement("label",{htmlFor:"password"},"Confirm password"),r.a.createElement("input",{type:"password",className:"form-control",name:"confirm_password",value:t.confirm_password,onChange:this.handleChange}),a&&!t.confirm_password&&r.a.createElement("div",{className:"help-block"},"Repeat password is required")),r.a.createElement("div",{className:"form-group"+(a&&!t.email?" has-error":"")},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"text",className:"form-control",name:"email",value:t.email,onChange:this.handleChange}),a&&!t.firstName&&r.a.createElement("div",{className:"help-block"},"Email is required")),r.a.createElement("div",{className:"form-group"+(a&&!t.firstName?" has-error":"")},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"firstName",value:t.firstName,onChange:this.handleChange}),a&&!t.firstName&&r.a.createElement("div",{className:"help-block"},"First Name is required")),r.a.createElement("div",{className:"form-group"+(a&&!t.lastName?" has-error":"")},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"lastName",value:t.lastName,onChange:this.handleChange}),a&&!t.lastName&&r.a.createElement("div",{className:"help-block"},"Last Name is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Register"),r.a.createElement(h.a,{to:"/login",className:"btn btn-link"},"Cancel"))))}}]),a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:{username:"",oldPass:"",newPass:"",confirmPass:""},submitted:!1},n.handleChange=n.handleChange.bind(Object(U.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(U.a)(n)),n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this;g.getCurrent().then((function(t){console.log(t.username),e.setState({user:t})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(R.a)(Object(R.a)({},r),{},Object(T.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user;t.confirmPass!==t.newPass?alert("Passwords don't match"):t.oldPass&&t.newPass&&t.confirmPass&&(g.changePassword(t.oldPass,t.confirmPass),this.props.history.push("/"))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.submitted;return r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Change your password"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(a&&!t.oldPass?" has-error":"")},r.a.createElement("label",{htmlFor:"oldpassword"},"Old password"),r.a.createElement("input",{type:"password",className:"form-control",name:"oldPass",value:t.oldPass,onChange:this.handleChange}),a&&!t.oldPass&&r.a.createElement("div",{className:"help-block"},"Old password required")),r.a.createElement("div",{className:"form-group"+(a&&!t.newPass?" has-error":"")},r.a.createElement("label",{htmlFor:"newpassword"},"New password"),r.a.createElement("input",{type:"password",className:"form-control",name:"newPass",value:t.newPass,onChange:this.handleChange}),a&&!t.newPass&&r.a.createElement("div",{className:"help-block"},"New password is required")),r.a.createElement("div",{className:"form-group"+(a&&!t.confirmPass?" has-error":"")},r.a.createElement("label",{htmlFor:"confirmnewpassword"},"Confirm password"),r.a.createElement("input",{type:"password",className:"form-control",name:"confirmPass",value:t.confirmPass,onChange:this.handleChange}),a&&!t.confirmPass&&r.a.createElement("div",{className:"help-block"},"Repeat new password")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Change password"))))}}]),a}(r.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:{username:""},post:{title:"",content:""},submitted:!1},n.handleChange=n.handleChange.bind(Object(U.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(U.a)(n)),n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.post;this.setState({post:Object(R.a)(Object(R.a)({},r),{},Object(T.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.post,a=this.state.user.username.author;t.title&&t.content&&(C.createPost(a,t.title,t.content),this.props.history.push("/"))}},{key:"componentDidMount",value:function(){var e=this;g.getCurrent().then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){var e=this.state,t=e.post,a=e.submitted;return r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Create post"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(a&&!t.title?" has-error":"")},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",name:"title",value:t.title,onChange:this.handleChange}),a&&!t.title&&r.a.createElement("div",{className:"help-block"},"Enter a title")),r.a.createElement("div",{className:"form-group"+(a&&!t.content?" has-error":"")},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{type:"textarea",rows:"10",cols:"20",className:"form-control",name:"content",value:t.content,onChange:this.handleChange}),a&&!t.content&&r.a.createElement("div",{className:"help-block"},"Say something")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Create!"),r.a.createElement(h.a,{to:"/",className:"btn btn-link"},"Cancel"))))}}]),a}(r.a.Component),F=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:{username:"",newUsername:""},submitted:!1},n.handleChange=n.handleChange.bind(Object(U.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(U.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(R.a)(Object(R.a)({},r),{},Object(T.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user;t.newUsername&&(g.updateUsername(t.newUsername),localStorage.removeItem("token"),this.props.history.push("/"))}},{key:"componentDidMount",value:function(){var e=this;g.getCurrent().then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.submitted;return r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Change username"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(a&&!t.newUsername?" has-error":"")},r.a.createElement("label",{htmlFor:"newUsername"},"New username"),r.a.createElement("input",{type:"text",className:"form-control",name:"newUsername",value:t.newUsername,onChange:this.handleChange}),a&&!t.newUsername&&r.a.createElement("div",{className:"help-block"},"Please fill in a new username")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Submit"),r.a.createElement(h.a,{to:"/profile",className:"btn btn-link"},"Cancel"))))}}]),a}(r.a.Component),M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:[{username:"",email:"",firstName:"",lastName:"",authorities:[{authority:"",name:""}]}]},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this;g.getAll().then((function(t){403===t.status&&e.props.history.push("/"),e.setState({user:t})}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("b",null,"Admin panel")),r.a.createElement("h3",null,r.a.createElement("b",null,"Accountmanagement")),r.a.createElement(h.a,{to:"/admindelete",className:"btn btn-link"},"Delete a user"),r.a.createElement("ul",null,this.state.user.map((function(e){var t=e.id,a=e.username,n=e.authorities;return r.a.createElement("li",{key:t},r.a.createElement("b",null,"ID: ")," ",t,r.a.createElement("br",null),r.a.createElement("b",null,"Name:")," ",a,r.a.createElement("br",null),r.a.createElement("b",null,"Permissions: "),n[0].authority)}))))}}]),a}(r.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:{delUsername:""},submitted:!1},n.handleChange=n.handleChange.bind(Object(U.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(U.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(R.a)(Object(R.a)({},r),{},Object(T.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user;t.delUsername&&(g.deleteAsAdmin(t.delUsername),this.props.history.push("/admin"))}},{key:"componentDidMount",value:function(){var e=this;g.getAll().then((function(t){403===t.status&&e.props.history.push("/"),e.setState({user:t})}))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.submitted;return r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Delete user account"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(a&&!t.delUsername?" has-error":"")},r.a.createElement("label",{htmlFor:"delUsername"},"Enter the username"),r.a.createElement("input",{type:"text",className:"form-control",name:"delUsername",value:t.delUsername,onChange:this.handleChange}),a&&!t.delUsername&&r.a.createElement("div",{className:"help-block"},"Please fill in a user to remove")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Submit"),r.a.createElement(h.a,{to:"/admin",className:"btn btn-link"},"Cancel"))))}}]),a}(r.a.Component),I=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentUser:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="Kwitter",v.currentUser.subscribe((function(t){return e.setState({currentUser:t})}))}},{key:"logout",value:function(){localStorage.removeItem("token"),v.currentUser.next(!1),p.push("/login")}},{key:"render",value:function(){return r.a.createElement(u.c,{history:p},r.a.createElement("div",null,localStorage.getItem("token")&&r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(h.a,{to:"/",className:"nav-item nav-link"},"Home"),r.a.createElement(h.a,{to:"/profile",className:"nav-item nav-link"},"Profile"),r.a.createElement(h.a,{to:"/createpost",className:"nav-item nav-link"},"Create Post"),r.a.createElement("a",{onClick:this.logout,className:"nav-item nav-link"},"Logout"))),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(u.d,null,r.a.createElement(w,{exact:!0,path:"/",component:j}),r.a.createElement(w,{exact:!0,path:"/profile",component:A}),r.a.createElement(w,{exact:!0,path:"/changepassword",component:D}),r.a.createElement(w,{exact:!0,path:"/createpost",component:x}),r.a.createElement(w,{exact:!0,path:"/changeusername",component:F}),r.a.createElement(w,{exact:!0,path:"/admin",component:M}),r.a.createElement(w,{exact:!0,path:"/admindelete",component:B}),r.a.createElement(u.b,{path:"/login",component:k}),r.a.createElement(u.b,{path:"/register",component:L}))))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.b436ec28.chunk.js.map