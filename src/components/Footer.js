import React from 'react';

const Footer = ({ lang }) => {
    return (
        <footer>
            <div><a href="#">{lang === 'en' ? 'Go to Top' : 'Ir para o topo'}</a></div>
            <div>Geocarlos L. Alves, 2018</div>
        </footer>
    );
}

export default Footer;