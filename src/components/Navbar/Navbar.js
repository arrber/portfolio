import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="row">
            <div className="container">
                <div className="row">
                    <div className="app-navbar col-12">
                        <img
                            src="/assets/images/navlogo.png"
                            alt="Navbar logo"
                            className="app-logo"
                        />
                        <ul className="nav-desktop">
                            <li><NavLink to="/" className="nav--link">Home</NavLink></li>
                            <li><NavLink to="/templates" className="nav--link">Templates</NavLink></li>
                            <li><NavLink to="/Footer" className="nav--link">Hire me</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;