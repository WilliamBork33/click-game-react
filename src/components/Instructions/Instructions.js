//Importing React Components
import React from "react";
import "./Instructions.css";

//Instruction Div
const Instructions = props => (
    <div className="instructionsbox">
        <h1>Pokemon Memory game!</h1>
        <p>Click on Pokemon. But don't click on the same Pokemon twice or you lose.</p>
    </div>
);

//Export Component for Use in the Rest of Application.
export default Instructions;