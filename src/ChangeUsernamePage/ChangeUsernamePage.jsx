import React from 'react';
import { userService } from '../_services';
import { Link } from 'react-router-dom';

class ChangeUsernamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                newUsername: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
     
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({ submitted: true })
        const { user } = this.state;
        if (user.newUsername){
            userService.updateUsername(user.newUsername)
            localStorage.removeItem("token")
            this.props.history.push('/')
        }
    }

    componentDidMount() {
        userService.getCurrent()
        .then(res => {
            this.setState({
                user: res,
            })
        })

        
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Change username</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.newUsername ? ' has-error' : '')}>
                        <label htmlFor="newUsername">New username</label>
                        <input type="text" className="form-control" name="newUsername" value={user.newUsername} onChange={this.handleChange} />
                        {submitted && !user.newUsername &&
                            <div className="help-block">Please fill in a new username</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>                   
                        <Link to="/profile" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
            
        );
    }
}

export { ChangeUsernamePage };