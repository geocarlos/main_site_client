import React, { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

const SitePage = ({ page }) => {

    return (
        <PageContext.Consumer>
            {({ pages, lang }) => (
                <main id="content-page">
                    <div>
                        <h1>{pages[lang][page].title}</h1>
                        <p>{pages[lang][page].content}</p>
                    </div>
                </main>)}
        </PageContext.Consumer>
    );
}

export default SitePage;