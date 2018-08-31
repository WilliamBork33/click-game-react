//Importing React Components
import React from "react";
import "./Navigation.css";

//Scoring Box Div
const Navigation = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Restart</a></li>
            <li
                className={props.message.indexOf("Already clicked this Pokemon") !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf("Good! Keep Trying!") !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "rgb(97, 218, 251)"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

//Export Component for Use in the Rest of Application.
export default Navigation;
