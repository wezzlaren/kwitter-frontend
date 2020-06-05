import React from 'react';
import { userService, postService } from '../_services';
import { Link } from 'react-router-dom';

class CreatePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
            },
            post: {
                title: '',
                content: '',
            },

            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentWillMount() {
            
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { post } = this.state;
        this.setState({
            post: {
                ...post,
                [name]: value
            }
        });
     
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({ submitted: true })
        const { post } = this.state;
        const { author } = this.state.user.username
        if (post.title && post.content){
            postService.createPost(author, post.title, post.content)
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
        const { post, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Create post</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !post.title ? ' has-error' : '')}>
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" value={post.title} onChange={this.handleChange} />
                        {submitted && !post.title &&
                            <div className="help-block">Enter a title</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !post.content ? ' has-error' : '')}>
                        <label htmlFor="content">Content</label>
                        <textarea type="textarea" rows="10" cols="20" className="form-control" name="content" value={post.content} onChange={this.handleChange} />
                        {submitted && !post.content &&

                            <div className="help-block">Say something</div>
                        }
                    </div>
                    

                    <div className="form-group">
                        <button className="btn btn-primary">Create!</button>  
                              
                        <Link to="/" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
            
        );
    }
}

export { CreatePostPage };