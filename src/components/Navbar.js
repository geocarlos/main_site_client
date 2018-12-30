import React from 'react';

const Navbar = (props) => {
    return (
        <nav>
            <div className="navigation">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About me</a></li>
                    <li><a href="blog">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;