import React from 'react';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            users: null
        };
        
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <h1>Profile page</h1>
        );
    }
}

export { ProfilePage };