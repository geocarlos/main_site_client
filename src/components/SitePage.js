import React, { useContext } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import { PageContext } from '../contexts/PageContext';

const SitePage = () => {

    return (
        <PageContext.Consumer>
            {({id, isHome})=>(<div className="container">
                <Header />
                {isHome && <HomePage />}
                <main id="content-page">
                    <div>Main</div>
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