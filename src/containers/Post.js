import React, { Component } from 'react';
import { PageContext } from '../contexts/PageContext';

class Post extends Component {

    componentDidMount(){
        const { id } = this.props;
        console.log(id);
        this.context.selectPost(id, id.substring(id.length - 2));
    }

    render() {
        const { post } = this.context;
        return (
            <main id='content-page'>
                {!post ?
                    <div>
                        <h1>Error</h1>
                        <div className='post-content'>Post not found.</div>
                    </div> :
                    <div>
                        <h1>{post.title}</h1>
                        <div className='post-content'>{post.content}</div>
                    </div>}
            </main>
        );
    }
}

Post.contextType = PageContext;

export default Post;