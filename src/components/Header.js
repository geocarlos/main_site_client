import React from 'react';
import Navbar from './Navbar';
import { PageContext } from '../contexts/PageContext';

const Header = () => {
    const text = {
        en: {
            title: 'Through Letters & Code',
            view: 'View'
        },
        pt: {
            title: 'Por Letras & Códigos',
            view: 'Ver'
        }
    }
    return (
        <PageContext.Consumer>
            {({ lang, isHome }) => (
                <header>
                    <Navbar />
                    {isHome && <div id="home">
                        <h1>{text[lang].title}</h1>
                        <span><a href="#content-page">{text[lang].view}</a></span>
                    </div>}
                </header>
            )}
        </PageContext.Consumer>
    );
}

export default Header;