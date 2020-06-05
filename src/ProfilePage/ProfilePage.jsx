import React from 'react';
import { userService } from '../_services';
import { Edit } from '@material-ui/icons'

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

        this.handleClick = this.handleClick.bind(this)
        
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

    handleClick(){
        userService.deleteUser()
        localStorage.removeItem("token")
        
        this.props.history.push('/login');
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
                            
                    <p className="Name"><b>Username:</b> {this.state.user.username}  <a href="/changeusername"><Edit></Edit></a> </p> 
                    <p className="Email"><b>E-mail:</b> {this.state.user.email}</p>
                    <p className="Firstname"><b>First name:</b> {this.state.user.firstName}</p>
                    <p className="Lastname"><b>Last name:</b> {this.state.user.lastName}</p>

                    <p className="Role"><b>Permissions:</b> </p>
                    <div>{roles}</div>

                    <div>
                        <p><a href="/changepassword">Change password</a></p>
                    </div>
                    
                    <div className="Delete">

                        <button onClick={ () => {this.handleClick(this.state.user.username)}} className="btn btn-danger">Delete account</button>  
                    </div>
                    
            </div>

            
            
        
        );
    }
}

export { ProfilePage };