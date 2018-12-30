import React from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../contexts/PageContext';

const BlogList = () => {
    return (
        <PageContext.Consumer>
            {({ posts, lang, selectPost, post }) => (
                posts[lang].map(post => (<div className='blog-list-item' key={post.id}>
                    <h3><Link
                        to={`/blog/${post.id}`}
                        onClick={()=>{selectPost(post.id, lang)}}>
                        {post.title}
                    </Link></h3>
                </div>)))}
        </PageContext.Consumer>
    )
}

export default BlogList;