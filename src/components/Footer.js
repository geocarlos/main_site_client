import React from 'react';
import { PageContext } from '../contexts/PageContext';

const Footer = ({ lang }) => {
    return (
        <PageContext.Consumer>
            {({ lang })=>(<footer>
                <div className='to-top'><a href="#">{lang === 'en' ? 'Go to Top' : 'Ir para o topo'}</a></div>
                <div>Geocarlos L. Alves, 2018</div>
            </footer>)}
        </PageContext.Consumer>
    );
}

export default Footer;