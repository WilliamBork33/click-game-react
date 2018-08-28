import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import Wrapper from "./components/Wrapper/";

import Search from "./components/Search/";
import Results from "./components/Results/";
import SavedArticles from "./components/SavedArticles";


class App extends Component {


    /* 
    state = {

        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        
    }

    componentDidMount() {
    }

 */

  render() {
    return (

        <Wrapper>

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to click-game-react</h1>
            </header>
            <h1 className="App-intro">
                A news scraper built in React.
            </h1>            
        </div>

        <Search />

        <Results />

        <SavedArticles />

        </Wrapper>
    );
  }
}

export default App;
