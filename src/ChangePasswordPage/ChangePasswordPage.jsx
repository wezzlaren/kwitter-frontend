import React from 'react';
import { userService } from '../_services';

class ChangePasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                oldPass: '',
                newPass: '',
                confirmPass: '',
            },

            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentWillMount() {
        userService.getCurrent()
        .then(res => {
            console.log(res.username)
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
        const { user } = this.state
        if (user.confirmPass !== user.newPass) {
            alert("Passwords don't match");
        } else
            if (user.oldPass && user.newPass && user.confirmPass){
                userService.changePassword(user.oldPass, user.confirmPass)
                this.props.history.push('/')
            }

    }

    componentDidMount() {
        
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Change your password</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.oldPass ? ' has-error' : '')}>
                        <label htmlFor="oldpassword">Old password</label>
                        <input type="password" className="form-control" name="oldPass" value={user.oldPass} onChange={this.handleChange} />
                        {submitted && !user.oldPass &&
                            <div className="help-block">Old password required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.newPass ? ' has-error' : '')}>
                        <label htmlFor="newpassword">New password</label>
                        <input type="password" className="form-control" name="newPass" value={user.newPass} onChange={this.handleChange} />
                        {submitted && !user.newPass &&

                            <div className="help-block">New password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.confirmPass ? ' has-error' : '')}>
                        <label htmlFor="confirmnewpassword">Confirm password</label>
                        <input type="password" className="form-control" name="confirmPass" value={user.confirmPass} onChange={this.handleChange} />
                        {submitted && !user.confirmPass &&
                            <div className="help-block">Repeat new password</div>
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