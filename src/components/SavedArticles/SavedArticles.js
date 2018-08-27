import React from "react";
import logo from '../../logo.svg';
import "./SavedArticles.css";

const SavedArticles = props => (
    <div className="savedarticles">
        <header className="savedarticles-header">
            <img src={logo} className="savedarticles-logo" alt="logo" />
            <h1 className="savedarticles-title">Welcome to React SavedArticles</h1>
        </header>
        <p className="savedarticles-intro">
            To get started, SavedArticles.
        </p>
        <h1 className="savedarticles-intro">
            SavedArticles again.
        </h1>
    </div>
);

export default SavedArticles;
