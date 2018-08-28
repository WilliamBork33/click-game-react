import React from "react";
import "./PokemonCard.css";

const PokemonCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPokemon(props.pkmn)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.pkmn} src={props.image} />
            </a>
        </div>
    </div>
);

export default PokemonCard;