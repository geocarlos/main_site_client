import React from 'react';
import Navbar from './Navbar';
import { PageContext } from '../contexts/PageContext';
import DownIcon from '../assets/down_icon.svg';

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
                        <h1>{`{ ${text[lang].title} }`}</h1>
                        <div><a href="#content-page">
                            <img src={DownIcon} alt=""/>
                        </a></div>
                    </div>}
                </header>
            )}
        </PageContext.Consumer>
    );
}

export default Header;