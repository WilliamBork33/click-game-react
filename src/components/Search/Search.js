import React from "react";
import logo from '../../logo.svg';
import "./Search.css";

const Search = props => (
    <div className="search">
        <header className="search-header">
            <img src={logo} className="search-logo" alt="logo" />
            <h1 className="search-title">Search</h1>
        </header>
        <p className="search-intro">
            Search articles here...
        </p>
    </div>
);

export default Search;
