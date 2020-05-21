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
                <h1>Hello, {this.state.user.username} welcome to Kwitter!</h1>
            <form>
                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export { HomePage };