import React from 'react';
import { Link } from 'react-router-dom'
import { userService } from '../_services';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            user: {
                username: '',
                email: '',
                firstName: '',
                lastName: '',
                authorities: [{
                    authority: '',
                    name: ''
                }]
            },
            authority: ''
        };
        
    }

    componentWillMount() {
        userService.getCurrent()
        .then(res => {
            this.setState({
                user: res,
                
            })
        })        
    }

    componentDidMount() {
        
    }

    render() {
        const data = this.state.user.authorities
        const roles = data.map((d) =>
        <div>
            <ul>
                <li>{d.authority}</li>

            </ul>
        </div> )

        return (
            <div>

                <h1 className="Name">Profile page</h1>
                            
                    <p className="Name"><b>Username:</b> {this.state.user.username}</p>
                    <p className="Email"><b>E-mail:</b> {this.state.user.email}</p>
                    <p className="Firstname"><b>First name:</b> {this.state.user.firstName}</p>
                    <p className="Lastname"><b>Last name:</b> {this.state.user.lastName}</p>

                    <p className="Role"><b>Permissions:</b> </p>
                    <div>{roles}</div>

                    <div className="Delete">
                        <button className="btn btn-danger">Delete account</button>  
                    </div>
                    
            </div>

            
            
        
        );
    }
}

export { ProfilePage };