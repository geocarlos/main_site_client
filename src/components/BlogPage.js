import React from 'react';
import BlogList from './BlogList';
import { PageContext } from '../contexts/PageContext';

const BlogPage = ({ page }) => {
    return (
         <PageContext.Consumer>
            {({ pages, posts, lang, selectPost }) => (
        <main id="content-page">
            <div className='blog-page'>
                <h1>{pages[lang][page].title}</h1>
                <BlogList posts={posts[lang]} getPost={(id)=>this.selectPost(id)} />
            </div>
        </main>)}
        </PageContext.Consumer>
    );
}

export default BlogPage;