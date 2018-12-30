import React, { useContext } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import { PageContext } from '../contexts/PageContext';

const SitePage = ({ page, isHome }) => {

    return (
        <PageContext.Consumer>
            {({ pages }) => (<div className="container">
                <Header />
                {isHome && <HomePage />}
                <main id="content-page">
                    <div>
                        <h1>{pages[page].title}</h1>
                        <p>{pages[page].content}</p>
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