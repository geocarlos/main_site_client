import React from 'react';
import { Link } from "react-router-dom";
import { PageContext } from '../contexts/PageContext';
import { capitalize as cap } from '../helpers/helpers';

const Navbar = (props) => {
    return (
        <PageContext.Consumer>
            {({ titles }) => (
                <nav>
                    <div className="navigation">
                        <ul>
                            {titles.map(title => (
                                <li key={title}><Link to={title}>{cap(title)}</Link></li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )
            }
        </PageContext.Consumer>
    );
}

export default Navbar;