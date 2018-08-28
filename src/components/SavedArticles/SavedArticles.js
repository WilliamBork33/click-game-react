import React from "react";
import logo from '../../logo.svg';
import "./SavedArticles.css";

const SavedArticles = props => (
    <div className="savedarticles">
        <header className="savedarticles-header">
            <img src={logo} className="savedarticles-logo" alt="logo" />
            <h1 className="savedarticles-title">Saved Articles</h1>
        </header>
        <p className="savedarticles-intro">
            Save your articles here...
        </p>
    </div>
);

export default SavedArticles;
