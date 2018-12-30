import React, { useContext } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import { PageContext } from '../contexts/PageContext';

const SitePage = () => {

    return (
        <PageContext.Consumer>
            {({ id, isHome, pages }) => (<div className="container">
                <Header />
                {isHome && <HomePage />}
                <main id="content-page">
                    <div>
                        <h1>{pages.home.title}</h1>
                        <p>{pages.home.content}</p>
                    </div>
                </main>
                <aside>
                    <div>Side Link List</div>
                </aside>
                <Footer />
            </div>)}
        </PageContext.Consumer>
    );
}

export default SitePage;