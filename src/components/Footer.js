import React from 'react';
import { PageContext } from '../contexts/PageContext';
import { goToYPos } from '../helpers/helpers';

const Footer = ({ lang }) => {
    return (
        <PageContext.Consumer>
            {({ lang })=>(<footer>
                <div className='to-top' onClick={()=> goToYPos(0)}>{lang === 'en' ? 'Go to Top' : 'Ir para o topo'}</div>
                <div>Geocarlos L. Alves, 2018</div>
            </footer>)}
        </PageContext.Consumer>
    );
}

export default Footer;