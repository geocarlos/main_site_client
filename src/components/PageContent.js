import React from 'react';

const PageContent = ({ pages, page, lang }) => {
    return (
        <main id="content-page">
            <div>
                <h1>{pages[lang][page].title}</h1>
                <p>{pages[lang][page].content}</p>
            </div>
        </main>
    );
}

export default PageContent;