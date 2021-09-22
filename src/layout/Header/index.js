import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1>Blog for blogs sake</h1>
            <div className="links">
                <NavLink exact to="/" activeClassName="current">Home</NavLink>
                <NavLink to="/create" activeClassName="current">New Blog</NavLink>
            </div>
        </nav>
    );
}

export default Header;