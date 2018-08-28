import React from "react";
import logo from '../../logo.svg';
import "./Results.css";

const Results = props => (
    <div className="results">
        <header className="results-header">
            <img src={logo} className="results-logo" alt="logo" />
            <h1 className="results-title">Results</h1>
        </header>
        <p className="results-intro">
            See Results here...
        </p>
    </div>
);

export default Results;
