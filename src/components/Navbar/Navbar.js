import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
//import { faBars } from "@fontawesome/free-solid-svg-icons";
import './Navbar.scss';

class Navbar extends Component{
    state = {
        open: false
    }

    menuOpenHandler = () => {
        this.setState({ open: !this.state.open });
    }

    render(){
        return (
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="app-navbar col-12">
                            <img
                                src="/assets/images/banner.png"
                                alt="React-logo"
                                className="app-logo"
                            />
                            <div className="hamburger-menu" onClick={this.menuOpenHandler}>
                            
                            </div>
                            <ul className="nav-desktop">
                                <li><NavLink to="/" className="nav--link">Home</NavLink></li>
                                <li><NavLink to="/templates" className="nav--link">Templates</NavLink></li>
                                <li><NavLink to="/Footer" className="nav--link">Hire me</NavLink></li>
                            </ul>
                        </div>
                        <ul className={`nav-mobile ${this.state.open ? 'nav-mobile-active' : ''}`}>
                            <div className="container">
                                <li><NavLink to="/" className="nav--link">Home</NavLink></li>
                                <li><NavLink to="/templates" className="nav--link">Templates</NavLink></li>
                                <li><NavLink to="/Footer" className="nav--link">Hire me</NavLink></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;