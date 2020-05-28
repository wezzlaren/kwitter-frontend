import React from 'react';

import { userService, authenticationService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUser,
            post : [],
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
        userService.getAll()
        .then(res => {
            this.setState({
                post: res,
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.user.username}!</h1>
                <h1>Welcome to Kwitter</h1>
                <br></br>
                <h2><b>Overview Feed</b></h2>
                <ul>
                {this.state.post.length > 0 ? this.state.post.map(({id, author, title, content, dateCreated}) => (
                <li key={id}>
                    <b>Posted by:</b> {author}
                    <br></br>
                    <b>Title:</b> {title}
                    <br></br>
                    Posted on: {dateCreated}
                    <br></br>
                    Content: {content}
                </li> )) : <li><p>No posts found by other kwitter users yet! Go create a post!</p></li> }
                
            </ul>
            </div>
        );
    }
}

export { HomePage };