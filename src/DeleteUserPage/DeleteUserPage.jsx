import React from 'react';
import { userService } from '../_services';
import { Link } from 'react-router-dom';

class DeleteUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                delUsername: ''
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
        if (user.delUsername){
            userService.deleteAsAdmin(user.delUsername)
            this.props.history.push('/admin');

        }
    }

    componentDidMount() {
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

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Delete user account</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.delUsername ? ' has-error' : '')}>
                        <label htmlFor="delUsername">Enter the username</label>
                        <input type="text" className="form-control" name="delUsername" value={user.delUsername} onChange={this.handleChange} />
                        {submitted && !user.delUsername &&
                            <div className="help-block">Please fill in a user to remove</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>                   
                        <Link to="/admin" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
            
        );
    }
}

export { DeleteUserPage };