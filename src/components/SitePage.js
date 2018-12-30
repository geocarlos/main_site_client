import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PageContext } from '../contexts/PageContext';
import BlogPage from './BlogPage';
import PageContent from './PageContent';
import Post from '../containers/Post';

const SitePage = ({ page, isHome, id }) => {

    return (
        <PageContext.Consumer>
            {({ pages, lang }) => (<div className="container">
                <Header lang={lang} isHome={isHome} />
                {page === 'blog' ?
                <BlogPage 
                    pages={pages}
                    lang={lang}
                    page={page}/> : (
                page === 'post' ?
                <Post id={id}/> :
                   <PageContent
                    pages={pages}
                    lang={lang}
                    page={page}
                    isHome={isHome} />)}
                <aside>
                    <div>Side Link List</div>
                </aside>
                <Footer lang={lang} />
            </div>)}
        </PageContext.Consumer>
    );
}

export default SitePage;