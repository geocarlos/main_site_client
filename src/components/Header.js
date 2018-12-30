import React from 'react';
import Navbar from './Navbar';

const Header = ({lang, isHome }) => {
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
        <header>
            <Navbar />
            {isHome && <div id="home">
                <h1>{text[lang].title}</h1>
                <span><a href="#content-page">{text[lang].view}</a></span>
            </div>}
        </header>
    );
}

export default Header;