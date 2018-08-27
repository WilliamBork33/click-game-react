import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from "./components/Search/";
import Results from "./components/Results/";
import SavedArticles from "./components/SavedArticles";


class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <h1 className="App-intro">
                Welcome to click-game-react. A web application build in React.
            </h1>
        </div>
    );
  }

  render() {
    return (
      <Search />
    );
  }

  render() {
    return (
      <Results />
    );
  }


  render() {
    return (
      <SavedArticles />
    );
  }


}

export default App;
