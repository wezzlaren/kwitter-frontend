/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Router, Route, Link, Switch} from 'react-router-dom';
import { history } from './_helpers';
import { authenticationService } from './_services';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { ProfilePage } from './ProfilePage/ProfilePage'
import "bootstrap/dist/css/bootstrap.min.css";
import { RegisterPage } from './RegisterPage';
import { ChangePasswordPage } from './ChangePasswordPage/ChangePasswordPage';
import { CreatePostPage } from './CreatePostPage/CreatePostPage';
import { ChangeUsernamePage } from './ChangeUsernamePage/ChangeUsernamePage';
import { AdminPage } from './AdminPage/AdminPage';
import { DeleteUserPage } from './DeleteUserPage/DeleteUserPage';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        document.title = "Kwitter"
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        
        localStorage.removeItem("token")
        authenticationService.currentUser.next(false);
        history.push('/login');
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    {localStorage.getItem("token") &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <Link to="/profile" className="nav-item nav-link">Profile</Link>
                                <Link to="/createpost" className="nav-item nav-link">Create Post</Link>
                                  <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <Switch>
                                        <PrivateRoute exact path="/" component={HomePage} />
                                        <PrivateRoute exact path="/profile" component={ProfilePage} />
                                        <PrivateRoute exact path="/changepassword" component={ChangePasswordPage}/>
                                        <PrivateRoute exact path="/createpost" component={CreatePostPage}/>
                                        <PrivateRoute exact path="/changeusername" component={ChangeUsernamePage}/>
                                        <PrivateRoute exact path="/admin" component={AdminPage}/>
                                        <PrivateRoute exact path="/admindelete" component={DeleteUserPage}/>
                                        <Route path="/login" component={LoginPage} />
                                        <Route path="/register" component={RegisterPage}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

