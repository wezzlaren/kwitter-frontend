import React from 'react';
import { userService } from '../_services';
import { Link } from 'react-router-dom';


class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [{
                username: '',
                email: '',
                firstName: '',
                lastName: '',
                authorities: [{
                    authority: '',
                    name: ''
                }]
            }],
    }
}
    
    componentWillMount(){
        userService.getAll()
        .then(res => {
            if(res.status === 403){
                this.props.history.push("/")
            }
            this.setState({
                user: res,
            })

        })
   
    }

    componentDidMount() {
      
    }
    

    render() {
             
        return (
            <div>
                <h2><b>Admin panel</b></h2>
                <h3><b>Accountmanagement</b></h3>
                <Link to="/admindelete" className="btn btn-link">Delete a user</Link>
                <ul>
                {this.state.user.map(({id, username, authorities}) => (
                <li key={id}>
                    <b>ID: </b> {id}
                    <br></br>
                    <b>Name:</b> {username}
                    <br></br>
                    <b>Permissions: </b> 
                    {authorities[0].authority}                    
                </li>))
                
                }    
                </ul>

            </div>
        );
    }
}

export { AdminPage };