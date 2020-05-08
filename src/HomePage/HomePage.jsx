import React from 'react';

import { userService, authenticationService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
        
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { currentUser, users } = this.state;
        console.log("who is this? " )
        return (
            <div>
                <h1>Welcome to !</h1>
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