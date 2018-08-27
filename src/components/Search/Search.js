import React from "react";
import logo from '../../logo.svg';
import "./Search.css";

const Search = props => (
    <div className="search">
        <header className="search-header">
            <img src={logo} className="search-logo" alt="logo" />
            <h1 className="search-title">Welcome to React Search</h1>
        </header>
        <p className="search-intro">
            To get started, Search.
        </p>
        <h1 className="search-intro">
            Search again.
        </h1>
    </div>
);

export default Search;
