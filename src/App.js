import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pokemon from "./pokemon.json";


import Wrapper from "./components/Wrapper/";

import Header from "./components/Header/";
import Instructions from "./components/Instructions/";
import PokemonCard from "./components/PokemonCard";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer/";



class App extends Component {








    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        pokemon: pokemon,
        unselectedPokemon: pokemon
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPokemon = pkmn => {
        const findPokemon = this.state.unselectedPokemon.find(item => item.pkmn === pkmn);

        if(findPokemon === undefined) {
            // failure to select a new dog
            this.setState({ 
                message: "Already clicked this Pokemon!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                pokemon: pokemon,
                unselectedPokemon: pokemon
            });
        }
        else {
            // success to select a new dog
            const newPokemon = this.state.unselectedPokemon.filter(item => item.pkmn !== pkmn);
            
            this.setState({ 
                message: "Good! Keep Trying!",
                curScore: this.state.curScore + 1,
                pokemon: pokemon,
                unselectedPokemon: newPokemon
            });
        }

        this.shuffleArray(pokemon);
    };






  render() {
    return (

        <Wrapper>

        <Header />

        <Instructions />
       
        
        <Navigation
        message={this.state.message}
        curScore={this.state.curScore}
        topScore={this.state.topScore}
        />

       

        
        {
            this.state.pokemon.map(pokemon => (
                <PokemonCard
                    pkmn={pokemon.pkmn}
                    image={pokemon.image}
                    selectPokemon={this.selectPokemon} 
                    curScore={this.state.curScore}
                />
            ))
        }

        

        </Wrapper>
    );
  }
}

export default App;
