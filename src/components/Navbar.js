import React from 'react';
import { Link } from "react-router-dom";
import { PageContext } from '../contexts/PageContext';
import { capitalize as cap, goToYPos } from '../helpers/helpers';
import Logo from '../assets/logo.svg';

const Navbar = (props) => {
    return (
        <PageContext.Consumer>
            {({ pages, lang, switchLang, checkHome }) => (
                <nav>
                    <div className="navigation">
                        <ul>
                            <li id='logo'><img src={Logo} alt=""/></li>
                            {Object.keys(pages[lang]).map(title => (
                                <li key={title}>
                                    <Link to={`/${title}`} 
                                        onClick={()=>{checkHome(title === 'home'); 
                                        goToYPos(0);}}>
                                        {cap(pages[lang][title].title)}
                                    </Link>
                                </li>
                            ))}
                            <li id='switch'>
                                <button onClick={() => { let l = lang === 'en' ? 'pt' : 'en'; switchLang(l) }}>
                                    {lang === 'en' ? 'Português' : 'English'}
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
            }
        </PageContext.Consumer>
    );
}

export default Navbar;