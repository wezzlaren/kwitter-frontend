import React from 'react';
import { userService } from '../_services';

class ChangePasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                old_password: '',
                new_password: '',
                confirm_password: '',
            },

            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentWillMount() {
        userService.getCurrent()
        .then(res => {
            this.setState({
                user: res,     
            })
        })        
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
        // if (user.password !== user.confirm_password) {
        //     alert("Passwords don't match");
        // }
    }

    componentDidMount() {
        
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Change your password</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.old_password ? ' has-error' : '')}>
                        <label htmlFor="username">Old password</label>
                        <input type="password" className="form-control" name="password" value={user.old_password} onChange={this.handleChange} />
                        {submitted && !user.old_password &&
                            <div className="help-block">Old password required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">New password</label>
                        <input type="password" className="form-control" name="password" value={user.new_password} onChange={this.handleChange} />
                        {submitted && !user.new_password &&

                            <div className="help-block">New password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.confirm_password ? ' has-error' : '')}>
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" className="form-control" name="confirm_password" value={user.confirm_password} onChange={this.handleChange} />
                        {submitted && !user.confirm_password &&
                            <div className="help-block">Repeat password is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Change password</button>  
                    </div>
                </form>
            </div>
        );
    }
}

export { ChangePasswordPage };