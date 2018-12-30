import React, { Component } from 'react';
import { PageContext } from '../contexts/PageContext';

class Post extends Component {

    componentDidMount(){
        this.context.selectPost(this.props.id, this.context.lang);
    }

    render() {
        const { post } = this.context;
        return (
            <main id='content-page' className='post'>
                {!post ?
                    <div>
                        <h1>Error</h1>
                        <div>Post not found.</div>
                    </div> :
                    <div>
                        <h1>{post.title}</h1>
                        <div>{post.content}</div>
                    </div>}
            </main>
        );
    }
}

Post.contextType = PageContext;

export default Post;