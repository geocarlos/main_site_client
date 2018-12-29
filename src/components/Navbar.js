import React from 'react';

const Navbar = (props) => {
    return (
        <nav>
            <div className="navigation">
                <ul>
                    <li><a href="#content-page">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;