import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.css";
import logo from '../images/logo.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';

function Navigation() {
    return (

        <nav className="navbar navbar-expand navbar-dark">

            <div className="navbar-content">
                <img className="logo" src={logo}/>
                <NavLink className="navbar-brand" to="/">
                    Duck Fashion Show
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/voting">
                            /Voting
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pastwinner">
                            /Past Winner
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/photoalbum">
                            /Photo Album
                        </NavLink>
                    </li>
                </ul>
                <div className="contact-info">
                    <h3>
                        4:20 AM - 4:20 PM
                    </h3>
                    <h3>
                        Call Us: 00-Never
                    </h3>
                    <div className="SNS">
                        <img src={facebook}/>
                        <img src={instagram}/>
                    </div>
                </div>
            </div>

        </nav>

    );
}

export default Navigation;
