import React from 'react';

import { userService, authenticationService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUser,
            user: {
                username: '',
            }
        };
        
    }
    
    componentWillMount(){
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
        return (
            <div>
                <h1>Hello, {this.state.user.username}!</h1>
                <h1>Welcome to Kwitter</h1>
                <br></br>
                <h2>Posts overview:</h2>
            <form>
                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Search" />
            </form>
            </div>
        );
    }
}

export { HomePage };