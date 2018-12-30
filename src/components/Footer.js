import React from 'react';

const Footer = ({ lang }) => {
    return (
        <footer>
            <div><a href="#">{lang === 'en' ? 'Go to Top' : 'Ir para o topo'}</a></div>
            <div>Footer</div>
        </footer>
    );
}

export default Footer;