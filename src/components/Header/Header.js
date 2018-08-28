import React from "react";
import logo from '../../logo.svg';
import "./Header.css";

const Header = props => (
    <div className="header">
        <header className="header-header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">Pokemon Click Game React</h1>
        </header>
        
        <br></br>

    </div>
);

export default Header;
