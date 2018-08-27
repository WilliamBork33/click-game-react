import React from "react";
import logo from '../../logo.svg';
import "./Results.css";

const Results = props => (
    <div className="results">
        <header className="results-header">
            <img src={logo} className="results-logo" alt="logo" />
            <h1 className="results-title">Welcome to React Results</h1>
        </header>
        <p className="results-intro">
            To get started, Results.
        </p>
        <h1 className="results-intro">
            Results again.
        </h1>
    </div>
);

export default Results;
